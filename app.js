const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Nur für lokale Umgebungen

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'CV.html'));
});
// Mail Adresse projectcv391@gmail.com / Passwort ProjectCV1++ / App-spezifisch pdxr lxjg gzbe frbv
// Nodemailer-Einstellungen
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Route für den Versand der E-Mail
app.post('/send', (req, res) => {
    const { name, email, message, firma } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Neue Nachricht von ${name}`,
        text: `Firma: ${firma}\nName: ${name}\nEmail: ${email}\nNachricht: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            res.status(500).send('<h1>Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.</h1>');
        } else {
            console.log('Email sent:', info.response);
            res.send('<h1>Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.</h1>');
        }
    });
});

// Server starten
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
