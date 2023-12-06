function register() {
    var fullName = document.getElementById("fullname").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Capitalize all words in the full name
    fullName = fullName.toLowerCase().replace(/(?:^|\s|-)\S/g, function (match) {
        return match.toUpperCase();
    });

    if (fullName === "" || username === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Create a user object
    var user = {
        fullName: fullName,
        username: username,
        password: password
    };

    // Save the user data to local storage
    localStorage.setItem("user", JSON.stringify(user));

    // Display a success message or redirect to another page
    alert("User registered successfully!");
    window.location.href = "index.html";
}

function createAccount() {
    window.location.href = "register.html";
}

function getUserData() {
    var storedUser = localStorage.getItem("user");

    if (storedUser) {
        return JSON.parse(storedUser);
    }

    return null;
}

function logIn() {
    var storedUser = localStorage.getItem("user");
    if (!storedUser) {
        alert("No user found. Please register first.");
        return;
    }

    var loginUsername = document.getElementById("username").value;
    var loginPassword = document.getElementById("password").value;

    var user = JSON.parse(storedUser);

    if (loginUsername === user.username && loginPassword === user.password) {
        // Successful login
        alert("Logged in successfully!");

        // Save login inputs for autocomplete
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

        // Redirect to another page

        window.location.href = "tasks.html";
        let loggeduser = document.getElementById('activeUser');
        loggeduser.textContent = user.fullName;
    } else {
        // Invalid login
        alert("Invalid username or password.");
    }
}

function logOut() {
    //when logging out, the logged-in user will turn back into a user that is not logged in

    localStorage.removeItem('user');

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

    document.getElementById('username').focus();
}

function addTask() {
    const taskInput = document.getElementById('task');
    const task = taskInput.value;

    if (!task || task.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const tasksContainer = document.getElementById('tasks');

    let table = document.createElement('table');
    let tr = document.createElement('tr');
    let td = document.createElement('td');

    td.textContent = task;
    tr.appendChild(td);
    table.appendChild(tr);
    tasksContainer.appendChild(table);

    tasksContainer.classList.add('task');

    taskInput.value = '';
}

function updateTask() {
    const task = document.getElementById('task').value;
    //when element is selected, replace button with a selectable icon and vice versa
}

function showAllTasks() {
    const tasks = document.getElementsByClassName('task');
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].classList.add('selected');
    }
}

function showCompletedTasks() {
    const tasks = document.getElementsByClassName('task');
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].classList.contains('completed')) {
            tasks[i].classList.add('selected');
        }
    }
}

function showIncompleteTasks() {
    const tasks = document.getElementsByClassName('task');
    for (let i = 0; i < tasks.length; i++) {
        if (!tasks[i].classList.contains('completed')) {
            tasks[i].classList.add('selected');
        }
    }
}

function clearCompletedTasks() {
    const tasks = document.getElementsByClassName('task');
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].classList.contains('completed')) {
            tasks[i].classList.remove('completed');
        }
    }
}
