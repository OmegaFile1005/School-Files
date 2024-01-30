const userInfo = {
    firstName: '',
    lastName: '',
    phone: 0,
    weight: 0,
    date: '',
    image: '',
};

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
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value * 1;
    const weight = document.getElementById('weight').value * 1;
    const date = document.getElementById('date').value * 1;
    const image = document.getElementById('previewImage');

    if (!firstName || !lastName || !phone || !weight || !date || !image) {
        alert('Please fill in all required fields');
        return;
    }
    if (!image.src || image.src.endsWith('https://via.placeholder.com/150')) {
        alert('Please add a picture');
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

    const infoList = JSON.parse(localStorage.getItem('userInfo')) || [];
    if (infoList.some((u) => u.firstName === firstName || u.lastName === lastName || u.phone === phone)) {
        alert('This info already exists');
        return;
    }

    userInfo.firstName = firstName;
    userInfo.lastName = lastName;
    userInfo.phone = phone;
    userInfo.weight = weight;
    userInfo.date = date;
    userInfo.image = image.src;

    infoList.push(userInfo);
    localStorage.setItem('userInfo', JSON.stringify(infoList));
    alert('Your info has been submitted');

    document.getElementById('registerForm').reset();
    generatedNumber.addEventListener('click', generateNumber);
    image.src = 'https://via.placeholder.com/150';
    image.alt = 'placeholder';
}

function submitContact() {
    const name = document.getElementById('name').value.trim();
    const cEmail = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!name || !cEmail || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
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

    const messageInfo = {
        name,
        cEmail,
        subject,
        message
    };

    console.log(messageInfo);
    localStorage.setItem('contactInfo', JSON.stringify(messageInfo));
    alert('Your message has been submitted');

    document.getElementById('contactForm').reset();
}

// function generateNumber() {
//     const phoneNumber = Math.floor(Math.random() * 9000000000) + 1000000000; // Generate a random 10-digit number
//     const phoneNumberInput = document.getElementById('phone');


//     if (localStorage.getItem('phoneNumber') === phoneNumber) {
//         generateNumber();
//         return;
//     }

//         phoneNumberInput.placeholder = phoneNumber;
//     phoneNumberInput.value = phoneNumber;

//     localStorage.setItem('phoneNumber', phoneNumber);
//     console.log(phoneNumber + ' has been generated');
// }