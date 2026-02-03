# 開始使用

<small>

以其他語言來閱讀（View this page in other languages）:

[English](/docs/hachimi/getting-started.html) | [Tiếng Việt](/vi/docs/hachimi/getting-started.html) | [Deustch](/de/docs/hachimi/getting-started.html) | [简体中文](/zh-cn/docs/hachimi/getting-started.html) | [繁體中文](/zh-tw/docs/hachimi/getting-started.html) | [Bahasa Indonesia](/id/docs/hachimi/getting-started.html)

</small>

## ⚠️ 請勿在其他地方提及此網站或 GitHub 倉庫

我們明白你想幫助其他人用 Hachimi 來獲得更好的遊戲體驗。即便如此，這個項目本質上乃是違反遊戲的服務條款的存在，如果遊戲開發者發現了這個插件，他們很可能不會視而不見。

在你自己管理或私密的聊天服務中分享此插件並不會造成問題，但是請避免在公共地方宣傳這個項目與其相關工具。

這種宣傳行為可能會毀掉很多 Hachimi 用戶的遊戲體驗。選擇權在你手上。

### 如果你無論如何都還是想和別人分享

如果你仍想要宣傳這個項目，我們建議你在相關材料中以「UM:PD」或「某賽馬擬人遊戲」來指代遊戲本身，這樣可以幫助避免被搜索引擎剖析。

## 相容性

請在安裝前檢查相容性。

### Windows

| 遊戲版本        | 是否支援 |
|-------------|:----:|
| 日文版（JP）     |  ✅   |
| 日文版 (Steam) |  ✅   |
| 韓文版（KR）     |  ❌   |
| 國際版         |  ✅   |

### Android

| 遊戲版本                       | 一般安裝 | 直接安裝 | Zygisk |
|----------------------------|:----:|:----:|:------:|
| 日文版（JP）                    |  ✅   |  ✅   |   ✅    |
| 韓文版（KR）                    |  ❌   |  ❌   |   ❌    |
| 繁體中文版 Google Play 版（TW GP） |  ⚠️  |  ⚠️  |   ✅    |
| 繁體中文版 MyCard 版（TW MC）      |  ⚠️  |  ⚠️  |   ✅    |
| 簡體中文版 (CN)                 |  ⚠️  |  ⚠️  |   ✅    |
| 國際版                        |  ⚠️  |  ⚠️  |   ❔    |

- ✅ - 完全支援。
- ⚠️ - 可運行，但可能因外部因素無法正常運行（例如：反作弊）
- ❔ - 有可能可以運行，但對此不做保證。
- ❌ - 不支援。

## 安裝

安裝方式隨設備類型會有所不同，請參照下列其中一個安裝方式：

<details>
<summary style="font-size: 20px; font-weight: 600;">JP</summary>

### Windows

Hachimi 自 v0.13.0 開始，支援兩種依靠不同安裝流程的加載方法。
**請只選擇其中一種方法，並且無論使用安裝器或手動安裝，都不要一次同時使用多種安裝方式。**

#### 方法一：DotLocal DLL 重定向 (UnityPlayer.dll) （推薦）

::: warning
部分反作弊軟體如 Vanguard 不樂見在你的系統上使用 DLL 重定向，即便這沒有影響到遊戲也會試圖直接保護。只要你想要遊玩使用 Vanguard 或其他反作弊軟體偵測相同功能的遊戲時，都請關閉 DLL 重定向。
:::

::: info
在安裝後遊戲無法運行？找到遊戲安裝資料夾，對遊戲執行檔點擊右鍵，開啟「內容」，並將「相容性」中的 **「停用全螢幕最佳化」** 打勾。
:::

