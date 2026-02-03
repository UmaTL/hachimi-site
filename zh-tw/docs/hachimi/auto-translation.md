# 自動翻譯（Auto translation）

Hachimi 能夠透過 Sugoi Offline Translator 或任何相容的翻譯伺服器（例如 [py3translationServer](https://github.com/gdiaz384/py3translationServer)）來自動翻譯遊戲的部分內容。

### 意味著什麼？

- 對於尚未翻譯的內容，系統會提供機器翻譯。
- 一旦翻譯資料庫中有對應的人工翻譯，機器翻譯就會被自動取代。

### 注意事項

- 翻譯過程是同步的，也就是說遊戲會在等待翻譯時短暫卡住。隨著越來越多內容被翻譯，這種情況會減少，因為 Hachimi 能夠載入已翻譯的資料。

## 如何使用

開啟設定編輯器（Config Editor），並啟用其中一項自動翻譯功能（自動翻譯劇情或 UI）。

::: warning
**一般不建議啟用「自動翻譯 UI」，特別是搭配沒有快取功能的翻譯器使用時。**
:::

你還需要讓一個翻譯程式與遊戲一同執行。

### 使用 Sugoi Offline Translator

啟動 Sugoi Toolkit 中的「Offline Translator」批次檔（.bat）。請保持翻譯程式／命令提示字元視窗開啟，這樣 Hachimi 才能與翻譯器通訊（不過這些視窗不會顯示任何翻譯結果）。

**不建議在此翻譯器下啟用「自動翻譯 UI」功能。**

### 使用 py3translationServer

假設你已經正確設定好模型，不需要進行額外設定。只要啟動伺服器即可開始使用。

## 自訂 URL

如果你的翻譯伺服器使用不同的通訊埠或是運行在其他裝置上，你可能需要讓 Hachimi 連接到不同的地址。

你可以在設定檔中手動設定 `sugoi_url` 選項，例如：

```json
"sugoi_url": "http://127.0.0.1:14366"
```

預設情況下，這個值可能會缺少或被設為 `null`，這是正常的。若沒手動指定，Hachimi 仍會自動連接到 `http://127.0.0.1:14366`。
