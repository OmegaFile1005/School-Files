function register() {
    var fullName = document.getElementById("fullname").value.trim();
    var username = document.getElementById("username").value.trim();
    var useremail = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

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

let issueId = parseInt(localStorage.getItem('issueId')) || 0 || 1;
function generateIssueId() {
    issueId++;
    currentIssues = JSON.parse(localStorage.getItem('Issues'));

    if (issueId <= 0) {
        issueId = 1;
    }
    if (issueId > currentIssues.length) {
        issueId = currentIssues.length + 1;
    }
    return Math.floor(issueId);
}

function addIssue() {
    const issueStatus = "Open";
    const issueDescription = document.getElementById('issueDescription').value.trim();
    const issueSeverity = document.getElementById('severity').value;
    const assignedTo = document.getElementById('assignedTo').value.trim();

    const activeUser = JSON.parse(localStorage.getItem('Active User'));
    let issuesList = JSON.parse(localStorage.getItem('Issues')) || {};
    const currentIssues = issuesList[activeUser.username] || [];
    const preexistingIssue = currentIssues.find((s) => s.statedIssue === issueDescription);
    if (preexistingIssue) {
        return;
    }

    const issueId = generateIssueId();

    const formattedIssueDescription = issueDescription.toLowerCase().replace(/(?:^|\s|-)\S/g, function (match) {
        return match.toUpperCase();
    });
    const formattedAssignedTo = assignedTo.toLowerCase().replace(/(?:^|\s|-)\S/g, function (match) {
        return match.toUpperCase();
    });
    if (issueDescription === "" || issueSeverity === "" || assignedTo === "") {
        issues.innerHTML = "Please fill in all fields.";
        return;
    }

    const newIssue = {
        issueId,
        statedIssue: formattedIssueDescription,
        issueSeverity,
        issueSolver: formattedAssignedTo,
        issueStatus
    };
    currentIssues.push(newIssue);
    issuesList[activeUser.username] = currentIssues;
    localStorage.setItem('Issues', JSON.stringify(issuesList));
    document.getElementById('issueDescription').value = '';
    document.getElementById('assignedTo').value = '';
    displayIssues();
}

const issues = document.getElementById('issues');
function displayIssues() {
    const activeUser = JSON.parse(localStorage.getItem('Active User'))
    let issuesList = JSON.parse(localStorage.getItem('Issues'));
    const currentIssues = issuesList[activeUser.username];
    issues.innerHTML = "";
    currentIssues.forEach((newIssue) => {
        issues.innerHTML += `
    <div class="card m-3">
        <div class="card-header pt-5 pb-0">
            <p><b>Issue ID: ${newIssue.issueId}</b></p>
            <p>${newIssue.issueStatus}</p>
        </div>
        <div class="card-body">
            <h3 class="card-title">${newIssue.statedIssue}</h3>
            <p><i class="bi bi-clock"></i> ${newIssue.issueSeverity}</p>
            <p><i class="bi bi-person-fill"></i> ${newIssue.issueSolver}</p>
        </div>
        <div class="card-footer text-muted">
            <button type="button" class="btn btn-warning" onclick="closeIssue()">Close</button>
            <button type="button" class="btn btn-danger" onclick="deleteIssue()">Delete</button>
        </div>
    </div>`;
    });
}


function closeIssue() {
    const newIssues = JSON.parse(localStorage.getItem('Issues'));
    const activeUser = JSON.parse(localStorage.getItem('Active User'));
    const currentIssue = newIssues[activeUser.username];

    currentIssue.issueStatus = 'Closed';
    localStorage.setItem('Fixed Issues', JSON.stringify(issues));

    displayIssues();
}

function deleteIssue() {
    // When deleting an issue, it first needs to be closed in order to be deleted
    // Update the code below to be compatible with your issue tracker system
    const newIssues = JSON.parse(localStorage.getItem('Issues'));
    const activeUser = JSON.parse(localStorage.getItem('Active User'));
    const currentIssue = newIssues[activeUser.username];

    if (currentIssue.issueStatus === 'Closed') {
        currentIssue.splice(currentIssue.indexOf(currentIssue), 1);
        localStorage.setItem('Issues', JSON.stringify(newIssues));
        displayIssues();
    }
}