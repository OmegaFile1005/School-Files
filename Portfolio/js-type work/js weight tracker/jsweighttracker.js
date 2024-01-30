function registerWeight() {
    window.location.href = "register.html";
}

function getUserData() {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
}

function previewFile() {
    const fileInput = document.getElementById('photoPreview');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const image = document.getElementById('previewImage');
            image.src = e.target.result;
            image.style.fontSizeAdjust = '100%';
            image.alt = file.name;
        };
        reader.readAsDataURL(file);
    }

    document.getElementById('photoPreview').setAttribute('disabled', true);
    fileInput.value = '';
}

function addEmail() {
    const email = document.getElementById('email').value.trim();
    const mailList = JSON.parse(localStorage.getItem('mailList')) || [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        alert('Please enter an email address');
        return;
    }
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    if (mailList.some((e) => e.toLowerCase() === email.toLowerCase())) {
        alert('Email already exists in the list');
        return;
    }
    alert('Your email address has now been added to our mailing list!');

    mailList.push(email);
    console.log(mailList);
    localStorage.setItem('mailList', JSON.stringify(mailList));
    document.getElementById('email').value = '';
}
function submitInfo() {
    const getInputValue = id => document.getElementById(id).value.trim();
    const getNumericInputValue = id => +getInputValue(id);

    const firstName = getInputValue('firstName');
    const lastName = getInputValue('lastName');
    const phone = getNumericInputValue('phone');
    const weight = getNumericInputValue('weight');
    const date = getInputValue('date');
    const image = document.getElementById('previewImage');

    if (![firstName, lastName, phone, weight, date].every(Boolean)) {
        alert('Please fill in all fields');
        return;
    }
    if (!image.src || image.src.endsWith('https://via.placeholder.com/150')) {
        alert('Please add a picture');
        return;
    }
    if (phone.length < 10 || phone.length > 10) {
        // Create a random number generation to add after the given input if it does not meet the length requirement. If it does meet the length requirement, then remove the extra digits.
        const randomNumber = Math.floor(Math.random() * 10000);
        if (phone.length < 10) {
            phone += randomNumber.toString().padStart(10 - phone.length, '0');
        } else {
            phone = phone.slice(0, 10);
        }
        alert('Phone number must be 10 digits. Your phone number has been changed to ' + phone);
        return;
    }
    if (weight < 0 || weight > 500) {
        alert('Weight must be between 0 and 500');
        return;
    }
    if (date > new Date().toISOString().split('T')[0]) {
        alert('Date cannot be in the future');
        return;
    }

    const userInfo = {
        firstName,
        lastName,
        phone,
        weight,
        date,
        image
    };

    console.log(userInfo);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    alert('Your info has been submitted');

    document.getElementById('registerForm').reset();
    image.src = 'https://via.placeholder.com/150';
}

function submitContact() {
    const name = document.getElementById('name').value.trim();
    const cEmail = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!cEmail) {
        alert('Please enter an email address');
        return;
    }
    if (!emailRegex.test(cEmail)) {
        alert('Please enter a valid email address');
        return;
    }
    if (!name || !cEmail || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }

    const contactInfo = {
        name,
        cEmail,
        subject,
        message
    };

    console.log(contactInfo);
    localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
    alert('Your message has been submitted');

    document.getElementById('contactForm').reset();
}