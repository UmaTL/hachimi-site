# Installation guide (JP)

Follow the guide for your platform below, then continue with [First Time Setup](#first-time-setup).

## Windows

As of 2025/09/24, you will need to use Hachimi Edge v0.14.2 or newer due to a big game update.
If you run into issues, check out [Troubleshooting](troubleshooting.md).

::: warning
The DMM install process uses DotLocal DLL redirection.  
This is incompatible with some anti-cheats (such as Vanguard used in LoL/Valorant). You'll need to disable it every time you want to play affected games. [Here](https://github.com/LeadRDRK/DotLocalToggle/releases) is a program to quickly toggle it. Run it until it says it has disabled DLL redirection and restart your computer.  
Steam is unaffected.
:::

1. Download the latest [Installer](https://github.com/kairusds/Hachimi-Edge/releases/latest/download/hachimi_installer.exe) and run it. 
1. If you used non-edge Hachimi before, click Uninstall first.
1. Choose your game version from the lower box.
1. Check that the install directory is correct and change it if needed.
1. Click Install.
<!-- Todo: show how to find the install dir -->

When installing for the first time, the installer might ask to you enable DotLocal DLL redirection. Press OK and it will be enabled for you. **You must RESTART (not shutdown) your computer after enabling it.**

<details>
<summary class="collapsible-header-sub">Manual install</summary>

:::tip
Only add the **file** extensions (`.exe`, `.dll`) when you rename if you see them on the original file names. If you don't, it means Windows is set to hide them, and your rename will end with `.exe.exe`, breaking the game. Does not apply to folders.
:::

::: tip
Guide based on DMM. If you're using Steam, replace `umamusume.exe` with `UmamusumePrettyDerby.exe` in the steps below.
:::

1. Refer to the "Configure the registry" section in [this article](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-redirection#optional-configure-the-registry) to enable DLL redirection. Restart your computer after you're done.
2. Download the latest `hachimi.dll` from the [Releases page](https://github.com/kairusds/Hachimi-Edge/releases).
3. In the game install folder, create a new folder named `umamusume.exe.local` and move the downloaded DLL file there. Rename it to `UnityPlayer.dll`.
4. Download the latest `cellar.dll` from the [Cellar Releases page](https://github.com/Hachimi-Hachimi/Cellar/releases).
5. Move it to `umamusume.exe.local` and rename it to `apphelp.dll`.
</details>

<details>
<summary class="collapsible-header-sub">Migrating from the deprecated plugin shimming method</summary>

You will need to cleanly uninstall Shinmy first; make sure that it isn't running when you're deleting it because it survives for up to 30 seconds after DMM closes and can restore itself. **The easiest way to do this is to just use the installer** (which also happens to be an uninstaller), it will clean up everything properly for you.

After that, you can just uninstall Hachimi as normal.
</details>

## Android

::: warning
Patching the game on Android will disable the Google Play Store for the game, including purchases. You can try to use the game developer's store.
:::

::: danger
If you already have save data from playing, make sure you have set up a Data Link or Cygames ID before installing the patched version to transfer your progress. Login through a Google Play account is disabled.
:::

::: danger
If you have the *unpatched* game installed, you must uninstall it first. The patched game can later be updated without uninstalling.
:::

::: tip
On Xiaomi devices without HyperOS, try disabling MIUI Optimizations before installing.
You can also try the Shizuku option further down.
:::

1. If you used UmaPatcher before, open its settings page and **export the signing key somewhere safe**.
1. Uninstall the original game **if you have not patched it before using either UmaPatcher version**.
1. Download and install the latest version of [UmaPatcher Edge](https://github.com/kairusds/UmaPatcher-Edge/releases/latest/download/app-release.apk).
1. Prepare an installation package for the game, which can be:
    - **Split APK files:** A base APK file and one of the split config APKs (config.arm64_v8a, config.armeabi-v7a, etc.),
    choose only one split config that's suitable for your device.
    This is currently only used by the JP version.
    - **Single APK file**: A full, fat APK file.
    - **XAPK file**: A ZIP file that contains the split APK files (with the extension renamed to XAPK).
    ::: warning
    Do not get your APK from APKPure, it's known to cause problems.
    The recommended source is [Qoopy](https://qoopy.leadrdrk.com/), use ID 6172.
    :::
1. Open UmaPatcher, import the exported signing key if needed, and choose **Normal install**. Select the file(s) that you have prepared.
1. Tap on Patch to start the patching and installation process.
    - If install fails, you can try the Shizuku installation method below.

⚠️ You'll need to repeat this process from step 4 whenever the app updates. You do **not** need to uninstall the game to update.


<details>
<summary class="collapsible-header-sub">Patch with Shizuku (alternative, might enable store)</summary>

UmaPatcher Edge can be installed with [Shizuku](https://github.com/RikkaApps/Shizuku/releases).
This functions something like a "rootless direct install" and *could* circumvent *some* install issues.  
If you don't see this option, update to the latest version.

Unfamiliar? You will need to enable a few things:
1. First of all, install [Shizuku](https://github.com/RikkaApps/Shizuku/releases).
1. Go to `Settings > About phone` and tap `Build number` 5 times, or until you get the popup.
1. Go back to the main system settings to open `Developer options` or search for it. 
1. Enable it (`Use developer options`), then find and enable `Wireless debugging`.
    - You might need to turn `USB debugging` on as well if this doesn't work on its own.
1. Tap the setting name to open detailed wireless debugging settings.
1. Select `Pair devices with pairing code` and input the code into the Shizuku notification.
1. Open Shizuku's main app and start it.
1. Now Umapatcher Edge's install options should show the Shizuku method as `available`.
1. When done, it is recommended to stop Shizuku and disable wireless debugging again.
</details>

<details>
<summary class="collapsible-header-sub">Patch without uninstall + store updates (requires root)</summary>

UmaPatcher includes a rooted install option that doesn't require you to uninstall the game nor deal with APKs, letting you update normally from any app store.

With the game installed, tap on the card at the top of the patcher's home screen to select the app that you want to patch (if needed). Then select "Direct install" as the install method and tap on Patch. No input files are needed.

You'll need to patch the game with UmaPatcher again whenever the game updates.
</details>

<details>
<summary class="collapsible-header-sub">Manual install (not recommended)</summary>

1. Build or download the prebuilt libraries from the [Releases page](https://github.com/kairusds/Hachimi-Edge/releases).
2. Extract the APK file of the game. You might want to use [apktool](https://apktool.org/) for this.
3. Rename the `libmain.so` file in each of the folders inside `lib` to `libmain_orig.so`.
4. Copy the proxy libraries to their corresponding folders (e.g. `libmain-arm64-v8a.so` goes to `lib/arm64-v8a`). Rename them to `libmain.so`.
5. Build the APK file and install it.
</details>

## First Time Setup
Upon launching the game for the first time after installing Hachimi, you should be greeted with this dialog:

![First Time Setup](/assets/first-time-setup.jpg)

::: warning
If you don't see it after upgrading to Edge for the first time, open it from the Hachimi menu and complete the setup. Not doing so will result in outdated translations and corrupted texture issues.
:::

::: info
If you don't see it otherwise, Hachimi has not been installed correctly. Please read the install guide carefully and try again, or look at [Troubleshooting](troubleshooting.md).
:::

Tap on Next and choose your preferred translation source, then tap on Done to save your configuration and start the update check.

If selected, Hachimi will now prompt you to download a new translation update, click on Yes to start downloading the files.

You can return to this dialog later to change your translation source through the Hachimi menu.
