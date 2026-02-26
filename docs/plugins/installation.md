# Installing plugins

This guide explains how to install and configure plugins for Hachimi Edge.

::: danger ⚠️ SECURITY WARNING
Only install plugins from sources and developers you trust! The Hachimi Edge developers are not responible for issues or damage from third-party plugins.

Malicious plugins can steal game account credentials, result in bans, execute arbitrary code as if from the game, etc.

🚨 **On Windows, plugins have FULL ADMINISTRATOR ACCESS to your entire system. They can install malware, modify system files, access all your data, etc.**
:::

## Windows installation

On Windows, plugins must be explicitly configured in the config file.

1. **Locate the plugin file**: You should have a `.dll` file (e.g. `hachimi_myplugin.dll`).
1. **Place the plugin in the hachimi folder**: Put the plugin file in the [`hachimi` folder](/docs/hachimi/faqs.md#how-do-i-find-the-game-install-folder).
1. **Edit the config**: Open `config.json` in the `hachimi` folder and add the plugin filename:
   ```json
   {
     "windows": {
       "load_libraries": [
         "hachimi\\hachimi_myplugin.dll"
       ]
     }
   }
   ```
1. **Save and restart**: Save the config file and restart the game

## Android installation

On Android, plugins must be added through UmaPatcher Edge before patching the game.

1. **Prepare the plugin file**: You should have a `.so` file (e.g. `libmyplugin.so`).
1. **Open UmaPatcher Edge**: Launch the UmaPatcher Edge app.
1. **Add the plugin**:
   - On the home screen, scroll down to the "Plugins" section.
   - Tap the "Add Plugin" button.
   - Select your plugin `.so` file from your device.
   - The plugin will be added to the list and enabled by default.
1. **Manage plugins** (optional):
   - You can enable/disable plugins using the checkbox next to each plugin.
   - Tap "Remove" to delete a plugin from the list.
1. **Patch the game**: Follow the normal [UmaPatcher Edge installation guide](/docs/hachimi/installing-android.md) to patch and install the game.
1. **Verify**: Launch the game. If the plugin loaded successfully, you should see its effects or menu items in Hachimi's built-in GUI.

::: tip
When updating the game, your plugins are preserved in UmaPatcher Edge. Just patch the new version and they will be included automatically.
:::

## Disabling plugins

### Windows

- Remove the plugin from the `load_libraries` array in `config.json`.

### Android

- Open UmaPatcher Edge.
- Uncheck the plugin in the Plugins section.
- Re-patch the game.

## Plugin troubleshooting

### Plugin not loading

On Windows:

- Verify the path in `config.json` is correct.
- Verify the plugin is compatible with your Hachimi version.

On Android:

- Ensure the plugin was added in UmaPatcher Edge before patching.
- Check if the plugin is compatible with your Hachimi version.
- Try re-patching the game with the plugin enabled.

### Plugin crashes or doesn't work

If a plugin causes crashes or doesn't function correctly:

- **Contact the plugin author**: Plugin-specific issues should be reported to the plugin developer.

## Next steps

- Learn about [creating your own plugins](development).
