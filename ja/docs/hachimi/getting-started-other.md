# インストールガイド（グローバル版、繁体字中国語版、簡体字中国語版の場合）

以下のプラットフォームごとのガイドに従ってから、[初期セットアップ](#初期セットアップ)に進んでください。

## Windows

::: danger
2025/11/11 以降にグローバル版をプレイされる場合は、代わりに[日本語版の場合のインストールガイド](getting-started-jp.md)の手順に従ってください。その際、インストーラーにはグローバル版のインストール先を指定してください（必ず Steam 版を選択してください）。
このセクションは、ゲームのバージョンがまだ更新されていない場合にのみ参照してください。
:::

1. 最新バージョンの `hachimi_installer.exe` を[リリースページ](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases)からダウンロードします。
1. 起動し、インストールボタンをクリックします。各オプションの意味がわからない場合は、何も変更する必要はありません。

<details>
<summary class="collapsible-header-sub">手動でインストールする方法</summary>

::: tip
名前を変更する際には、元のファイル名に**ファイル拡張子（`.exe`、`.dll`）が含まれている場合にのみ**拡張子を追加してください。含まれていない場合は、拡張子を非表示にするように設定されているため、名前変更後の実際のファイル名が `.exe.exe` で終わってしまい、ゲームが動作しなくなります。（フォルダに関しては関係ありません。）
:::

1. 最新バージョンの `hachimi.dll` を[リリースページ](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases)からダウンロードした後、ファイルをゲームのインストールフォルダに移動します。
1. ファイル名を `winhttp.dll`、`version.dll`、`opengl32.dll` のいずれかに変更します。

</details>

## Android

::: warning
Hachimi は、これらのバージョンでは root 権限なしでは使用できません。
また、Android のグローバル版はサポートされていないことに留意してください。
:::

::: danger
2025/11/11 以降、下記リンクの Hachimi バージョンは動作しなくなる可能性があります。代わりに[最新の Edge リリース](https://github.com/kairusds/Hachimi-Edge/releases/latest)のファイルをご利用ください。サポート状況は現在未確定です。
:::

#### Zygisk

最新の Zygisk の zip ファイルを[リリースページ](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases)からダウンロードし、Magisk または KernelSU（Zygisk Next と併用）でインストールしてください。

## 初期セットアップ

Hachimi をインストールした後、初めてゲームを起動すると、次のダイアログが表示されます。

![First Time Setup](/assets/first-time-setup.jpg)

::: info
もし表示されない場合は、Hachimi が正しくインストールされていない可能性があります。インストール方法をご確認の上、もう一度お試しいただくか、[トラブルシューティング](troubleshooting.md)をご確認ください。
:::

⚠️ 翻訳をしない場合は、このダイアログを閉じてください。公式にローカライズされたバージョンでの翻訳の使用は現時点ではサポートされておらず、問題が発生する可能性があります。

::: tip
誤って翻訳を有効にしてしまった場合は、設定エディタ（Config Editor）から「Gameplay」タブの「Disable translations」にチェックを入れ、ゲームを再起動すると無効にすることができます。
:::
