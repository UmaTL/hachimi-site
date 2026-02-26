# Troubleshooting

Known issues and their solutions are listed here. Check the General section first, followed by that of your platform, and finally [what to do if your issue isn't covered here](#my-issue-isnt-listed-on-this-page) at the bottom.

[[toc]]

## General

### "Communication error" messages when attempting to start the game

Most users do **not** need a VPN to connect to the game itself (only DMM, or making a Steam account), and it can cause issues instead. Check that your VPN is off, or use split tunneling if supported by your VPN client.
**Some regions or ISPs *do* require a VPN to connect to the game**.

For the JP game version, you can check by accessing the [official API website](https://api-umamusume.cygames.jp). If you get `404 Not Found`, you **don't** need a VPN. `Access Denied` means you do. Other results likely point to an issue with your network or ISP and we can't help you with that.

See [GameTora's guide](https://gametora.com/umamusume/playing-on-dmm) to get started with VPN, and the [OpenVPN Google Doc](https://docs.google.com/document/d/18m9wHT4_AIh5ePKSo_ZYH9nSgNh492YQx76bIxmgqyc/edit?tab=t.0#heading=h.7cq4imx1gkqf) for an alternative VPN solution.

::: details I need a VPN for the game.
If you decide to use OpenVPN (with UmaVPN.top), it is recommended to use the v2.7 client as it supports split tunneling (select it when downloading the profile from UmaVPN). Earlier versions require the pinning script in the guide above, which is prone to update issues and does not include newer domains.

Some VPNs (notably VPNGate, used by UmaVPN) only support IPv4. You can try [unbinding IPv6 from the adapter you use](https://networking.grok.lsu.edu/article.aspx?articleid=17573), but **please note that this might cause other issues**, possibly in the future.
A safer method should be to [prefer IPv4](https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/configure-ipv6-in-windows#use-registry-key-to-configure-ipv6), but it's more involved and its helpfulness is currently untested.

Your client or configuration could also have general issues with split tunneling. Try turning it off in that case.
:::

::: details Split tunneling note (DMM or general-use VPN).
Depending on how you configured your VPN, either exclude the game or include only DMM.

If using UmaVPN.top, the pinning script only affects the game (useless for DMM) and the new `split-tunneling` option for profiles includes both. For the latter, you can open the profile in a text editor, scroll down to the `Route` section, and remove the non-DMM domains. On Android, you might also be able to edit this through the OpenVPN GUI.
:::

If both the **Global Steam** and **Japanese DMM** version of the game are installed, [try the steps for the Error 501 issue](#error-501).

### Corrupted/jumbled textures or text

::: tip
If you are playing the **Global** version, you might have accidentally installed translations **not specifically made for Global**.
To fix this, open the Hachimi menu, run the `First time setup` again to choose a compatible source or none, then restart the game.
:::

This happens because there is a mismatch between the game's sprite textures and the translated ones. The most likely reason is the game simply updated and changed some sprites, usually affecting the `atlas` type.

1. Try to update your translations from the menu. If an update was found, **restart the game after it finishes**.
    - On Android/some devices, you *might* also need to delete the affected folder (like `atlas`) to let it update correctly.
1. If no update was found, your translation source is out of date. Just wait for an update, or check in with the source, letting them know if needed.
    - <small>If it's close to a game update, source maintainers will likely be working on it. Please check if they're already aware before bothering them.</small>

::: details Less likely causes (legacy) <!-- markdownlint-disable-next-line MD032 -->
1. Your translation source might be entirely inactive. This could indicate you're still using an old source from the original Hachimi.
Make sure you're using Hachimi Edge, then open its menu and go through the `First time setup` again.
1. The list of sources itself could be outdated, particularly if you upgraded straight from old Hachimi. In this case, you can use `Restore Defaults` to reset it to the latest bundled one.
    - ⚠️ Warning: This will reset all settings.
:::

<small>

If none of your language's sources are active, or you want to temporarily clean your UI from the mess, you have these options:

1. Open `hachimi/localized_data/assets` in the [install folder](faqs#how-do-i-find-the-game-install-folder) and delete the offending folder, likely `atlas`.
    - If you're so inclined, you can delete only the one that causes issues. `common` is likely.
1. Check `Menu` -> `Config Editor` -> `Disable translations`.
1. Fix it for yourself using the [toolset](/docs/translation-guide/translating#hachimi-tools).

Don't update your translations until you know the source has updated. You can also enable [`Lazy translation updates`](config).

</small>

### Physics (hair, clothing, etc.) are stiff when running at 60+ FPS

Change the "Physics update mode" setting to "Mode60FPS". This setting is available in the Config Editor in the "Gameplay" tab.

### Game won't load beyond the splash/start screen

If you're on **Steam Global**, use `alt` + `enter` to toggle between fullscreen and windowed.
This seems to be a bug in the game itself, which Hachimi causes to trigger much more easily. An official fix is presumably coming.

If the game **gets stuck** on the splash screen, see [Error 501](#error-501).

If you can see the splash screen but the game **crashes** afterward, see [The game won't start after installing Hachimi](#the-game-wont-start-after-installing-hachimi).

### The in-game background is shrunk / White border

Open Hachimi Menu -> Config Editor and reset `virtual resolution multiplier` to 1.
If that doesn't help, try adjusting it until it looks ok.

### First time setup: Repo selection stuck loading or shows an error

This probably means you're using a VPN to access the game itself. Temporarily turn it off until the setup is over and translations are downloaded.

**OS Error 103 (Android)**: Try disabling battery optimization for the game or [reset your network settings](https://youtu.be/ah99wYYtUqU).

See also [this related issue](#not-receiving-translation-updates).

### Lyrics switch between language randomly

This issue has been fixed in Hachimi Edge v0.15.1. Update to the latest version.

### Something isn't translated

Translations are provided by volunteers in the community offering up their time. Many things are not yet done. Check in with your chosen [translation source](/credits) for progress and try to support its translators.

### "Account restricted" message

This means you are banned.

## Windows

### Runtime error on launch

This means you're using an old version of Hachimi, which broke after the game update on 2025/09/24 (JP) and 2025/11/11 (Global).
[Install Hachimi Edge](getting-started).

If you're already using Edge, try reinstalling the latest version.

### The game won't start after installing Hachimi

::: warning
Some kernel-level anti-cheats (eg. Vanguard) can prevent the game from launching with Hachimi Edge.
Make sure these are actively running on your computer, then try again.
:::

- Make sure you are using [Hachimi Edge](getting-started).
- Steam: Game updates can replace some modified files. Re-install Hachimi using the installer.
- DMM: Restart (**not** shutdown + start!) your computer after the installer enables DotLocal redirection.  
- DMM: Try restarting the DMM Launcher or force it to always run as administrator.
- Navigate to the game's installation folder, right-click the game's exe file, open **Properties**, and try **one or more** of the following in order:
  - Enable `Disable fullscreen optimizations` under the Compatibility tab.
  - Open `Change high DPI settings`, enable `High DPI scaling override`, and set it to `Application`.
- Open `Windows Settings → Display → Graphics`, add the game's exe file there, and tick `Don't use optimizations for windowed games` in its options.

<!-- 
    TODO: add more details about weird edge cases like old unsupported versions of CarrotJuicer?
-->

### The game stopped launching

If Hachimi Edge worked fine before, this likely means the game updated and replaced some modified files.
Simply reinstall Hachimi Edge.

### Input registering at the wrong spot / Game appears stretched in full screen mode

::: warning
On the Global client, changing `Resolution scaling` can break rendering and input behavior even at 1080p resolution.  
It's strongly recommended to **keep `Resolution scaling` at its default value** on the Global version.
:::

::: info
If this is happening after resizing the window on DMM, this issue has been fixed in Hachimi Edge v0.14.3. Update to the latest version.
:::

- Ensure that the `Full screen mode` and `Resolution scaling` options are set correctly.  
- If your screen resolution is higher than **1080p**, try selecting a different `Resolution scaling` value.  
- If your monitor's aspect ratio is not **16:9**, set `Full screen mode` to **Exclusive** instead.

### Not receiving translation updates

First of all, there might not be updates. This should be indicated by a "No updates found" message.
If this message doesn't show and you use a VPN to access the game, turn it off during the update phase.

If you used Hachimi before the Edge version, your list of translation sources might be outdated. Change the Meta URL in the first time setup to `https://gitlab.com/umatl/hachimi-meta/-/raw/main/meta.json` or reset your settings.

### Game stutters

Make sure you don't have auto-translate enabled in the Hachimi settings. This only works when you have a translation server set up correctly, and will cause performance problems even then.

### Steam: Issues with GUI/overlay

The Steam overlay can sometimes interfere with Hachimi's overlay. Disable one of them (Steam recommended).

To disable Hachimi's: open the Hachimi menu and check the "Disable overlay (GUI)" checkbox in the "General" tab, press Save, and restart the game.
When you want to re-enable Hachimi's overlay, open Hachimi's config file (config.json) in a text editor and change the `disable_gui` value from `true` back to `false`, then restart the game. This config file is located in the `hachimi` folder inside the game's installation folder.

### DMM: Can't play certain games after installing Hachimi

The loading method Hachimi uses for the **DMM** version of the game is DotLocal DLL Redirection, which causes issues with some anti-cheats (eg. Vanguard).
You need to disable DLL redirection whenever you want to play an affected game.
[DotLocalToggle](https://github.com/LeadRDRK/DotLocalToggle/releases/) is a small program that lets you quickly toggle it.
Alternatively, play the **JP Steam** version.

### Installer: "Code execution cannot proceed / VCRUNTIME" error

Install the latest [VC++ redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) matching your device architecture. If you're unsure, it's 99% likely to be `x64`.

### Installer: I/O error: The system cannot find the file specified (os error 2)

This is likely to occur on global due to some file name differences not yet accounted for. It shouldn't affect Hachimi and can be safely ignored.

### Installer: I/O error: Access is denied (os error 5)

Something is using files you're trying to modify. Likely means you still have the game open while trying to (un)install Hachimi.

### Sound issues

This is a bug in the game, not Hachimi. Some users can turn on Windows Sonic without adverse effects to fix it.

### Error 501

Both versions use the same data download directory name with different capitalization.
Case sensitivity must be enabled on this directory for them to work together.
::: tip
If you want/need to move manually: To go directly to the game's data directory, use `WinKey + R` and enter `%localappdata%low\Cygames` in the dialog.
Global uses "Umamusume" while JP uses "umamusume".
:::

1. Close the game.
1. Open the `Start Menu`, search for `PowerShell`, choose "Run as Admin".
1. Run the following command: `fsutil.exe file setCaseSensitiveInfo $env:USERPROFILE\AppData\LocalLow\Cygames enable`.
    - If you get `Error: Unsupported action` or similar, first run the following command: `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux`, then try again.
    - If you get `Error: The directory is not empty`, temporarily move everything out of the `Cygames` folder, then try again:
    ```powershell
    New-Item -ItemType Directory "$env:USERPROFILE\AppData\LocalLow\CygamesTEMP"
    Move-Item "$env:USERPROFILE\AppData\LocalLow\Cygames\*" "$env:USERPROFILE\AppData\LocalLow\CygamesTEMP"
    ```
1. If you had to empty the Cygames folder, move everything back into it:
    ```powershell
    Move-Item "$env:USERPROFILE\AppData\LocalLow\CygamesTEMP\*" "$env:USERPROFILE\AppData\LocalLow\Cygames"
    Remove-Item "$env:USERPROFILE\AppData\LocalLow\CygamesTEMP"
    ```

### Global Steam and JP DMM versions constantly ask to redownload data

See [Error 501](#error-501).

## Android

### Patching failed

::: tip Just in case
If you don't have a signing key saved yet, export it from UmaPatcher's settings first.
:::

- Make sure you selected both the **base and split APK** files, or the **single XAPK** file.
  Tap and hold to select multiple files in the file picker.
  - We recommended downloading APKs from [Qoopy](https://qoopy.leadrdrk.com/) (use ID **6172**).
- Close UmaPatcher Edge and clear its app cache & data from Android's `App info → Storage`.
- Redownload and reinstall UmaPatcher Edge, and **import your signing key** again.
- If you see `kotlinx` mentioned in the installer log, use UmaPatcher's `Save patched file` method and install the resulting file using [SAI](https://github.com/aefyr/sai/releases).
- If you're on a **Xiaomi/POCO** device running **MIUI** (not **HyperOS**), try the [Shizuku install method](installing-android#using-umapatcher-edge-recommended) or disabling *MIUI Optimizations* from Developer Options, it can sometimes interfere with the installation.
    ::: warning
    Disabling **MIUI Optimizations** will reset **all app permissions** and may cause apps to lose granted access (storage, notifications, etc.).
    :::

### "App not installed as app isn't compatible" error

::: warning
These steps are required for some Samsung devices and involve connecting your phone to a PC. They may also work for other Android devices.
:::

This issue can occur when the game has been *uninstalled* but still remains inside a **Secure Folder**. Follow these steps to completely remove the game:

1. **Enable USB Debugging** on your device from Developer Options.  
   If you don't know how, check this [YouTube Short Guide](https://www.youtube.com/shorts/p7DDuq56suU)
1. **Download and extract** the [Android Platform Tools (ADB)](https://developer.android.com/tools/releases/platform-tools#downloads) ZIP file on your computer.
1. **Open a Terminal** by right-clicking an empty area inside the extracted ADB folder (where `adb.exe` is located) and selecting **Open in Terminal** (or similar).
   - Holding **Shift** while right-clicking in Windows 10 should display the **"Open PowerShell window here"** option.
1. **Connect your device** to the computer via USB (USB-C or any compatible cable).
1. In the Terminal window, type `adb.exe` and press **Enter** to ensure it's recognized.
1. Then type `adb devices` and press **Enter**.  
   Look at your device and **grant USB debugging permission** when prompted, then run the command again to verify the connection.  
   It should display something like `"ABCD1234EFGH" device` in the Terminal.
   If it doesn't, see below.
1. Finally, type `adb uninstall jp.co.cygames.umamusume` and press **Enter** to uninstall the game.

#### Unauthorized device troubleshooting

If typing `adb devices` and pressing **Enter** shows **"unauthorized"** instead of **"device"**:

1. On your device, **disable USB debugging**, then **re-enable** it.
1. Reconnect the device and **grant the USB debugging permission** again when prompted.
1. Repeat the relevant steps above (usually steps 5–7).

### I/O error: Permission denied (os error 13)

Due to the new scoped storage introduced in Android 10, Hachimi can fail to create its data directory.  

1. Close the game.
1. Open your file manager and navigate to `Android/media`.
1. Create a folder named `jp.co.cygames.umamusume` if needed.
1. Inside the newly created folder, create another folder named `hachimi`.
1. Relaunch the game.

### I/O error: File exists (os error 17)

Reboot your device and try launching the game again. If the error persists, ask for help in the Discord server.

### Crashing after launch (specific devices)

:::warning
This is **NOT** related to the crashing issue that happens with an older Hachimi version (v0.14.1).  
See [this guide](faqs.md#how-do-i-update-on-android) to update Hachimi.
:::

This might be needed for some Samsung devices and emulators.

1. Follow [os error 13](#io-error-permission-denied-os-error-13) first, but don't launch the game yet.
1. Download [this config file](https://files.leadrdrk.com/hachimi/android-compat/config.json) and put it inside the `hachimi` folder (make sure that it's called `config.json`).

### Missing translation selection during first time setup

See [os error 13](#io-error-permission-denied-os-error-13).

### Taps are offset

Open Hachimi's menu -> Config Editor and play with the virtual resolution multiplier to find which value works best.

### Taps don't register, or cause the game to crash or freeze

This issue has been fixed in Hachimi Edge v0.15.1. Make sure you have [updated](faqs.md#how-do-i-update-on-android).

<details>
<summary class="collapsible-header-sub">I'm experiencing this on a version newer than 0.15.1</summary>

:::tip
Turning off the GUI disables translation updates. You'll have to occasionally toggle it on & off again to do so.
:::

1. Make sure your translations are up to date. Let Hachimi update if you can and don't touch anything until it's done.
1. Open Hachimi's menu -> Config Editor and select Disable Overlay (GUI).
    - To re-enable it, open Hachimi's `config.json` file in a text or JSON editor and change the `disable_gui` value from `true` back to `false`, then restart the game. This file is located in `android/media/jp.co.cygames.umamusume/hachimi` (might differ with phone brand).
1. Please report the issue to Hachimi Edge devs on Discord or GitHub.

</details>

### Patched successfully but no translations

Run the first time setup again from Hachimi Edge's menu. Make sure the translations are downloaded and up to date.
Check your translation source's info to make sure it translates what you're looking at.

If during patching you saw a message mentioning `libmain.so`, you can try the following in order until one works:

1. Force redownload Hachimi Edge in the UmaPatcher Edge settings, then patch again.
1. Clear UmaPatcher Edge's cache and data from Android's `App info → Storage`.
1. Reinstall UmaPatcher Edge, then patch again.
1. (Advanced!) Restart your device into recovery mode, wipe the cache, then patch again.
<!-- Todo: How safe is the last one...? -->

### Cannot log in via a Google Play account

You cannot log in to the patched version of the game using a Google Play account and must use a Data Link password instead.
If you have a Data Link password already created, log in to that account from the title screen (☰ > Data Link).

If you *don't* have a Data Link password, you will need to uninstall the patched version of the game, reinstall the unpatched version of the game, log in via your Google Play account, then create a Data Link password.
After that, you can repeat the patching process and then log in using the created Data Link password.
Alternatively, you may log in to a Cygames ID to link your account data.

### You are not permitted to play on this device (この端末でのプレイは許可されていません) error

#### Your device is rooted

Make sure your connection is stable and that the device is passing at least **DEVICE_INTEGRITY** on the Play Integrity servers (you can verify this using the [Play Integrity API Checker](https://play.google.com/store/apps/details?id=gr.nikolasspyr.integritycheck) app). If it passes, hiding root from the game using **Magisk's built-in DenyList** (enable *Enforce DenyList* if it doesn't work) should make it work. Other tools such as **Shamiko** may also do the trick.

#### Your device is not rooted

If this error message continues to show on your device, it may indicate an unstable connection to the Play Integrity servers, or that you need to use a **VPN** when launching the game. See the [Communication error](#communication-error-messages-when-attempting-to-start-the-game) section for more details.

## Emulators (incl. Google Play Games)

Neither the game nor Hachimi support emulators. You can get them to work, but you're on your own. To play on PC, use the DMM or Steam client.

## My issue isn't listed on this page

Uninstall Hachimi using the installer. Try to use the one you installed your current version with, but the latest one should work just fine.
If you have multiple game versions installed, make sure you uninstall from the right path. Then reinstall latest Hachimi Edge.
If that doesn't work, you can ask in the `help/support` channel on the [Hachimi Project Discord](https://discord.gg/hachimimod). Please state your game server, device platform and model, and clearly explain your issue and what you have tried.
