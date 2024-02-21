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
    const storedUser = localStorage.getItem("userInfo");
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
    const firstName = document.getElementById('firstName')?.value?.trim();
    const lastName = document.getElementById('lastName')?.value?.trim();
    const phone = +document.getElementById('phone')?.value;
    const weight = +document.getElementById('weight')?.value;
    const date = document.getElementById('date')?.value;
    const image = document.getElementById('previewImage');

    if (!firstName || !lastName || !phone || !weight || !date || !image || image.src === 'https://via.placeholder.com/250') {
        alert('Please fill in all the fields with valid information');
        return;
    }
    if (new Date(date) > new Date()) {
        alert('Date cannot be in the future');
        return;
    }

    const infoList = JSON.parse(localStorage.getItem('InfoList')) || [];
    const duplicateInfo = infoList.find(info => info.firstName === firstName && info.lastName === lastName && info.phone === phone);

    if (duplicateInfo) {
        if (!duplicateInfo.weightDate) {
            duplicateInfo.weightDate = []; // Initialize the weightDate array if it's not present
        }
        const weightDate = {
            weight,
            date
        };

        duplicateInfo.weightDate.push(weightDate);
        duplicateInfo.weightDate.sort((a, b) => new Date(a.date) - new Date(b.date));
        localStorage.setItem('InfoList', JSON.stringify(infoList));
        localStorage.setItem(`${firstName} ${lastName}`, JSON.stringify(duplicateInfo.weightDate));
        alert('Your weight and date have been updated');
    } else {
        const personalInfo = {
            firstName,
            lastName,
            phone,
            image: image.src,
        };
        if (!personalInfo.weightDate) {
            personalInfo.weightDate = []; // Initialize the weightDate array if it's not present
        }
        const weightDate = {
            weight,
            date
        };

        personalInfo.weightDate.push(weightDate);
        localStorage.setItem('InfoList', JSON.stringify(infoList.concat(personalInfo)));
        alert('Your info has been registered');
    }
    document.getElementById('registerForm').reset();
    image.src = 'https://via.placeholder.com/250';
    image.alt = 'placeholder';
    document.getElementById('photoPreview').removeAttribute('disabled');
}

function submitContact() {
    const name = document.getElementById('name')?.value?.trim();
    const cEmail = document.getElementById('contactEmail')?.value?.trim();
    const subject = document.getElementById('subject')?.value?.trim();
    const message = document.getElementById('message')?.value?.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !cEmail || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
    if (!emailRegex.test(cEmail)) {
        alert('Please enter a valid email address');
        return;
    }

    const messageInfo = JSON.parse(localStorage.getItem('messageList')) || {};
    messageInfo.name = name;
    messageInfo.cEmail = cEmail;
    messageInfo.subject = subject;
    messageInfo.message = message;

    console.log(messageInfo);
    localStorage.setItem('messageList', JSON.stringify(messageInfo));
    alert('Your message has been submitted');
    document.getElementById('contactForm')?.reset();
}

function showData() {
    const infoList = JSON.parse(localStorage.getItem('InfoList')) || [];
    const infoTable = document.getElementById('weightData');
    infoTable.innerHTML = '';

    if (!infoList || !infoList.length) {
        infoTable.innerHTML = '<tr><td colspan="6" class="text-center">No data found</td></tr>';
        return;
    }

    infoList.forEach((info, i) => {
        const infoRow = document.createElement('tr');
        const deleteButton = document.createElement('i');
        deleteButton.classList.add('bi', 'bi-trash', 'lg', 'text-primary', 'col-sm-1');
        deleteButton.setAttribute('onclick', `deleteInfo(${i})`);
        const infoFirstName = document.createElement('td');
        infoFirstName.classList.add('ps-3');
        infoFirstName.textContent = info.firstName;
        const infoLastName = document.createElement('td');
        infoLastName.textContent = info.lastName;
        const infoPhone = document.createElement('td');
        infoPhone.textContent = info.phone;
        const infoImage = document.createElement('td');
        infoImage.innerHTML = `<img src="${info.image}" alt="user${i + 1}" style="width: 75px; height: 75px">`;
        const infoDetails = document.createElement('td');
        infoDetails.classList.add('col-4');

        infoDetails.innerHTML = `
                                <p onclick="showDetails(${i})">
                                    <a role="button" data-bs-toggle="modal" data-bs-target="#detailModal"
                                        class="link-secondary text-dark collapsed"
                                        aria-expanded="false" aria-controls="info1">Details...</a>
                                </p>`;

        const infoDelete = document.createElement('td');
        infoDelete.classList.add('col-sm-1');
        infoDelete.appendChild(deleteButton);

        infoRow.appendChild(infoFirstName);
        infoRow.appendChild(infoLastName);
        infoRow.appendChild(infoPhone);
        infoRow.appendChild(infoImage);
        infoRow.appendChild(infoDetails);
        infoRow.appendChild(infoDelete);
        infoTable.appendChild(infoRow);
    });
}

function showDetails(i) {
    // Create a p element for each weightDate object relative to the index and append it to the modal body
    const modal = new bootstrap.Modal('#detailsModal');

    const infoList = JSON.parse(localStorage.getItem('InfoList'));
    const weightData = infoList[i].weightDate;

    modalBody.innerHTML = '';

    weightData.forEach((info) => {
        const p = document.createElement('p');
        p.textContent = `${info.date}: ${info.weight} lbs`;
        modalBody.appendChild(p);
    });
    modal.show();
}
function toggleList() {
    var list = document.getElementById('myList');
    if (list.style.display === 'none') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
}

function deleteInfo(i) {
    const infoList = JSON.parse(localStorage.getItem('InfoList')) || [];
    infoList.splice(i, 1);
    localStorage.setItem('InfoList', JSON.stringify(infoList));
    showData();
}