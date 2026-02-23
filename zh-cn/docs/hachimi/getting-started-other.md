# 安装指南（国际服 / 繁体中文服 / 简体中文服）

请根据您的平台遵循下方的指南，然后继续进行 [初始化设置](#初始化设置)。

## Windows

自 2025 年 11 月 11 日起，所有版本均已统一使用相同的 Hachimi Edge 发行版。

1. 如果你之前安装了特殊的旧版（Legacy）`Hachimi 2020`，请先将其卸载。
    - 你可以使用原安装程序进行卸载。[点击此处重新下载](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases/download/v0.14.0-2deadd3/hachimi_installer.exe)。
1. 参考[日服指南](getting-started-jp.md#windows)进行安装，但请注意以下调整：
    - 在下拉菜单中选择 **Steam** 版本。
    - 将安装路径指向全球版（Global）的安装目录（默认路径为：`C:\Program Files (x86)\Steam\steamapps\common\UmamusumePrettyDerby`）。

如果你更倾向于手动安装，或者遇到了其他问题，手动安装也同样非常简单。

<details>
<summary class="collapsible-header-sub">手动安装</summary>

:::tip
仅当您在原始文件名中看到**文件**扩展名（`.exe`, `.dll`）时，才在重命名时添加它们。如果您看不到，这意味着 Windows 设置为隐藏扩展名，您的重命名将以 `.exe.exe` 结尾，导致游戏无法运行。此条不适用于文件夹。
:::

1. 从 [Releases 页面](https://github.com/kairusds/Hachimi-Edge/releases) 下载最新版的 `hachimi.dll`。
1. 将其放入游戏的安装目录中。
1. 将该文件重命名为 `cri_mana_vpx.dll`。

</details>

<details>
<summary class="collapsible-header-sub">旧版方法（Legacy）</summary>

::: warning
本章节仅供历史参考。仅当你的游戏版本尚未更新，或你有特殊需求时，才应参考此方法。
:::

1. 从 [旧版 Release 页面](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases) 下载最新版的 `hachimi_installer.exe`。
1. 运行安装程序并点击 **Install**。如果你不清楚各项选项的含义，无需进行任何修改。

<details>
<summary class="collapsible-header-sub">旧版手动安装</summary>

::: tip
**注意：** 只有在原文件名中能看到 `.dll` 后缀时，才在重命名时输入该后缀。如果看不到，说明 Windows 已设置为“隐藏已知文件类型的扩展名”，手动添加后缀会导致文件名变成 `.dll.dll`，从而导致游戏无法运行。
:::

1. 从 [旧版 Release 页面](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases) 下载最新版的 `hachimi.dll`。
1. 将其放入游戏的安装目录中。
1. 将该文件重命名为 `winhttp.dll`、`version.dll` 或 `opengl32.dll`（任选其一）。

</details>

## Android

::: warning
如果没有 Root 权限，Hachimi 将无法在这些版本上运行。  
特别提醒：目前暂不支持安卓（Android）全球版。
:::

::: danger
自 2025 年 11 月 11 日起，下方链接提供的 Hachimi 版本可能会失效。请改用[最新 Edge 发行版](https://github.com/kairusds/Hachimi-Edge/releases/latest)中的文件。目前的支持状态尚不明确。
:::

### Zygisk

从 [Releases 页面](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases)下载最新的 Zygisk zip 压缩包，并通过 Magisk 或 KernelSU（需搭配 Zygisk Next）进行安装。

## 初始化设置

安装 Hachimi 后首次启动游戏时，您应该会看到这个对话框：

![初始化设置](/assets/zh-cn/first-time-setup.jpg)

::: info
如果您没有看到此对话框，则表示 Hachimi 未正确安装。请仔细阅读安装指南并重试，或查阅 [故障排除](troubleshooting)。
:::

只需按照引导进行操作，完成后点击“完成”即可保存配置。如果你勾选了翻译选项，将会自动开始检查更新，并提示你下载最新的翻译文件。

你可以稍后通过 Hachimi 菜单返回此对话框，以更改翻译源。

::: tip
如果翻译功能出现任何问题，你可以在 **配置编辑器 (Config Editor) > 游戏设置 (Gameplay)** 中将其禁用，然后重启游戏。
:::
