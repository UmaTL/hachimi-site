# 設定（Config）

這個頁面列出了所有設定選項，並說明每個選項的用途。

設定檔會存在以下其中一個位置：

- Windows: `[遊戲安裝資料夾]\hachimi\config.json`
- Android: `/sdcard/Android/media/jp.co.cygames.umamusume/hachimi/config.json`

**注意：** 有些選項無法透過圖形化設定介面（Config Editor）調整，必須手動新增。

- `debug_mode`：是否啟用除錯模式。目前僅控制是否啟用除錯用日誌紀錄。
- `translator_mode`：給翻譯人員用的模式。會將尚未翻譯的 UI 字串輸出到主控台，並啟用其他翻譯相關功能。
- `disable_gui`：停用內建的 GUI。請注意這樣也會一併停用翻譯更新器。
- `localized_data_dir`：指定本地化資料的資料夾。該資料夾中必須包含一份本地化設定檔。
- `target_fps`：設定遊戲的目標幀率（FPS）。若未設定，Hachimi 不會試圖改變原本的幀率設定。當 `vsync_count` 被設定時，這個選項將無效。
- `open_browser_url`：從 GUI 開啟內建瀏覽器時的預設網址。預設為 `https://www.google.com/`
- `virtual_res_mult`：虛擬解析度倍率。如果你的裝置效能夠強，建議設為 1.5 或 2；再高的數值可能就太超過了。可透過「軟重啟（Soft restart）」在不關閉遊戲的情況下套用。
- `translation_repo_index`：翻譯資料庫的索引網址。翻譯更新器會使用這個網址。
- `skip_first_time_setup`：是否跳過初次啟動時的設定畫面。當你關閉第一次設定對話框後，這個值會自動設為 `true`。
- `disable_auto_update_check`：停用啟動時的自動更新檢查。
- `disable_translations`：停用翻譯功能。
- `ui_scale`：UI 縮放比例。預設值為 `1.0`（不縮放）。
- `graphics_quality`：畫質設定。可用值有：`Default`, `Toon1280`, `Toon1280x2`, `Toon1280x4`, `ToonFull`, `Max`。
- `story_choice_auto_select_delay`：故事模式中自動選擇選項的延遲時間（秒）。預設為 `0.75` 秒。
- `story_tcps_multiplier`：故事文字顯示速度（每秒字數）倍率。預設為 `1.0`。
- `enable_ipc`：啟用 HTTP IPC（跨程序通訊）伺服器，讓其他程式能控制遊戲。這是為翻譯工具設計的功能。
- `ipc_listen_all`：允許來自區網中其他裝置的 IPC 指令。**如果你不需要這功能，請不要啟用這個選項。**
- `force_allow_dynamic_camera`：強制開放所有賽事都能選擇動態攝影機（又稱 POV 攝影機、騎手視角等）。
- `live_theater_allow_same_chara`：強制允許在演唱會編組中重複選擇同一角色。此選項也會停用自動儲存編組功能。**請不要嘗試手動儲存重複角色的編組！**
- `sugoi_url`：Sugoi Offline Translator 或相容翻譯伺服器的網址，用於自動翻譯。若使用的是標準 Sugoi 環境，通常不需要修改此項。預設為 `http://127.0.0.1:14366`
- `auto_translate_stories`：允許透過自動翻譯器翻譯故事內容。
- `auto_translate_localize`：允許透過自動翻譯器翻譯 UI 文字。**一般不建議開啟此選項，因為多數自動翻譯器無法正確保留換行與格式標籤。**

### 僅適用於 Windows

- `vsync_count`：設定 VSync（垂直同步）次數。設為 1 可讓遊戲幀率與螢幕刷新率一致。詳情請參考 [Unity 官方文件](https://docs.unity3d.com/ScriptReference/QualitySettings-vSyncCount.html)。
- `load_libraries`：啟動時要載入的模組（library）清單。可用來載入其他模組。範例：`["applejuicer.dll", "banana.dll"]`
- `menu_open_key`：開啟選單的鍵盤 VK（虛擬鍵碼）。預設為 `39`（右箭頭鍵）。完整鍵碼列表請見 [此頁面](https://cherrytree.at/misc/vk.htm)。
- `auto_full_screen`：當遊戲的畫面方向與螢幕方向相符時，自動切換為全螢幕模式。目前 Hachimi 僅支援 16:9 的比例，啟用此功能時請正確設定 `full_screen_mode` 與 `resolution_scaling`。
- `full_screen_mode`：指定的全螢幕模式。可用值有：`ExclusiveFullScreen`、`FullScreenWindow`（無邊框全螢幕）。若你的螢幕比例不是 16:9，請使用 `ExclusiveFullScreen`，否則畫面比例會顯示不正確。
- `resolution_scaling`：解析度縮放模式。可選值有：`Default`、`ScaleToScreenSize`、`ScaleToWindowSize`。若你的螢幕解析度超過 1080p，建議使用 `ScaleToScreenSize`（推薦）或 `ScaleToWindowSize`。
- `block_minimize_in_full_screen`：防止全螢幕時被最小化。僅適用於 `FullScreenWindow` 模式。
- `window_always_on_top`：讓遊戲視窗永遠顯示在其他視窗之上。
