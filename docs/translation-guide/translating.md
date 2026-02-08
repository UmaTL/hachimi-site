---
outline: [2,3]
---

# Translating

::: tip
If you were linked here directly, it is recommended to [read the guide from the start](welcome).
:::

Now that you better understand the basics of the game's assets and how Hachimi uses them, let's look at how to actually start translating.

## Tools

There are a number of different tools available to create and edit translations.

### ZokuZoku

Developed by the creator of Hachimi, this is currently the easiest to start using and supports most Hachimi formats.

However, it can no longer edit stories after a major update on the Japanese server on September 24, 2025, and has multiple unsolved bugs and usage issues. It is currently unmaintained.

Check out the [ZokuZoku guide](using-zokuzoku.html).

### ZokuZoku Edge

This is an active community fork of the original ZokuZoku extension. The goal is to restore the editing functionalities, add quality-of-life improvements, and resolve issues left by the main ZokuZoku developer.

Although this fork is functional, some features may remain unstable depending on the usecase.

Links: [Source Code](https://github.com/Mario0051/ZokuZoku), [Extension Builder and Release Repository](https://github.com/THShafi170/ZokuZoku-Edge)

### UmaTL Legacy Tools

::: info
An update is on its way to let these support all parts of the game properly, with new features. When complete, this should become the main toolset.
:::

These are part of the earliest game translation patch, and as such don't directly support Hachimi's formats. They are also a bit less user-friendly.

They can however still be used with the aid of a few extra scripts, and are particularly handy for stories, providing more features and a smoother experience.

Check out the [UmaTL guide](using-umatl).

### Hachimi Tools

This is a small extra toolset focused mainly on dealing with `textures` and `uianimation` assets. It also provides some random useful features.

These are quite technical, so they assume the user has sufficient knowledge and only include basic documentation in their readme.

Like ZokuZoku, these are unmaintained and stopped working after a game update.

Use [this maintained fork](https://github.com/noccu/hachimi-tools) with fixed support and new features.

### Carotene Tools

Part of the older Carotene patch. These are unmaintained and no longer work correctly.

## Dealing with specific translations

### UI (Localize / Hashed dicts)

Localize is currently only supported by [ZokuZoku](#zokuzoku).

Hashed dicts are not supported by any tools and must be manually edited. You will also require a way of generating the correct hash. [This tool](https://github.com/Hidden-is-fun/UmamusumeTextHashCalc/releases/tag/v0.1) is one such way.

You must dump the `localize_dict.json` file from the game using Hachimi's menu after game updates. Enable `translator mode` to see the option.

### MDB

In most cases you should currently still use [ZokuZoku](#zokuzoku). UmaTL tools are usable if you know what you're doing, and occasionally provide advantages.

Pay attention in `text_data`, there are many categories and sometimes these are duplicated fully or partially. Combinations also exist.

### Dialogue (Story / Race / Lyrics asset dicts)

These are likely the easiest to deal with. They are straightforward, all tools support audio preview and choice branching (which isn't complex in the vast majority of cases), and there are no real gotchas. Just don't forget to translate the titles.

The game update on 2025/09/24 encrypted both assets and the `meta` database indexing them. ZokuZoku doesn't support this.

Your best choice is to use [Legacy UmaTL tools](#umatl-legacy-tools), which also has a few relevant features not found in other tools.

### Textures (incl. Atlases)

Use the [special toolset](#hachimi-tools) to both extract textures and create the `diff.png` after editing.
Once a diff is created, you can also work from that for game updates by using the tools.

You will need an image editor to edit the images. Take care of the size limitations in game, Hachimi currently doesn't support changing those.

Basic documentation is included with the tools.

### UIAnimation

Use the [special toolset](#hachimi-tools) to extract and update.
Basic documentation is included with the tools.

Many of these will only list metadata for their matching textures (see above). Currently, that is the source's asset hash for the protection system.

When these include text, simply edit the text in the extracted file. You can also adjust its size and positioning, which can be extremely useful.  
These will extract to either `flash` or `flashcombine`. Make sure to check both.
You should remove any parts ([JSON objects](https://www.w3schools.com/js/js_json.asp)) not edited.

You'll be served well by having a way to check into the `meta` file (it is an SQLite DB) and browsing or searching for potential asset names.
When text is not found anywhere else, it is likely "hidden" in one of these files. Common for some parts of a scenario's UI.

### Movies

::: info
Experimented yourself or have more info? Please let us know!
:::

The game's movies are in USM format and encrypted. It's not the easiest thing to deal with and comes with many caveats. Many options have not yet been tested. Good technical skills and time to research and experiment are recommended.
  
You can use various tools to decrypt and re-encrypt them, using key `75923756697503`/`(0000)450D608C479F`.

- [USMBreak](https://github.com/beer-psi/usmbreak)
- [WannaCRI](https://github.com/donmai-me/WannaCRI)
- [CRID USM Demux Tool](https://mega.nz/file/TJQniYwL#Dp_D-KvzVlVgTwqzVJc1n3vslBZsHdy8pdDqzhRtsOI)
- [VGMToolbox](https://sourceforge.net/projects/vgmtoolbox/)

In between, the video can be edited any usual way, though our main purpose is adding subtitles. Note that the original video already comes "hard-subbed" in Japanese.

::: info
In the future, Hachimi Edge might support soft-subtitles to obviate the need for messing with video files.
:::

Videos should likely remain in the same format and resolution. For simple cases you should be able to use the relevant encoder for its format (MPEG1/H264/VP9?). You can also try the [official SDK](https://archive.org/details/new-criware-sdk) which *should* help with more advanced cases too.  
Be warned some files contain an alpha channel as second video stream. Most tools don't deal with this well.

Audio should not be touched and ideally copied directly, without de-/encryption. This might require it to be processed separately. Check the docs for your tools.

## Other considerations

Hachimi works on both Windows and Android. You will need access to an up-to-date Android `meta` file to generate the hashes for the `outdated asset protection system`. It is not required for anything else.

You do not need tools at all, of course. Sometimes it is easier to make an edit directly in a `.json` file. Searching through them can be a handy way to find something as well.
