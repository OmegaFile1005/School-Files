function registerWeight() {
    window.location.href = "register.html";
}

function getUserData() {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
}

function validatePhone() {
    const phone = document.getElementById("phone") * 1;
    if (phone.length < 10) {
        alert("Phone number must be at least 10 digits long.")
        return false;
    }
    if (phone.length > 10) {
        alert("Phone number must be at most 10 digits long.")
        return false;
    }
    return true;
}