- **使用安裝器：** 從 [Releases 頁面](https://github.com/Hachimi-Hachimi/Hachimi/releases) 下載最新版的 `hachimi_installer.exe`，執行它， **並選擇 `UnityPlayer.dll` 作為 target**，然後點擊 Install。

初次安裝時，安裝器可能會詢問你是否要開啟 DotLocal DLL 重定向，點擊 OK 然後他就會開啟了。 **在此之後，你必須重新啟動電腦才會套用**。

- **手動安裝**

1. 請參考[這篇文章](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-redirection#optional-configure-the-registry)中的「設定登錄檔」部分來啟用 DLL 重導向。完成後請重新啟動電腦。
1. 前往 [Releases 頁面](https://github.com/Hachimi-Hachimi/Hachimi/releases)下載最新版的 `hachimi.dll`。
1. 在遊戲的安裝資料夾中，建立一個名為 `umamusume.exe.local` 的新資料夾，並將剛剛下載的 DLL 檔案放進去。然後將它重新命名為 `UnityPlayer.dll`。
1. 前往 [Cellar Releases 頁面](https://github.com/Hachimi-Hachimi/Cellar/releases)下載最新版的 `cellar.dll`。
1. 將它移動到 `umamusume.exe.local` 資料夾中，並重新命名為 `apphelp.dll`。

::: info
想玩 LoL 或 Valorant 的人注意：每次想玩這些遊戲前，都需要關閉 DLL 重導向功能。你可以使用這個程式快速切換開關：  
<https://github.com/LeadRDRK/DotLocalToggle/releases>  
執行這個程式直到它顯示已停用 DLL 重導向，然後重新啟動電腦。
:::

#### 方法二：使用插件 shimming（cri_mana_vpx.dll）

::: warning
這個方法在最近的更新後已經失效。請依照下方說明改用方法一。
:::

#### 從方法二遷移到方法一

如果你想從方法二切換到方法一，這個過程比從方法一切換到方法二（只要解除安裝再重新安裝）要複雜一些。

你需要**完全解除安裝 Shinmy**；請確保在刪除它時程式並未運行，因為它會在 DMM 關閉後持續執行最多 30 秒，還可能自行恢復。**最簡單的方法是使用安裝程式**（它同時也是解除安裝工具），這會幫你完整清除所有檔案。

之後，就可以像平常一樣解除安裝 Hachimi。

### Android

最簡單的安裝方式是使用 [UmaPatcher](https://github.com/LeadRDRK/UmaPatcher)，它會自動修改你的 APK。建議在尚未安裝遊戲的狀態下使用這個工具。

::: danger
如果你已經安裝過遊戲，第一次使用修改版前必須先解除安裝原本的版本。之後要更新遊戲時，只要安裝新的修改版即可，**不需要再解除安裝**。
:::

::: danger
**請勿從 APKPure 下載 APK**，這個來源已知會造成問題。
:::

1. 從 [Releases 頁面](https://github.com/LeadRDRK/UmaPatcher/releases)下載並安裝最新版 UmaPatcher。
1. 準備好遊戲的安裝檔案，格式可以是：
    - **分離 APK 檔**：一個主 APK 檔案 + 一個 split config（例如 config.arm64_v8a、config.armeabi-v7a 等），只需選擇一個符合你裝置的版本。這通常是日本版才會用到的格式。
    - **單一 APK 檔案**：完整的 APK 包。
    - **XAPK 檔案**：將分離 APK 壓縮成 ZIP，再將副檔名改為 .xapk。
1. 開啟 UmaPatcher，選擇「一般安裝」，然後選取你準備好的檔案。
1. 點選「開始修改」開始修改與安裝流程。

每次遊戲更新後，都需要從第 2 步重新操作一次。

#### Root 裝置使用者

UmaPatcher 提供 root 裝置專用的安裝選項，可以不用解除安裝遊戲，就能直接打補丁，並可照常從任何應用商店更新遊戲。

安裝遊戲後，在 UmaPatcher 主畫面點選上方卡片，選擇要修改的應用程式（如果需要的話）。然後選擇「直接安裝」作為安裝方式，並點選「開始修改」。這個方式不需要額外提供安裝檔案。

遊戲更新後，只需再次執行補丁即可。

#### 手動安裝方式

1. 從 [Releases 頁面](https://github.com/Hachimi-Hachimi/Hachimi/releases)下載預編譯的庫檔案，或自行編譯。
1. 解開遊戲的 APK 檔案。你可以使用 [apktool](https://apktool.org/)。
1. 將 `lib` 資料夾中各目錄下的 `libmain.so` 重新命名為 `libmain_orig.so`。
1. 將對應的代理庫檔案（例如 `libmain-arm64-v8a.so`）複製到相應資料夾中（如 `lib/arm64-v8a`），並改名為 `libmain.so`。
1. 重新打包 APK 並安裝。

</details>

<details>
<summary style="font-size: 20px; font-weight: 600;">Global / TW / CN</summary>

### Windows

- 使用安裝器: 從 [Releases 頁面](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases) 下載最新的 `hachimi_installer.exe`，運行並點擊安裝。不需要去動那些你看不懂的設定。
- 手動安裝: 從 [Releases 頁面](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases) 下載最新的 `hachimi.dll`，然後把它放在遊戲的安裝目錄裡。記得把它的名字改成 `winhttp.dll`、`version.dll` 或 `opengl32.dll`。

### Android

::: warning
Hachimi 在沒有 root 的情況下無法在這些版本中運行。
:::

#### Zygisk

從 [Releases 頁面](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases)下載 Zygisk 壓縮包，然後用 Magisk 或 KernalSU (需要 Zygisk Next) 來安裝。

</details>

## 初次設定

第一次啟動遊戲（安裝好 Hachimi 之後）時，你應該會看到這個對話框：

![First Time Setup](/assets/first-time-setup.jpg)

*如果你沒有看到這個畫面，代表 Hachimi 沒有正確安裝。請再次確認安裝流程是否正確，然後重試一次。*

點選「Next」，然後選擇你想要使用的翻譯資料庫，再點選「Done」來儲存設定並開始檢查更新。

Hachimi 接下來會提示你下載新的翻譯更新，請點選「Yes」來開始下載翻譯檔案。
