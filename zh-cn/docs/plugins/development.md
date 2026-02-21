# 插件开发指南

本指南将帮助你为 Hachimi Edge 创建插件。插件是动态库，通过定义良好的 C 兼容 API 来扩展 Hachimi 的功能。

## 语言选择

插件可以使用**任何**能够生成 C 兼容动态库（Android 上为 `.so`，Windows 上为 `.dll`）的语言编写。这包括：

- **Rust**（推荐 —— 本指南中的示例均使用 Rust）
- **C/C++**
- **Zig**
- **Go**（使用 cgo）
- **任何其他支持 C FFI 的语言**
- **汇编语言**（如果你是受虐狂的话）

本指南使用 **Rust** 作为示例，因为 Hachimi 本身是用 Rust 编写的。
不过，由于 API 是 C 兼容的，你可以使用任何你喜欢的语言。只需确保你的 `hachimi_init` 函数是以 C 调用约定导出的。

## 前提条件

在开始之前，你应该具备：

- 所选编程语言的使用经验。
- 熟悉游戏结构。
- 已安装针对目标平台的开发工具链。

::: warning 警告
请勿制作窃取数据或伤害其他玩家的恶意插件。
:::

## 插件结构

### 入口点

每个插件必须导出一个 `hachimi_init` 函数。首先创建一个 `Cargo.toml`：

```toml
[package]
name = "hachimi_myplugin"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib"]

[dependencies]
```

然后在 `src/lib.rs` 中编写:

```rust
use std::ffi::{c_char, c_void};

#[repr(C)]
pub struct Vtable {
    // 函数指针（见下文 API 参考）
}

#[repr(i32)]
pub enum InitResult {
    Error = 0,
    Ok = 1,
}

static mut VTABLE: Option<&'static Vtable> = None;

#[no_mangle]
pub extern "C" fn hachimi_init(vtable: *const Vtable, version: i32) -> InitResult {
    if vtable.is_null() {
        return InitResult::Error;
    }
    if version < 2 {
        return InitResult::Error;
    }

    unsafe {
        VTABLE = Some(&*vtable);
    }

    // 在此处初始化你的插件

    InitResult::Ok
}
```
### 虚函数表 (vtable)

vtable 是一个包含 Hachimi API 函数指针的结构体。你在 `hachimi_init` 中接收它，并应将其存储以便在整个插件中使用。

**当前 API 版本：2** <!-- markdownlint-disable-line MD036 -->

始终检查版本参数以确保其兼容性：

```rust
#[no_mangle]
pub extern "C" fn hachimi_init(vtable: *const Vtable, version: i32) -> InitResult {
    if vtable.is_null() {
        return InitResult::Error;
    }
    if version < 2 {
        // API 版本太旧
        return InitResult::Error;
    }

    // 安全地存储 vtable
    unsafe {
        VTABLE = Some(&*vtable);
    }

    InitResult::Ok
}
```

## API 参考

### Hachimi 实例

```rust
use std::ffi::c_void;

unsafe fn get_hachimi_and_interceptor() -> (*const c_void, *const c_void) {
    let vtable = VTABLE.unwrap();
    let hachimi = (vtable.hachimi_instance)();
    let interceptor = (vtable.hachimi_get_interceptor)(hachimi);
    (hachimi, interceptor)
}
```

### 拦截器（函数挂钩/Hooking）

拦截器允许你挂钩并修改游戏函数：

