# 配置页面

此页面列出了所有配置选项并描述了它们的用途。

配置文件可以在下列位置找到：

- Windows：`[游戏安装文件夹]\hachimi\config.json`
- Android：`/sdcard/Android/media/jp.co.cygames.umamusume/hachimi/config.json`

::: warning
使用自带的文本编辑器修改此文件可能会导致文件损坏。请务必使用专业的文本编辑器，例如 Android 端的 MT 管理器，或 Windows 端的 VSCode([网页版](http://vscode.dev/))。
:::

**注意：** 其中一些选项在配置编辑器中不可用，必须手动添加。

- `debug_mode`: 是否启用调试模式。目前，此选项仅启用/禁用调试日志记录。
- `translator_mode`: 专为翻译者设计。将未翻译的 UI 字符串记录到控制台，并启用一些其他对翻译者有用的功能。
- `disable_gui`: 禁用内置 GUI。请注意，此操作也会禁用翻译更新程序。
- `localized_data_dir`: 包含本地化数据的目录。此目录必须包含本地化数据配置文件。
- `target_fps`: 游戏的目标帧率。未设置时，Hachimi 将不会尝试覆盖游戏的帧率。当 `vsync_count` 设置时无效。
- `open_browser_url`: 从 GUI 启动游戏内浏览器时打开的 URL。默认值：`https://www.google.com/`
- `virtual_res_mult`: 虚拟分辨率缩放倍数。如果您的设备支持，1.5（1080p） 或 2（2K） 是比较合适的值；高于此值可能就太夸张了。无需关闭游戏，只需 “软重启” 即可应用。
- `translation_repo_index`: 翻译仓库的索引 URL。由翻译更新程序使用。
- `skip_first_time_setup`: 启动时是否跳过初始化设置。当初始化设置窗口时会自动设置为 `true` 。
- `disable_auto_update_check`: 禁用启动时的自动更新检查。
- `disable_translations`: 禁用翻译功能。
- `ui_scale`: UI 缩放比例。默认值：`1.0`（无缩放）
- `graphics_quality`: 画质设置。可用的值：`Default`, `Toon1280`, `Toon1280x2`, `Toon1280x4`, `ToonFull`, `Max`。
- `story_choice_auto_select_delay`: 在剧情模式时使用自动选项的延迟秒数，默认值：`0.75` 秒。
- `story_tcps_multiplier`: 故事文本速度（每秒显示的字数）倍率。默认值：`1.0`。
- `enable_ipc`: 启用 HTTP IPC（进程间通信）服务器，允许其他程序控制游戏。旨在与翻译工具配合使用。
- `ipc_listen_all`: 接受来自网络上任何设备的 IPC 命令。**如无必要，请勿启用此选项。**
- `force_allow_dynamic_camera`: 强制游戏让您在任何类型的比赛中选择动态镜头（又名 POV 镜头、骑手视角等）。
- `live_theater_allow_same_chara`: 强制游戏允许您在 LIVE 剧场中多次选择同一角色。同时禁用编组自动保存功能。**请勿尝试手动保存编组。**
- `sugoi_url`: 用于自动翻译的 Sugoi Offline Translator或兼容翻译服务器的 URL。如果您使用的是典型的 Sugoi 配置，则无需设置此选项。默认值：`http://127.0.0.1:14366`
- `auto_translate_stories`: 允许通过自动翻译器翻译剧情。
- `auto_translate_localize`: 允许通过自动翻译器翻译 UI 文本。通常不建议这样做，因为大多数翻译器无法正确保留换行符或格式标签。
- `disable_skill_name_translation`: 禁用技能名称的翻译。
- `ui_animation_scale`: UI 动画速度倍率，这会调整游戏内的 UI 动画速度，建议不要调整至`10.0` 以上，可能会导致游戏卡死等问题。默认值：`1.0`。
- `physics_update_mode`: 更改游戏的物理引擎，可用的值：`Default`, `ModeNormal`, `Mofe60FPS`, `SkipFrame`, `SkipFramePostAlways`。
如果您设置了游戏的帧率在 60 及以上时，推荐设置为`Mofe60FPS`，其他情况不推荐修改。
- `disabled_hooks`：手动禁用钩子（Hooks）。**请勿随意改动此选项**，它仅作为排查兼容性问题时的调试工具使用。
- `enable_file_logging`：开启后将在游戏目录下生成日志文件 `hachimi.log`。如果禁用或无法创建该文件，日志将回退至仅调试输出模式。默认值：`false`。
- `lazy_translation_updates`：开启后将跳过重新下载仓库中未变动的翻译文件，即使本地文件已损坏或版本过旧。这能加快更新速度，但可能会残留受损文件。默认值：`false`。
- `shadow_resolution`：控制阴影分辨率质量。较高的数值可以提升阴影细节，但可能会降低游戏性能。
- `skill_info_dialog`：开启扩展技能信息对话框。在游戏内查看技能时，会显示更详细的技能数据信息。
- `hide_ingame_ui_hotkey`: 启用隐藏游戏 UI 界面的快捷键。在安卓设备上启用此项时，轻点三次右上角即可隐藏游戏 UI 界面。

### 仅限 Windows

- `vsync_count`: 垂直同步。设置为 1，即可让游戏帧率匹配显示器的刷新率。更多信息请参阅 [Unity 文档](https://docs.unity3d.com/ScriptReference/QualitySettings-vSyncCount.html)。
- `load_libraries`: 启动时加载的 DLL 列表。可用于加载其他模组。例如：`["applejuicer.dll", "banana.dll"]`
- `menu_open_key`: 打开菜单的按键的虚拟键码。默认值：`39`（右方向键）。查看[此页面](https://cherrytree.at/misc/vk.htm)以获取所有键码的列表。
- `auto_full_screen`: 当游戏方向与屏幕方向一致时，游戏将自动进入全屏模式。目前，Hachimi 不支持其他画面比例，并且始终会将全屏分辨率缩放至 16:9。在使用该选项时请正确设置 `full_screen_mode` 和 `resolution_scaling`的值。
- `full_screen_mode`: 全屏模式。可用的值：`ExclusiveFullScreen`, `FullScreenWindow` （无边框窗口）。如果您的屏幕画面比例不是 16:9，请使用 `ExclusiveFullScreen`，否则游戏画面将无法正确缩放。
- `resolution_scaling`: 分辨率缩放模式，可用的值：`Default`, `ScaleToScreenSize`, `ScaleToWindowSize`。若在分辨率高于 1080p 的屏幕上并打开了 `auto_full_screen` ，请使用 `ScaleToScreenSize`（推荐）或 `ScaleToWindowSize` ，否则游戏画面将无法正确缩放。
- `block_minimize_in_full_screen`: 全屏模式下阻止最小化。仅适用于 `FullScreenWindow`。
- `window_always_on_top`: 使游戏窗口始终位于其他窗口的上方。
- `disable_gui_once`：仅在**下一次启动**时禁用内置 GUI。启动后该项会自动重置为 `false`，并强制执行一次 `disable_gui: true`。这可以让你顺利在 Steam 商店内进行内购。
- `discord_rpc`：在原生不支持该功能的平台（如 DMM）上启用 **Discord Rich Presence** 状态显示。开启后，你的 Discord 个人资料中将显示你当前正在游玩《赛马娘》的状态。
