# Using UmaTL

UmaTL is actually the first translation patch for the game. It included editing tools, which are mostly still usable today.

## Installation

1. Install [python 3.13 (64bit)](https://www.python.org/downloads/)
1. Install [git](https://git-scm.com/)
1. Create a folder in which you want umatl to be (`D:\uma-tools\umatl` or something). This is the `UmaTL Folder`.
1. Extract the content of [wheels.zip from releases](https://github.com/UmaTL/hachimi-tl-en/releases/tag/support) into the `UmaTL Folder\wheels` folder.
1. Open a cmdline in the base `UmaTL Folder` folder and run:
   ``` bat
   git clone https://github.com/noccu/umamusu-translate.git .
   py -m venv .venv
   .venv\Scripts\activate.bat
   py -m pip install -r src\requirements.txt --find-links=wheels/ --prefer-binary
   py -m pip install -r src\devreq.txt --find-links=wheels/ --prefer-binary
   ```

## Different languages

If you need a special font for your language, you'll have to replace the one in `src\data` and create a Unity AssetBundle with it to use in-game with Hachimi. Reference existing tl sources. This requires you to install the full Unity editor, or find a third-party tool, but those are very shaky.

Legacy UmaTL was not made with multilingual tl in mind, so some things might not work quite right. Check on the `replacer.json` and spell check functionality in particular when running into issues.

## Using the tools

::: tip
Always activate the venv (run `.venv\Scripts\activate.bat` in cmdline) before using UmaTL's tools.  
:::

1. Consult [this doc](https://github.com/noccu/umamusu-translate/blob/master/docs/id-structure.md) or ask/poke around to find the right "targets" that you want to translate.
   - Most scripts take the same arguments. `-set x`, `-group x`, etc.
   - You can also use `-sid xx` to provide them all at once.
   - Note the `-t x` arg for types! It defaults to `story`.
1. Run `src\extract.py -sid xxxxxx` to extract the files, if needed.
   - Be careful with your arguments. The script will extract **everything** that matches and can lead to 100s if not 1000s of files being written if you make a mistake.
1. Run: `py src\edit_story.py -sid xxxxxx` to open the GUI for your targets.

If you run into issues with any script, you can run it with `-h` to get basic help.
See [converting](#converting-to-hachimi-format) for how to obtain Hachimi format files.

### Target examples

- Special Week chara story: `-sid 041001`
- All Maruzensky home interactions: `-t home -id 1004`

### Editor shortcuts

| Shortcut                   | Explanation                                                                   |
| -------------------------- | ----------------------------------------------------------------------------- |
| Ctrl+enter/Alt+down        | Next block                                                                    |
| Alt+Up                     | Prev block                                                                    |
| Ctrl+Alt+down              | Next chapter                                                                  |
| Ctrl+Alt+Up                | Prev chapter                                                                  |
| Alt+Right                  | Copy Japanese text to clipboard                                               |
| Ctrl+s                     | Save file                                                                     |
| Ctrl+i/b                   | Italicize/bold selection                                                      |
| Ctrl+Shift+c               | Color selection (uses last color, add Alt to select a new color)              |
| (shift+)alt+f              | Run block through textprocess.py (shift = remove all line breaks first)       |
| alt+x                      | Convert code point before cursor to unicode (type code point, hit shortcut)   |
| (shift+)ctrl+del/backspace | Delete word (shift = delete line)                                             |
| Alt+c                      | Open/close choices                                                            |
| Ctrl+Alt+c                 | Open/close colored text list                                                  |
| Ctrl+f                     | Open search (enter in search box will search)                                 |
| Tab (in text box)          | Switch between text & name box                                                |
| Ctrl+d                     | toggle raw<->formatted text                                                   |
| Ctrl+shift+up/down         | move line up/down                                                             |
| Ctrl+h                     | listen to current block (game not needed)                                     |
| Ctrl+space                 | Activate autocomplete (Can click or use keys + enter to navigate and choose)  |

### Spell checking & Autocomplete

The editor will show red squiggly lines under unrecognized words. Right-click the word to get suggestions.
Character names are automatically loaded as custom words through the `char-name.json` file. Update it if required. The same dictionary is used for both, so autocomplete supports characters.

### Colours

Any coloured text can be right-clicked to store that colour as the active one for using with the "color selection" shortcut.

### Titles

Titles aren't always available in the asset data, and the Editor might not show them correctly. Don't let this dissuade you from finding them elsewhere to translate. Titles are used in some of the conversion scripts.

## Converting to Hachimi format

::: tip
When working on UmaTL's translation repo, it is preferred to contribute Dialogue to the Legacy UmaTL repo, rather than the converted files to the Hachimi format one.
:::

To contribute to Hachimi-based repos or test translations in the game, you'll need files in the right format.
You can also use the `import.py` script if you prefer, but it is not recommended as it modifies the actual game files (even if that is reversible).

Use the `to_hachimi.py` script from [this releases page](https://github.com/UmaTL/hachimi-tl-en/releases/tag/support) to convert the files to Hachimi format to test in game.  
Remember to reload localized data in the Hachimi menu if you have the game open.