```rust
use std::ffi::c_void;

unsafe fn hook_function(
    interceptor: *const c_void,
    original_addr: *mut c_void,
    hook_addr: *mut c_void
) -> *mut c_void {
    let vtable = VTABLE.unwrap();
    (vtable.interceptor_hook)(interceptor, original_addr, hook_addr)
}

unsafe fn hook_vtable_entry(
    interceptor: *const c_void,
    vtable_ptr: *mut *mut c_void,
    index: usize,
    hook_addr: *mut c_void
) -> *mut c_void {
    let vtable = VTABLE.unwrap();
    (vtable.interceptor_hook_vtable)(interceptor, vtable_ptr, index, hook_addr)
}

unsafe fn get_trampoline(
    interceptor: *const c_void,
    hook_addr: *mut c_void
) -> *mut c_void {
    let vtable = VTABLE.unwrap();
    (vtable.interceptor_get_trampoline_addr)(interceptor, hook_addr)
}

unsafe fn unhook_function(
    interceptor: *const c_void,
    hook_addr: *mut c_void
) -> *mut c_void {
    let vtable = VTABLE.unwrap();
    (vtable.interceptor_unhook)(interceptor, hook_addr)
}
```

### IL2CPP 函数

访问 Unity 的 IL2CPP 运行时：

```rust
use std::ffi::{c_char, c_void, CStr, CString};

unsafe fn resolve_il2cpp_symbol(name: &str) -> *mut c_void {
    let vtable = VTABLE.unwrap();
    let name_cstr = CString::new(name).unwrap();
    (vtable.il2cpp_resolve_symbol)(name_cstr.as_ptr())
}

unsafe fn get_assembly_image(name: &str) -> *const c_void {
    let vtable = VTABLE.unwrap();
    let name_cstr = CString::new(name).unwrap();
    (vtable.il2cpp_get_assembly_image)(name_cstr.as_ptr())
}

unsafe fn get_class(
    image: *const c_void,
    namespace: &str,
    class_name: &str
) -> *mut c_void {
    let vtable = VTABLE.unwrap();
    let ns_cstr = CString::new(namespace).unwrap();
    let class_cstr = CString::new(class_name).unwrap();
    (vtable.il2cpp_get_class)(image, ns_cstr.as_ptr(), class_cstr.as_ptr())
}

unsafe fn get_method(
    klass: *mut c_void,
    method_name: &str,
    arg_count: i32
) -> *const c_void {
    let vtable = VTABLE.unwrap();
    let method_cstr = CString::new(method_name).unwrap();
    (vtable.il2cpp_get_method)(klass, method_cstr.as_ptr(), arg_count)
}

unsafe fn get_method_addr(
    klass: *mut c_void,
    method_name: &str,
    arg_count: i32
) -> *mut c_void {
    let vtable = VTABLE.unwrap();
    let method_cstr = CString::new(method_name).unwrap();
    (vtable.il2cpp_get_method_addr)(klass, method_cstr.as_ptr(), arg_count)
}

unsafe fn get_field(klass: *mut c_void, field_name: &str) -> *mut c_void {
    let vtable = VTABLE.unwrap();
    let field_cstr = CString::new(field_name).unwrap();
    (vtable.il2cpp_get_field_from_name)(klass, field_cstr.as_ptr())
}

unsafe fn get_field_value<T>(
    object: *mut c_void,
    field: *mut c_void,
    out_value: *mut T
) {
    let vtable = VTABLE.unwrap();
    (vtable.il2cpp_get_field_value)(object, field, out_value as *mut c_void);
}

unsafe fn set_field_value<T>(
    object: *mut c_void,
    field: *mut c_void,
    value: *const T
) {
    let vtable = VTABLE.unwrap();
    (vtable.il2cpp_set_field_value)(object, field, value as *const c_void);
}

unsafe fn unbox(object: *mut c_void) -> *mut c_void {
    let vtable = VTABLE.unwrap();
    (vtable.il2cpp_unbox)(object)
}

unsafe fn get_main_thread() -> *mut c_void {
    let vtable = VTABLE.unwrap();
    (vtable.il2cpp_get_main_thread)()
}

unsafe fn create_array(element_class: *mut c_void, length: usize) -> *mut c_void {
    let vtable = VTABLE.unwrap();
    (vtable.il2cpp_create_array)(element_class, length)
}

unsafe fn get_singleton_instance(klass: *mut c_void) -> *mut c_void {
    let vtable = VTABLE.unwrap();
    (vtable.il2cpp_get_singleton_like_instance)(klass)
}
```

