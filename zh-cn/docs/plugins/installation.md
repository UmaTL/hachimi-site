# 安装插件

本指南将说明如何为 Hachimi Edge 安装及配置插件。

::: danger ⚠️ 安全警告
请仅安装来自你信任的来源和开发者的插件！Hachimi Edge 开发人员不对第三方插件造成的任何问题或损害负责。

恶意插件可能会窃取游戏账号凭据、导致封号、以游戏名义执行任意代码等。

🚨 **在 Windows 系统上，插件拥有访问你整个系统的“完全管理员权限”。它们可以安装恶意软件、修改系统文件、访问你的所有数据等。**
:::

## Windows 安装步骤

在 Windows 上，插件必须在配置文件中进行显式配置。

1. **定位插件文件**：你应该拥有一个 `.dll` 文件（例如 `hachimi_myplugin.dll`）。
1. **将插件放入 hachimi 文件夹**：将插件文件放入 [`hachimi` 文件夹](/docs/hachimi/faqs.md#how-do-i-find-the-game-install-folder)内。
1. **编辑配置**：打开 `hachimi` 文件夹中的 `config.json`，并添加插件文件名：
   ```json
   {
     "windows": {
       "load_libraries": [
         "hachimi\\hachimi_myplugin.dll"
       ]
     }
   }
   ```

1. **保存并重启**：保存配置文件并重新启动游戏。

## Android 安装步骤

在 Android 上，插件必须在补丁游戏之前通过 UmaPatcher Edge 添加。

1. **准备插件文件**：你应该拥有一个 `.so` 文件（例如 `libmyplugin.so`）。
1. **打开 UmaPatcher Edge**：启动 UmaPatcher Edge 应用。
1. **添加插件**：
   - 在主界面，向下滚动到“插件”部分。
   - 点击“添加插件”按钮。
   - 从设备中选择你的插件 `.so` 文件。
   - 插件将被添加到列表中并默认启用。
1. **管理插件**（可选）：
   - 你可以使用每个插件旁边的复选框来启用/禁用插件。
   - 点击“移除”从列表中删除插件。
1. **补丁游戏**：按照常规的 [UmaPatcher Edge 安装指南](/zh-cn/docs/hachimi/getting-started-jp#android) 进行游戏的补丁和安装。
1. **验证**：启动游戏。如果插件加载成功，你应该能在 Hachimi 的内置 GUI 中看到其效果或菜单项。

::: tip 提示
更新游戏时，你的插件会保留在 UmaPatcher Edge 中。只需补丁新版本，它们就会自动包含在内。
:::

## 禁用插件

### Windows

- 从 `config.json` 的 `load_libraries` 数组中移除该插件路径。

### Android

- 打开 UmaPatcher Edge。
- 在“插件”部分取消勾选该插件。
- 重新补丁游戏。

## 插件故障排查

### 插件未加载

Windows 端：

- 检查 `config.json` 中的路径是否正确。
- 确认插件与你的 Hachimi 版本兼容。

Android 端：

- 确保在补丁之前已在 UmaPatcher Edge 中添加了插件。
- 检查插件是否与你的 Hachimi 版本兼容。
- 尝试在启用插件的情况下重新补丁游戏。

### 插件崩溃或无法运行

如果插件导致崩溃或功能异常：

- **联系插件作者**：特定插件的问题应向该插件的开发者反馈。

## 下一步

- 了解如何[开发你自己的插件](development)。
