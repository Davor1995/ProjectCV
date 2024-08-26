const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'CV.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

const nodemailer = require('nodemailer');
require('dotenv').config(); // Nur für lokale Umgebungen

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Greife auf die Umgebungsvariable zu
        pass: process.env.EMAIL_PASS  // Greife auf das Passwort aus der Umgebungsvariable zu
    }
});

transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'empfaenger@example.com',
    subject: 'Test E-Mail',
    text: 'Hallo! Das ist eine Test-E-Mail.'
}, (error, info) => {
    if (error) {
        console.log('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});



require('dotenv').config();