### 日志记录

```rust
use std::ffi::CString;

// 日志级别：1=Error, 2=Warn, 3=Info, 4=Debug, 5=Trace
unsafe fn log(level: i32, tag: &str, message: &str) {
    let vtable = VTABLE.unwrap();
    let tag_cstr = CString::new(tag).unwrap();
    let msg_cstr = CString::new(message).unwrap();
    (vtable.log)(level, tag_cstr.as_ptr(), msg_cstr.as_ptr());
}

// 辅助函数
unsafe fn log_info(tag: &str, message: &str) {
    log(3, tag, message);
}

unsafe fn log_error(tag: &str, message: &str) {
    log(1, tag, message);
}

unsafe fn log_warn(tag: &str, message: &str) {
    log(2, tag, message);
}
```

### GUI 集成

#### 菜单项

```rust
use std::ffi::{c_char, c_void, CString};

// 加载 PNG 图标
const ICON_BYTES: &[u8] = include_bytes!("../icon.png");

// 回调类型
type MenuCallback = extern "C" fn(userdata: *mut c_void);

extern "C" fn my_menu_callback(_userdata: *mut c_void) {
    unsafe {
        log_info("MyPlugin", "菜单项被点击了！");
    }
}

unsafe fn register_menu_item(name: &str, callback: MenuCallback) -> bool {
    let vtable = VTABLE.unwrap();
    let name_cstr = CString::new(name).unwrap();
    (vtable.gui_register_menu_item)(
        name_cstr.as_ptr(),
        Some(callback),
        std::ptr::null_mut()
    )
}

unsafe fn register_menu_item_with_icon(
    name: &str,
    icon_data: &[u8],
    callback: MenuCallback
) -> bool {
    let vtable = VTABLE.unwrap();
    let name_cstr = CString::new(name).unwrap();
    if !(vtable.gui_register_menu_item)(
        name_cstr.as_ptr(),
        Some(callback),
        std::ptr::null_mut()
    ) {
        return false;
    }
    (vtable.gui_register_menu_item_icon)(
        name_cstr.as_ptr(),
        std::ptr::null(),
        icon_data.as_ptr(),
        icon_data.len()
    )
}

// 使用示例：
// register_menu_item_with_icon("我的插件", ICON_BYTES, my_menu_callback);
```

#### 菜单选择项

```rust
type MenuSectionCallback = extern "C" fn(ui: *mut c_void, userdata: *mut c_void);

extern "C" fn my_section_callback(ui: *mut c_void, _userdata: *mut c_void) {
    unsafe {
        let vtable = VTABLE.unwrap();

        // 构建你的 UI
        let heading = CString::new("我的插件设置").unwrap();
        (vtable.gui_ui_heading)(ui, heading.as_ptr());

        (vtable.gui_ui_separator)(ui);

        // 添加控件...
    }
}

unsafe fn register_menu_section(callback: MenuSectionCallback) -> bool {
    let vtable = VTABLE.unwrap();
    (vtable.gui_register_menu_section)(Some(callback), std::ptr::null_mut())
}

unsafe fn register_menu_section_with_icon(
    title: &str,
    icon_data: &[u8],
    callback: MenuSectionCallback
) -> bool {
    let vtable = VTABLE.unwrap();
    let title_cstr = CString::new(title).unwrap();
    (vtable.gui_register_menu_section_with_icon)(
        title_cstr.as_ptr(),
        std::ptr::null(),
        icon_data.as_ptr(),
        icon_data.len(),
        Some(callback),
        std::ptr::null_mut()
    )
}

// 使用示例：
// register_menu_section_with_icon("我的设置", ICON_BYTES, my_section_callback);
```

#### UI 控件

