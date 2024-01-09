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
    window.location.href = "issues.html";
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

const issues = document.getElementById('issues');
function addIssue() {
    const issueId = Math.floor(Math.random() * 1000);
    const issueStatus = "Open";
    const statedIssue = document.getElementById('issueDescription').value.toLowerCase().replace(/(?:^|\s|-)\S/g, function (match) {
        return match.toUpperCase();
    });
    const issueSeverity = document.getElementById('severity').value;
    const issueSolver = document.getElementById('assignedTo').value.toLowerCase().replace(/(?:^|\s|-)\S/g, function (match) {
        return match.toUpperCase();
    });

    const activeUser = JSON.parse(localStorage.getItem('Active User'));
    const issuesList = JSON.parse(localStorage.getItem('Issues')) || {};
    const currentIssues = issuesList[activeUser.username] || [];

    const preexistingIssue = currentIssues.find((s) => s.statedIssue === statedIssue);
    if (preexistingIssue) {
        alert("Issue already exists. Please try again.");
        return;
    }
    if (statedIssue === "" || issueSeverity === "" || issueSolver === "") {
        alert("Please fill in all fields.");
        return;
    }

    const newIssue = { issueId, issueStatus, statedIssue, issueSeverity, issueSolver };
    currentIssues.push(newIssue);
    issuesList[activeUser.username] = currentIssues;
    localStorage.setItem('Issues', JSON.stringify(issuesList));
    displayIssues();
    document.getElementById('issueDescription').value = '';
    document.getElementById('assignedTo').value = '';
}

function displayIssues() {
    const activeUser = JSON.parse(localStorage.getItem('Active User'));
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
            <button id="closeIssueBtn" type="button" class="btn btn-warning" onclick="closeIssue()">Close</button>
            <button id="deleteIssueBtn" type="button" class="btn btn-danger" onclick="deleteIssue()">Delete</button>
        </div>
    </div>`;
    });
}

function closeIssue() {
    // Add event listeners for each issue to close it
    const closeIssueBtns = document.querySelectorAll('#closeIssueBtn');
    closeIssueBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            // Find the current issue
            const issueId = parseInt(btn.parentElement.parentElement.querySelector('div.card-header p:first-child').textContent.split(' ')[2]);

            // Update the issue status
            const issuesList = JSON.parse(localStorage.getItem('Issues'));
            const activeUser = JSON.parse(localStorage.getItem('Active User'));
            const currentIssue = issuesList[activeUser.username].find((issue) => issue.issueId === issueId);
            if (!currentIssue) {
                alert('Issue not found!');
                return;
            }
            if (currentIssue.issueStatus === 'Closed') {
                alert('Issue already closed!');
                return;
            }

            // Close the issue
            currentIssue.issueStatus = 'Closed';
            localStorage.setItem('Issues', JSON.stringify(issuesList));
            localStorage.setItem('Finished Issues', JSON.stringify(currentIssue));
            displayIssues();
        });
    });
}

function deleteIssue() {
    const deleteIssueBtns = document.querySelectorAll('#deleteIssueBtn');
    deleteIssueBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const issueIdElement = btn.parentElement.parentElement.querySelector('div.card-header p:first-child');
            const issueId = parseInt(issueIdElement.textContent.split(' ')[2]);

            const issuesList = JSON.parse(localStorage.getItem('Issues'));
            const activeUser = JSON.parse(localStorage.getItem('Active User'));
            const userIssues = issuesList[activeUser.username];

            const currentIssueIndex = userIssues.findIndex((issue) => issue.issueId === issueId);
            if (currentIssueIndex === -1) {
                alert('Issue not found!');
                return;
            }

            const currentIssue = userIssues[currentIssueIndex];
            if (currentIssue.issueStatus === 'Open') {
                alert('Issue must be closed before it can be deleted!');
                return;
            }

            // Delete the issue
            issuesList[activeUser.username].splice(currentIssueIndex, 1);
            localStorage.setItem('Issues', JSON.stringify(issuesList));
            localStorage.removeItem('Finished Issues');
            displayIssues();
        })
    })
}
