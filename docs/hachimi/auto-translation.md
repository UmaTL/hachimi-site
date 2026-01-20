# Auto translation
Hachimi is able to automatically translate portions of the game via the Sugoi Offline Translator or any compatible translation server that implements a similar API (such as [py3translationServer](https://github.com/gdiaz384/py3translationServer)).

### What this implies
- You will get machine translations for anything that hasn't been translated yet.
- Machine translations will be replaced with actual translations whenever they're available from the translation repo.

### Caveats
- The translation process is synchronous; the game will freeze while waiting for translations to be done. This will decrease over time as more things get translated and Hachimi is able to reload already translated data.
- The tools mentioned above are intended to be run on a PC; on Android, you may just need to adjust `sugoi_url` to your PC's address running the translation software.

## How to use
Open the Config Editor and enable one of the auto translation options (Auto translate stories/UI).

::: warning
"Auto translate UI" is not recommended in general, especially with translators that lacks an internal cache.
:::

You'll also need to run a translation program along with the game.

### For Sugoi Offline Translator
Launch the "Offline Translator" .bat file in the Sugoi Toolkit. Leave the translation program/command prompt open so Hachimi is able to use the translator (however it will not display anything through these windows).

**"Auto translate UI" is not recommended with this translator.**

### For py3translationServer
Assuming that you've already set up the models correctly, no additional configuration is needed. Just launch the server and it should work.

## Custom URL
If your translation server runs on a different port or a different machine, you might want to make Hachimi connect to a different address.

To do this, set the `sugoi_url` option manually in the config file. For example:

```json
"sugoi_url": "http://127.0.0.1:14366"
```

By default, this value might be missing or set to `null` in the config file. This is normal, and Hachimi will still connect to `http://127.0.0.1:14366` if it's not set manually.
