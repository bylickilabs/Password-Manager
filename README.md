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

####Inhaltsverzeichnis:
1. [Einleitung](#einleitung)
2. [Voraussetzungen](#voraussetzungen)
3. [Schritt 1: Vorbereitung und Installation](#schritt-1-vorbereitung-und-installation)
4. [Schritt 2: Projekt einrichten](#schritt-2-projekt-einrichten)
5. [Schritt 3: Abhängigkeiten installieren](#schritt-3-abhängigkeiten-installieren)
6. [Schritt 4: Projekt starten](#schritt-4-projekt-starten)
7. [Fehlerbehebung](#fehlerbehebung)
8. [Datenbank und Nutzung](#datenbank-und-nutzung)
9. [Wichtige Hinweise zur Verwendung](#wichtige-hinweise-zur-verwendung)
10. [Node.js und TLS Installation (optional)](#nodejs-und-tls-installation-optional)

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

#### Schritt 1: Vorbereitung und Installation

### 1. **Installiere Node.js und npm**

1. Gehe auf die [offizielle Node.js-Seite](https://nodejs.org/), lade die **LTS-Version** herunter und installiere sie.
2. Überprüfe, ob **Node.js** und **npm** korrekt installiert wurden:
   - Öffne **PowerShell** und gib folgende Befehle ein:

     ```bash
     node -v
     npm -v
     ```
      - Du solltest Versionsnummern für beide sehen, z. B. `v14.x.x` für Node.js und `6.x.x` für npm.
    
<br><br>

##### 2. **Installiere Git (optional)**
> Wenn du das Projekt direkt von **GitHub** klonen möchtest, installiere **Git** von der [offiziellen Git-Seite](https://git-scm.com/downloads).

<br><br>

#### 3. **PowerShell im richtigen Verzeichnis ausführen**

- **Wichtig**: Du musst **PowerShell im Verzeichnis des Projekts** ausführen, da npm-Befehle nur im richtigen Verzeichnis funktionieren.

   **So öffnest du PowerShell im richtigen Verzeichnis:**
   - **Windows Explorer**: Klicke mit der rechten Maustaste auf den Projektordner (z.B. `PasswordManager`) und wähle **„PowerShell hier öffnen“**.

---

#### Schritt 2: Projekt einrichten

### 1. **Projekt von GitHub klonen (optional)**

Falls du das Projekt von GitHub klonen möchtest, führe diesen Befehl in PowerShell aus:

```bash
git clone https://github.com/dein-benutzername/passwort-manager.git
