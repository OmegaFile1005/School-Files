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
    window.location.href = "jsconobj1p2.html";
}

const userObj = {}; // Define userObj as a global variable

function registerUser() {

    const name = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    userObj.Name = name;
    userObj.LastName = lastName
    userObj.Address = address;
    userObj.Age = age;
    userObj.Gender = gender;
    userObj.User = user;
    userObj.Password = password;

    alert('User successfully registered!');
}

function getUserInfo() {
    const userInfoDiv = document.getElementById('userInfo');
    userInfoDiv.innerHTML = '';

    for (const property in userObj) {
        const p = document.createElement('p');
        p.textContent = `${property}: ${userObj[property]}`;
        userInfoDiv.appendChild(p);
    }
}