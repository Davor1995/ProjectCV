document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const progressValue = bar.getAttribute('data-progress');
        bar.style.width = progressValue;
    });
});
// Event-Listener für das Absenden des Formulars hinzufügen
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Überprüfung ob das Formular vollständig ausgefüllt wurde
    var isValid = true;
    console.log(contactForm);

    // Zugriff auf die eingegebenen Daten
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Beispiel einer einfachen Validierung:
    if (name === "" || email === "" || message === "") {
        isValid = false;
        alert("Bitte alle Felder ausfüllen.");
    }

    // Wenn das Formular nicht gültig ist, wird es nicht gesendet
    if (!isValid) {
        event.preventDefault();
    } else {
        // Weiterverarbeitung der Daten, nächster Schritt.
        console.log("Name: " + name);
        console.log("E-Mail: " + email);
        console.log("Nachricht: " + message);
    }
});