用于构建 GUI 的可用 UI 函数：

```rust
use std::ffi::CString;

unsafe fn ui_heading(ui: *mut c_void, text: &str) {
    let vtable = VTABLE.unwrap();
    let text_cstr = CString::new(text).unwrap();
    (vtable.gui_ui_heading)(ui, text_cstr.as_ptr());
}

unsafe fn ui_label(ui: *mut c_void, text: &str) {
    let vtable = VTABLE.unwrap();
    let text_cstr = CString::new(text).unwrap();
    (vtable.gui_ui_label)(ui, text_cstr.as_ptr());
}

unsafe fn ui_small(ui: *mut c_void, text: &str) {
    let vtable = VTABLE.unwrap();
    let text_cstr = CString::new(text).unwrap();
    (vtable.gui_ui_small)(ui, text_cstr.as_ptr());
}

unsafe fn ui_colored_label(ui: *mut c_void, r: u8, g: u8, b: u8, a: u8, text: &str) {
    let vtable = VTABLE.unwrap();
    let text_cstr = CString::new(text).unwrap();
    (vtable.gui_ui_colored_label)(ui, r, g, b, a, text_cstr.as_ptr());
}

unsafe fn ui_separator(ui: *mut c_void) {
    let vtable = VTABLE.unwrap();
    (vtable.gui_ui_separator)(ui);
}

unsafe fn ui_button(ui: *mut c_void, text: &str) -> bool {
    let vtable = VTABLE.unwrap();
    let text_cstr = CString::new(text).unwrap();
    (vtable.gui_ui_button)(ui, text_cstr.as_ptr())
}

unsafe fn ui_small_button(ui: *mut c_void, text: &str) -> bool {
    let vtable = VTABLE.unwrap();
    let text_cstr = CString::new(text).unwrap();
    (vtable.gui_ui_small_button)(ui, text_cstr.as_ptr())
}

unsafe fn ui_checkbox(ui: *mut c_void, label: &str, value: &mut bool) -> bool {
    let vtable = VTABLE.unwrap();
    let label_cstr = CString::new(label).unwrap();
    (vtable.gui_ui_checkbox)(ui, label_cstr.as_ptr(), value as *mut bool)
}

unsafe fn ui_text_edit(ui: *mut c_void, buffer: &mut [u8]) -> bool {
    let vtable = VTABLE.unwrap();
    (vtable.gui_ui_text_edit_singleline)(
        ui,
        buffer.as_mut_ptr() as *mut c_char,
        buffer.len()
    )
}
```

#### 通知

```rust
unsafe fn show_notification(message: &str) -> bool {
    let vtable = VTABLE.unwrap();
    let msg_cstr = CString::new(message).unwrap();
    (vtable.gui_show_notification)(msg_cstr.as_ptr())
}
```

### Android DEX 加载 (API v2+)

在 Android 上加载并执行 Java/Kotlin 代码：

```rust
unsafe fn load_dex(dex_data: &[u8], class_name: &str) -> u64 {
    let vtable = VTABLE.unwrap();
    let class_cstr = CString::new(class_name).unwrap();
    (vtable.android_dex_load)(
        dex_data.as_ptr(),
        dex_data.len(),
        class_cstr.as_ptr()
    )
}

unsafe fn dex_call_static_noargs(handle: u64, method: &str, signature: &str) -> bool {
    let vtable = VTABLE.unwrap();
    let method_cstr = CString::new(method).unwrap();
    let sig_cstr = CString::new(signature).unwrap();
    (vtable.android_dex_call_static_noargs)(
        handle,
        method_cstr.as_ptr(),
        sig_cstr.as_ptr()
    )
}

unsafe fn dex_call_static_string(
    handle: u64,
    method: &str,
    signature: &str,
    arg: &str
) -> bool {
    let vtable = VTABLE.unwrap();
    let method_cstr = CString::new(method).unwrap();
    let sig_cstr = CString::new(signature).unwrap();
    let arg_cstr = CString::new(arg).unwrap();
    (vtable.android_dex_call_static_string)(
        handle,
        method_cstr.as_ptr(),
        sig_cstr.as_ptr(),
        arg_cstr.as_ptr()
    )
}

unsafe fn unload_dex(handle: u64) -> bool {
    let vtable = VTABLE.unwrap();
    (vtable.android_dex_unload)(handle)
}
```

