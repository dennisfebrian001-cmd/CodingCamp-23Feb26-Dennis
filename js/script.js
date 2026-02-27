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
    let birthdate = document.forms["messageForm"]["birthdate"].value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let message = document.forms["messageForm"]["message"].value.trim();

    if (!name || !email || !phone || !birthdate || !gender || !message) {
        alert("All fields are required!");
        return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Invalid email format!");
        return false;
    }

    let now = new Date();
    let dateTime = now.toString();

    document.getElementById("result").innerHTML = `
        <h3 class="text-xl font-semibold mb-4">Submitted Data:</h3>
        <p><strong>Current Time:</strong> ${dateTime}</p>
        <hr class="my-3">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    return false;
}
document.addEventListener("DOMContentLoaded", function () {

    // Welcome Text
    let name = prompt("Enter your name:");
    if (name && name.trim() !== "") {
        document.getElementById("username").innerText = name;
    }

    // Hamburger Menu
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
        menuBtn.classList.toggle("menu-open");
    });

});