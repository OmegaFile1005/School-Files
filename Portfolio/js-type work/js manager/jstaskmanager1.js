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

    // Check if the user already exists
    var storedUser = localStorage.getItem("user");

    if (storedUser) {
        var existingUser = JSON.parse(storedUser);

        if (existingUser.username === user.username) {
            alert("User already exists. Please log in.");
            return;

        } else {
            // Add the new user to the existing users
            var users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
        }
    }

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
        taskInput.classList.add('is-invalid');
        return;
    } else {
        taskInput.classList.remove('is-invalid');
    }

    // Task must be added to local storage as a string
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Task must be added to the DOM as a tbody element to be selectable and as striped table rows
    const taskTable = document.getElementById('taskList');
    const taskRow = document.createElement('tr');
    taskRow.classList.add('table-striped');
    taskRow.innerHTML = `
        <td>${task}</td>
    `;
    taskTable.appendChild(taskRow);


    taskInput.value = '';

    showAllTasks();
}

function updateTask() {
    const task = document.getElementById('task').value;
    //when element is selected, replace button with a selectable icon and vice versa

    if (!task || task === '') {
        alert('Please enter a task');
        return;
    }

    const tasks = JSON.parse(localStorage.getItem('tasks'));

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i] === task) {
            tasks[i] = task;
            break;
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));

    showAllTasks();
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
