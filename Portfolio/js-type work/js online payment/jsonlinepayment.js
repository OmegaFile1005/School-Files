function register() {
    const selectedHonors = document.querySelectorAll('input[name="honor"]:checked');
    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value * 1;
    const password = document.getElementById("password").value;

    if (username === "" || email === "" || phone === "" || password === "") {
        alert("Please fill in all fields");
        return;
    }
    if (selectedHonors.length === 0) {
        alert("Please select at least one honor");
        return;
    }

    const user = {
        username,
        email,
        phone,
        password
    };
    const honors = [];
    for (const honor of selectedHonors) {
        honors.push(honor.value);
    }

    user.honors = honors;
    localStorage.setItem("user", JSON.stringify(user));
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields");
    }
}

function logout() {
    localStorage.removeItem("user");
}

function getStoredUser() {
    return JSON.parse(localStorage.getItem("user"));
}

function loggingRegisterModal() {

}

function showOnlinePayment() {
}

function payMobile() {
}

function payRent() {
}

function payLoan() {
    
}

function payElectricity() {
}

function payInsurance() {
    
}

function payWater() {
}