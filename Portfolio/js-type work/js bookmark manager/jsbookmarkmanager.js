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

function createAccount() {
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

const bookmarks = document.getElementById('bookmarks');
function addBookmark() {
    const name = document.getElementById('siteName').value.trim();
    const url = document.getElementById('URL').value.trim();

    const activeUser = JSON.parse(localStorage.getItem('Active User'));
    const bookmarkList = JSON.parse(localStorage.getItem('bookmarks')) || {};
    const currentBookmarks = bookmarkList[activeUser.username] || [];

    const existingBookmark = currentBookmarks.find(b => b.name === name || b.url === url);
    if (existingBookmark) {
        alert('Bookmark already exists.');
        return;
    }
    if (name === '' || url === '') {
        alert('Please fill in all fields.');
        return;
    }

    const newBookmark = { name, url };
    currentBookmarks.push(newBookmark);
    bookmarkList[activeUser.username] = currentBookmarks;
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkList));
    displayBookmarks();
    document.getElementById('siteName').value = '';
    document.getElementById('URL').value = '';
}

function displayBookmarks() {
    const activeUser = JSON.parse(localStorage.getItem('Active User'));
    const bookmarkList = JSON.parse(localStorage.getItem('bookmarks'));
    const currentBookmarks = bookmarkList[activeUser.username] || [];

    bookmarks.innerHTML = "";
    currentBookmarks.forEach((newBookmark) => {
        bookmarks.innerHTML += `
            <div class="row border border-secondary-subtle rounded straighten exact justify-content-center mx-auto p-3"
        style="background-color: #f5f5f5;">
        <div class="col-auto">
            <h4>${newBookmark.name}</h4>
        </div>
        <div class="col-auto">
            <button type="button" class="btn whitebutton" onclick="visitBookmark()">Visit</button>
            <button type="button" class="btn btn-danger bigbutton"
                onclick="deleteBookmark()">Delete</button>
            <button type="button" class="btn btn-success bigbutton" onclick="editBookmark()">Edit
                URL</button>
        </div>
    </div>

            `
    });
}

function visitBookmark() {

}

function deleteBookmark() {

}

function editBookmark() {

    window.prompt("Enter URL to edit:");

}