# 故障排除
[[toc]]

## 常规

### 尝试启动游戏时出现“通信错误”消息

您可能需要 VPN 才能连接到游戏。请参阅[此页面](https://gametora.com/umamusume/playing-on-dmm)以获取更多信息。如果您同时安装了国际 Steam 版和日语 DMM 版游戏，则需要在游戏数据下载目录中启用大小写区分。`C:\Users\您的用户名\AppData\LocalLow\Cygames`:
1. 将 C:\Users\您的用户名\AppData\LocalLow\Cygames 路径下的所有内容暂时移出，此文件夹必须为空！如果您同时安装了两个版本的游戏，请暂时将其中一个版本的文件夹重命名，否则 Windows 会在您移动文件时尝试覆盖它们（请尝试在文件夹末尾添加 1 或类似的数字等）。
2. 打开 Powershell 窗口并输入以下内容：`fsutil.exe file setCaseSensitiveInfo {path to your \LocalLow\Cygames} enable`。
3. 将文件移回 Cygames 文件夹，开启大小写区分后，国际版将使用 "Umamusume" 文件夹，日语版将使用 "umamusume" 文件夹。

### 以 60+ FPS 运行时，物理效果（头发、衣服等）会变得僵硬

将“物理引擎更新模式”设置更改为 **“Mode60FPS”** 。此设置可以在配置编辑器的“游戏玩法”选项卡中进行调整。

### UI/材质损坏
更新您的翻译。您的翻译源可能已过期，请询问其维护者。
如果临近游戏更新，他们很可能正在处理。在打扰他们之前，请先确认他们是否已经知晓此问题。

如果这没有帮助，您可能仍在使用旧的翻译源。打开菜单并再次运行`初始化设置`。

### 有些内容没有被翻译
翻译是由社区中的志愿者利用业余时间提供的。许多内容尚未完成。请与您选择的翻译源维护者联系，并尝试支持其翻译者。

### 歌词翻译时有时无
此 bug 已修复。请将 Hachimi 更新至 v0.15.1 或更高版本。

### 游戏在启动画面后无法加载
如果游戏在启动画面**卡住**，请参阅[错误 501](#错误-501)。
如果您能看到启动画面但之后游戏崩溃，请参阅[安装 Hachimi 后游戏无法启动](#安装-Hachimi-后游戏无法启动)。

### 游戏内背景缩小 / 出现白边
打开 Hachimi 菜单 -> 配置编辑器 并将 `分辨率缩放倍数` 重置为 1。
如果无效，请尝试调整它直到看起来正常为止。

## Windows

### 启动时出现运行时错误

这意味着您正在使用旧版本的 Hachimi，该版本在 2025/09/24 的游戏更新后已失效。请[安装  Hachimi v0.14.2+](getting-started.md)。

如果您已经在使用版本，请尝试重新安装最新版本。

### 安装 Hachimi 后游戏无法启动

::: warning
一些内核级反作弊程序（例如英雄联盟和无畏契约中使用的 Vanguard）会阻止 Hachimi 正常启动。请确保它们没有在您的计算机上运行，然后重试。
:::


- 确保您为您的游戏版本（日服或其他服）安装了正确版本的 Hachimi。您可以在[入门](getting-started.md)页面找到正确的版本。
- 在安装程序启用 DotLocal 重定向后重启您的计算机。
  **在关机菜单中点击“重启”，不要只是关机再开机。**
- 如果您使用 DMM，请尝试重启 DMM 启动器或强制其始终以管理员身份运行。
- 如果您使用 Steam，游戏更新可能会替换一些修改过的文件。请使用安装程序重新安装 Hachimi。
- 导航到游戏的安装文件夹，右键单击游戏的可执行文件（exe），打开**属性**，并按顺序尝试以下**一个或多个**操作：
  - 在“兼容性”选项卡下启用`禁用全屏优化`。
  - 打开`更改高 DPI 设置`，启用`替代高 DPI 缩放行为`，并将其设置为`应用程序`。
- 打开`Windows 设置 → 显示 → 图形`，将游戏的可执行文件添加到列表中，并在其选项中勾选`不要使用针对窗口化游戏的优化`。


<!-- 
    待办：添加更多关于奇怪边缘案例的细节，比如CarrotJuicer的旧版本不受支持的情况？
-->

### 安装程序错误：“无法继续执行代码 / VCRUNTIME”
安装与您的设备架构匹配的最新 [VC++ 可再发行程序包](https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist?view=msvc-170)。如果您不确定，99% 的可能性是 `x64`。

### Steam: 无法打开 Steam 覆盖层

Steam 覆盖层会干扰 Hachimi 的覆盖层。要启用 Steam 覆盖层，请打开配置编辑器，并在“常规”选项卡中勾选“禁用覆盖层（GUI）”复选框并点击“保存”，然后重新启动游戏。如果您想重新启用 Hachimi 的覆盖层，请在文本编辑器中打开 Hachimi 的配置文件 (config.json)，将值`disable_gui`从 `true`改为`false`，然后重新启动游戏。此配置文件位于游戏安装文件夹中的 hachimi 文件夹中。

### Steam 国际服：文本和图像损坏

如果您不小心在国际服上安装了翻译，您会看到损坏的文本和图像。
要修复它，请按`右箭头`键打开 Hachimi GUI，进入`配置编辑器` 并启用 `禁用翻译`，然后重启游戏。

如果您真的很需要翻译，请打开游戏根目录 `hachimi\localized_data\assets\an_texture_sets`，删除所有文件。

在执行此操作后**请不要**再更新翻译，这对你没有任何帮助，但是会帮你把这些文件重新下回来，然后你又要删它们一遍了。

### Steam 国际服和日服：GUI/覆盖层问题

Steam 覆盖层有时会与 Hachimi 的 GUI 冲突。请禁用其中一个（推荐禁用 Steam 覆盖层）。

要禁用 Hachimi 的 GUI：打开 Hachimi 菜单，在“通用”选项卡中勾选“禁用 GUI”复选框，按“保存”，然后重启游戏。
当您想重新启用 Hachimi 的 GUI 时，请在文本编辑器中打开 Hachimi 的配置文件（config.json），将 `disable_gui` 的值从 `true` 改回 `false`，然后重启游戏。此配置文件位于游戏安装文件夹内的 `hachimi` 文件夹中。

### DMM: 调整窗口大小后，输入位置与实际点击位置不一致

这是日语 DMM 版游戏中 Hachimi 的已知问题（即将修复™）。目前，请不要调整窗口大小。

### DMM: 安装 Hachimi 后无法游玩某些游戏

适用于日语 DMM 版游戏的 Hachimi 版本使用 DotLocal DLL redirection 来加载，一些反作弊软件（例如《无畏契约》和《英雄联盟》中使用的 Vanguard）并不喜欢看到此功能开启。当您想玩使用 Vanguard 或其他类似的反作弊软件的游戏时，您需要禁用 DLL 重定向。您可以使用 [DotLocalToggle](https://github.com/LeadRDRK/DotLocalToggle/releases/) 这个小程序来快速开启或关闭 DotLocal DLL redirection，开启或关闭后，您必须重启您的计算机才能进行应用。

### DMM: 全屏模式下：输入位置不正确/游戏分辨率拉伸

请确保您已正确设置 `full_screen_mode` 和 `resolution_scaling` 这两个选项。如果您的屏幕分辨率高于 1080p，请将 `resolution_scaling` 设置为其他可用选项。如果您的画面比例不是 16:9，请使用**独占全屏**模式。

### 声音问题
这是游戏本身的 bug，不是 Hachimi 的问题。一些用户可以通过开启 Windows Sonic 来修复此问题，且没有副作用。

### 游戏卡顿
确保您没有在 Hachimi 设置中开启自动翻译。该功能仅在您正确设置了翻译服务器时才能工作，即便如此也可能导致性能问题。

### 错误 501
两个版本使用相同的数据下载目录名称，但大小写不同。
必须在此目录上启用大小写敏感，才能使它们共存。
::: tip
如果您想/需要手动移动：要直接进入游戏数据目录，请使用 `Win + R` 并在对话框中输入 `%localappdata%low\Cygames`。
国际服使用 "Umamusume"，而日服使用 "umamusume"。
:::
1. 关闭游戏。
2. 打开`开始菜单`，搜索`PowerShell`，选择“以管理员身份运行”。
3. 运行以下命令：`fsutil.exe file setCaseSensitiveInfo $env:USERPROFILE\AppData\LocalLow\Cygames enable`。
    - 如果您收到 `错误：不支持的操作` 或类似信息，请先运行以下命令：`Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux`，然后重试。
    - 如果您收到 `错误：目录不是空的`，请暂时将 `Cygames` 文件夹中的所有内容移出，然后重试：
    ```powershell
    New-Item -ItemType Directory "$env:USERPROFILE\AppData\LocalLow\CygamesTEMP"
    Move-Item "$env:USERPROFILE\AppData\LocalLow\Cygames\*" "$env:USERPROFILE\AppData\LocalLow\CygamesTEMP"
    ```
4. 如果您清空了 Cygames 文件夹，请将所有内容移回：
    ```powershell
    Move-Item "$env:USERPROFILE\AppData\LocalLow\CygamesTEMP\*" "$env:USERPROFILE\AppData\LocalLow\Cygames"
    Remove-Item "$env:USERPROFILE\AppData\LocalLow\CygamesTEMP"

## Android

### 补丁失败

- 确保您同时选择了**基础 APK** 和**分割 APK** 文件，或合并后的 **XAPK** 文件。
  您可以在文件选择器中长按以选择多个文件。
  推荐的 APK 获取地址是 [Qoopy](https://qoopy.leadrdrk.com/) (使用 ID **6172**)。

- 如果您使用的是运行 **MIUI/HyperOS 1.0** 的**小米/红米** 设备，请尝试从开发者选项中禁用 MIUI 优化/系统优化，它有时会干扰安装。
    ::: warning
    禁用**MIUI 优化**将重置**所有应用权限**，并可能导致应用失去已授予的访问权限（存储、通知等）。
    :::

- 尝试清除 **UmaPatcher Edge** 的缓存：
  *长按应用图标 → 应用信息 → 存储 → 缓存（如果适用） → 清除缓存。*
  如果无效，请尝试**重新下载 UmaPatcher Edge** 并再次**导入签名密钥**。

### 出现“应用未安装，因为应用与设备不兼容”的错误

::: warning
这些步骤对于某些三星设备是必需的，并且需要将您的手机连接到 PC。它们也可能对其他 Android 设备有效。
:::

当游戏已被*卸载*但仍残留在**安全文件夹**中时，可能会出现此问题。请按照以下步骤完全删除游戏：

1. 在您设备的开发者选项中**启用 USB 调试**。
   如果您不知道如何操作，请查看此 [bilibili 视频指南](https://www.bilibili.com/video/BV1Ht4y1X75e/)
2. 在您的计算机上**下载并解压** [Android 平台工具 (ADB)](https://developer.android.com/tools/releases/platform-tools#downloads) 的 ZIP 文件。
3. 在解压后的 ADB 文件夹内（`adb.exe` 所在的位置）右键单击空白区域，然后选择 **“在此处打开终端”** （或类似选项）来**打开一个终端**。
   - 在 Windows 10 中按住 **Shift** 并右键单击应该会显示**“在此处打开 PowerShell 窗口”**选项。
4. 通过 USB（USB-C 或任何兼容的数据线）**将您的设备连接**到计算机。
5. 在终端窗口中，键入 `adb.exe` 并按**回车**以确保它被识别。
6. 然后键入 `adb devices` 并按**回车**。
   查看您的设备，在出现提示时**授予 USB 调试权限**，然后再次运行该命令以验证连接。
   它应该在终端中显示类似 `"ABCD1234EFGH" device` 的内容。
   如果没有，请看下文。
7. 最后，键入 `adb uninstall jp.co.cygames.umamusume` 并按**回车**以卸载游戏。

### 无法通过 Google Play 帐户登录

您无法使用 Google Play 帐户登录补丁后的游戏，必须改用数据引承密码。
如果您已经创建了数据引承密码，请在标题屏幕（☰ > 数据引承）登录该帐户。
如果您*没有*数据引承密码，您需要卸载修补版游戏，重新安装未修补的原版游戏，通过您的 Google Play 帐户登录，然后创建数据引承密码。
之后，您可以重复修补过程，然后使用创建的数据引承密码登录。
或者，您也可以登录 Cygames ID 来关联您的帐户数据。

### 出现 この端末でのプレイは許可されていません (无法经由此设备游玩) 错误

#### 您的设备已 root
 确保您的网络连接稳定，并且设备在 Play Integrity 服务器上至少通过了 **DEVICE_INTEGRITY** 检查（您可以使用 [Play Integrity API Checker](https://play.google.com/store/apps/details?id=gr.nikolasspyr.integritycheck) 应用进行验证）。如果通过了，使用 **Magisk 内置的 DenyList** 对游戏隐藏 root（如果无效则启用 *Enforce DenyList*）应该能解决问题。其他工具如 **Shamiko** 也可能有效。

#### 您的设备未 root
 如果此错误消息持续在您的设备上显示，可能表示与 Play Integrity 服务器的连接不稳定，或者您在启动游戏时需要使用 **VPN**。有关更多详细信息，请参阅[通讯错误](#尝试启动游戏时出现通信错误消息)部分。


### I/O error: Permission denied (os error 13)

这可能是由于 Android 10 引入了分区存储，导致 Hachimi 无法创建其数据目录。要解决此问题，请打开文件管理器，前往 Android/media 并创建一个名为 “jp.co.cygames.umamusume” 的文件夹。重新启动游戏即可解决问题。

### I/O error: File exists (os error 17)

重启设备并尝试再次启动游戏。如果错误仍然存在，请在 Discord 服务器中寻求帮助。

### 启动游戏时崩溃

打开文件管理器并导航至`Android/media`并新建一个名为 "jp.co.cygames.umamusume" 的文件夹，在新建的文件夹内再创建一个名为 "hachimi" 的文件夹。最后，下载下面的配置文件，并将其放入 "hachimi" 文件夹中（确保文件的名称为config.json）。

[下载配置文件](https://files.leadrdrk.com/hachimi/android-compat/config.json)

某些设备和模拟器可能需要这样做。

### 点击位置错乱
打开 Hachimi 菜单 -> 配置编辑器，并调整虚拟分辨率乘数以找到最适合的值。

### 点击无响应，或导致游戏崩溃或卡住
:::tip
关闭 GUI 会禁用翻译更新。您需要偶尔重新开关它以进行更新。
:::
1. 确保您的翻译是最新版本。如果可以，让 Hachimi 更新，并在完成前不要触摸任何东西。
2. 打开 Hachimi 菜单 -> 配置编辑器并选择禁用GUI。
    - 要重新启用它，请在文本或 JSON 编辑器中打开 Hachimi 的 `config.json` 文件，将 `disable_gui` 的值从 `true` 改回 `false`，然后重启游戏。此文件位于 `android/media/jp.co.cygames.umamusume/hachimi`（可能因手机品牌而异）。