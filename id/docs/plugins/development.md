# Panduan mengembangkan plugin

Panduan ini akan membantu kamu membuat plugin untuk Hachimi Edge. Plugin merupakan pustaka dinamis (*dynamic libraries*) yang memperluas fungsionalitas Hachimi melalui API kompatibel-C yang terdefinisi dengan baik.

## Pilihan bahasa

Plugin bisa ditulis dengan **berbagai bahasa** yang bisa membuat *C-compatible dynamic library* (`.so` di Android, `.dll` di Windows). Ini termasuk:

- **Rust** (direkomendasikan — contoh di panduan ini menggunakan bahasa Rust)
- **C/C++**
- **Zig**
- **Go** (dengan cgo)
- **Bahasa apapun yang mendukung C FFI**
- **Assembly** (jika kamu adalah masokis)

Panduan ini menggunakan **Rust** sebagai contoh, karena Hachimi sendiri ditulis dengan Rust.
Namun, karena API ini kompatibel dengan C, kamu bisa menggunakan bahasa apa pun yang kamu sukai. Pastikan fungsi `hachimi_init` kamu diekspor dengan konvensi pemanggilan C (*C calling convention*).

## Prasyarat/persiapan

Sebelum memulai, kamu harus mempunyai:

- Pengalaman dengan bahasa pemrograman yang kamu pilih.
- Familiar dengan struktur game.
- *Toolchain* pengembangan sudah terinstal untuk platform target kamu.

::: warning PERINGATAN
Dilarang membuat plugin aneh yang mencuri data atau merugikan pemain lain.
:::

## Struktur Plugin

### *Entry point*

Setiap plugin harus mengekspor fungsi `hachimi_init`.

Sebagai awal, buatlah `Cargo.toml`:

```toml
[package]
name = "hachimi_myplugin"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib"]

[dependencies]
```

kemudian `src/lib.rs`:

```rust
use std::ffi::{c_char, c_void};

#[repr(C)]
pub struct Vtable {
    // Pointer fungsi (lihat Referensi API di bawah)
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

    // Inisialisasikan plugin di sini

    InitResult::Ok
}
```

### Vtable

Vtable adalah sebuah struktur yang berisi *function pointer* ke API Hachimi. Kamu menerimanya di dalam fungsi `hachimi_init` dan harus menyimpannya untuk digunakan di seluruh plugin kamu.

**Versi API saat ini: 2** <!-- markdownlint-disable-line MD036 -->

Selalu cek parameter versi untuk memastikan kompabilitas:

```rust
#[no_mangle]
pub extern "C" fn hachimi_init(vtable: *const Vtable, version: i32) -> InitResult {
    if vtable.is_null() {
        return InitResult::Error;
    }
    if version < 2 {
        // Versi API terlalu tua
        return InitResult::Error;
    }

    // muatkan vtable dengan aman
    unsafe {
        VTABLE = Some(&*vtable);
    }

    InitResult::Ok
}
```

## Referensi API

### Instance dalam Hachimi

```rust
use std::ffi::c_void;

unsafe fn get_hachimi_and_interceptor() -> (*const c_void, *const c_void) {
    let vtable = VTABLE.unwrap();
    let hachimi = (vtable.hachimi_instance)();
    let interceptor = (vtable.hachimi_get_interceptor)(hachimi);
    (hachimi, interceptor)
}
```

### Interceptor (Berfungsi untuk hook function)

Sebuah interceptor mengizinkan kamu untuk hook dan memodifikasi fungsi game:

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

### Fungsi IL2CPP

Akses runtime IL2CPP milik Unity:

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

### Logging

```rust
use std::ffi::CString;

// Log level: 1=Error, 2=Warn, 3=Info, 4=Debug, 5=Trace
unsafe fn log(level: i32, tag: &str, message: &str) {
    let vtable = VTABLE.unwrap();
    let tag_cstr = CString::new(tag).unwrap();
    let msg_cstr = CString::new(message).unwrap();
    (vtable.log)(level, tag_cstr.as_ptr(), msg_cstr.as_ptr());
}

// Function pembantu
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

### Integrasi Gui

#### Menu item

```rust
use std::ffi::{c_char, c_void, CString};

// Muat ikon PNG
const ICON_BYTES: &[u8] = include_bytes!("../icon.png");

// Tipe callback
type MenuCallback = extern "C" fn(userdata: *mut c_void);

