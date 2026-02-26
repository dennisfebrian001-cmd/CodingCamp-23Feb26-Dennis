// Welcome Text
document.addEventListener("DOMContentLoaded", function () {
    let name = prompt("Enter your name:");

    if (name && name.trim() !== "") {
        document.getElementById("username").innerText = name;
    }
});

// Validation
function validateForm() {

    let name = document.forms["messageForm"]["name"].value.trim();
    let email = document.forms["messageForm"]["email"].value.trim();
    let phone = document.forms["messageForm"]["phone"].value.trim();
    let message = document.forms["messageForm"]["message"].value.trim();

    if (!name || !email || !phone || !message) {
        alert("All fields are required!");
        return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Invalid email format!");
        return false;
    }

    document.getElementById("result").innerHTML = `
        <h3 class="text-xl font-semibold mb-4">Submitted Data:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    return false;
}