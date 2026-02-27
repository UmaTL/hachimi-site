# Installation guide (Android)

::: danger
Android installation is error-prone and has many gotchas. Read this page carefully!
:::

The way this works is by patching Hachimi Edge into an APK of the game.
This creates and installs a **new, separate app**, which is what leads to most gotchas.

Additionally, many things can go wrong depending on your device or Android version. Always include these when asking for help.

Hachimi Edge does not support the Global Version on Android!

## ⚠️Danger ⚠️

If you have existing save data, set up a **Data Link** or **Cygames ID** before installing the patched version to transfer your progress. Login through a Google Play account is disabled.

If you have the *unpatched* game installed, **you must uninstall it first**. The patched game can later be updated without uninstalling.

You can **not use the Google Play Store** with the game after patching, including purchases. The Cygames store should work.

## Using UmaPatcher Edge (recommended)

::: tip
On Xiaomi devices without HyperOS, we recommend the Shizuku option.
You can also try disabling `MIUI Optimizations` before installing, but this will reset **all app permissions**.
:::

UmaPatcher is an installer tool that automates the APK patching. It downloads the latest version of Hachimi Edge for you when patching.

1. (*Once only*) If you are migrating from non-Edge UmaPatcher, open its settings page and **export the signing key**. Keep it safe, you will need it again later.
1. (*Once only*) Uninstall the **original, unpatched** game. Skip if you have already patched successfully.
1. Download and install the latest version of [UmaPatcher Edge](https://github.com/kairusds/UmaPatcher-Edge/releases/latest/download/app-release.apk).
1. Download the game APK file(s). Supported formats are:
    - **Split APK files:** A base APK plus device-dependent modular APKs.
    - **Single APK file**: A full APK including all split APKs. Deprecated.
    - **XAPK file**: A renamed ZIP archive of the split APK files.
    ::: warning
    APKPure is known to cause problems. The recommended source is [Qoopy](https://qoopy.leadrdrk.com/), use ID 6172.
    :::
1. Open UmaPatcher.
1. (*Once only*) If migrating, import the signing key you exported in step 1.
1. Choose **Normal install**. Select the game APK file(s) that you have downloaded.
1. Tap on Patch to start the patching and installation process.
1. Continue with [First Time Setup](getting-started#first-time-setup).

⚠️ You'll need to repeat this process from step 4 whenever the game updates. You do **not** need to uninstall the game to update.

::: details Using Shizuku (alternative, might enable store)
UmaPatcher Edge can be installed with [Shizuku](https://github.com/RikkaApps/Shizuku/releases).
This functions something like a "rootless direct install" and *could* circumvent *some* install issues.  
If you don't see this option, update UmaPatcher to the latest version.

1. Familiarize yourself with the normal guide above first.
1. Install [Shizuku](https://github.com/RikkaApps/Shizuku/releases).
1. Go to `Settings > About phone` and tap `Build number` 5 times, or until you get the popup.
1. Go back to the main system settings to open `Developer options` or search for it.
1. Enable it (`Use developer options`), then find and enable `Wireless debugging`.
    - You might need to turn `USB debugging` on as well if this doesn't work on its own.
1. Tap the setting name to open detailed wireless debugging settings.
1. Select `Pair devices with pairing code` and input the code into the Shizuku notification.
1. Open Shizuku's main app and start it.
1. Now UmaPatcher Edge's install options should show the Shizuku method as `available`.
1. When done, it is recommended to stop Shizuku and disable wireless debugging again.
:::

::: details Patch without uninstall + store updates (requires root)
UmaPatcher Edge includes a rooted install option that doesn't require you to uninstall the game nor deal with APKs, letting you update normally from any app store.

With the game installed, tap on the card at the top of the patcher's home screen to select the app that you want to patch (if needed). Then select "Direct install" as the install method and tap on Patch. No input files are needed.

You **will still** need to patch the game with UmaPatcher again whenever the game updates.
:::

## Manual install (not recommended)

1. Build or download the prebuilt libraries from the [Releases page](https://github.com/kairusds/Hachimi-Edge/releases).
1. Extract the APK file of the game. You might want to use [apktool](https://apktool.org/) for this.
1. Rename the `libmain.so` file in each of the folders inside `lib` to `libmain_orig.so`.
1. Copy the proxy libraries to their corresponding folders (e.g. `libmain-arm64-v8a.so` goes to `lib/arm64-v8a`). Rename them to `libmain.so`.
1. Build the APK file and install it.
1. Continue with [First Time Setup](getting-started#first-time-setup).
