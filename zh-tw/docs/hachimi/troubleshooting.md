# 疑難排解  

- I/O error: Permission denied (os error 13)

這個錯誤可能是因為 Android 10 引入的「範圍儲存機制（scoped storage）」所導致，會讓 Hachimi 無法建立自己的資料資料夾。  
解決方式是：打開你的檔案管理器，前往 `Android/media`，手動建立一個名為 `jp.co.cygames.umamusume` 的資料夾。重新啟動遊戲後問題應該就會解決。

- 全螢幕模式下：點擊位置不對／遊戲解析度被拉伸

請確認你已正確設定 `full_screen_mode` 與 `resolution_scaling` 這兩個選項。  
如果你的螢幕解析度高於 1080p，請將 `resolution_scaling` 設定為其他可用選項。  
若你的螢幕不是 16:9 的長寬比，請使用 **Exclusive Full Screen** 模式。
