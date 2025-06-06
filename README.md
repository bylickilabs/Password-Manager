|Integrierte Datenbank|
|---|

> Dieser Passwort-Manager verwendet eine **integrierte Datenbank**, die lokal auf deinem Rechner gespeichert wird. <p>
> Die Passwörter werden sicher in der Datei **`passwords.pdb`** gespeichert, die mit dem **Master-Passwort** verschlüsselt ist. <p>
> Diese Datenbank wird beim ersten Speichern von Passwörtern automatisch erstellt und ermöglicht es, deine Passwörter sicher zu speichern und später wieder abzurufen, solange du das Master-Passwort hast. <p>
> Die Datenbank kann nur mit dem **korrekten Master-Passwort** entschlüsselt werden.

<br>

|Erklärung|
|---|

> Datenbank: Die Passwörter werden lokal in einer Datei passwords.pdb gespeichert, die verschlüsselt ist. <p>
> Master-Passwort: Nur das Master-Passwort kann die Daten entschlüsseln. <p>
> Automatische Erstellung: Die Datenbank wird beim ersten Speichern automatisch erstellt.

<br><br>

#### Passwort-Manager - Schritt-für-Schritt Anleitung

#### Inhaltsverzeichnis:
1. [Einleitung](#einleitung)
2. [Voraussetzungen](#voraussetzungen)
3. [Schritt 1: Vorbereitung und Installation](#schritt-1-vorbereitung-und-installation)
4. [Schritt 2: Projekt einrichten](#schritt-2-projekt-einrichten)
5. [Schritt 3: Abhängigkeiten installieren](#schritt-3-abhängigkeiten-installieren)
6. [Schritt 4: Projekt starten](#schritt-4-projekt-starten)
7. [Port manuell Ändern:](#port-manuell-ändern)
8. [Fehlerbehebung](#fehlerbehebung)
9. [Datenbank und Nutzung](#datenbank-und-nutzung)
10. [Wichtige Hinweise zur Verwendung](#wichtige-hinweise-zur-verwendung)
11. [Node.js und TLS Installation (optional)](#nodejs-und-tls-installation-optional)

<br><br>

#### Einleitung
- Willkommen zum **Passwort-Manager**! 🎉 Mit diesem Projekt kannst du **Passwörter sicher speichern**, die mit einem **Master-Passwort** verschlüsselt werden. Die Passwörter werden in einer **verschlüsselten Datenbank** (Datei `passwords.pdb`) gespeichert, die nur mit dem **Master-Passwort** entschlüsselt werden kann.
  - Diese Schritt-für-Schritt-Anleitung führt dich durch den gesamten **Installationsprozess**.

<br><br>

#### Voraussetzungen

- **[Node.js](https://nodejs.org/)**: Wir benötigen **Node.js** und **npm (Node Package Manager)**, um das Projekt auszuführen.
    - **PowerShell**: Wird für die Installation der Abhängigkeiten und das Starten des Servers benötigt.
        - **[Git (optional)](https://git-scm.com/)**: Zum Klonen des Projekts von GitHub (optional).

<br><br>
---
<br>

#### Schritt 1: Vorbereitung und Installation

- **Installiere Node.js und npm**
  - Gehe auf die [offizielle Node.js-Seite](https://nodejs.org/), lade die **LTS-Version** herunter und installiere sie.
    - Überprüfe, ob **Node.js** und **npm** korrekt installiert wurden:
      - Öffne **PowerShell** und gib folgende Befehle ein:

     ```bash
     node -v
     npm -v
     ```
      - Du solltest Versionsnummern für beide sehen, z. B. `v14.x.x` für Node.js und `6.x.x` für npm.
    
<br>

- **Installiere Git (optional)**
  - Wenn du das Projekt direkt von **GitHub** klonen möchtest, installiere **Git** von der [offiziellen Git-Seite](https://git-scm.com/downloads).

<br>

> **PowerShell im richtigen Verzeichnis ausführen**

- **Wichtig**: Du musst **PowerShell im Verzeichnis des Projekts** ausführen, da npm-Befehle nur im richtigen Verzeichnis funktionieren.
   - **So öffnest du PowerShell im richtigen Verzeichnis:**
     - **Windows Explorer**: Klicke mit der rechten Maustaste in den Projektordner (z.B. `PasswordManager`) und wähle mit der rechten Maustatste **„In Terminal Öffnen“**.

<br><br>
---
<br>

#### Schritt 2: Projekt einrichten

- **Projekt von GitHub klonen (optional)**
  - Falls du das Projekt von GitHub klonen möchtest, führe diesen Befehl in PowerShell aus:

```bash
git clone https://github.com/dein-benutzername/passwort-manager.git
```

<br>

- Navigiere zum Projektverzeichnis
  - Öffne PowerShell und gehe in das Verzeichnis des Projekts:

```yarn
cd C:\Users\dein-benutzername\Desktop\PasswordManager
```

<br><br>
---
<br>

#### Schritt 3: Abhängigkeiten installieren

- Installiere alle benötigten Abhängigkeiten
  - Um sicherzustellen, dass alle Abhängigkeiten korrekt installiert sind, führe den folgenden Befehl in PowerShell aus:

```yarn
npm install
```

> Dies lädt alle notwendigen Node.js-Abhängigkeiten, die im package.json aufgeführt sind, herunter.

<br>

- Überprüfen der installierten Abhängigkeiten
  - Überprüfe, ob express, body-parser, und crypto-js korrekt installiert wurden, indem du den folgenden Befehl eingibst:

```yarn
npm list express body-parser crypto-js
```

<br>

> Die Ausgabe sollte wie folgt aussehen:

```yarn
password-manager@1.0.0
├── body-parser@1.19.0
├── crypto-js@3.1.9-1
└── express@4.17.1
```

<br><br>
---
<br>

#### Schritt 4: Projekt starten

- Starte den Server
  - Sobald alle Abhängigkeiten installiert sind, kannst du den Server starten. Führe in deinem Projekt Verzeichnis 'Password Manager' PowerShell mit diesen Befehl aus:

```yarn
node server.js
```

- Öffne die Anwendung
  - Klicke mit gedrückter 'STRG Taste' auf den Link in der bereits geöffneten Konsole 'http://localhost:3000', um auf den Passwort-Manager zuzugreifen.

|Fehlerbehebung|
|---|
> Überprüfe, ob Node.js und npm korrekt installiert sind <p>
> Stelle sicher, dass Node.js und npm installiert sind, indem du diese Befehle in PowerShell eingibst:

```yarn
node -v
npm -v
```

|Deinstalliere falsche Abhängigkeiten|
|---|

- Falls beim Ausführen des Projekts ein Fehler wie MODULE_NOT_FOUND auftritt, bedeutet das oft, dass eine falsche Version einer Abhängigkeit installiert wurde. So gehst du vor: 
  - Deinstalliere crypto-js (oder eine andere falsche Abhängigkeit):
    - Um crypto-js (oder jede andere Abhängigkeit) zu deinstallieren, führe den folgenden Befehl aus:

```yarn
npm uninstall crypto-js
```

- Installiere die richtige Version:
  - Installiere dann die richtige Version von crypto-js:
 
```yarn
npm install crypto-js@3.1.9-1
```

|Fehler beim Starten des Servers|
|---|

- Falls du den Fehler 'EADDRINUSE' erhältst (Port bereits in Verwendung), beende den Prozess, der den Port blockiert:
  - Führe diesen Befehl in PowerShell aus, um den Prozess zu finden, der den Port 3000 verwendet:

```yarn 
netstat -ano | findstr :3000
```

- Beende den Prozess mit:

```yarn
taskkill /PID <PID> /F
```

> Ersetze <PID> durch die tatsächliche Prozess-ID, die den Port blockiert.
  - Achte hierbei darauf das du keine Windows Resourcen beendest

<br><br>
---
<br>

|Datenbank und Nutzung|
|---|

> Datenbank erstellen:
  - Wenn du den Server erfolgreich startest, wird beim ersten Speichern von Passwörtern eine Datenbank namens passwords.pdb erstellt.
    - Diese Datei enthält alle verschlüsselten Passwörter und wird im Projektverzeichnis gespeichert.

> Passwörter speichern:
  - Gib ein Master-Passwort ein und füge Passwörter hinzu.
    - Klicke auf „Daten speichern“, um die Passwörter in der verschlüsselten Datenbank zu speichern.

> Passwörter anzeigen:
  - Klicke auf „Passwörter anzeigen“, um alle gespeicherten Passwörter in der Konsole anzeigen zu lassen (bereits geöffnet).
    - Das Master-Passwort sollte eingegeben sein, und anhand der ***** im Login zu sehen sein.
   
<br<br>
---
<br>

##### - Port manuell Ändern:

Port Manuell setzen
  - Falls alle Versuche fehlschlagen den Port '3000' freizugeben, gehe wie folgt vor:
```yarn
// server.js
const express = require('express');
const fs = require('fs');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
```

- Und ändere den Port hier von '3000', auf '3001' und versuche es erneut.


