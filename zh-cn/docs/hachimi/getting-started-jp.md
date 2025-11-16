# 安装指南（日服）

请根据您的平台遵循下方的指南，然后继续进行 [初始化设置](#初始化设置)。

## Windows

由于游戏的某次大版本更新，自 2025/09/24 起，您需要使用 Hachimi v0.14.2 或更新版本。
如果遇到问题，请查阅 [故障排除](troubleshooting.md)。

::: warning
某些反作弊程序（例如 英雄联盟/无畏契约 中使用的 Vanguard）不喜欢系统上启用 DLL 重定向。每次您想玩受影响的游戏时，都需要禁用它。[这里](https://github.com/LeadRDRK/DotLocalToggle/releases)有一个小程序可以快速切换该功能。运行它直到提示 DLL 重定向已禁用，然后重启您的电脑。
:::
::: info
DotLocal 目前仅用于 DMM 版本。在 Steam 平台上玩可以绕过此问题。
:::

1. 下载最新的[安装程序](https://github.com/kairusds/Hachimi-Edge/releases/latest/download/hachimi_installer.exe)并运行它。
2. 如果您之前使用过 Hachimi v0.14.2 及更早版本的 Hachimi，请先点击“卸载”。
3. 检查安装目录是否正确，如果需要请进行更改。
4. 选择您的游戏版本，然后点击“安装” 。

首次安装时，安装程序可能会请求您启用 DotLocal DLL 重定向。点击“确定” ，它会自动为您启用。**启用后，您必须重启（不是关机再开机）您的电脑。**

<details>
<summary class="collapsible-header-sub">手动安装</summary>

:::tip
仅当您在原始文件名中看到文件扩展名（`.exe`, `.dll`）时，才在重命名时添加它们。如果您看不到，这意味着 Windows 设置为隐藏扩展名，您的重命名将以 `.exe.exe` 结尾，导致游戏无法运行。此条不适用于文件夹。
:::

::: tip
本指南基于 DMM 版本。如果您使用 Steam，请在以下步骤中将 `umamusume.exe` 替换为 `UmamusumePrettyDerby.exe`。
:::

1. 参考[这篇文章](https://learn.microsoft.com/zh-cn/windows/win32/dlls/dynamic-link-library-redirection#optional-configure-the-registry)中的“配置注册表”部分来启用 DLL 重定向。完成后重启您的电脑。
2. 从 [Releases 页面](https://github.com/kairusds/Hachimi-Edge/releases)下载最新的 `hachimi.dll`。
3. 在游戏安装文件夹中，创建一个名为 `umamusume.exe.local` 的新文件夹，并将下载的 DLL 文件移动到其中。将其重命名为 `UnityPlayer.dll`。
4. 从 [Cellar Releases 页面](https://github.com/Hachimi-Hachimi/Cellar/releases)下载最新的 `cellar.dll`。
5. 将其移动到 `umamusume.exe.local` 文件夹中并重命名为 `apphelp.dll`。
</details>

<details>
<summary class="collapsible-header-sub">从已弃用的插件注入方法迁移</summary>

您需要先彻底卸载 Shinmy；请确保在删除它时它没有在运行，因为它在 DMM 关闭后最多能存活 30 秒并可能自我恢复。**最简单的方法就是使用安装程序**（它也是一个卸载程序），它会为您妥善清理一切。

之后，您可以像往常一样卸载 Hachimi。
</details>

## Android

::: warning
在安卓上补丁游戏将导致游戏无法使用 Google Play 商店，包括通过 Google Play 进行内购。您可以尝试使用游戏开发商自己的商店。
:::

::: danger
如果您已有游戏存档，请确保在安装补丁后版本前已设置好数据引承或 Cygames ID 以登录您的账号。在补丁后的游戏中无法通过 Google Play 帐户登录。
:::

::: danger
如果您已经安装了原版游戏，则必须先将其卸载。补丁后的游戏之后可以在不卸载的情况下进行更新。
:::

::: warning
不要从 APKPure 获取您的 APK，这会导致问题。
推荐的来源是 [Qoopy](https://qoopy.leadrdrk.com/)，使用 ID 6172。
:::

::: tip
在搭载 MIUI 或 HyperOS 的设备上，请尝试在安装前禁用 MIUI优化 / 系统优化。
这在游戏更新时确实很烦人，但您可以通过 Shizuku 安装来避免该问题。
:::

::: tip
部分安卓系统使用了手机厂商修改过的安装管理器，这些安装管理器可能并不支持安装 XAPK 应用，如您一直遇到安装失败的问题，不妨尝试使用 Shizuku 安装。
:::

1. 如果您之前使用过 Umapatcher，请打开其设置页面并**将签名密钥导出到一个安全且可以轻易找到的地方**。
2. 如果您之前没有补丁过游戏，请先卸载原版游戏。
3. 下载并安装最新版本的 [UmaPatcher Edge](https://github.com/kairusds/UmaPatcher-Edge/releases/latest/download/app-release.apk)。
4. 为游戏准备一个安装包，可以是：
    - **分割 APK 文件 (Split APKs)：** 一个基础 APK 文件和一个分割配置 APK 文件（config.arm64_v8a, config.armeabi-v7a 等），
    请只选择一个适合您设备的分割配置。
    - **XAPK 文件：** 一个包含分割 APK 文件的 ZIP 文件（扩展名被重命名为 XAPK）。
5. 打开 UmaPatcher，如果需要，导入您导出的签名密钥，然后选择 **普通安装**。选择您准备好的文件。
6. 点击 **开始补丁** 来开始补丁和安装过程。

⚠️ 每当应用更新时，您都需要从第 4 步开始重复此过程。您**不需要**卸载游戏来更新。

<details>
<summary class="collapsible-header-sub">通过 Shizuku 安装</summary>

请先下载并安装最新版本的 [Shizuku](https://github.com/RikkaApps/Shizuku/releases/)。

随后，通过 [此教程](https://shizuku.rikka.app/zh-hans/guide/setup/) 配置好 Shizuku。

当成功配置 Shizuku 后，在 Umapatcher 中，“通过 Shizuku 安装”的右侧应当会显示为“可用”。

1. 如果您之前使用过 Umapatcher，请打开其设置页面并**将签名密钥导出到一个安全且可以轻易找到的地方**。
2. 如果您之前没有补丁过游戏，请先卸载原版游戏。
3. 下载并安装最新版本的 [UmaPatcher Edge](https://github.com/kairusds/UmaPatcher-Edge/releases/latest/download/app-release.apk)。
4. 为游戏准备一个安装包，可以是：
    - **分割 APK 文件 (Split APKs)：** 一个基础 APK 文件和一个分割配置 APK 文件（config.arm64_v8a, config.armeabi-v7a 等），
    请只选择一个适合您设备的分割配置。
    - **XAPK 文件：** 一个包含分割 APK 文件的 ZIP 文件（扩展名被重命名为 XAPK）。
5. 打开 UmaPatcher，如果需要，导入您导出的签名密钥，然后选择 **通过 Shizuku 安装**。选择您准备好的文件。
6. 点击 **开始补丁** 来开始补丁和安装过程。

⚠️ 每当应用更新时，您都需要从第 4 步开始重复此过程。您**不需要**卸载游戏来更新。
</details>

<details>
<summary class="collapsible-header-sub">免卸载更新 + 商店更新（需要 root）</summary>

UmaPatcher 提供了一个 root 安装选项，它不需要您卸载游戏或处理 APK，让您可以从任何应用商店正常更新。

在已安装游戏的情况下，点击补丁器主屏幕顶部的卡片，选择您想补丁的应用（如果需要）。然后选择“直接安装 (Direct install)”作为安装方式，并点击“补丁” (Patch)。此方式不需要任何输入文件。

每当游戏更新时，您都需要再次使用 UmaPatcher 来补丁游戏。
</details>

<details>
<summary class="collapsible-header-sub">手动安装（不推荐）</summary>

1. 从 [Releases 页面](https://github.com/kairusds/Hachimi-Edge/releases)构建或下载预构建的库文件。
2. 解压游戏的 APK 文件。您可能需要使用 [apktool](https://apktool.org/)。
3. 将 `lib` 目录下的每个文件夹中的 `libmain.so` 文件重命名为 `libmain_orig.so`。
4. 将代理库文件复制到它们对应的文件夹中（例如 `libmain-arm64-v8a.so` 放入 `lib/arm64-v8a`）。将它们重命名为 `libmain.so`。
5. 构建 APK 文件并安装它。
</details>

## 初始化设置
安装 Hachimi 后首次启动游戏时，您应该会看到这个对话框：

![初始化设置](/assets/zh-cn/first-time-setup.jpg)

::: info
如果在其他情况下没有看到此对话框，则表示 Hachimi 未正确安装。请仔细阅读安装指南并重试，或查阅 [故障排除](troubleshooting.md)。
:::

点击“下一步”并选择您偏好的翻译源，然后点击“完成”以保存您的配置并开始检查更新。

Hachimi 现在会提示您下载新的翻译更新，点击“是”开始下载翻译文件。
::: warning
“大陆加速镜像”只对部分地区有加速效果，如果它真的下得很慢……那还是使用非大陆加速镜像吧。
:::

您可以稍后通过 Hachimi 菜单返回此对话框来更改您的翻译源。