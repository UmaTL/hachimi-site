# Installation guide (Global / TW / CN)

Follow the guide for your platform below, then continue with [First Time Setup](#first-time-setup).

## Windows
::: danger
Playing on Global after 2025/11/11? Follow the [Japanese guide](getting-started-jp.md) instead, pointing the installer at the global install location, and skipping the first time setup!  
Only follow this section if your game version hasn't updated yet.
:::

1. Download the latest `hachimi_installer.exe` from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases). 
1. Run it and click on Install. No need to modify any of the options if you don't know what they mean.

<details>
<summary class="collapsible-header-sub">Manual install</summary>

:::tip
Only add the **file** extensions (`.exe`, `.dll`) when you rename if you see them on the original file names. If you don't, it means Windows is set to hide them, and your rename will end with `.exe.exe`, breaking the game. Does not apply to folders.
:::

1. Download the latest `hachimi.dll` from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases) and put it in the game's install directory.
2. Rename it to `winhttp.dll`, `version.dll` or `opengl32.dll`.
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

⚠️ Close this dialog to forego translations. Using translations on an officially localized version is not supported at this time and will cause various issues.

::: tip
If you have accidentally applied translations anyway, you can disable translations in Config Editor > Gameplay, then restart the game.
:::