extern "C" fn my_menu_callback(_userdata: *mut c_void) {
    unsafe {
        log_info("MyPlugin", "Menu item clicked!");
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

// Cara pakai:
// register_menu_item_with_icon("My Plugin", ICON_BYTES, my_menu_callback);
```

#### Bagian Menu

```rust
type MenuSectionCallback = extern "C" fn(ui: *mut c_void, userdata: *mut c_void);

extern "C" fn my_section_callback(ui: *mut c_void, _userdata: *mut c_void) {
    unsafe {
        let vtable = VTABLE.unwrap();

        // Bikin UI
        let heading = CString::new("My Plugin Settings").unwrap();
        (vtable.gui_ui_heading)(ui, heading.as_ptr());

        (vtable.gui_ui_separator)(ui);

        // Tambah widget...
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

// Cara pakai:
// register_menu_section_with_icon("Pengaturanku", ICON_BYTES, my_section_callback);
```

#### Ui widgets

Tersedia fungsi UI untuk membangun GUI sendiri:

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

#### Notifikasi

```rust
unsafe fn show_notification(message: &str) -> bool {
    let vtable = VTABLE.unwrap();
    let msg_cstr = CString::new(message).unwrap();
    (vtable.gui_show_notification)(msg_cstr.as_ptr())
}
```

### Memuat Android dex (api v2+)

Muat dan jalankan kode Java/Kotlin di Android:

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

#### Contoh Java (DEX side)

*Class* Java/Kotlin kamu harus mengekspos metode **statis** yang cocok dengan tanda tangan (*signature*) fungsi yang kamu panggil dari Rust.

Ini adalah contoh Java minimal yang bisa kamu *compile* menjadi DEX dan dimuat menggunakan fungsi bantuan (*helpers*) di atas:

```java
package dev.hachimi;

import android.util.Log;

public class DexExample {
        private static final String TAG = "HachimiDexExample";

        public static void hello() {
                Log.i(TAG, "Hello from DEX");
        }

        public static void setVisibleString(String value) {
                Log.i(TAG, "setVisibleString: " + value);
        }
}
```

Saat memuat, Gunakan nama *class* yang berkualifikasi lengkap:

- `class_name`: `"dev.hachimi.DexExample"`
- `hello()` signature: `"()V"`
- `setVisibleString(String)` signature: `"(Ljava/lang/String;)V"`

#### Bangun DEX-nya

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

Kemudian muat dari Rust:

```rust
let dex_bytes = include_bytes!("../assets/dex_example.dex");
let handle = load_dex(dex_bytes, "dev.hachimi.DexExample");
dex_call_static_noargs(handle, "hello", "()V");
dex_call_static_string(handle, "setVisibleString", "(Ljava/lang/String;)V", "true");
```

## Contoh lengkap plugin

Ini adalah contoh plugin yang sudah jadi:

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
            let message = CString::new("Halo dari plugin percontohan!").unwrap();
            (vtable.gui_show_notification)(message.as_ptr());
        }
    }
}

extern "C" fn on_menu_section(ui: *mut c_void, _userdata: *mut c_void) {
    unsafe {
        let vtable = VTABLE_PTR.as_ref();
        if let Some(vtable) = vtable {
            let heading = CString::new("Example Plugin").unwrap();
            (vtable.gui_ui_heading)(ui, heading.as_ptr());
            (vtable.gui_ui_separator)(ui);
            let label = CString::new("Bagian ini adalah render dari plugin.").unwrap();
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
        let title = CString::new("Example Plugin").unwrap();
        (vtable.gui_register_menu_item)(title.as_ptr(), Some(on_menu_click), std::ptr::null_mut());
        (vtable.gui_register_menu_section)(Some(on_menu_section), std::ptr::null_mut());
    });

    InitResult::Ok
}
```

## Praktek terbaik

1. **Cek versinya**: Selalu cek versi API di `hachimi_init`
1. **Mengendalikan Eror**: Kembalikan `InitResult::Error` jika inisialisasi gagal.
1. **Logging**: Gunakan API log untuk proses *debugging* dan umpan balik pengguna (*user feedback*).

## Contoh Hooking dan il2cpp

### Fungsi Hooking game

Contoh fungsi hooking dalam game:

```rust
type UpdateFunc = unsafe extern "C" fn(*mut c_void);

unsafe extern "C" fn my_update_hook(this: *mut c_void) {
    if let Some(vtable) = VTABLE {
        let (_, interceptor) = get_hachimi_and_interceptor();

        // Fungsi awal/orisinal
        let trampoline = (vtable.interceptor_get_trampoline_addr)(
            interceptor,
            my_update_hook as *mut c_void
        );
        let original: UpdateFunc = std::mem::transmute(trampoline);

        // Lakukan ini sebelum
        let tag = CString::new("MyPlugin").unwrap();
        let msg = CString::new("Update called").unwrap();
        (vtable.log)(4, tag.as_ptr(), msg.as_ptr());

        // kemudian panggil fungsi original
        original(this);

        // Lakukan ini setelahnya
    }
}

// dalam hachimi_init (contoh nyata digunakan Hachimi):
// UnityEngine.Texture2D.ReadPixels (args = 3)
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

### Mengelola objek il2cpp

```rust
unsafe fn example_il2cpp_usage() {
    if let Some(vtable) = VTABLE {
        // Ambil class
    let image_name = CString::new("UnityEngine.CoreModule").unwrap();
        let image = (vtable.il2cpp_get_assembly_image)(image_name.as_ptr());

    let namespace = CString::new("UnityEngine").unwrap();
    let class_name = CString::new("Object").unwrap();
        let klass = (vtable.il2cpp_get_class)(image, namespace.as_ptr(), class_name.as_ptr());

        if klass.is_null() {
            return;
        }

        // Contoh: ambil instance berpola singleton (jika tersedia)
        let instance = (vtable.il2cpp_get_singleton_like_instance)(klass);
        if instance.is_null() {
            return;
        }

        // Contoh: lengkapi alamat method
    let method_name = CString::new("get_name").unwrap();
    let method_addr = (vtable.il2cpp_get_method_addr)(klass, method_name.as_ptr(), 0);
        if method_addr.is_null() {
            return;
        }

        // Panggil (cast) method_addr kedalam pointer function jika kamu ingin memanggilnya
    }
}
```
