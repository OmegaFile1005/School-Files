function register() {
    var fullName = document.getElementById("fullname").value;
    var username = document.getElementById("username").value;
    var useremail = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Capitalize all words in the full name
    fullName = fullName.toLowerCase().replace(/(?:^|\s|-)\S/g, function (match) {
        return match.toUpperCase();
    });

    if (fullName === "" || username === "" || password === "" || useremail === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Create a user object
    var user = {
        fullName,
        username,
        useremail,
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

function getUserData() {
    var storedUser = localStorage.getItem("user");

    if (storedUser) {
        return JSON.parse(storedUser);
    }

    return null;
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
    localStorage.setItem("Active User", JSON.stringify(loggingInUser));

    alert("Logged in successfully!");

    window.location.href = "issues.html";
}

function logOut() {
    // Remove the logged-in user's status and remove it from loggedInUsers array

    const loggedUser = JSON.parse(localStorage.getItem('user'));
    console.log(loggedUser);
    // Update the logged-in user's status
    loggedUser.loggedIn = 'Inactive';

    // Save the updated user data to local storage
    localStorage.setItem('Inactive Users', JSON.stringify(users));

    window.location.href = "index.html";
}

function displayIssues() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || {};
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const issueList = tasks[user.username] || [];
     
        
}

function addIssue() {
    let i = 1;
    var issueId = i++;
    const issueStatus = "Open";
    const statedIssue = document.getElementById('issueDescription').value;
    const issueSeverity = document.getElementById('severity').value;
    const issueSolver = document.getElementById('assignedTo').value;

    if (statedIssue === "" || issueSeverity === "" || issueSolver === "") {
        alert("Please fill in all fields.");
        return;
    }

    const issues = document.getElementById('issues');
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const issueList = issues[user.username] || [];
    let preexistingIssue = issues[user.username].find((i) => i.statedIssue === statedIssue);
    if  (preexistingIssue) {
        issues.innerHTML = "Issue already exists. Please try again."
        issueList.pop();
        return;
    }
    
    issueList.push({ issueId, issueStatus, statedIssue, issueSeverity, issueSolver });
    issues[user.username] = issueList;


    localStorage.setItem('issues', JSON.stringify(issues));

    issues.innerHTML = `
    <div class="card m-3">
        <div class="card-header pt-5">
            <p><b>Issue ID: ${issueId}</b></p>
            <p>${issueStatus}</p>
        </div>
        <div class="card-body">
            <h3 class="card-title">${statedIssue}</h3>
            <p><i class="bi bi-clock"></i> ${issueSeverity}</p>
            <p><i class="bi bi-person-fill"></i> ${issueSolver}</p>
        </div>
        <div class="card-footer text-muted">
            <button type="button" class="btn btn-warning" onclick="closeIssue()">Close</button>
            <button type="button" class="btn btn-danger" onclick="deleteIssue()">Delete</button>
        </div>
    </div>`;

    issueList.push()
}


function closeIssue() {
    // When closing an issue, it needs to be updated in the issue tracker system
    // Update the code below to be compatible with your issue tracker system


}

function deleteIssue() {
    // When deleting an issue, it first needs to be closed in order to be deleted
    // Update the code below to be compatible with your issue tracker system


}