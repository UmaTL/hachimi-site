# Erste Schritte

## Kompatibilität

Bitte prüfe vor der Installation die Kompatibilität.

### Windows

| Version | Unterstützt |
| --- | :---: |
| JP | ✅ |
| KR | ⚠️ |

### Android

| Version | Normale Installation | Direkte Installation |
| --- | :---: | :---: |
| JP | ✅ | ✅ |
| KR | ⚠️ | ⚠️ |
| TW GP | ⚠️ | ❔ |
| TW MC | ⚠️ | ⚠️ |

- ✅ – Vollständig unterstützt.  
- ⚠️ – Funktioniert, aber das Spiel selbst läuft wegen externer Umstände nicht (z. B. wegen Anti-Cheat).  
- ❔ – Könnte funktionieren, aber lieber nicht darauf verlassen.  
- ❌ – Nicht unterstützt.

## Installation

### Windows

Ab Version v0.13.0 unterstützt Hachimi zwei Lade-Methoden mit unterschiedlichen Installationswegen. **Wähle nur eine Methode und installiere entweder mit dem Installer oder manuell – nicht beides gleichzeitig!**

#### Methode 1: DotLocal DLL-Umleitung (UnityPlayer.dll) (**empfohlen**)

> ⚠️ Einige Anti-Cheats wie Vanguard reagieren empfindlich auf aktivierte DLL-Umleitung – selbst wenn sie das jeweilige Spiel gar nicht betrifft. Deaktiviere sie daher, wenn du z. B. Valorant spielen willst.
>
> ℹ️ Spiel startet nicht nach der Installation? Gehe in den Installationsordner des Spiels, Rechtsklick auf die .exe-Datei → Eigenschaften → Kompatibilität → **"Vollbildoptimierungen deaktivieren"** aktivieren.

- **Mit Installer:**  
Lade dir die aktuelle `hachimi_installer.exe` von der [Releases-Seite](https://github.com/Hachimi-Hachimi/Hachimi/releases) herunter.  
Starte ihn, **wähle "UnityPlayer.dll" als Ziel** und klicke auf Installieren.

Beim ersten Mal wirst du möglicherweise gefragt, ob du die DotLocal DLL-Umleitung aktivieren möchtest. Bestätige mit OK.  
**Ein Neustart ist erforderlich, damit es funktioniert.**

- **Manuell:**

1. Befolge den Abschnitt "Konfigurieren der Registrierung" in [diesem Artikel](https://learn.microsoft.com/de-de/windows/win32/dlls/dynamic-link-library-redirection#optional-configure-the-registry), um die Umleitung zu aktivieren. Starte danach den PC neu.
1. Lade die aktuelle `hachimi.dll` von der [Releases-Seite](https://github.com/Hachimi-Hachimi/Hachimi/releases) herunter.
1. Erstelle im Installationsordner des Spiels einen neuen Ordner mit dem Namen `umamusume.exe.local` und verschiebe die DLL dorthin. Benenne sie um in `UnityPlayer.dll`.
1. Lade die aktuelle `cellar.dll` von der [Cellar Releases-Seite](https://github.com/Hachimi-Hachimi/Cellar/releases) herunter.
1. Verschiebe sie ebenfalls nach `umamusume.exe.local` und benenne sie um in `apphelp.dll`.

> ℹ️ Tipp für LoL/Valorant-Spieler: Du musst die DLL-Umleitung jedes Mal deaktivieren, wenn du diese Games zocken willst. Dieses Tool hilft dabei: <https://github.com/LeadRDRK/DotLocalToggle/releases> – einfach starten, bis "deaktiviert" angezeigt wird, und neu starten.

#### Methode 2: Plugin-Shimming (cri_mana_vpx.dll)

> ⚠️ Diese Methode funktioniert nach einem Update nicht mehr. Bitte folge dem Guide unten, um auf Methode 1 umzusteigen.

##### Umstieg von Methode 2 zu Methode 1

Der Wechsel ist nicht ganz einfach.  
Du musst **Shinmy vollständig deinstallieren**, bevor du Methode 1 nutzen kannst.  
Shinmy bleibt bis zu 30 Sekunden nach dem Schließen aktiv und kann sich selbst wiederherstellen.

**Der einfachste Weg ist die Nutzung des Installers**, der auch als Uninstaller dient.

Danach kannst du Hachimi normal deinstallieren.

### Android

Am einfachsten installierst du die App mit dem [UmaPatcher](https://github.com/LeadRDRK/UmaPatcher), der die APK für dich modifiziert.  
Es wird empfohlen, das Spiel vorher **nicht** installiert zu haben.

> ❗ Falls du das Spiel bereits installiert hast, musst du es **deinstallieren**, bevor du die gepatchte Version das erste Mal installierst.  
> Updates später kannst du ohne Deinstallation machen – einfach erneut patchen.
>
> ❗ Verwende keine APKs von APKPure – diese verursachen bekannte Probleme.

1. Lade die aktuelle UmaPatcher-Version von der [Releases-Seite](https://github.com/LeadRDRK/UmaPatcher/releases) herunter und installiere sie.
1. Bereite das Installationspaket vor. Das kann sein:
    - **Split APK-Dateien:** Eine Basis-APK + eine passende Split-Konfigurationsdatei (z. B. config.arm64_v8a).  
      Nur die JP-Version nutzt derzeit dieses Format.
    - **Single APK-Datei:** Eine komplette APK in einem File.
    - **XAPK-Datei:** ZIP-Datei mit allen Split-Dateien (umbenannt auf .xapk).
1. Öffne UmaPatcher und wähle "Normale Installation". Lade die vorbereiteten Dateien.
1. Tippe auf "Patch", um die Installation zu starten.

Diesen Vorgang musst du **nach jedem App-Update wiederholen**, beginnend bei Schritt 2.

#### Für Root-Nutzer

UmaPatcher bietet auch eine Root-Methode, bei der du die App nicht deinstallieren musst.

Wähle das Spiel über den oberen Bereich im UmaPatcher aus, dann "Direkte Installation", und tippe auf "Patch".  
Keine Dateien notwendig.  
Auch hier musst du nach App-Updates neu patchen.

#### Manuell

1. Lade oder baue die Bibliotheken von der [Releases-Seite](https://github.com/Hachimi-Hachimi/Hachimi/releases).
1. Extrahiere die APK mit Tools wie [apktool](https://apktool.org/).
1. Benenne jede `libmain.so` in `libmain_orig.so` um.
1. Kopiere die Proxy-Bibliotheken in die jeweiligen lib-Ordner (z. B. `lib/arm64-v8a`) und benenne sie wieder zu `libmain.so`.
1. Baue die APK neu und installiere sie.

## Erster Start

Beim ersten Start nach der Hachimi-Installation solltest du diesen Dialog sehen:

![First Time Setup](/assets/first-time-setup.jpg)

*Wenn du das nicht siehst, wurde Hachimi nicht korrekt installiert. Bitte überprüfe die Anleitung und versuche es erneut.*

Tippe auf "Weiter", wähle dein bevorzugtes Übersetzungs-Repo, und dann auf "Fertig", um die Konfiguration zu speichern.

Hachimi wird nun ein Übersetzungs-Update vorschlagen – bestätige mit "Ja", um die Dateien herunterzuladen.
