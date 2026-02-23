# 安装指南（日服）

请根据您的平台遵循下方的指南，然后继续进行 [初始化设置](#初始化设置)。
如果遇到问题，请查阅[故障排除](troubleshooting)。

## Windows

由于游戏的某次大版本更新，自 2025/09/24 起，您需要使用 Hachimi v0.14.2 或更新版本。

1. 下载最新的[安装程序](https://github.com/kairusds/Hachimi-Edge/releases/latest/download/hachimi_installer.exe)并运行它。
2. 如果您之前使用过 Hachimi v0.14.2 及更早版本的 Hachimi，请先点击“卸载”。
3. 检查安装目录是否正确，如果需要请进行更改。
4. 选择您的游戏版本，然后点击“安装” 。
5. 安装完成后，请右键游戏的exe文件，选择属性，转到兼容性选项卡，并勾选“禁用全屏优化”。（不勾选会导致游戏无法启动）

首次安装时，安装程序可能会请求您启用 DotLocal DLL 重定向。点击“确定” ，它会自动为您启用。**启用后，您必须重启（不是关机再开机）您的电脑。**

::: warning
某些反作弊程序（例如 英雄联盟/无畏契约 中使用的 Vanguard）不喜欢系统上启用 DLL 重定向。每次您想玩受影响的游戏时，都需要禁用它。[这里](https://github.com/LeadRDRK/DotLocalToggle/releases)有一个小程序可以快速切换该功能。运行它直到提示 DLL 重定向已禁用，然后重启您的电脑。
:::
::: info
DotLocal 目前仅用于 DMM 版本。在 Steam 平台上玩请在安装程序中选择带 Steam 一项的安装方法。
:::

如果您在 Steam 端上使用 Hachimi，您可能需要在游戏更新后重新使用安装程序安装 Hachimi。

<details>
<summary class="collapsible-header-sub">手动安装</summary>

:::tip
仅当您在原始文件名中看到文件扩展名（`.exe`, `.dll`）时，才在重命名时添加它们。如果您看不到，这意味着 Windows 设置为隐藏扩展名，您的重命名将以 `.exe.exe` 结尾，导致游戏无法运行。此条不适用于文件夹。
:::

### Steam

1. 从 [Releases 页面](https://github.com/kairusds/Hachimi-Edge/releases)下载最新版本的 `hachimi.dll`。
2. 将该文件重命名为 `cri_mana_vpx.dll`，并将其放入[游戏安装目录](faqs#如何找到游戏的安装目录)中。
3. 下载 Ferns 开发的 [`FunnyHoney.exe`](https://codeberg.org/LeadRDRK/FunnyHoney(https://codeberg.org/LeadRDRK/FunnyHoney))。
4. 将其重命名为 `UmamusumePrettyDerby_Jpn.exe` 并放入游戏安装目录中，**覆盖**原始同名文件。

### DMM

1. 参阅[这篇文章](https://learn.microsoft.com/zh-cn/windows/win32/dlls/dynamic-link-library-redirection#optional-configure-the-registry)中的“配置注册表”部分来启用 DLL 重定向。完成后重启您的电脑。
2 从 [Releases 页面](https://github.com/kairusds/Hachimi-Edge/releases)下载最新的 `hachimi.dll`。
3. 在游戏安装文件夹中，创建一个名为 `umamusume.exe.local` 的新文件夹，并将下载的 DLL 文件移动到其中。将其重命名为 `UnityPlayer.dll`。
4. 从 [Cellar Releases 页面](https://github.com/Hachimi-Hachimi/Cellar/releases)下载最新的 `cellar.dll`。
5. 将其移动到 `umamusume.exe.local` 文件夹中并重命名为 `apphelp.dll`。

</details>

<details>
<summary class="collapsible-header-sub">从已弃用的插件注入方法迁移</summary>

您需要先彻底卸载 Shinmy；请确保在删除它时它没有在运行，因为它在 DMM 关闭后最多能存活 30 秒并可能自我恢复。**最简单的方法就是使用安装程序**（同时它也是一个卸载程序），它会为您妥善清理一切。

之后，您可以像往常一样卸载 Hachimi。
</details>

## Android

::: warning 安装前须知
补丁版无法使用 Google Play 商店及内购。请改用官方网页充值渠道。
安装前必须绑定 Cygames ID 或设置引承码。补丁版无法通过 Google 账号登录。

全新安装 Hachimi 需要卸载原版游戏。
请从 [Qoopy](https://qoopy.leadrdrk.com/) 获取游戏APK，使用 ID 6172。

若常规安装失败，请使用 Shizuku 模式安装。
MIUI/HyperOS 用户在安装前请先于 `开发者设置` 中关闭 `系统优化`，在安装完成后再重新打开。
:::

### 1.准备工作
在开始之前，请根据您的具体情况执行以下操作：

* **旧版Umapathcer用户：** 如果您曾使用过旧版 UmaPatcher，请在旧版 UmaPatcher 的 `设置` 页面 **导出签名密钥**，并保存到安全的位置。
* **首次安装：** 如果您从未给游戏打过补丁，请先 **卸载原版游戏**。
* **软件下载：** 下载并安装最新版的 [UmaPatcher Edge](https://github.com/kairusds/UmaPatcher-Edge/releases/latest/download/app-release.apk)。

---

### 2.准备游戏安装包
您需要准备好以下任意一种格式的游戏安装包：


**Split APKs (分割包)**： 一个基础 APK + 一个对应您架构的配置包（通常为 `config.arm64_v8a`）。
**XAPK 文件**： 本质是包含分割包的压缩包，确保后缀名为 `.xapk`。

---

### 3.开始补丁安装
1.  打开 UmaPatcher Edge，如果导出了旧版 UmaPatcher 的签名密钥，请先在设置中导入之前备份的密钥。
2.  选择 **普通安装**。
3.  选择您准备好的 拆分APK 或 XAPK 文件。
4.  点击 **开始补丁**，等待补丁完成并自动触发安装。

---

::: tips
⚠️ 当游戏发布新版本时，您只需从第 2 步开始重复流程即可。
更新过程中无需卸载现有的已补丁游戏。
:::

<details>
<summary class="collapsible-header-sub">通过 Shizuku 安装</summary>
### 1.准备工作
在开始之前，请根据您的具体情况执行以下操作：

- **旧版Umapathcer用户：** 如果您曾使用过旧版 UmaPatcher，请在旧版 UmaPatcher 的 `设置` 页面 **导出签名密钥**，并保存到安全的位置。
- **首次安装：** 如果您从未给游戏打过补丁，请先 **卸载原版游戏**。
- **软件下载：** 下载并安装最新版的 [UmaPatcher Edge](https://github.com/kairusds/UmaPatcher-Edge/releases/latest/download/app-release.apk) 和 [Shizuku](https://github.com/RikkaApps/Shizuku/releases/)。
- 通过 [此教程](https://shizuku.rikka.app/zh-hans/guide/setup/) 配置好 Shizuku。

当成功配置 Shizuku 后，在 Umapatcher 中，“通过 Shizuku 安装”的右侧应当会显示为“可用”。

---

### 2.准备游戏安装包
您需要准备好以下任意一种格式的游戏安装包：


**Split APKs (分割包)**： 一个基础 APK + 一个对应您架构的配置包（通常为 `config.arm64_v8a`）。
**XAPK 文件**： 本质是包含分割包的压缩包，确保后缀名为 `.xapk`。

---

### 3.开始补丁安装
1.  打开 UmaPatcher Edge，如果导出了旧版 UmaPatcher 的签名密钥，请先在设置中导入之前备份的密钥。
2.  选择 **通过 Shizuku 安装**。
3.  选择您准备好的 拆分APK 或 XAPK 文件。
4.  点击 **开始补丁**，等待补丁完成并自动触发安装。

---

::: tip
⚠️ 当游戏发布新版本时，您只需从第 2 步开始重复流程即可。
更新过程中无需卸载现有的已补丁游戏。
:::
</details>

<details>
<summary class="collapsible-header-sub">免卸载更新 + 商店更新（需要 root）</summary>

UmaPatcher 提供了一个 root 安装选项，它不需要您卸载游戏或处理 APK，让您可以从任何应用商店正常更新。

在已安装游戏的情况下，点击补丁器主屏幕顶部的卡片，选择您想补丁的应用（如果需要）。然后选择“直接安装”作为安装方式，并点击“补丁”。此方式不需要任何输入文件。

每当游戏更新时，您都需要再次使用 UmaPatcher 来补丁游戏。
</details>

<details>
<summary class="collapsible-header-sub">通过 Zygisk 安装（需要 root）</summary>

使用 Zygisk 安装也可以允许您不卸载游戏或处理 APK 就能安装并且可以从应用商店正常更新，但是需要您的设备拥有 Magisk 或 KernelSU 的 root 环境，并且您必须每次在 Hachimi 更新时重启您的设备。

从 [Releases 页面](https://github.com/kairusds/Hachimi-Edge/releases)下载最新的 Zygisk zip 模块压缩包，并通过 Magisk 或 KernelSU（需搭配 Zygisk Next）进行安装。

安装后重启设备即可享受 Hachimi。
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
如果在其他情况下没有看到此对话框，则表示 Hachimi 未正确安装。请仔细阅读安装指南并重试，或查阅 [故障排除](troubleshooting)。
:::

点击“下一步”并选择您偏好的翻译源，然后点击“完成”以保存您的配置并开始检查更新。

Hachimi 现在会提示您下载新的翻译更新，点击“是”开始下载翻译文件。
::: warning
“大陆加速镜像”只对部分地区有加速效果，如果它真的下得很慢……那还是使用非大陆加速镜像吧。
:::

您可以稍后通过 Hachimi 菜单返回此对话框来更改您的翻译源。
