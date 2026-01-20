# Installation guide (Global / TW / CN)
Follow the guide for your platform below, then continue with [First Time Setup](#first-time-setup).

## Windows
Since 2025/11/11, all versions use the same Hachimi Edge release.

1. If you have the special legacy `Hachimi 2020` version installed, uninstall it first.
    - You can use the original installer for this, or get it [here](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases/download/v0.14.0-2deadd3/hachimi_installer.exe).
1. Follow the [Japanese guide](getting-started-jp.md#windows) with the following adjustments:
    - Select the Steam version in the dropdown.
    - Point the installer at the global install location (Default: `C:\Program Files (x86)\Steam\steamapps\common\UmamusumePrettyDerby`).

Manual install is also easy, if you prefer that or run into issues.

<details>
<summary class="collapsible-header-sub">Manual install</summary>

:::tip
Only add the `.dll` file extension during rename if you see it on the original file name. If you don't, it means Windows is set to hide them, and your rename will end with `.dll.dll`, breaking the game.
:::

1. Download the latest `hachimi.dll` from the [Releases page](https://github.com/kairusds/Hachimi-Edge/releases)
1. Put it in the game's install directory.
1. Rename it to `cri_mana_vpx.dll`.
</details>

<details>
<summary class="collapsible-header-sub">Legacy method</summary>

::: warning
This section is historical and should only be used if your game version hasn't updated yet or you have special requirements.
:::

1. Download the latest `hachimi_installer.exe` from the [legacy Releases page](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases).
1. Run it and click on Install. No need to modify any of the options if you don't know what they mean.

<details>
<summary class="collapsible-header-sub">Legacy manual install</summary>

:::tip
Only add the `.dll` file extension during rename if you see it on the original file name. If you don't, it means Windows is set to hide them, and your rename will end with `.dll.dll`, breaking the game.
:::

1. Download the latest `hachimi.dll` from the [legacy Releases page](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases).
1. Put it in the game's install directory.
1. Rename it to `winhttp.dll`, `version.dll` or `opengl32.dll`.
</details>
</details>

## Android

::: warning
Hachimi cannot be used with these versions without root.  
Reminder that Global on Android is not supported.
:::

::: danger
Since 2025/11/11, the Hachimi version linked below will likely fail. Use the file from the [latest Edge release](https://github.com/kairusds/Hachimi-Edge/releases/latest) instead. Support state is currently uncertain.
:::

#### Zygisk
Download the latest Zygisk zip from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases) and install it with Magisk or KernelSU (with Zygisk Next).

## First Time Setup
Upon launching the game for the first time after installing Hachimi, you should be greeted with this dialog:

![First Time Setup](/assets/first-time-setup.jpg)

::: info
If you don't see it, it means that Hachimi has not been installed correctly. Please read the install guide carefully and try again, or look at [Troubleshooting](troubleshooting.md).
:::

Simply follow the guide, then tap Done to save your configuration. If you selected translations, this will also start the update check and prompt you to download any new translations.

You can return to this dialog later to change your translation source through the Hachimi menu.

::: tip
If you have any issues with translations, you can disable them in Config Editor > Gameplay, then restart the game.
:::
