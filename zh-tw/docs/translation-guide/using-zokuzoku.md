# 使用 ZokuZoku

ZokuZoku 是一個 Visual Studio Code 擴充功能，作為 Hachimi 的主要翻譯工具。它讓您在翻譯時，無需直接編輯 JSON 字典檔案。

## 安裝

### 先決條件

在安裝 ZokuZoku 之前，請確保已安裝以下軟體：

- 作業系統：Windows 10 或以上版本，或 Linux x64。macOS 和 ARM 裝置並未正式支援，但經過特殊設置後可能可行。
- [Visual Studio Code](https://code.visualstudio.com/) v1.90 或以上版本（請注意，這與 Visual Studio 完全不同！）

ZokuZoku 需要以下檔案：

- `master.mdb` 和 `meta`：這些檔案位於遊戲的資料夾中（在 Windows 系統中，通常位於 AppData，Android 則位於 `/data/data`，需要 root 權限）。這兩個檔案必須放在同一資料夾中，其中 `meta` 檔案放在根目錄，`master.mdb` 則放在名為 `master` 的子資料夾中，即 `資料夾/meta` 和 `資料夾/master/master.mdb`。**如果您從 DMM 安裝了 UM:PD 版本，您無需擔心這些檔案，ZokuZoku 可以自動偵測它們！**
- `localize_dump.json`：此檔案包含從遊戲匯出的原始 localize_dict 資料。可以使用 Hachimi 來創建此檔案：
  1. 在設定編輯器中啟用「翻譯者模式」。
  ![Config editor](/assets/translation-guide/using-zokuzoku/1.webp)
  1. 在「翻譯」區段中會出現一個新選項「Dump localize dict」，點擊它來創建檔案。
  ![Translation section in menu](/assets/translation-guide/using-zokuzoku/2.webp)

ZokuZoku 如果是從 DMM 版本的遊戲創建的，它會自動偵測這個檔案，因此請至少在安裝前匯出一次此檔案。如果遊戲客戶端更新後，您希望保持檔案更新，則需要再次匯出。否則如果您不處理 UI 翻譯，可以忽略這部分。

當然，您也需要一個現有的翻譯庫來進行翻譯。您可以從 [Hachimi-Hachimi/tl-en](https://github.com/Hachimi-Hachimi/tl-en) 下載或克隆英文翻譯庫。

### 安裝

從 [發布頁面](https://github.com/Hachimi-Hachimi/ZokuZoku/releases) 下載最新版本的 `.vsix` 檔案。安裝時，打開 VSCode 的擴充功能面板，點擊右上角的三個點，選擇「從 VSIX 安裝...」，並選擇剛剛下載的檔案。

![Translation section in menu](/assets/translation-guide/using-zokuzoku/3.webp)

## 初始設置

安裝 ZokuZoku 後，您可以通過「檔案」->「開啟資料夾...」來開啟翻譯資料庫。*請注意，您應該選擇包含 localized_data 資料夾的資料夾，而不是直接選擇 localized_data 資料夾！*

當您第一次開啟 TL 資料庫（並且 ZokuZoku 已設置為自動啟動）時，會顯示以下提示：

![Dependencies install prompt](/assets/translation-guide/using-zokuzoku/4.webp)

點擊「確定」開始安裝依賴項，這需要一些時間來下載並安裝（約 200MB）。*在此過程中，會顯示命令提示字元視窗，請勿關閉它！*

如果 DMM 版本已安裝在您的裝置上，並且您已按照上述指示創建了 localize dump 檔案，會顯示以下提示以確認自動偵測的路徑：

![Game data dir prompt](/assets/translation-guide/using-zokuzoku/5.webp)
![Localize dict dump prompt](/assets/translation-guide/using-zokuzoku/6.webp)

如果路徑有誤，您可以選擇「否」。

如果 ZokuZoku 無法偵測到 DMM 版本遊戲的正確路徑，或您希望使用其他版本的素材檔案，您可以在設定中手動設置這些路徑。

::: warning
更改資料路徑後，您需要重新啟動 Visual Studio Code。
:::

![Extension details](/assets/translation-guide/using-zokuzoku/7.webp)
![Extension settings](/assets/translation-guide/using-zokuzoku/8.webp)

完成設置後，您就可以開始進行翻譯了！

## 主面板

安裝擴充功能後，您可能會注意到側邊欄多了一個 ZokuZoku 圖示。這就是 ZokuZoku 面板，是用來瀏覽可翻譯的素材並啟動編輯器的主介面。

![Main panel](/assets/translation-guide/using-zokuzoku/9.webp)

面板中的外圍區塊（所有故事、首頁對話等）稱為「視圖」。在這些視圖內，您可以看到可以翻譯的項目（根據視圖類型，這些項目可能會被分類）。點擊其中一個條目（在分類中）會開啟對應的翻譯字典並進入自訂編輯器。

某些視圖會在條目名稱旁顯示一個勾選框，這表示該素材的字典是否存在。
![Lyrics view with checkboxes](/assets/translation-guide/using-zokuzoku/10.webp)

## 切換翻譯資料夾

在開始編輯之前，您可能想先將 Hachimi 翻譯資料夾（也就是本地化資料夾）切換為您本地的翻譯副本。這樣可以讓 Hachimi 從您的本地副本載入翻譯，而不是從上游資料庫載入，讓您可以在遊戲中預覽翻譯。

要這麼做，請在面板中開啟「Hachimi 控制」視圖。點擊「設定翻譯資料夾」按鈕來設置它。當您完成翻譯工作後，記得點擊「恢復翻譯資料夾」按鈕來恢復。

![Hachimi Controls view](/assets/translation-guide/using-zokuzoku/26.webp)

## 編輯器

### 煩人的小怪癖

在介紹編輯器的主介面之前，先來簡單說明一下其中一個相當困擾的怪癖。嘗試開啟任何尚未翻譯的素材（旁邊勾選框未勾選的素材）。當編輯器開啟時，會發生一些奇怪的事情。

![through the magic of buying two of them](/assets/translation-guide/using-zokuzoku/11.webp)

為什麼會有<a href="https://www.youtube.com/watch?v=btHpHjabRcc" target="_blank" style="color: unset; text-decoration: none; font-weight: unset;">兩個編輯器</a>同時開啟？其中一個是自訂編輯器，另一個是普通的文字編輯器？這是 Visual Studio Code 編輯器運作方式的內在怪癖；當初始化一個新檔案的內容時，會導致文字編輯器開啟並「保持當前檔案的上下文」。

如果您關閉文字編輯器，自訂編輯器仍會保持開啟，但無法進行任何操作，因為檔案的上下文已丟失（VSCode 認為您已經關閉了它）。如果您關閉自訂編輯器，兩者都會被關閉。

幸運的是，只要習慣了特定的工作流程，這個怪癖通常不會造成太多困擾。

- 當您開啟了一個素材，但不打算翻譯時，**請關閉自訂編輯器的分頁**，這樣也會同時關閉另一個分頁。

- 如果您打算翻譯它，**先儲存素材**，自訂編輯器會關閉（這是另一個怪癖！），但現在您可以關閉文字編輯器，然後從面板重新開啟該檔案。一切將按照預期運作。

### 常見介面

大多數編輯器都共享相同的介面，並具有相似的操作行為。

![MDB editor](/assets/translation-guide/using-zokuzoku/12.webp)

基本操作應該是簡單明瞭的；選擇一個條目進行翻譯，然後在「已翻譯」面板中輸入翻譯內容。條目的顏色代表其翻譯狀態。如果條目顯示為灰色，則表示該條目尚未翻譯。

每個條目可以有多個「文字欄位」，根據所使用的編輯器，這些欄位的含義可能有所不同。例如，在故事編輯器中，每個條目都有用來顯示說話者、對話內容、選項等的文字欄位。

對於大多數編輯器來說，若所有文字欄位都保持空白，則表示該條目不存在。然而，有時候您可能需要讓內容保持空白，而不是刪除條目。為此，您可以按 Alt + Enter 明確設置為空字串。

編輯器左側的面板稱為「檔案總管」。在這裡，您可以通過點擊條目來瀏覽字典中的條目。如果它是當前焦點（即最後一次點擊的面板），您可以使用鍵盤上的箭頭鍵進行瀏覽。您也可以在未先聚焦檔案總管的情況下，按 Alt + 箭頭鍵來進行導航。

大多數編輯器遵循相同的導航慣例：按上鍵跳至上一個條目，按下鍵跳至下一個條目；然而，這個行為可能會根據編輯器的實作方式有所不同。您無法使用箭頭鍵在分類之間進行導航。

您可以按住 Ctrl 鍵並點擊條目或在按住左鍵的情況下拖動游標來選擇多個條目。這不會影響翻譯編輯的行為；您在「已翻譯」面板中輸入的內容只會應用於最後選中的條目。此功能主要是與「複製」功能一起使用（下文會解釋）。

除了導航之外，檔案總管還提供了一些額外功能：

![Explorer panel features](/assets/translation-guide/using-zokuzoku/13.webp)

- 搜尋欄可用於搜尋條目。按下箭頭圖示可以顯示搜尋選項。「內容搜尋」選項可以用來搜尋條目內部的文字，而不僅僅是名稱。

當使用搜尋功能時，會顯示一個虛擬視圖來顯示匹配的條目。在這種情況下，箭頭鍵導航將無效。清空搜尋欄即可回到正常視圖。

在面板標題上有三個按鈕，從左到右：

- **複製按鈕**：允許您選擇條目進行複製。當您選擇一個或多個條目並點擊它時，這些條目會顯示虛線邊框，表示它們已經準備好進行複製。再次點擊（未選擇條目時）會清除複製狀態。
- **貼上 / 填充按鈕**：會將複製的內容**貼上**或**填充**到目前選中的條目。
- **清除按鈕**：清除目前選中條目的翻譯內容。

接下來我們來聊聊「貼上 / 填充」功能如何運作。舉例來說，如果我們選擇了單一條目，如下所示：
![An entry with its translated content](/assets/translation-guide/using-zokuzoku/14.webp)

我們將這個條目準備好進行複製，然後選擇另一個條目並貼上。它會詢問您要貼上多少個文字欄位。

![Paste input prompt](/assets/translation-guide/using-zokuzoku/15.webp)

我們可以不輸入任何數字，直接按 Enter。內容會如預期般被複製。

![Another entry, now with the pasted content](/assets/translation-guide/using-zokuzoku/16.webp)

那麼，如果我們選擇了多個條目進行複製，並將它們貼到多個條目上會發生什麼情況呢？

![Selected entries and copying entries](/assets/translation-guide/using-zokuzoku/17.webp)

所有選中的條目會如預期般被填充。編輯器會依次遍歷選中的條目，將複製的內容粘貼到這些條目中，當達到最後一個複製條目時，它會返回到第一個複製條目，並重複這個過程，直到填滿所有選中的條目。

![Third selected entry](/assets/translation-guide/using-zokuzoku/18.webp)

![Fourth selected entry](/assets/translation-guide/using-zokuzoku/19.webp)

::: info
這種填充行為不適用於文字欄位。如果目標條目的文字欄位數量多於來源條目，它只會將來源條目的 n 個文字欄位貼上，並保留多餘的欄位不變。
:::

### 故事編輯器

故事編輯器是常見編輯器的擴展版本，具有更多專門用於故事翻譯的功能。它用於主要故事/角色故事/事件故事、主頁對話和訓練對話。

![Story editor](/assets/translation-guide/using-zokuzoku/20.webp)

#### 導航

箭頭鍵導航在這裡扮演著重要角色。按下下鍵會將您帶到該故事中的下一個區塊，這不一定是列表中的下一個條目。

例如，請看這個故事，它將男性和女性訓練師的內容分為不同的區塊。

![Male and female trainer blocks](/assets/translation-guide/using-zokuzoku/21.webp)

目前我們選擇的是第 2 區塊。通常情況下，按下下鍵會將您帶到第 3 區塊；然而，由於故事的邏輯順序是從男性或女性區塊跳到下一個區塊，所以會跳到第 4 區塊。

上箭頭在這裡正常運作，但請記住，它不會遵循故事的原始順序。當您想回頭選擇被跳過的區塊時，它會非常有用。

強烈建議您使用箭頭鍵按正確的順序瀏覽故事字典。您應該習慣 Alt + 箭頭鍵的組合，這樣會更加方便。

#### 預覽面板

編輯器中最明顯的新增功能是右側的兩個額外面板和它們父面板上的額外按鈕：

![Preview panels](/assets/translation-guide/using-zokuzoku/22.webp)

這些是預覽面板，旨在儘可能地模擬遊戲中的故事外觀。一般來說，這些預覽中的文字尺寸非常準確，可以安全假設它們與遊戲中的顯示相符。

不過，如果您是在 Windows 上使用它，可能會發現字體的外觀有點...奇怪。儘管如此，這不會影響準確性，主要是字體的粗細略顯異常。

::: info
如果您還沒有注意到，這些編輯器是基於網頁的。遊戲中的字體並未針對網頁進行優化，因此會有一些渲染問題。
:::

當前故事類型的預覽面板會預設開啟（不過故事類型是預設的，可能並不完全準確）。您可以通過點擊父面板標題欄上的對應按鈕來切換到不同的預覽面板。再次點擊該按鈕將關閉預覽面板。

::: info
預覽面板中的文字元素是「虛擬」文字欄位。對於已翻譯的文字欄位來說，這意味著當文字欄位的內容更改時，預覽面板不會立即更新，而是在翻譯內容已經儲存到檔案後才會更新。更多詳情，請參見 [內部運作](#內部運作) 部分。
:::

#### 原始面板操作

除了預覽按鈕外，原始面板還有 2 個額外按鈕，從左到右：

- **跳至區塊按鈕**：這個按鈕會向 Hachimi 發送 IPC 命令，跳至遊戲中的特定故事區塊。要使這個功能正常運作，您需要在 Hachimi 配置中啟用「啟用 IPC」，並且必須在遊戲中查看您目前正在翻譯的故事。這對於檢查遊戲內顯示是否正確非常有用。
- **播放語音剪輯按鈕**：這會播放當前故事區塊的語音剪輯。這只適用於有語音的故事。

#### 文字欄位

除了「標題」條目外，故事中的所有條目至少有 2 個文字欄位：說話者名稱和對話內容。根據條目所代表的故事區塊，可能會有額外的文字欄位，例如對話選項和有顏色的文字。

選項文字欄位會分配一個「連結」。嘗試在原始檢視或預覽面板中將滑鼠移到它們上面；您會發現文字變為底線，表示它是指向其他條目的文字欄位。您可以按住 Ctrl 並左鍵點擊來跟隨這個連結，這會跳轉到這個選項所指向的故事區塊。

選項可以為男性和女性訓練師提供不同版本。我們來看看一個極端的例子：

![Mejiro Dober's story, part 4](/assets/translation-guide/using-zokuzoku/23.webp)

這個故事區塊不僅對選項有男性和女性版本，還有指向下一個故事區塊（3 或 4）的性別變體。如果我們查看這個區塊的女性版本，會發現它也包含了兩個選項變體，儘管這些選項只會顯示給女性訓練師。

由於這個奇怪的系統，男性區塊的兩個選項變體會鏈接到下一個男性區塊（第 3 區塊），反之，女性區塊的選項會鏈接到第 4 區塊。

這些選項文字欄位有工具提示，會指示它們是為哪一性別設計的，並且在預覽面板中會有顏色區分（正常選項顯示為綠色，男性選項為藍色，女性選項為粉紅色，顏色與遊戲中的顯示順序無關）。

![Choice text slot tooltip and color coded preview](/assets/translation-guide/using-zokuzoku/24.webp)

最後一種文字欄位是顏色文字欄位。它們用來標記應該上色的內容部分。讓我們看一個例子：

![Story block with one color text slot](/assets/translation-guide/using-zokuzoku/25.webp)

它們會放在所有其他文字欄位之後。內容中匹配顏色文字區塊的第一個子字串會被上色。預覽面板會顯示這是如何運作的，但請注意，顏色僅供參考，可能與遊戲中實際使用的顏色不符。請確保按照原始檢視中出現的順序來匹配顏色。

## 內部運作

*TODO*

## 高級使用

### 在 ZokuZoku 中重新開啟檔案

有時候，您可能需要直接開啟一個字典檔案，而不是通過 ZokuZoku 面板來開啟。這會啟動內建的文字編輯器，您需要重新在 ZokuZoku 的自訂編輯器中打開它。

開啟 VSCode 命令欄（Ctrl+Shift+P），並執行「以...重新開啟編輯器」命令。選擇適合當前字典檔案的 ZokuZoku 編輯器。

### 實時文字編輯器分割視圖

您可以同時開啟文字編輯器和自訂編輯器，實時查看您對檔案的更改。這也是一個展示其內部運作方式的好方法。

按 Ctrl+\ 開啟分割視圖。在第二個視圖上聚焦時，開啟 VSCode 命令欄（Ctrl+Shift+P），並執行「以...重新開啟編輯器」命令。選擇內建的文字編輯器。

現在，您可以使用任一編輯器來更改檔案，這些更改將反映在兩個編輯器中。請注意，如果當前檔案內容有誤，則自訂編輯器將無法執行任何操作。
