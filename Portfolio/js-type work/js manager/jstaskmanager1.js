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
        fullName,
        username,
        password,
        loggedIn: 'Inactive',
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
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
        alert("No user found. Please register first.");
        return;
    }

    const loginUsername = document.getElementById("userName").value;
    const loginPassword = document.getElementById("pass").value;

    const user = JSON.parse(storedUser);

    if (loginUsername === user.username && loginPassword === user.password) {
        alert("Logged in successfully!");

        const loggedUser = JSON.parse(localStorage.getItem('user'));

        loggedUser.loggedIn = 'Active';

        localStorage.setItem('user', JSON.stringify(loggedUser));

        window.location.href = "tasks.html";

        const activeUser = document.getElementById('activeUser');
        activeUser.textContent = loggedUser.fullName;
    } else {
        alert("Invalid username or password.");
        return;
    }
}

function logOut() {
    // Remove the logged-in user's status and remove it from loggedInUsers array

    const loggedUser = JSON.parse(localStorage.getItem('user'));

    // Update the logged-in user's status
    loggedUser.loggedIn = 'Inactive';

    // Save the updated user data to local storage
    localStorage.setItem('user', JSON.stringify(loggedUser));

    window.location.href = "index.html";
}

function addTask() {
    const taskInput = document.getElementById('task');
    const task = taskInput.value;

    if (!task || task === '') {
        alert('Please enter a task');
        return;
    }

    // Add the task to a table's tbody as rows
    const tableBody = document.getElementById('tasks');
    const row = document.createElement('tr');
    const taskCell = document.createElement('td');
    taskCell.textContent = task;
    row.appendChild(taskCell);
    tableBody.appendChild(row);

    // Add the task to local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('task', task);

    // Clear the input
    taskInput.value = '';
}

function updateTask() {
    const task = document.getElementById('task').value;
    //when element is selected, replace button with a selectable icon and vice versa
}

function showAllTasks() {
    //displays all tasks

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
