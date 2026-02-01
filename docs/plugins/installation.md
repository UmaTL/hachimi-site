---
order: 2
---

# Installing plugins

This guide explains how to install and configure plugins for Hachimi Edge.

::: danger <span style="color: red;">SECURITY WARNING</span>
**Only install plugins from sources you completely trust!**

Plugins run with full access to the game process. Malicious plugins can:
- Steal your game account credentials and change password
- Execute arbitrary code within the game's permissions
- **On Windows**: Have FULL ADMINISTRATOR ACCESS to your entire system (the game requires admin to run, so plugins always run as admin - they can install malware, modify system files, access all your data, etc.)

**Never install plugins from unknown sources or untrusted developers. Windows plugins are EXTREMELY DANGEROUS as they always run with full administrator privileges and can do anything to your system.**
:::

## Android installation

On Android, plugins must be added through UmaPatcher Edge before patching the game.

1. **Prepare the plugin file**: You should have a `.so` file (e.g., `libmyplugin.so`)

2. **Open UmaPatcher Edge**: Launch the UmaPatcher Edge app

3. **Add the plugin**:
   - On the home screen, scroll down to the "Plugins" section
   - Tap the "Add Plugin" button
   - Select your plugin `.so` file from your device
   - The plugin will be added to the list and enabled by default

4. **Manage plugins** (optional):
   - You can enable/disable plugins using the checkbox next to each plugin
   - Tap "Remove" to delete a plugin from the list

5. **Patch the game**: Follow the normal [UmaPatcher Edge installation guide](/docs/hachimi/getting-started-jp#android) to patch and install the game


6. **Verify**: Launch the game - if the plugin loaded successfully, you should see its effects or menu items in Hachimi's built-in GUI

::: tip
When updating the game, your plugins are preserved in UmaPatcher Edge. Just patch the new version and they will be included automatically.
:::

## Windows installation

On Windows, plugins must be explicitly configured in the config file.

1. **Locate the plugin file**: You should have a `.dll` file (e.g., `hachimi_myplugin.dll`)

2. **Place the plugin in the hachimi folder**: Put the plugin file in the hachimi folder.

3. **Edit the config**: Open `config.json` in the hachimi folder and add the plugin filename:
   ```json
   {
     "windows": {
       "load_libraries": [
         "hachimi\\hachimi_myplugin.dll"
       ]
     }
   }
   ```

4. **Save and restart**: Save the config file and restart the game


## Disabling plugins

To temporarily disable a plugin:

**Android:**
- Open UmaPatcher Edge
- Uncheck the plugin in the Plugins section
- Re-patch the game

**Windows:**
- Remove the plugin from the `load_libraries` array in `config.json`

## Plugin troubleshooting

### Plugin not loading

**Android:**
- Ensure the plugin was added in UmaPatcher Edge before patching
- Check if the plugin is compatible with your Hachimi version
- Try re-patching the game with the plugin enabled

**Windows:**
- Verify the path in `config.json` is correct
- Verify the plugin is compatible with your Hachimi version

### Plugin crashes or doesn't work

If a plugin causes crashes or doesn't function correctly:

- **Contact the plugin author**: Plugin-specific issues should be reported to the plugin developer

## Next steps

- Learn about [creating your own plugins](development.md)
