---
title: About
---

# Plugins <!-- markdownlint-disable-line MD025 -->

Hachimi supports a plugin system that allows developers to extend its functionality through dynamic libraries. Plugins can hook into the game, modify behavior, add GUI elements, and much more.

## What are plugins?

Plugins are dynamic libraries (`.so` files on Android, `.dll` files on Windows) that integrate with Hachimi Edge through a well-defined API. They run in the same process as the game and have access to powerful features for modifying game behavior.

## What can plugins do?

Plugins have access to a comprehensive API that allows them to:

- **Hook and inspect IL2CPP**: Intercept functions and access Unity IL2CPP classes, methods, and fields
- **Add GUI Elements**: Register menu items, sections, and show notifications in Hachimi's built-in GUI
- **Android DEX Loading**: Load and execute Java/Kotlin code on Android (API v2+)
- **…and much more.**

## Safety considerations ⚠️

Never install plugins from unknown sources or untrusted developers.  
Plugins run with full access to the game process. Malicious plugins can:

- Steal your game account credentials and session tokens.
- Modify game data in ways that could result in account bans.
- Cause game crashes or data corruption.
- Send your game data to external servers.
- Execute arbitrary code within the game's permissions.

::: danger ⚠️ CRITICAL SECURITY WARNING
**On Windows, plugins have FULL ADMINISTRATOR ACCESS to your entire system due to the game running with admin privileges. They can install malware, modify system files, access all your data, etc.**
:::

Before installing a plugin, consider:

- **Source trust**: Only use plugins from developers you trust.
- **Community verification**: Check if the plugin has been reviewed by the community.
- **Update risk**: Previously trusted plugins could become malicious over time.

The Hachimi Edge developers cannot verify third-party plugins and will not be responible for any issues or damage caused by your use of them.

## Available plugins
<!-- List plugins here. -->

## Next steps

- **For Users**: [Learn how to install plugins](installation).
- **For Developers**: [Learn how to create plugins](development).
