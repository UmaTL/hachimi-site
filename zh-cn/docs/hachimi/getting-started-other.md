# 安装指南（国际服 / 繁体中文服 / 简体中文服）

请根据您的平台遵循下方的指南，然后继续进行 [初始化设置](#初始化设置)。

## Windows

自 2025/11/11 起，所有版本的游戏都使用同一个 Hachimi Edge 发行版。

1. 如果你安装了特殊的旧版 `Hachimi 2020` 版本，请先将其卸载。
    - 你可以使用原始安装程序进行卸载。[点击此处重新下载](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases/download/v0.14.0-2deadd3/hachimi_installer.exe)。
2. 按照 [日服指南](getting-started-jp.md#windows) 进行操作，并做出以下调整：
    - 在下拉菜单中选择 **Steam版**。
    - 将安装位置指向国际服的游戏目录（默认路径：`C:\Program Files (x86)\Steam\steamapps\common\UmamusumePrettyDerby`）。

手动安装同样简单，如果你遇到问题时不妨尝试手动安装。

<details>
<summary class="collapsible-header-sub">手动安装</summary>

:::tip
仅当您在原始文件名中看到**文件**扩展名（`.exe`, `.dll`）时，才在重命名时添加它们。如果您看不到，这意味着 Windows 设置为隐藏扩展名，您的重命名将以 `.exe.exe` 结尾，导致游戏无法运行。此条不适用于文件夹。
:::

1. 从 [Release 页面](https://github.com/kairusds/Hachimi-Edge/releases) 下载最新的 `hachimi.dll`。
2. 将其放入游戏的安装目录中。
3. 将该文件重命名为 `cri_mana_vpx.dll`。

<details>
<summary class="collapsible-header-sub">旧版安装方法</summary>

::: warning 警告
本章节仅供参考。除非你的游戏版本尚未更新，或者你有特殊需求，否则不建议使用。
:::

1. 从 [旧版发布页面](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases) 下载最新的 `hachimi_installer.exe`。
2. 运行它并点击安装 (Install)。如果你不清楚各项选项的含义，无需进行任何修改。

<details>
<summary class="collapsible-header-sub">旧版手动安装</summary>

:::tip 提示
仅在原始文件名显示了 `.dll` 后缀时，才在重命名时添加该后缀。如果没有显示，说明 Windows 设置了隐藏扩展名，你的重命名会导致文件名变成 `.dll.dll`，从而导致游戏无法运行。
:::

1. 从 [旧版发布页面](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases) 下载最新的 `hachimi.dll`。
1. 将其放入游戏的安装目录中。
1. 将其重命名为 `winhttp.dll`、`version.dll` 或 `opengl32.dll`。

</details>

</details>

## Android

::: warning 警告
在这些版本中，如果您的手机未 Root ，将无法使用 Hachimi。
请注意，目前不支持安卓国际服。
:::

::: danger 危险
自 2025/11/11 起，下方链接中的 Hachimi 版本可能会失效。请改用 [最新 Edge 发行版](https://github.com/kairusds/Hachimi-Edge/releases/latest) 中的文件。目前的维护支持状态尚不确定。
:::

### Zygisk

从 [Releases 页面](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases)下载最新的 Zygisk zip 压缩包，并通过 Magisk 或 KernelSU（需搭配 Zygisk Next）进行安装。

## 初始化设置

安装 Hachimi 后首次启动游戏时，您应该会看到这个对话框：

![初始化设置](/assets/zh-cn/first-time-setup.jpg)

::: info
如果您没有看到此对话框，则表示 Hachimi 未正确安装。请仔细阅读安装指南并重试，或查阅 [故障排除](troubleshooting)。
:::

只需按照指南操作，然后点击“完成”保存配置。如果你选择了翻译功能，系统还会开始更新检查，并提示你下载任何新的翻译内容。

你稍后可以通过 Hachimi 菜单返回此对话框，以更改翻译源。

::: tip 建议
如果翻译出现任何问题，你可以在“配置编辑器 > 通用”中将其禁用，然后重启游戏。
:::
