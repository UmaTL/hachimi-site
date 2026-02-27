# Installation guide (Windows)

::: warning
The DMM install process uses DotLocal DLL redirection.
This is incompatible with some anti-cheats (e.g. Vanguard used in LoL/Valorant) and will need to be disabled every time you want to play affected games. You can use [DotLocalToggle](https://github.com/LeadRDRK/DotLocalToggle/releases) to quickly toggle it.
Steam is unaffected.
:::

::: details Legacy: Migrating from the deprecated plugin shimming method (Shinmy)
You will need to cleanly uninstall Shinmy first; make sure that it isn't running when you're deleting it because it survives for up to 30 seconds after DMM closes and can restore itself. **The easiest way to do this is to just use the installer** (which also happens to be an uninstaller), it will clean up everything properly for you.

After that, you can just uninstall Hachimi as normal.
:::

## Using the Installer (recommended)

1. Download the latest [Installer](https://github.com/kairusds/Hachimi-Edge/releases/latest/download/hachimi_installer.exe) and run it.
1. If you used non-edge Hachimi before, click Uninstall first.
1. Choose your game version from the lower box.
1. Check that the [install directory](faqs#how-do-i-find-the-game-install-folder) is correct and change it if needed.
    - Global in particular might not be auto-detected.
1. Click Install.
    - The first time, you might be asked to enable DotLocal DLL redirection. Press OK and it will be enabled for you. **You must RESTART (not shutdown) your computer afterwards.**
1. Continue with [First Time Setup](getting-started#first-time-setup).

⚠️ You might need to repeat the install after game updates (the game will stop launching) due to modified files being replaced.

## Manual install

:::tip
Only add the file extensions if you see them on the originals. Windows can hide them, and your rename will then break the game. Doesn't apply to folders.
:::

### Steam

1. Download the latest `hachimi.dll` from the [Releases page](https://github.com/kairusds/Hachimi-Edge/releases).
1. Rename it to `cri_mana_vpx.dll` and put it in the [game install folder](faqs#how-do-i-find-the-game-install-folder).
1. If installing on JP (skip on Global):
    1. Download [Ferns' `FunnyHoney.exe`](https://codeberg.org/LeadRDRK/FunnyHoney).
    1. Rename it to `UmamusumePrettyDerby_Jpn.exe` and put it in the game install folder, overwriting the original.
    1. ⚠️ Keep this file around, you might need to repeat the overwrite after game updates (the game will stop launching) due to the original .exe being restored.
1. Continue with [First Time Setup](getting-started#first-time-setup).

### DMM

1. Refer to the "Configure the registry" section in [this article](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-redirection#optional-configure-the-registry) to enable DLL redirection. **Restart** your computer after you're done.
1. Download the latest `hachimi.dll` from the [Releases page](https://github.com/kairusds/Hachimi-Edge/releases).
1. In the [game install folder](faqs#how-do-i-find-the-game-install-folder), create a new folder named `umamusume.exe.local` and move the downloaded DLL file there. Rename it to `UnityPlayer.dll`.
1. Download the latest `cellar.dll` from the [Cellar Releases page](https://github.com/Hachimi-Hachimi/Cellar/releases).
1. Move it to `umamusume.exe.local` and rename it to `apphelp.dll`.
1. Continue with [First Time Setup](getting-started#first-time-setup).
