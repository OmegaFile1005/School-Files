const userInfo = {
    firstName: '',
    lastName: '',
    phone: 0,
    weight: 0,
    date: '',
    image: '',
};

const messageInfo = {
    name: '',
    cEmail: '',
    subject: '',
    message: '',
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
    const date = document.getElementById('date').value;
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

    const infoList = JSON.parse(localStorage.getItem('InfoList')) || [];
    userInfo.firstName = firstName;
    userInfo.lastName = lastName;
    userInfo.phone = phone;
    userInfo.weight = weight;
    userInfo.date = date;
    userInfo.image = image.src;

    infoList.push(userInfo);
    localStorage.setItem('InfoList', JSON.stringify(infoList));
    alert('Your info has been submitted');

    document.getElementById('registerForm').reset();
    image.src = 'https://via.placeholder.com/150';
    image.alt = 'placeholder';
    document.getElementById('photoPreview').removeAttribute('disabled')
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

    const messageInfo = JSON.parse(localStorage.getItem('messageList')) || [];
    messageInfo.name = name;
    messageInfo.cEmail = cEmail;
    messageInfo.subject = subject;
    messageInfo.message = message;

    console.log(messageInfo);
    localStorage.setItem('messageList', JSON.stringify(messageInfo));
    alert('Your message has been submitted');

    document.getElementById('contactForm').reset();
}

function showData() {
    const infoList = JSON.parse(localStorage.getItem('userInfo'));
    const infoTable = document.getElementById('weightData');
    infoTable.innerHTML = '';

    if (!infoList || !infoList.length) {
        infoTable.innerHTML = '<tr><td colspan="6" class="text-center">No data found</td></tr>';
        return;
    }

    if (infoList.length === 0) {
        infoTable.innerHTML = '<tr><td colspan="5">No data found</td></tr>';
        return;
    }

    // Make an if statement if first name, last name, and phone number are the same but with different heights, weight, and dates
    // it will display in a collapsed list in details only displaying the date and weight
    // if the user clicks on the same text again, hide the details


    infoList.forEach((info, i) => {
        const infoRow = document.createElement('tr');
        infoRow.innerHTML = `
            <td class="ps-3">${info.firstName}</td>
            <td>${info.lastName}</td>
            <td>${info.phone}</td>
            <td><img src="${info.image}" alt="user${i + 1}" style="width: 75px; height: 75px"></td>
            <td class="col-4"><p onclick="displayDetails(${i})">Details..</p><p onclick="displayModalDetails(${i})">Details With Modal...</p></td>
            <td  class="col-sm-1"><i class="bi bi-trash lg" style="color: blue" onclick="deleteInfo(${i})"></i></td>
        `;
        infoTable.appendChild(infoRow);
    });
}

function deleteInfo(i) {
    const infoList = JSON.parse(localStorage.getItem('userInfo'));
    const confirmDeletion = window.prompt('Are you sure you want to delete this info? (Y/N)');
    if (confirmDeletion && confirmDeletion.toLowerCase() !== 'y') {
        return;
    } else {
        if (confirmDeletion && confirmDeletion.toLowerCase() === 'y') {
            infoList.splice(i, 1);
            localStorage.setItem('userInfo', JSON.stringify(infoList));
            window.location.reload();
        }
    }

}

function displayDetails() {
    // When the user clicks on the associated text, display the details as a collapsed list
    // If the user clicks on the same text again, hide the details

}

function displayModalDetails() {
    // When the user clicks on the associated text, display the details as a modal

}