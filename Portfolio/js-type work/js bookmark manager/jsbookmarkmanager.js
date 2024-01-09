function register() {
    const fullName = document.getElementById("fullname").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (fullName === "" || username === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    const capitalize = (string) => {
        return string.toLowerCase().replace(/(?:^|\s|-)\S/g, function (match) {
            return match.toUpperCase();
        });
    };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
        alert("User already exists. Please log in.");
        return;
    }
    
    const user = {
        fullName: capitalize(fullName),
        username,
        password,
        loggedIn: 'Inactive',
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("User registered successfully!");
    window.location.href = "index.html";
}

function createAccount  () {
    window.location.href = "register.html";
}
function getUserData() {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
}

function logIn() {
    const users = JSON.parse(localStorage.getItem("users"));
    const loginUsername = document.getElementById("username").value.trim();
    const loginPassword = document.getElementById("password").value.trim();
    const loggingInUser = users.find(u => u.username === loginUsername && u.password === loginPassword);

    if (!loggingInUser) {
        alert("Invalid username or password.");
        return;
    }
    if (loggingInUser.loggedIn === 'Active') {
        alert("You are already logged in.");
        return;
    }

    loggingInUser.loggedIn = 'Active';
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("Active User", JSON.stringify(loggingInUser));
    alert("Logged in successfully!");
    window.location.href = "bookmarks.html";
}

if (window.location.pathname === '/index.html') {
    const logout = document.getElementById('logout');
    logout.addEventListener('click', logOut);
}
function logOut() {
    const users = JSON.parse(localStorage.getItem('users'));
    const activeUser = JSON.parse(localStorage.getItem('Active User'));

    const currentUser = users.find(user => user.username === activeUser.username);

    if (currentUser) {
        currentUser.loggedIn = 'Inactive';
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.removeItem('Active User');
        alert('Logged out successfully!');
    }
    window.location.href = "index.html";
}

function addBookmark() {
    const webSites = document.getElementById('webSites');
    const webSiteURLs = document.getElementById('webSiteURLs');
    const users = JSON.parse(localStorage.getItem('users'));
    if (users) {
        users.forEach(user => {
            const webSiteOption = document.createElement('option');
            webSiteOption.value = user.username;
            webSiteOption.textContent = user.username;
            webSites.appendChild(webSiteOption);
            const webSiteURL = document.createElement('option');
            webSiteURL.value = user.username;
            webSiteURL.textContent = user.username;
            webSiteURLs.appendChild(webSiteURL);
        });
    }
}

function displayBookmarks() {
    const webSites = document.getElementById('webSites');
    const webSiteURLs = document.getElementById('webSiteURLs');
    const users = JSON.parse(localStorage.getItem('users'));
    if (users) {
        users.forEach(user => {
            const webSiteOption = document.createElement('option');
            webSiteOption.value = user.username;
            webSiteOption.textContent = user.username;
            webSites.appendChild(webSiteOption);
            const webSiteURL = document.createElement('option');
            webSiteURL.value = user.username;
            webSiteURL.textContent = user.username;
            webSiteURLs.appendChild(webSiteURL);
        });
    }
}