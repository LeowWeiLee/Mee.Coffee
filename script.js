document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu-items').classList.toggle('active');
    });


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    var fullName = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var message = document.getElementById("message").value;

    // Construct WhatsApp message
    var whatsappMessage = "Full Name: " + fullName + "%0A";
    whatsappMessage += "Email: " + email + "%0A";
    whatsappMessage += "Mobile Number: " + mobile + "%0A";
    whatsappMessage += "Message: " + message;

    // Open WhatsApp with the message
    window.open("https://wa.me/+6591395169?text=" + whatsappMessage, "_blank");
    });