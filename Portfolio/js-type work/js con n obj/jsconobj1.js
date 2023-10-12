function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username and password are correct
    if (username === "your_user" && password === "your_password") {
        alert("Welcome, " + username + "!");
    } else {
        alert("Please register first.");
    }
}

function register() {
    // Open the registration page
    window.location.href = "jscondobj1p2.html";
}