# Translation system
Before getting into the process of making translations, let's have a look at how Hachimi handles translations in the first place. You don't need to fully understand everything that's being explained here, but it's a good idea to have a brief understanding of how things work so you wouldn't be confused while making your translations.

::: info
If you also want to know how the translation dicts are formatted/organized, you should navigate around the `localized_data` directory to check them out while reading this article. You can do that by browsing your local copy at `[Game install dir]/hachimi/localized_data` if you have Hachimi installed, or you could browse the [UmaTL](https://github.com/UmaTL/hachimi-tl-en) repository on GitHub.
:::

## Localize dict / Hashed dict
In the root of the `localized_data` directory, you'll find two files named `localize_dict.json` and `hashed_dict.json`. These two files are for two different systems that serves the same purpose: UI translations.

The localize dict is the new and preferred way of translating the UI which was introduced in Hachimi. This system directly modifies the game's internal localization system, hence the name, which will ensure that translations will go exactly where they need to be, context and all. Each translation entry is mapped to an internal ID within the game, which also loosely specifies the context that they're used in (however there are some cases where the same ID is used inappropriately in multiple contexts, blame Cy devs).

The hashed dict is a legacy system that was inherited from previous translation projects. This is essentially a word lookup table; anything on the UI that matches a hash within that table will be replaced with the specified translation content. Its usage in previous translation projects has shown that it's particularly *intrusive*, inefficient and often results in low quality translations since they could appear in the wrong places (such as the story dialogues). However, it still has its use, albeit limited, since sometimes the translation target isn't available in the localize dict or any other easily accessible means of translation. *This dict is not supported in ZokuZoku.*

## MDB dicts
MDB refers to `master.mdb`, a database file used by the game that contains a plethora of various types of data. Hachimi's translation system only concerns 4 tables within this database that are used for textual content: `text_data`, `character_system_text`, `race_jikkyo_comment` and `race_jikkyo_message`. Each of them have their own associated dict with the corresponding name in the root of `localized_data`.

- `text_data` contains textual information for all entities within the game, which includes but is not limited to: character names/profiles, support card names/descriptions, story names, gacha names/descriptions, mission names, etc.

- `character_system_text` contains the character dialogues which are said on the game's various screens, such as the game's home screen.

- `race_jikkyo_comment` and `race_jikkyo_message` contains race commentary.

## Asset dicts
There are 5 asset dict types:

- Story dict (used for the main story, training event dialogue and home screen interactions): `assets/story/data/??/????/storytimeline_*.json` and `assets/home/data/?????/??/hometimeline_*.json`;
- Race story dict (used for the racing cutscenes in the main story): `assets/race/storyrace/text/storyrace_*.json`
- Lyrics dict: `assets/lyrics/m????_lyrics.json`
- `atlas` metadata dict: `assets/atlas/*/*.json`
- `uianimation` dict: `assets/uianimation/*`

All of these dicts except for the lyrics dict allows specifying the asset bundle hash for each platform. This bundle hash is used to check if the bundle has been updated, in which case the translation content might not match what's currently in the asset, preventing incorrect data from being loaded in.

::: info
This protection system currently doesn't work anymore.
:::

The `atlas` type only serves as metadata for the atlas textures (see below). The `uianimation` type usually does the same for other textures, but can sometimes contain text data used by the game.

## Texture replacements
Texture replacements are categorized by the type of the root asset from which the texture was loaded. For most texture types, a `.png` file would be used for replacement. They are split into their respective directories:

- `atlas`: Contains the atlas textures for UI sprites. Metadata is provided by the atlas metadata dict which has the same name as the replacement texture but as a `.json` file. Path: `assets/atlas/*/*.png`.
- `an_texture_sets`: Contains the animated UI atlas textures, included in a `uianimation` asset bundle. A `uianimation` asset dict can be used to provide metadata for these textures. Path: `assets/an_texture_sets/as_uMeshParam_fl_*/tx_uTex_fl_*.png`
- `textures`: Contains generic textures. Used by both the UI and 3D models in the game. Unlike other types, the file format of these replacement textures depends on the original filename specified in the asset bundle. For UI textures, it's usually `.png`, and for 3D model textures, it's usually `.tga`. Path: `assets/textures/*`

All textures can also be replaced using a `.diff.png` file instead of its original format. This is a special format based on PNG which only contains the difference data between the original image and a replacement image, saving considerably on file size. It is highly recommended to use only this format in a tl repo.

## Movies (videos / FMV cutscenes)
They are USM formatted video files. Replacement of these assets is simply done by making the game load the replacement file.

Path: `assets/movies/*`

## Translation loading process
The config file, localize dict, hashed dict and MDB dicts are all loaded immediately when the game starts; these are also the only things that will be reloaded when you choose to reload the localized data. Everything else related to game assets will be (re)loaded every time the game tries to load the corresponding asset.

~~Asset dicts will check for the bundle hash before they're applied. If the bundle hash doesn't match the one that's specified in the dict, it will ignore that file. If the bundle hash isn't specified in the asset dict, this check will be skipped.~~ Currently not working.

Texture replacements have a special loading process. When the asset is loaded, it first looks for a corresponding `.diff.png` file to use as a diff, otherwise it tries to load a `.png` file. In the case that it finds a diff file to use, it will check the corresponding `.png` file's modified time. If the modified time is later than the diff's, it will load the `.png` file directly. If the file doesn't exist or the modified time is older than the diff file, it will apply the diff file to the original texture and save it to the `.png` file for later use.