#### Java 示例（DEX 侧）

你的 Java/Kotlin 类必须 Expose 与你从 Rust 调用时匹配的 **static** 方法。
这里是一个可以编译成 DEX 并使用上述辅助函数加载的极简 Java 示例：

```java
package dev.hachimi;

import android.util.Log;

public class DexExample {
        private static final String TAG = "HachimiDexExample";

        public static void hello() {
                Log.i(TAG, "来自 DEX 的问候");
        }

        public static void setVisibleString(String value) {
                Log.i(TAG, "setVisibleString的值是: " + value);
        }
}
```

加载时，请使用全限定类名：

- `class_name`: `"dev.hachimi.DexExample"`
- `hello()` 签名: `"()V"`
- `setVisibleString(String)` 签名: `"(Ljava/lang/String;)V"`

#### 构建 DEX

```bash
ANDROID_JAR=~/Android/Sdk/platforms/android-34/android.jar

rm -rf /tmp/hachimi_dex
mkdir -p /tmp/hachimi_dex/classes

javac -source 1.8 -target 1.8 \
    -classpath "$ANDROID_JAR" \
    -d /tmp/hachimi_dex/classes \
    java/DexExample.java

jar cf /tmp/hachimi_dex/classes.jar -C /tmp/hachimi_dex/classes .

d8 --lib "$ANDROID_JAR" \
    --output /tmp/hachimi_dex/out \
    /tmp/hachimi_dex/classes.jar

cp /tmp/hachimi_dex/out/classes.dex assets/dex_example.dex
```

然后从 Rust 加载它:

```rust
let dex_bytes = include_bytes!("../assets/dex_example.dex");
let handle = load_dex(dex_bytes, "dev.hachimi.DexExample");
dex_call_static_noargs(handle, "hello", "()V");
dex_call_static_string(handle, "setVisibleString", "(Ljava/lang/String;)V", "true");
```

## 完整插件示例

这是一个完整的、可运行的示例：

