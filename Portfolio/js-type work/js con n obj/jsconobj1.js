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

    const getUserInput = (id) => document.getElementById(id).value;

    const name = getUserInput('name');
    const lastName = getUserInput('lastName');
    const address = getUserInput('address');
    const age = getUserInput('age');
    const gender = getUserInput('gender');
    const user = getUserInput('user');
    const password = getUserInput('password');

    userObj.name = name;
    userObj.lastName = lastName;
    userObj.address = address;
    userObj.age = age;
    userObj.gender = gender;
    userObj.user = user;
    userObj.password = password;

alert('User successfully registered!');}

function getUserInfo() {
    const userInfoDiv = document.getElementById('userInfo');
    userInfoDiv.innerHTML = '';

    for (const property in userObj) {
        const p = document.createElement('p');
        p.textContent = `${property}: ${userObj[property]}`;
        userInfoDiv.appendChild(p);
    }
}

// document.getElementById('register').addEventListener('click', register);