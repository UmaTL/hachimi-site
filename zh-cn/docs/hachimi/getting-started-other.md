# 安装指南（国际服 / 繁体中文服 / 简体中文服）

请根据您的平台遵循下方的指南，然后继续进行 [初始化设置](#初始化设置)。

## Windows

1. 从 [Releases 页面](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases)下载最新的 `hachimi_installer.exe`。
2. 运行它并点击“安装” (Install)。如果您不明白这些选项的含义，无需进行任何修改。

<details>
<summary class="collapsible-header-sub">手动安装</summary>

:::tip
仅当您在原始文件名中看到**文件**扩展名（`.exe`, `.dll`）时，才在重命名时添加它们。如果您看不到，这意味着 Windows 设置为隐藏扩展名，您的重命名将以 `.exe.exe` 结尾，导致游戏无法运行。此条不适用于文件夹。
:::

1. 从 [Releases 页面](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases)下载最新的 `hachimi.dll` 并将其放入游戏安装目录中。
2. 将其重命名为 `winhttp.dll`、`version.dll` 或 `opengl32.dll`。
</details>

## Android

::: warning
如果没有 root 权限，Hachimi 无法在这些版本上使用。
:::

#### Zygisk
从 [Releases 页面](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases)下载最新的 Zygisk zip 压缩包，并通过 Magisk 或 KernelSU（需搭配 Zygisk Next）进行安装。


## 初始化设置
安装 Hachimi 后首次启动游戏时，您应该会看到这个对话框：

![初始化设置](/assets/zh-cn/first-time-setup.jpg)

::: info
如果您没有看到此对话框，则表示 Hachimi 未正确安装。请仔细阅读安装指南并重试，或查阅 [故障排除](troubleshooting.md)。
:::

⚠️ 请关闭此对话框以放弃使用翻译。目前不支持在官方本地化版本上使用翻译，这会导致各种问题。

::: tip
如果您不小心应用了翻译，可以在“配置编辑器 > 游戏玩法”中禁用翻译，然后重启游戏。
但是如果您真的很需要翻译的话，那就把翻译文件夹里`\localized_data\assets\an_texture_sets`给全部删掉吧。
:::