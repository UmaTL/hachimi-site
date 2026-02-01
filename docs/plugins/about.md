---
title: About
order: 1
---

# Plugins

Hachimi supports a plugin system that allows developers to extend its functionality through dynamic libraries. Plugins can hook into the game, modify behavior, add GUI elements, and much more.

## What are plugins?

Plugins are dynamic libraries (`.so` files on Android, `.dll` files on Windows) that integrate with Hachimi Edge through a well-defined API. They run in the same process as the game and have access to powerful features for modifying game behavior.

## What can plugins do?

Plugins have access to a comprehensive API that allows them to:

- **Hook and inspect IL2CPP**: Intercept functions and access Unity IL2CPP classes, methods, and fields
- **Add GUI Elements**: Register menu items, sections, and show notifications in Hachimi's built-in GUI
- **Android DEX Loading**: Load and execute Java/Kotlin code on Android (API v2+)
- ...**and much more**

## Safety considerations

::: danger <span style="color: red;">SECURITY WARNING</span>
**Only install plugins from sources you completely trust!**

Plugins run with full access to the game process. Malicious plugins can:
- Steal your game account credentials and session tokens
- Modify game data in ways that could result in account bans
- Cause game crashes or data corruption
- Send your game data to external servers
- Execute arbitrary code within the game's permissions
- **On Windows**: Have FULL ADMINISTRATOR ACCESS to your entire system (the game requires admin to run, so plugins always run as admin - they can install malware, modify system files, access all your data, etc.)

**Never install plugins from unknown sources or untrusted developers. Windows plugins are EXTREMELY DANGEROUS as they always run with full administrator privileges and can do anything to your system.**
:::

Before installing a plugin, consider:

- **Source Trust**: Only use plugins from developers you trust
- **Community Verification**: Check if the plugin has been reviewed by the community

## Available plugins


## Next steps

- **For Users**: Learn [how to install plugins](installation.md)
- **For Developers**: Learn [how to create plugins](development.md)
