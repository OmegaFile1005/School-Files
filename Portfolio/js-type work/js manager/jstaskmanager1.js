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

function showAllTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let user = JSON.parse(localStorage.getItem('user'));
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    if (tasks && tasks[user.username]) {
        tasks[user.username].forEach((task, index) => {
            const taskRow = document.createElement('tr');
            taskRow.classList.add('task');
            taskList.classList.add('table-striped');

            const taskNumber = index + 1;
            const taskTitle = task.title;

            const taskIcon = document.createElement('td');
            taskIcon.classList.add('text-center');
            taskIcon.innerHTML = '<i class="bi bi-journal-bookmark"></i>';

            const taskDescription = document.createElement('td');
            taskDescription.innerHTML = `${taskNumber}.&nbsp;${taskTitle}`;
            taskDescription.onclick = () => updateTask(index); // Update the task when the description is clicked 
            taskDescription.onmouseover = () => taskDescription.style.cursor = 'pointer'; // Change the cursor to a pointer when the mouse is over the description

            const taskCheckIcon = document.createElement('td');
            taskCheckIcon.classList.add('text-center');
            taskCheckIcon.innerHTML = `<i class="${task.completed ? 'bi bi-check' : 'bi bi-trash'}"></i>`; // Show a check icon if the task is completed, otherwise show a trash icon

            taskRow.appendChild(taskIcon);
            taskRow.appendChild(taskDescription);
            taskRow.appendChild(taskCheckIcon);

            // taskRow.addEventListener('click', () => {
            //     taskList.querySelectorAll('.task.selected').forEach((selectedTask) => {
            //         selectedTask.classList.remove('selected');
            //     });

            //     taskRow.classList.add('selected');
            //     taskInput.value = taskDescription.textContent;
            //     taskInput.classList.remove('is-invalid');
            //     taskInput.focus();
            //     taskInput.setSelectionRange(0, taskInput.value.length);
            // });

            taskList.appendChild(taskRow);
        });
    }
}

function updateTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const user = JSON.parse(localStorage.getItem('user'));
    const task = tasks[user.username][index];
    task.completed = !task.completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    showAllTasks();
    // const taskInput = document.getElementById('task');
    // const task = {
    //     title: taskInput.value,
    //     completed: false,
    // };

    // let user = JSON.parse(localStorage.getItem('user'));

    // if (user.loggedIn === 'Inactive') {
    //     alert('Please log in to update tasks.');
    //     return;
    // }

    // if (!tasks[user.username]) {
    //     tasks[user.username] = [];
    // } else {
    //     let existingTask = tasks[user.username].find((t) => t.title === task.title);
    //     if (!existingTask) {
    //         alert('Task does not exist.');
    //         return;
    //     } else {
    //         existingTask.completed = !existingTask.completed;
    //         localStorage.setItem('tasks', JSON.stringify(tasks));
    //     }
    // }

    // const selectedTaskRow = document.querySelector('.task.selected');
    // if (selectedTaskRow) {
    //     selectedTaskRow.classList.remove('selected');
    // }

    // const taskRows = document.querySelectorAll('.task');
    // for (let i = 0; i < taskRows.length; i++) {
    //     const rowTitle = taskRows[i].getElementsByTagName('td')[1].textContent;
    //     if (rowTitle === task.title) {
    //         taskRows[i].classList.add('selected');
    //     }
    // }

    // localStorage.setItem('tasks', JSON.stringify(tasks));

}

function showCompletedTasks() {
    const tasks = document.getElementsByClassName('task');
    // It must filter the tasks that are not completed

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].classList.contains('completed')) {
            tasks[i].classList.add('selected');
        }
    }

    const selectedTask = document.getElementById('selectedTask');
    selectedTask.innerHTML = '<i class="bi bi-trash"></i>';

    showAllTasks();
}

function showIncompleteTasks() {
    const tasks = document.getElementsByClassName('task');
    // it must filter the tasks that are not completed
}

function clearCompletedTasks() {
    const tasks = document.getElementsByClassName('task');
    // it must remove all the completed tasks
}
