# 使用 ZokuZoku

ZokuZoku 是一款专为 Hachimi 设计的 Visual Studio Code 扩展，可作为主要本地化工具使用。使用此工具可以直接进行翻译工作而无需手动编辑 JSON 字典文件。

## 安装步骤

### 先决条件

安装 ZokuZoku 前，请确保已安装下列程序：

- 操作系统：Windows 10 及以上版本或 Linux x64 系统。macOS 与 ARM 设备无官方支持，需特殊配置。
- [Visual Studio Code](https://code.visualstudio.com/) v1.90 或更高版本（注意不是 Visual Studio！这两个东西完全不同！）

ZokuZoku 运行时需以下文件：

- `master.mdb` 与 `meta` ：这些文件位于游戏的数据目录中（在 Windows 中位于 Appdata 文件夹，在 Android 中位于 `data/data`文件夹，需要 root）。这两个文件必须位于同一个文件夹中，文件 `meta` 位于根目录中，而文件 `master.mdb` 要位于子文件夹 `master` 中，这样我们就得到了 `文件夹/meta` 和 `文件夹/master/master.mdb`。**通过 DMM 安装游戏的用户则无需担心，因为 ZokuZoku 可自动检测到它们！**
- `localize_dump.json` ：此文件包含从游戏中转储的原始 `localize_dict` 数据。Hachimi 可以用以下方式创建此文件

1. 在 Hachimi 的配置编辑器中启用 “翻译者模式”。
![Config editor](/assets/translation-guide/using-zokuzoku/1.webp)
1. 找到新出现的 “导出本地化字典“ 选项，点击即可创建。
![Translation section in menu](/assets/translation-guide/using-zokuzoku/2.webp)

如果此文件是使用 DMM 版本的游戏创建的，ZokuZoku 也会自动检测该文件，并按照上述步骤操作，因此请确保在安装前至少执行一次。如果您想保持更新，则每次游戏客户端更新时都需要再次转储该文件；否则，如果您不处理 UI 翻译，则可以忽略它。

当然，你还需要一个现有的翻译仓库。对于英语翻译仓库，可以从 [Hachimi-Hachimi/tl-zh-cn](https://github.com/Hachimi-Hachimi/tl-zh-cn) 克隆或下载。

### 安装

在[发布页面](https://github.com/Hachimi-Hachimi/ZokuZoku/releases)下载最新版本的 `.vsix` 文件。要安装它，请打开 VSCode 中的“扩展”面板，点击右上角的三个点按钮，选择“从 VSIX 安装...”，然后选择刚刚下载的文件。

![Translation section in menu](/assets/translation-guide/using-zokuzoku/3.webp)

## 初始设置

安装 ZokuZoku 后，您可以通过前往“文件”->“打开文件夹...”并选择要打开的文件夹来打开翻译仓库。*请注意，打开的文件夹应该是包含该 `localized_data` 的文件夹，而不是 `localized_data` 文件夹本身！*

首次打开翻译仓库时（当 ZokuZoku 已设置为自动激活时），将显示以下提示：

![Dependencies install prompt](/assets/translation-guide/using-zokuzoku/4.webp)

点击“确定”开始安装依赖项，下载和安装需要一些时间（大约 200MB）。在此过程中，将出现命令提示符，请勿关闭它！

如果您的设备上已安装游戏的 DMM 版本，并且您已按照上述说明创建了本地化转储文件，则会出现以下提示，以确认自动检测的路径：

![Game data dir prompt](/assets/translation-guide/using-zokuzoku/5.webp)
![Localize dict dump prompt](/assets/translation-guide/using-zokuzoku/6.webp)

若其中的路径有误，您可以选择 “否” 。

如果 ZokuZoku 无法检测到游戏 DMM 安装的正确路径，或者您想使用其他版本的资源文件，您可以进入设置进行手动设置。

::: warning
更改数据路径后，您需要重新启动 Visual Studio Code。
:::

![Extension details](/assets/translation-guide/using-zokuzoku/7.webp)
![Extension settings](/assets/translation-guide/using-zokuzoku/8.webp)

就是这样！现在你就可以开始动动手指准备翻译了！

## 主面板

你可能注意到，安装扩展程序后，侧边栏上添加了一个新图标。这就是 ZokuZoku 面板，它是浏览可翻译资源和启动编辑器的主界面。

![Main panel](/assets/translation-guide/using-zokuzoku/9.webp)

面板外部的部分（所有剧情、主页对话等）称为 “视图” 。这些视图内列出了您可以翻译的内容（可能根据视图类型分类）。点击其中一个条目（类别内）将在合适的自定义编辑器中打开相应的翻译词典。

其中一些视图会在条目名称旁边显示一个复选框。它会告诉您该资产的字典是否存在。

![Lyrics view with checkboxes](/assets/translation-guide/using-zokuzoku/10.webp)

## 切换翻译文件夹

在编辑任何内容之前，您可能需要做的第一件事是将 Hachimi 翻译文件夹（也称为本地化数据目录）切换到翻译的本地工作副本。这将使 Hachimi 从您的本地副本而不是上游仓库加载翻译，以便您可以在需要时在游戏中预览它们。

为此，请在面板中打开 “Hachimi 控制台” 视图。点击 “设置翻译文件夹” 按钮进行设置。完成翻译后，不要忘记点击 “还原翻译文件夹” 按钮进行还原。

![Hachimi Controls view](/assets/translation-guide/using-zokuzoku/26.webp)

## 编辑器

### 恼人的怪癖

在进入编辑器主界面之前，我们先快速了解一下它的一个大问题。尝试打开任何尚未翻译的资源（未勾选其名称旁边的复选框）。打开编辑器时，发生了一些奇怪的事情。

![through the magic of buying two of them](/assets/translation-guide/using-zokuzoku/11.webp)

为什么会同时打开<a href="https://www.youtube.com/watch?v=btHpHjabRcc" target="_blank" style="color: unset; text-decoration: none; font-weight: unset;">两个</a>编辑器？一个是自定义编辑器，另一个是普通文本编辑器？这是 Visual Studio Code 编辑器固有的怪癖；初始化新文件的内容会导致文本编辑器打开并 “保留” 当前文件的上下文。

如果您关闭文本编辑器，自定义编辑器仍会处于打开状态，但由于文件上下文已丢失（VSCode 会认为您已将其关闭），因此它无法执行任何操作。如果您关闭自定义编辑器，则两者都会关闭。

幸运的是，如果您习惯了特定的工作流程，这种怪癖基本上是无痛的。

- 当您打开了资源但不想翻译它时，**请关闭自定义编辑器选项卡**，这也会关闭其他选项卡。

- 如果您确实要翻译，**请先保存文件**，自定义编辑器将会关闭（又一个奇怪的怪癖！），但现在您可以关闭文本编辑器并从面板重新打开该资源。现在一切都将按预期工作。

### 常用界面

大多数编辑器共享完全相同的界面和拥有相似的行为。

![MDB editor](/assets/translation-guide/using-zokuzoku/12.webp)

基本用法应该不言而喻：选择一个要翻译的条目，然后在 “已翻译” 面板中输入翻译的内容。条目的颜色代表其翻译状态。如果颜色为灰色，则表示该条目尚未翻译。

每个条目可以有多个 “文本槽” ，它们的含义可能因您使用的编辑器而异。例如，剧情编辑器中的每个条目都有用于描述说话者、对话内容、选项等的文本槽。

对于大多数编辑器来说，将所有文本框留空意味着该条目不存在。但是，有时您可能需要将内容设置为空白，而不是删除该条目。为此，您可以按 Alt + Enter 将其明确设置为空字符串。

编辑器左侧的面板称为“资源管理器”。您可以通过点击来浏览字典中的条目。如果该面板处于焦点状态（即您点击的最后一个面板），您可以使用键盘上的方向键进行导航。您也可以先按下 Alt + 方向键，而不必先将焦点放在资源管理器上。

大多数编辑器遵循相同的约定：按 “上方向键” 键转到上一个条目，按 “下方向键” 转到下一个条目；但是，此行为可能因编辑器的实现方式而异。您无法使用方向键在类别之间导航。

您可以通过按住 Ctrl 键并点击条目，或按住鼠标左键拖动光标到条目上来选择多个条目。这不会影响翻译编辑行为；您在 “已翻译” 面板中输入的任何内容都仅适用于最后选择的条目。此功能旨在与“复制”功能配合使用（下面会讲解）。

除了导航之外，“资源管理器” 还提供一些额外的功能：

![Explorer panel features](/assets/translation-guide/using-zokuzoku/13.webp)

- 搜索栏可用于搜索条目。点击旁边的箭头图标即可显示搜索选项。“在内容中搜索” 选项可用于搜索条目内部的文本，而不仅仅只是条目的名称。

使用搜索功能时，系统将使用虚拟视图显示匹配的条目。方向键导航在此不起作用。清空搜索栏即可返回正常视图。

面板标题栏上有 3 个按钮，从左到右分别是：

- **复制按钮** 允许您启用复制条目。当您选中一个或多个条目并点击该按钮时，这些条目周围将显示虚线边框。这表示它们已启用复制。再次点击该按钮（未选中任何条目）将清除它们的复制状态。
- **粘贴/填充按钮** 将把正在复制的条目**粘贴**或**填充**到当前选定的条目上。
- **清除按钮** 可清除当前选定条目的翻译内容。

让我们进一步讨论一下粘贴/填充功能的工作原理。例如，如果我们像这样选中一个条目：
![An entry with its translated content](/assets/translation-guide/using-zokuzoku/14.webp)

我们在这个条目上点击复制，然后选择另一个条目并粘贴。系统会询问您要粘贴的文本槽数量。

![Paste input prompt](/assets/translation-guide/using-zokuzoku/15.webp)

我们可以将其留空并按 Enter。内容将按预期复制。

![Another entry, now with the pasted content](/assets/translation-guide/using-zokuzoku/16.webp)

现在，如果我们设置多个条目进行复制并将它们粘贴到多个条目中，会发生什么情况？

![Selected entries and copying entries](/assets/translation-guide/using-zokuzoku/17.webp)

所有选定的条目都将按预期填充。编辑器将遍历选定的条目，从复制的条目中粘贴内容，当到达最后一个复制条目时，它将返回到第一个复制条目并重复此操作，直到填充所有选定的条目。

![Third selected entry](/assets/translation-guide/using-zokuzoku/18.webp)

![Fourth selected entry](/assets/translation-guide/using-zokuzoku/19.webp)

::: info
此填充行为不适用于文本槽。如果目标位置的文本插槽数量大于源位置的文本插槽数量，则它只会从源位置粘贴 `n` 个文本插槽数量，而多余的插槽则保持不变。
:::

### 剧情编辑器

剧情编辑器是通用编辑器的扩展版本，添加了剧情翻译功能。它可用于主线剧情/角色剧情/事件剧情、主页对话和训练对话。

![Story editor](/assets/translation-guide/using-zokuzoku/20.webp)

#### 导航

方向键导航在这里起着重要作用。下方向键会将您引导至该故事中的下一个区块，而这不一定是列表中的下一个条目。

例如，看看这段剧情，其中有对于男性和女性训练员的单独区块。

![Male and female trainer blocks](/assets/translation-guide/using-zokuzoku/21.webp)

我们当前正在选择 2 号区块。通常情况下，在此处按下下方向键会跳转到 3 号区块；但是，由于剧情的逻辑顺序是从男性区块或女性区块跳转到下一个区块，因此它会跳转到 4 号区块。

上方向键在这里可以正常工作，但请记住，它不会遵循故事的原始顺序。当你想回溯到被跳过的区块时，它很有用。

强烈建议您使用方向键按正确顺序浏览剧情字典。为了更容易操作，您应该习惯使用 Alt + 方向键。

#### 预览面板

编辑器最明显的新增功能是右侧的两个额外面板以及其父面板上的额外按钮：

![Preview panels](/assets/translation-guide/using-zokuzoku/22.webp)

它们是预览面板，旨在尽可能真实地还原游戏中的故事。一般来说，这些预览中的文本尺寸非常精确，足以让你放心地判断它的实际情况。

不过，如果你在 Windows 上使用它，字体的外观可能会有点……不对劲。尽管如此，它应该不会对准确性造成太大影响，主要是字体粗细有点奇怪。

::: info
如果你还没意识到，这些编辑器是基于网页的。游戏的字体并没有针对网页进行优化，因此渲染效果很奇怪。
:::

当前剧情类型的预览面板将默认打开（但剧情类型是预设的，所以并不总是准确）。您可以通过点击父面板标题栏上对应的按钮切换到其他预览面板。再次点击该按钮将关闭预览面板。

::: info
预览面板中的文本元素是 “虚拟” 文本槽。对于已翻译的文本槽，这意味着预览面板不会在文本槽输入的内容发生更改时立即更新，而是在翻译内容保存到文件后才会更新。有关其工作原理的更多信息，请参阅[内部工作原理](#内部工作原理)。
:::

#### 原始面板操作

除了预览按钮外，原始面板还有 2 个额外的按钮，从左到右分别是：

- **跳转区块按钮** 会向 Hachimi 发送 IPC 命令，跳转至游戏中的特定剧情区块。要使用此功能，您需要在 Hachimi 配置中启用“启用 IPC”，并且必须正在查看您正在翻译的剧情。此功能可用于在游戏中仔细检查所有内容是否正确。
- **播放语音片段按钮** 会播放当前故事区块的语音片段。此功能仅适用于有配音的故事。

#### 文本槽

除 “标题” 条目外，故事中的所有条目至少有 2 个文本槽：说话者姓名和对话内容。根据条目所代表的剧情区块，可能会有额外的文本槽用于显示对话选项和彩色文本。

选择文本框会分配一个 “链接” 。尝试在原始视图或预览面板中将鼠标悬停在它们上方；您会注意到文本会带有下划线，这表示它是一个包含指向其他条目的链接的文本框。您可以按住 Ctrl 键并单击鼠标左键来跟踪此链接，该链接指向此选择将指向的剧情区块。

男女训练员的选择可能会有所不同。我们来看一个极端的例子：

![Mejiro Dober's story, part 4](/assets/translation-guide/using-zokuzoku/23.webp)

这个故事方块不仅有男性和女性两种选择，它指向的下一个剧情方块（3 或 4）也包含性别变体。如果我们查看这个方块的女性变体，我们会发现它也包含两种选择变体，尽管它只向女性训练员展示。

由于这个奇怪的系统，男性区块上的两个选择变体都将链接到下一个男性区块（数字 3），女性区块上则相反（链接到数字 4）

这些选择文本槽有一个工具提示来指示它们适合哪种性别，并且它们在预览面板中也采用颜色编码（正常选择始终为绿色，男性选择为蓝色，女性选择为粉红色，它不像游戏中那样按顺序着色，并且与游戏内的颜色无关）。

![Choice text slot tooltip and color coded preview](/assets/translation-guide/using-zokuzoku/24.webp)

最后一种文本槽是彩色文本槽。它们用于标记内容中需要着色的部分。我们来看一个例子：

![Story block with one color text slot](/assets/translation-guide/using-zokuzoku/25.webp)

它们位于所有其他文本槽之后。内容中第一个与颜色文本块匹配的子字符串将被着色。预览面板展示了其工作原理，但请注意，颜色仅供参考，它可能与游戏内实际使用的颜色不匹配。请确保遵循它们在原始视图中出现的顺序，以正确匹配颜色。

## 内部工作原理

*TODO*

## 高级用法

### 在 ZokuZoku 中重新打开文件

有时您可能需要直接打开字典文件，而不是通过 ZokuZoku 面板打开。这将启动内置文本编辑器，因此您需要在 ZokuZoku 的自定义编辑器中重新打开它。

打开 VSCode 命令栏（Ctrl + Shift + P），并执行 “使用...重新打开编辑器” 命令。从 ZokuZoku 中选择适合您当前字典文件的编辑器。

### 实时文本编辑器拆分视图

您可以同时打开文本编辑器和自定义编辑器，以实时查看对实际文件的更改。这也很好地演示了它的内部工作原理。

按 Ctrl + \ 打开拆分视图。在聚焦于第二个视图的情况下，打开 VSCode 命令栏 (Ctrl + Shift + P) 并执行 “使用...重新打开编辑器” 命令。选择内置文本编辑器。

现在，您可以使用任一编辑器对文件进行更改，这些更改将同时反映在两个编辑器中。请注意，如果当前文件内容格式不正确，自定义编辑器将拒绝执行任何操作。
