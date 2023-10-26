window.addEventListener('DOMContentLoaded', function () {
    var hasEnteredValues = localStorage.getItem("hasEnteredValues");

    if (!hasEnteredValues) {
        var name = prompt("Please enter your name:");
        var lastName = prompt("Please enter your last name:");
        var email = prompt("Please enter your email:");
        var phoneNumber = prompt("Please enter your phone number:");

        localStorage.setItem("name", name);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("phoneNumber", phoneNumber);

        localStorage.setItem("hasEnteredValues", true);
    }
});

function sendTicket() {
    const selectedClass = document.querySelector('input[name="class"]:checked')?.value;
    const selectedType = document.querySelector('input[name="type"]:checked')?.value;
    const selectedAge = Array.from(document.querySelectorAll('input[name="age"]:checked')).map(element => element.value);
    const selectedDeparture = document.getElementById('departure')?.value;
    const selectedDestination = document.getElementById('destination')?.value;
    const selectedDate = document.getElementById('date')?.value;

    if (!selectedClass || !selectedType || selectedAge.length === 0 || !selectedDeparture || !selectedDestination || !selectedDate) {
        alert('Please select all fields.');
        return;
    }

    const ticketInfo = {
        class: selectedClass,
        type: selectedType,
        age: selectedAge,
        departure: selectedDeparture,
        destination: selectedDestination,
        date: selectedDate
    };
    localStorage.setItem('ticket', JSON.stringify(ticketInfo));

    window.location.href = 'jsweb2p2.html';
}

document.addEventListener('DOMContentLoaded', function () {
    const ticketInfo = JSON.parse(localStorage.getItem('ticket'));

    document.getElementById('class').textContent = ticketInfo.class;
    document.getElementById('type').textContent = ticketInfo.type;
    document.getElementById('age').textContent = ticketInfo.age.join(', ');
    document.getElementById('departure').textContent = ticketInfo.departure;
    document.getElementById('destination').textContent = ticketInfo.destination;
    document.getElementById('date').textContent = ticketInfo.date;

    localStorage.removeItem('ticket');
});

function returnPage() {
    window.location.href = 'jsweb2p1.html';
}