```rust
use std::ffi::{c_char, c_void, CString};
use std::sync::Once;

#[repr(i32)]
#[derive(Debug, Copy, Clone, Eq, PartialEq)]
pub enum InitResult {
    Error = 0,
    Ok = 1,
}

#[repr(C)]
#[derive(Clone, Copy)]
pub struct Vtable {
    pub hachimi_instance: unsafe extern "C" fn() -> *const c_void,
    pub hachimi_get_interceptor: unsafe extern "C" fn(this: *const c_void) -> *const c_void,

    pub interceptor_hook: unsafe extern "C" fn(
        this: *const c_void,
        orig_addr: *mut c_void,
        hook_addr: *mut c_void,
    ) -> *mut c_void,
    pub interceptor_hook_vtable: unsafe extern "C" fn(
        this: *const c_void,
        vtable: *mut *mut c_void,
        vtable_index: usize,
        hook_addr: *mut c_void,
    ) -> *mut c_void,
    pub interceptor_get_trampoline_addr:
        unsafe extern "C" fn(this: *const c_void, hook_addr: *mut c_void) -> *mut c_void,
    pub interceptor_unhook:
        unsafe extern "C" fn(this: *const c_void, hook_addr: *mut c_void) -> *mut c_void,

    pub il2cpp_resolve_symbol: unsafe extern "C" fn(name: *const c_char) -> *mut c_void,
    pub il2cpp_get_assembly_image:
        unsafe extern "C" fn(assembly_name: *const c_char) -> *const c_void,
    pub il2cpp_get_class: unsafe extern "C" fn(
        image: *const c_void,
        namespace: *const c_char,
        class_name: *const c_char,
    ) -> *mut c_void,
    pub il2cpp_get_method: unsafe extern "C" fn(
        class: *mut c_void,
        name: *const c_char,
        args_count: i32,
    ) -> *const c_void,
    pub il2cpp_get_method_overload: unsafe extern "C" fn(
        class: *mut c_void,
        name: *const c_char,
        params: *const c_void,
        param_count: usize,
    ) -> *const c_void,
    pub il2cpp_get_method_addr: unsafe extern "C" fn(
        class: *mut c_void,
        name: *const c_char,
        args_count: i32,
    ) -> *mut c_void,
    pub il2cpp_get_method_overload_addr: unsafe extern "C" fn(
        class: *mut c_void,
        name: *const c_char,
        params: *const c_void,
        param_count: usize,
    ) -> *mut c_void,
    pub il2cpp_get_method_cached: unsafe extern "C" fn(
        class: *mut c_void,
        name: *const c_char,
        args_count: i32,
    ) -> *const c_void,
    pub il2cpp_get_method_addr_cached: unsafe extern "C" fn(
        class: *mut c_void,
        name: *const c_char,
        args_count: i32,
    ) -> *mut c_void,
    pub il2cpp_find_nested_class:
        unsafe extern "C" fn(class: *mut c_void, name: *const c_char) -> *mut c_void,
    pub il2cpp_get_field_from_name:
        unsafe extern "C" fn(class: *mut c_void, name: *const c_char) -> *mut c_void,
    pub il2cpp_get_field_value: unsafe extern "C" fn(
        obj: *mut c_void,
        field: *mut c_void,
        out_value: *mut c_void,
    ),
    pub il2cpp_set_field_value: unsafe extern "C" fn(
        obj: *mut c_void,
        field: *mut c_void,
        value: *const c_void,
    ),
    pub il2cpp_get_static_field_value:
        unsafe extern "C" fn(field: *mut c_void, out_value: *mut c_void),
    pub il2cpp_set_static_field_value:
        unsafe extern "C" fn(field: *mut c_void, value: *const c_void),
    pub il2cpp_unbox: unsafe extern "C" fn(obj: *mut c_void) -> *mut c_void,
    pub il2cpp_get_main_thread: unsafe extern "C" fn() -> *mut c_void,
    pub il2cpp_get_attached_threads:
        unsafe extern "C" fn(out_size: *mut usize) -> *mut *mut c_void,
    pub il2cpp_schedule_on_thread:
        unsafe extern "C" fn(thread: *mut c_void, callback: unsafe extern "C" fn()),
    pub il2cpp_create_array:
        unsafe extern "C" fn(element_type: *mut c_void, length: usize) -> *mut c_void,
    pub il2cpp_get_singleton_like_instance:
        unsafe extern "C" fn(class: *mut c_void) -> *mut c_void,

    pub log: unsafe extern "C" fn(level: i32, target: *const c_char, message: *const c_char),
    pub gui_register_menu_item: unsafe extern "C" fn(
        label: *const c_char,
        callback: Option<extern "C" fn(*mut c_void)>,
        userdata: *mut c_void,
    ) -> bool,
    pub gui_register_menu_section: unsafe extern "C" fn(
        callback: Option<extern "C" fn(*mut c_void, *mut c_void)>,
        userdata: *mut c_void,
    ) -> bool,
    pub gui_show_notification: unsafe extern "C" fn(message: *const c_char) -> bool,
    pub gui_ui_heading: unsafe extern "C" fn(ui: *mut c_void, text: *const c_char) -> bool,
    pub gui_ui_label: unsafe extern "C" fn(ui: *mut c_void, text: *const c_char) -> bool,
    pub gui_ui_small: unsafe extern "C" fn(ui: *mut c_void, text: *const c_char) -> bool,
    pub gui_ui_separator: unsafe extern "C" fn(ui: *mut c_void) -> bool,
    pub gui_ui_button: unsafe extern "C" fn(ui: *mut c_void, text: *const c_char) -> bool,
    pub gui_ui_small_button: unsafe extern "C" fn(ui: *mut c_void, text: *const c_char) -> bool,
    pub gui_ui_checkbox:
        unsafe extern "C" fn(ui: *mut c_void, text: *const c_char, value: *mut bool) -> bool,
    pub gui_ui_text_edit_singleline: unsafe extern "C" fn(
        ui: *mut c_void,
        buffer: *mut c_char,
        buffer_len: usize,
    ) -> bool,
    pub gui_ui_horizontal: unsafe extern "C" fn(
        ui: *mut c_void,
        callback: Option<extern "C" fn(*mut c_void, *mut c_void)>,
        userdata: *mut c_void,
    ) -> bool,
    pub gui_ui_grid: unsafe extern "C" fn(
        ui: *mut c_void,
        id: *const c_char,
        columns: usize,
        spacing_x: f32,
        spacing_y: f32,
        callback: Option<extern "C" fn(*mut c_void, *mut c_void)>,
        userdata: *mut c_void,
    ) -> bool,
    pub gui_ui_end_row: unsafe extern "C" fn(ui: *mut c_void) -> bool,
    pub gui_ui_colored_label: unsafe extern "C" fn(
        ui: *mut c_void,
        r: u8,
        g: u8,
        b: u8,
        a: u8,
        text: *const c_char,
    ) -> bool,
    pub gui_register_menu_item_icon: unsafe extern "C" fn(
        label: *const c_char,
        icon_uri: *const c_char,
        icon_ptr: *const u8,
        icon_len: usize,
    ) -> bool,
    pub gui_register_menu_section_with_icon: unsafe extern "C" fn(
        title: *const c_char,
        icon_uri: *const c_char,
        icon_ptr: *const u8,
        icon_len: usize,
        callback: Option<extern "C" fn(*mut c_void, *mut c_void)>,
        userdata: *mut c_void,
    ) -> bool,

    pub android_dex_load: unsafe extern "C" fn(
        dex_ptr: *const u8,
        dex_len: usize,
        class_name: *const c_char,
    ) -> u64,
    pub android_dex_unload: unsafe extern "C" fn(handle: u64) -> bool,
    pub android_dex_call_static_noargs:
        unsafe extern "C" fn(handle: u64, method: *const c_char, sig: *const c_char) -> bool,
    pub android_dex_call_static_string: unsafe extern "C" fn(
        handle: u64,
        method: *const c_char,
        sig: *const c_char,
        arg: *const c_char,
    ) -> bool,
}

static INIT: Once = Once::new();
static mut VTABLE_PTR: *const Vtable = std::ptr::null();
static mut API_VERSION: i32 = 0;

extern "C" fn on_menu_click(_userdata: *mut c_void) {
    unsafe {
        let vtable = VTABLE_PTR.as_ref();
        if let Some(vtable) = vtable {
            let message = CString::new("来自示例插件的问候！").unwrap();
            (vtable.gui_show_notification)(message.as_ptr());
        }
    }
}

extern "C" fn on_menu_section(ui: *mut c_void, _userdata: *mut c_void) {
    unsafe {
        let vtable = VTABLE_PTR.as_ref();
        if let Some(vtable) = vtable {
            let heading = CString::new("示例插件").unwrap();
            (vtable.gui_ui_heading)(ui, heading.as_ptr());
            (vtable.gui_ui_separator)(ui);
            let label = CString::new("此区块由插件渲染。").unwrap();
            (vtable.gui_ui_label)(ui, label.as_ptr());
        }
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn hachimi_init(vtable: *const Vtable, version: i32) -> InitResult {
    if vtable.is_null() || version < 2 {
        return InitResult::Error;
    }

    unsafe {
        VTABLE_PTR = vtable;
        API_VERSION = version;
    }

    INIT.call_once(|| unsafe {
        let vtable = &*vtable;
        let title = CString::new("示例插件").unwrap();
        (vtable.gui_register_menu_item)(title.as_ptr(), Some(on_menu_click), std::ptr::null_mut());
        (vtable.gui_register_menu_section)(Some(on_menu_section), std::ptr::null_mut());
    });

    InitResult::Ok
}
```

