# 設定

このページでは、設定オプションを一覧で示し、その使用目的について説明します。

設定ファイルは以下の場所にあります。

- Windows: `[ゲームのインストールフォルダ]\hachimi\config.json`
- Android: `/sdcard/Android/media/jp.co.cygames.umamusume/hachimi/config.json`

**注:** これらのオプションの一部は設定エディタ機能では使用できないため、手動で追加する必要があります。

- `debug_mode`: デバッグモードを有効にします。現在はデバッグログの有効化、無効化のみを行います。
- `translator_mode`: 翻訳者向けのオプションを有効にします。翻訳されていない UI の文字列をコンソールに記録し、翻訳者にとって便利な他の機能を有効にします。
- `disable_gui`: 内蔵 GUI を無効にします。これにより翻訳データのアップデート機能も無効になるのでご注意ください。
- `localized_data_dir`: ローカライズされたデータのディレクトリを設定します。ローカライズされたデータの設定ファイルが必要です。
- `target_fps`: ゲームのターゲット FPS を設定します。設定されていない場合、Hachimi はゲームの FPS を変更しようとしません。`vsync_count` が設定されている場合は反映されません。
- `open_browser_url`: GUI からゲーム内ブラウザを起動したときに開くデフォルトの URL を設定します。デフォルトの値： `https://www.google.com/`
- `virtual_res_mult`: 仮想解像度の倍率を設定します。デバイスの性能が十分な場合は、1.5 または 2 が適切な値です。それ以上の値はおそらく過剰です。「ソフトリスタート」を行うことで、ゲームを終了せずに適用できます。
- `translation_repo_index`: 翻訳レポジトリのインデックスURLを設定します。翻訳データのアップデート機能によって使用されます
- `skip_first_time_setup`: 起動時に初回セットアップをスキップするかどうかを設定します。初回セットアップを閉じると自動的に `true` に設定されます。
- `disable_auto_update_check`: 起動時の自動アップデート確認機能を無効にします。
- `disable_translations`: 翻訳を無効にします。
- `ui_scale`: UIサイズの倍率を設定します。デフォルトの値：`1.0` （変更なし）
- `graphics_quality`: グラフィックのクオリティを設定します。使用可能な値： `Default`, `Toon1280`, `Toon1280x2`, `Toon1280x4`, `ToonFull`, `Max`.
- `story_choice_auto_select_delay`: ストーリー閲覧時にAUTOを使用している際の、選択肢を選択するまでの遅延（秒）を設定します。デフォルトの値: `0.75` （秒）
- `story_tcps_multiplier`: ストーリー閲覧時のテキストのスピードの倍数（"typewriting count per second"）を設定します。 デフォルトの値： `1.0`
- `enable_ipc`: HTTPプロセス間通信サーバーを有効にし、他のプログラムからゲームを制御できるようにします。翻訳ツールでの使用を目的としています。
- `ipc_listen_all`: ネットワーク上のあらゆるデバイスからの IPC コマンドを受け入れます。**必要がない場合はこのオプションを有効にしないでください。**
- `force_allow_dynamic_camera`: あらゆるタイプのレースでダイナミックカメラを選択できるようにします。
- `live_theater_allow_same_chara`: ライブシアターの編成で同じキャラクターを複数回選択できるようにします。また、編成の自動保存を無効にします。**複数回選択したキャラクターの編成を手動で保存しないでください。**
- `sugoi_url`: Sugoi Offline Translator または自動翻訳対応翻訳サーバーのURLを設定します。通常の Sugoi 設定をご利用の場合は、このオプションを設定する必要はありません。デフォルトの値： `http://127.0.0.1:14366`
- `auto_translate_stories`: 自動翻訳機能を使用してストーリーを翻訳します。
- `auto_translate_localize`: 自動翻訳機能を使用してUIテキストを翻訳できます。ただし、ほとんどの自動翻訳エンジンは改行や書式設定タグを適切に維持できないため、通常このオプションの使用は推奨されません。

### Windows のみ

- `vsync_count`: VSync カウントを設定します。1 に設定すると、ゲームの FPS がモニターのリフレッシュレートに同期されます。詳しくは[こちら（Unity docs）](https://docs.unity3d.com/ScriptReference/QualitySettings-vSyncCount.html)
- `load_libraries`: 起動時に読み込むライブラリのリストを設定します。他のMODの読み込みにも使用できます。 例： `["applejuicer.dll", "banana.dll"]`
- `menu_open_key`: メニューを開くキーの Windows VK コードを設定します。デフォルトの値は： `39` （右矢印キー）です。すべてのキーコードの一覧は[こちらページ](https://cherrytree.at/misc/vk.htm)でご確認ください。
- `auto_full_screen`: ゲームの向きが画面の向きと一致すると、ゲームを自動的にフルスクリーンモードにします。現時点では、Hachimi は他のアスペクト比をサポートしておらず、フルスクリーン解像度は常に 16:9 にスケーリングされます。このオプションを使用する場合は、`full_screen_mode` と `resolution_scaling` を適切な値に設定してください。
- `full_screen_mode`: 使用するフルスクリーンモードを設定します。使用可能な値は：`ExclusiveFullScreen`、`FullScreenWindow`（ボーダーレスフルスクリーン）です。画面のアスペクト比が16:9でない場合は、`ExclusiveFullScreen`を使用してください。ゲーム画面が適切にスケーリングされません。
- `resolution_scaling`: 解像度のスケーリングモードを設定します。使用可能な値は：`Default`、`ScaleToScreenSize`、`ScaleToWindowSize`です。1080pを超える解像度の画面で `auto_full_screen` を使用する場合は、`ScaleToScreenSize`（推奨）または `ScaleToWindowSize` を使用してください。ゲーム画面が適切にスケーリングされません。
- `block_minimize_in_full_screen`: フルスクリーンでの最小化をブロックします。`FullScreenWindow` に設定している場合のみ使用してください。
- `window_always_on_top`: ゲームウィンドウを常に他のウィンドウより手前に表示します。
