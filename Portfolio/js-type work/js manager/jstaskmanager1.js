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

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let existingUser = users.find((u) => u.username === user.username);
    if (existingUser) {
        alert("User already exists. Please log in.");
        return;
    } else {
        // Add the new user to the existing users
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        // Display a success message or redirect to another page
        alert("User registered successfully!");
        window.location.href = "index.html";
    }
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
    let users = JSON.parse(localStorage.getItem("users"));

    const loginUsername = document.getElementById("userName").value;
    const loginPassword = document.getElementById("pass").value;

    const user = users.find((u) => u.username === loginUsername && u.password === loginPassword);

    if (!user) {
        alert("Invalid username or password.");
        return;
    }

    if (user.loggedIn === "Active") {
        alert("You are already logged in.");
        return;
    }

    user.loggedIn = 'Active';
    localStorage.setItem("user", JSON.stringify(user));

    alert("Logged in successfully!");

    window.location.href = "tasks.html";
}

function logOut() {
    // Remove the logged-in user's status and remove it from loggedInUsers array

    const loggedUser = JSON.parse(localStorage.getItem('user'));
    console.log(loggedUser);

    // Update the logged-in user's status
    loggedUser.loggedIn = 'Inactive';

    // Save the updated user data to local storage
    localStorage.setItem('user', JSON.stringify(loggedUser));

    window.location.href = "index.html";
}

function addTask() {
    const taskInput = document.getElementById('task');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
    let user = JSON.parse(localStorage.getItem('user'));
    const task = { // Task must be an object with a title property and a completed property
        title: taskInput.value,
        completed: false,
    };

    if (!task.title || task.title === '') {
        taskInput.classList.add('is-invalid');
        return;
    } else {
        taskInput.classList.remove('is-invalid');
    }

    if (user.loggedIn === 'Inactive') {
        alert('Please log in to add tasks.');
        return;
    }

    // Check if the user already has tasks
    if (!tasks[user.username]) {
        tasks[user.username] = []; // Create an empty array for the user if it doesn't exist
    }
    let existingTask = tasks[user.username].find((t) => t.title === task.title); // Check if the task already exists
    if (existingTask) {
        alert('Task already exists.');
        return;
    }

    // Task must be added to local storage as a string
    tasks[user.username].push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    taskInput.value = '';

    showAllTasks();
}

function updateTask() {
    const task = document.getElementById('task').value;
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    // when a task has been selected via mouse or checkmark icon, the icon must be changed to this icon <i class="bi bi-trash"></i>

    if (!task || task === '') {
        alert('Please enter a task.');
        return;
    }

    const user = JSON.parse(localStorage.getItem('user'));

    if (user.loggedIn === 'Inactive') {
        alert('Please log in to update tasks.');
        return;
    }

    // Check if the user already has tasks
    if (!tasks[user.username]) {
        tasks[user.username] = []; // Create an empty array for the user if it doesn't exist
    }
    


    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i] === task) {
            tasks[i] = task;
            break;
        }
    }
    // when task is completed this icon must be changed to this icon <i class="bi bi-trash"></i>
    // when task is still incomplete this icon must be changed to this icon <i class="bi bi-check"></i>

    localStorage.setItem('tasks', JSON.stringify(tasks));

    showAllTasks();
}

function showAllTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let user = JSON.parse(localStorage.getItem('user'));
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    if (tasks && tasks[user.username]) {
        tasks[user.username].forEach((task) => {
            const taskRow = document.createElement('tr');
            taskRow.classList.add('task');
            taskList.classList.add('table-striped');
            taskRow.innerHTML = `
            <td class="text-center"><i class="bi bi-journal-bookmark"></i></td>
                <td>${task.title}</td>
                <td class="text-center"><i class="bi bi-check" onclick="updateTask('${task.title}')"></i></td>
            `;
            taskList.appendChild(taskRow);
        });
    }
}

function showCompletedTasks() {
    const tasks = document.getElementsByClassName('task');
    // it must filter the tasks that are completed
    
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].classList.contains('completed')) {
            tasks[i].classList.add('selected');
        }
    }

    // it must show only the completed tasks

    // it must highlight the tasks that are completed
    // it must update the tbody to only show completed tasks from the array
    // it must filter the tasks and create a new array specifically for completed tasks
}

function showIncompleteTasks() {
    const tasks = document.getElementsByClassName('task');
    // it must filter the tasks that are not completed
}

function clearCompletedTasks() {
    const tasks = document.getElementsByClassName('task');
    // it must remove all the completed tasks
}
