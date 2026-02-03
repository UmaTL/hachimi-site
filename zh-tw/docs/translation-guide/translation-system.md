# 翻譯系統  

在開始製作翻譯之前，先來了解一下 Hachimi 是如何處理翻譯的。你不需要完全理解這裡的每一個細節，不過大致了解運作方式會幫助你在翻譯時不會感到混亂。

::: info  
如果你也想了解翻譯字典的格式／結構，建議你在閱讀這篇文章的同時打開 `localized_data` 資料夾參考內容。  
如果你已經安裝了 Hachimi，可以從 `[遊戲安裝目錄]/hachimi/localized_data` 找到；或者你也可以瀏覽 GitHub 上的 [tl-en](https://github.com/Hachimi-Hachimi/tl-en) 倉庫。

另外，本文提到的檔案路徑是以官方翻譯倉庫為準；Hachimi 的翻譯系統高度可自訂，實際上可以被設置在任意位置。
:::

## Localize dict / Hashed dict  

在 `localized_data` 根目錄下會看到兩個檔案：`localize_dict.json` 和 `hashed_dict.json`。這兩個系統功能類似，都是用來翻譯 UI 的。

Localize dict 是 Hachimi 引入的新版 UI 翻譯系統，也是目前推薦使用的方式。這套系統會直接修改遊戲內建的本地化系統，因此翻譯可以精準地套用到對應的位置與語境中。每筆翻譯條目會對應到一組遊戲內部的 ID，這個 ID 通常也會暗示該字串出現的上下文（雖然有時會有同一 ID 被重複用在不同情境的情況，這只能怪 Cygames 開發團隊了）。

Hashed dict 則是從舊有的翻譯專案繼承而來的舊系統，基本上就是一個查表式的詞彙替換工具；任何出現在 UI 上，且與表內 hash 值相符的字串，都會被替換成表內指定的翻譯。這套系統缺點很多，例如容易「入侵性太強」、效率差，而且常會造成錯誤翻譯（像是在劇情對話中出現錯誤的 UI 翻譯）。儘管如此，當目標字串在 localize dict 或其他可用方式中找不到時，它還是有其用武之地。  
*ZokuZoku 不支援 hashed dict。*

如果你要貢獻翻譯給官方翻譯倉庫，請參考 [Contributing](#) 文件，內有詳細規則說明哪些情況可以使用。

## MDB 字典  

MDB 指的是 `master.mdb`，這是遊戲用來儲存各類資料的資料庫檔案。Hachimi 只關心其中四個包含文字內容的資料表：`text_data`、`character_system_text`、`race_jikkyo_comment` 和 `race_jikkyo_message`。每個表都有對應的翻譯字典，放在 `localized_data` 根目錄下。

- `text_data`：包含所有遊戲實體的文字資料，例如角色名稱與簡介、支援卡名稱與說明、劇情名稱、轉蛋說明、任務名稱等等。
- `character_system_text`：包含角色在各種遊戲介面（例如主畫面）上所說的台詞。
- `race_jikkyo_comment` 與 `race_jikkyo_message`：比賽旁白與實況用語。

## 素材字典  

共有五種素材字典類型：

- 劇情字典（用於主線劇情、訓練事件、主畫面互動）：`assets/story/data/??/????/storytimeline_*.json` 和 `assets/home/data/?????/??/hometimeline_*.json`
- 比賽劇情字典（主線劇情中賽事的過場動畫）：`assets/race/storyrace/text/storyrace_*.json`
- 歌詞字典：`assets/lyrics/m????_lyrics.json`
- `atlas` 資訊字典：`assets/atlas/*/*.json`
- `uianimation` 字典：`assets/uianimation/*`

除了歌詞字典以外，這些字典都允許指定各平台的資源包（bundle）hash。這個 hash 會用來判斷資源是否已更新，若不一致就會跳過載入該筆翻譯，避免翻譯內容與實際資源不符。

## 紋理替換  

紋理會依據原素材的類型分門別類進行替換。大多數情況會使用 `.png` 檔案來取代原始紋理，分類如下：

- `atlas`：UI 精靈圖集的紋理。相關 metadata 存於同名 `.json` 字典。路徑：`assets/atlas/*/*.png`
- `an_texture_sets`：動畫 UI 的圖集紋理，包含在 `uianimation` 資源包中。可用 `uianimation` 素材字典提供 metadata。路徑：`assets/an_texture_sets/as_uMeshParam_fl_*/tx_uTex_fl_*.png`
- `textures`：一般用途紋理，供 UI 或 3D 模型使用。此類紋理的替換檔案格式會依照原始檔案決定，UI 多為 `.png`，3D 模型則常為 `.tga`。路徑：`assets/textures/*`

所有紋理都可以用 `.diff.png` 的差分圖來替換。這是一種特殊格式，基於 PNG，只包含與原始圖像的差異，這樣可避免版權問題。

處理這些紋理所需的工具（包含 PNG 差分工具），可在 [Hachimi-Hachimi/tools](https://github.com/Hachimi-Hachimi/tools) 倉庫找到。

## 動畫影片（影片 / FMV 過場動畫）  

這些影片是 USM 格式的影片檔案。替換方式很簡單，只需要讓遊戲載入同名的替代檔案即可。

路徑：`assets/movies/*`

## 翻譯載入流程  

設定檔、localize dict、hashed dict 與 MDB 字典會在遊戲啟動時立即載入；當你選擇重新載入翻譯資料時，也只會重新載入這些內容。  
其他與遊戲素材相關的內容，則會在遊戲每次載入對應資源時（重新）載入。

素材字典會在套用前檢查資源包的 hash。若 hash 不一致，就會忽略該筆翻譯；若字典中未指定 hash，則會跳過這個檢查。

紋理替換則有一套特殊的載入流程。當資源被載入時，系統會先尋找對應的 `.diff.png` 差分圖；找不到時再改找 `.png` 檔案。如果找到差分圖，它會比對該 `.png` 檔案的最後修改時間：  

- 如果 `.png` 的修改時間比差分圖還晚，會直接使用 `.png`；
- 如果檔案不存在或時間較舊，就會用差分圖來套用至原始圖像，並儲存為 `.png` 供之後使用。