## 最佳实践

1. **版本检查**: 务必在 `hachimi_init` 中检查 API 版本。
2. **错误处理**: 如果初始化失败，请返回 `InitResult::Error`。
3. **日志记录**: 使用日志 API 进行调试并向用户提供反馈。

## Hook 和 IL2CPP 示例

### 挂钩游戏函数

挂钩游戏函数的示例：

```rust
type UpdateFunc = unsafe extern "C" fn(*mut c_void);

unsafe extern "C" fn my_update_hook(this: *mut c_void) {
    if let Some(vtable) = VTABLE {
        let (_, interceptor) = get_hachimi_and_interceptor();

        // 获取原函数
        let trampoline = (vtable.interceptor_get_trampoline_addr)(
            interceptor,
            my_update_hook as *mut c_void
        );
        let original: UpdateFunc = std::mem::transmute(trampoline);

        // 在调用前执行某些操作
        let tag = CString::new("MyPlugin").unwrap();
        let msg = CString::new("Update 被调用了").unwrap();
        (vtable.log)(4, tag.as_ptr(), msg.as_ptr());

        // 调用原函数
        original(this);

        // 在调用后执行某些操作
    }
}

// 在 hachimi_init 中（Hachimi 中使用的真实示例）：
// UnityEngine.Texture2D.ReadPixels (参数数量 = 3)
unsafe {
    let vtable = VTABLE.unwrap();
    let (_, interceptor) = get_hachimi_and_interceptor();

    let image_name = CString::new("UnityEngine.CoreModule").unwrap();
    let image = (vtable.il2cpp_get_assembly_image)(image_name.as_ptr());
    let namespace = CString::new("UnityEngine").unwrap();
    let class_name = CString::new("Texture2D").unwrap();
    let klass = (vtable.il2cpp_get_class)(image, namespace.as_ptr(), class_name.as_ptr());

    let method_name = CString::new("ReadPixels").unwrap();
    let readpixels_addr = (vtable.il2cpp_get_method_addr)(klass, method_name.as_ptr(), 3);

    (vtable.interceptor_hook)(
        interceptor,
        readpixels_addr,
        my_update_hook as *mut c_void
    );
}
```

### 操作 IL2CPP 对象

```rust
unsafe fn example_il2cpp_usage() {
    if let Some(vtable) = VTABLE {
        // 获取一个类
        let image_name = CString::new("UnityEngine.CoreModule").unwrap();
        let image = (vtable.il2cpp_get_assembly_image)(image_name.as_ptr());

        let namespace = CString::new("UnityEngine").unwrap();
        let class_name = CString::new("Object").unwrap();
        let klass = (vtable.il2cpp_get_class)(image, namespace.as_ptr(), class_name.as_ptr());

        if klass.is_null() {
            return;
        }

        // 示例：获取单例样式的实例（如果可用）
        let instance = (vtable.il2cpp_get_singleton_like_instance)(klass);
        if instance.is_null() {
            return;
        }

        // 示例：解析方法地址
        let method_name = CString::new("get_name").unwrap();
        let method_addr = (vtable.il2cpp_get_method_addr)(klass, method_name.as_ptr(), 0);
        if method_addr.is_null() {
            return;
        }

        // 如果你打算调用它，请将 method_addr 转换为函数指针
    }
}
```
