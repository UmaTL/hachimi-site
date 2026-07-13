---
outline: [2,3]
---

# Configuring a translation repository

Repos come with their own info file and configuration separate from Hachimi's user config to tweak their behaviour.
Both info and config are set by a repo's maintainers. If that's you, please read this page to understand the options.

Both these files are in JSON format and go directly in the `localized_data` folder.
Their keys are described below.

## Info file

The info file contains details about the repo which will display to users in the `Change Translation Repo` and repo `Info` windows of Hachimi's GUI. The file must be called `info.json`.

::: warning
Relative paths are **not** supported for URLs.
:::

```json
"name": "Translation Repo Name",
"description": "Translation Repo Description",
"language": "en"
```

Basic information, similar to the repo selector. You can add a more detailed description here, as there is more space and no other repo entries. The `language` key is only a label and can contain any text.

```json
"homepage": "https://github.com/TLRepoOwner/TLRepoName",
"links": [
    ["button_name", "https://url.com"]
    ["button_name2", "https://url.com"]
    // …
]
```

Various URLs relevant to the repo. The links in the `links` array can be named anything you want. Each entry will display a clickable button with the name, which will open the corresponding link.

```json
"changelog_url": "https://example.com/CHANGELOG.txt"
```

A URL to a file which contains update information. The contents of this file will be displayed when the `Show Changelog` button is clicked in the translation update notification window. It is intended to list recent changes and be updated frequently.

Supports both plaintext and markdown, though links are not supported in markdown.  
The URL **must** end in `.txt` or `.md`/`.markdown`.

```json
"maintainer": "maintainer_name",
"contributors": "https://example.com/contributors-list.html"
```

Names of contributors. The `contributors` key supports a `.html` web page URL, a newline-separated `.txt` URL, or an array.

## Config file

::: info
This page is not exhaustive. The full internal representation of all available options can be found in the [source code](https://github.com/kairusds/Hachimi-Edge/blob/main/src/core/hachimi.rs#L574).
:::

All paths in this file are relative to the folder it is in, not the Hachimi root.

### Localization file paths

``` json
"localize_dict": "path"
"hashed_dict": "path"

"text_data_dict": "path"
"character_system_text_dict": "path"
"race_jikkyo_comment_dict": "path"
"race_jikkyo_message_dict": "path"

"assets_dir": "path"
```

These are the relative paths to files for each part of the translation system.  

- The first two for [general UI](translation-system#localize-dict-hashed-dict).
- The next four for [MDB tables](translation-system#mdb-dicts).
- The last one is the folder where [all other localization files](translation-system#asset-dicts) go. Namely, stories, lyrics, images, etc. Unlike the previous dicts, files in there are organized by their internal game paths.

### Extra localization assets

``` json
"extra_asset_bundle": {
    "windows": "path",
    "android": "path"
}
```

An optional dict which allows you to include a custom Unity AssetBundle which will be loaded into the game. Its keys are the supported platforms, and their values are paths to the bundle.  
This bundle can include any files, but exact details on its workings are lacking at the moment. It is mainly used to include a custom font for use in localization, if required.  
Creating this assetbundle requirs you to have a compatible version of the full Unity Editor installed, or find a third party tool.

``` json
"replacement_font_name": "path"
```

The internal path inside the `extra_asset_bundle` to find a custom font, if needed.

### Localized text functions

``` json
"plural_form": "n == 1 ? 0 : 1",
"ordinal_form": "(((n+9)%10)<3 && ((n+90)%100)>10) ? ((n+9)%10) : 3",
"ordinal_types": ["$st", "$nd", "$rd", "$th", "etc"]
```

The first two are custom expressions that will be evaluated to detect plural and ordinal forms, for use with the `$ordinal(n)` and `$plural(n, t0, t1)` template expressions. In these expressions, `n` is usually a game text-variable like `{0}`. The expression decides which of the `tx` arguments to use for plural, and which of the `ordinal_types` for ordinal, based on the value of `n`.  
Both are optional. Example is the default for English. Details in the [source code](https://github.com/kairusds/Hachimi-Edge/blob/main/src/core/plurals.rs).

``` json
"months": ["month 1", "month 2", "etc"],
"month_text_format": "$(half) $(month)"
```

How to format months.
The first one is an array where each entry represents a month.
The second is the string used in some parts of the game which display a month half, like for Career "turns". Not sure if it's actually used.

### Text wrapping

``` json
"use_text_wrapper": true
```

Boolean to enable custom text wrapping or let the game handle it.
The other options in this section will not apply when it is set to `false`.

``` json
"wrapper_penalties": {
    "nline_penalty": 0,
    "overflow_penalty": 0,
    "short_last_line_fraction": 0,
    "short_last_line_penalty": 0,
    "hyphen_penalty": 0
}
```

An optional dict indicating the pentalties used in the optimal-fit wrapping algorithm. When used, all penalties should be configured.  
See the [simple example](https://docs.rs/textwrap/latest/textwrap/wrap_algorithms/fn.wrap_optimal_fit.html#optimal-fit-algorithm) for a basic idea of how it works, and [Penalties](https://docs.rs/textwrap/latest/textwrap/wrap_algorithms/struct.Penalties.html#fields) for further details and settings.

``` json
"line_width_multiplier": 2.0
```

The game's internal line width is set in CJK unicode characters, where each is usually roughly 2 ASCII characters.
This setting applies globally to offset this, where needed for custom wrapping calculations (not applied everywhere).

``` json
"text_frame_line_spacing_multiplier": 0.72,
"text_frame_font_size_multiplier": 0.96
```

Multipliers applied to the text frame/box settings. This is used primarily for story dialogue.

``` json
"systext_cue_lines": {
    "type": 1,
    "...": 2
}
```

An optional dict indicating maximum amount of lines per type of systext.  
Its keys are the "type" found in the MDB table's `cue_sheet` column: "snd_vo_*TYPE*_". Its values are the max lines for that type.
A `"default"` key can also be specified, which will be used when no other type matches. If not specified, the default is `4`.

``` json
"skill_formatting": {
    "name_length": 18,
    "desc_length": 18,
    "name_short_lines": 1,

    "name_short_mult": 1.0,
    "name_sp_mult": 1.0
}
```

Custom line lengths for skills specifically. Used anywhere skills are displayed.  
Values given as game-internal (pre-multiplied). Each value is optional, as is the dict itself.

- `Short` refers to skills displayed in a double list without description, like a horsegirl's info screen.
- `SP` refers to when skill points are rendered next to the name, as in upgrades.

### Extra functions

``` json
"auto_adjust_story_clip_length": true
```

Allow adjusting interal values to match localized text length. Affects dialogue delay/reading time in `auto` mode.

``` json
"now_loading_comic_title_ellipsis": true,
```

Trail off comic titles instead of resizing them to fit (?).

``` json
"remove_ruby": true
```

Hide the game's furigana. Should likely be on in localization repos.

``` json
"character_note_top_gallery_button": {
    "text": "Career Event\n     Gallery",
    "font_size": 38,
    "line_spacing": 0.6
},
"character_note_top_talk_gallery_button": {
    "text": "     Chat\n   Gallery",
    "font_size": 44,
    "line_spacing": 0.55
}
```

Special settings for some non-standard elements that cause issues otherwise.
Additions can be requested if other such elements are found.

``` json
"news_url": "https://hachimi.leadrdrk.com/PakaNews/"
```

A URL to open or fetch in-game news from. Requires a specially set up source to provide localized news from the official website.
