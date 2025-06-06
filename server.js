// server.js
const express = require('express');
const fs = require('fs');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Middleware, um JSON-Daten zu parsen
app.use(bodyParser.json());

// Statische Dateien (HTML, CSS, JS) bereitstellen
app.use(express.static(path.join(__dirname)));

// Route für den Root-Pfad (/), um index.html bereitzustellen
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API-Endpunkt zum Speichern der Daten (Passwörter und Master-Passwort)
app.post('/save-passwords', (req, res) => {
    const { masterPassword, passwords } = req.body;

    console.log('Empfangene Daten:', req.body); // Debugging: Überprüfe die empfangenen Daten

    if (!masterPassword || !passwords) {
        console.error('Fehlende Daten: Master-Passwort oder Passwörter');
        return res.status(400).json({ error: 'Master-Passwort oder Passwörter fehlen.' });
    }

    try {
        // Wandeln Sie das Master-Passwort in einen 32-Byte-Schlüssel um
        const key = crypto.createHash('sha256').update(masterPassword).digest();

        // Erzeuge einen Initialisierungsvektor (IV) für die Verschlüsselung
        const iv = crypto.randomBytes(16); // Zufälliger 16-Byte IV
        const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

        let encryptedData = cipher.update(JSON.stringify(passwords), 'utf8', 'hex');
        encryptedData += cipher.final('hex');

        console.log('Verschlüsselte Daten:', encryptedData); // Überprüfen, ob die Daten richtig verschlüsselt wurden

        // Kombiniere den IV und die verschlüsselten Daten
        const encryptedWithIv = iv.toString('hex') + encryptedData;

        const filePath = './passwords.pdb';
        console.log('Speichern der Datei unter:', filePath);

        // Versuche, die verschlüsselten Daten in der pdb-Datei zu speichern
        fs.writeFileSync(filePath, encryptedWithIv);

        console.log('Passwörter erfolgreich gespeichert!');

        // Überprüfe, ob die Datei tatsächlich existiert
        if (fs.existsSync(filePath)) {
            console.log('Die Datei wurde erfolgreich erstellt:', filePath);
        } else {
            console.error('Fehler: Datei konnte nicht erstellt werden.');
        }

        res.json({ message: 'Passwörter erfolgreich gespeichert!' });
    } catch (error) {
        console.error('Fehler beim Speichern:', error);
        res.status(500).json({ error: 'Fehler beim Speichern der Passwörter' });
    }
});

// API-Endpunkt zum Abrufen der gespeicherten Passwörter
app.get('/get-passwords', (req, res) => {
    try {
        const filePath = './passwords.pdb';

        // Überprüfen, ob die Datei existiert
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ error: 'Datenbankdatei nicht gefunden' });
        }

        // Lese die verschlüsselten Daten aus der Datei
        const encryptedData = fs.readFileSync(filePath, 'utf8');
        console.log('Verschlüsselte Daten geladen:', encryptedData); // Debugging: Zeige die geladenen verschlüsselten Daten an

        // Extrahiere den IV (die ersten 32 Zeichen) und die verschlüsselten Daten
        const iv = Buffer.from(encryptedData.slice(0, 32), 'hex');
        const data = encryptedData.slice(32);

        // Entschlüsselung der Daten
        const key = crypto.createHash('sha256').update(req.query.masterPassword).digest();
        const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

        let decryptedData = decipher.update(data, 'hex', 'utf8');
        decryptedData += decipher.final('utf8');

        console.log('Entschlüsselte Passwörter:', decryptedData); // Debugging: Zeige die entschlüsselten Passwörter an

        // Gebe die entschlüsselten Passwörter zurück
        res.json(JSON.parse(decryptedData));
    } catch (error) {
        console.error('Fehler beim Abrufen der Passwörter:', error);
        res.status(500).json({ error: 'Fehler beim Abrufen der Passwörter' });
    }
});

// Starten des Servers
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});