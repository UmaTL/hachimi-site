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
1. (*Once only*) If migrating or have uninstalled UmaPatcher, import the signing key you exported in step 1.
1. Choose **Normal install**. Select the game APK file(s) that you have downloaded.
1. Tap on Patch to start the patching and installation process.
1. (*Once only*) After it successfully completes, if you don't have a saved key yet, export your signing key from UmaPatcher Edge's settings.
   Keep it safe! You will likely need it again later for troubleshooting.

⚠️ You'll need to repeat this process from step 4 whenever the game updates. You do **not** need to uninstall the game to update. [More info on updating](faqs#how-do-i-update-on-android).

::: warning Do not share signing keys or use other's pre-patched APKs!
These are unique per device and written into the APK. They **will** cause issues updating.
:::

➡ Continue with [First Time Setup](getting-started#first-time-setup).

::: details Using Shizuku (alternative, might enable store)
UmaPatcher Edge can be installed with [Shizuku](https://github.com/RikkaApps/Shizuku/releases).
This functions something like a "rootless direct install" and *could* circumvent *some* install issues.  
If you don't see this option, update UmaPatcher to the latest version.

1. Install [Shizuku](https://github.com/RikkaApps/Shizuku/releases).
1. Follow the [Shizuku activation guide](https://shizuku.rikka.app/guide/setup/) to start Shizuku.
1. Follow the normal UmaPatcher Edge install guide above, but select **Shizuku Method** at step 7, it should show as `available` now.
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

➡ Continue with [First Time Setup](getting-started#first-time-setup).
