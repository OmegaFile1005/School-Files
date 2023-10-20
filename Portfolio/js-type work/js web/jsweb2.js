window.addEventListener('DOMContentLoaded', function () {
    var name = prompt("Please enter your name, last name, email, and phone number (separated by commas):");
    
    // Split the entered values using commas as the delimiter
    var values = name.split(",");
    var enteredName = values[0].trim();
    var lastName = values[1].trim();
    var email = values[2].trim();
    var phoneNumber = values[3].trim();

    // Store the entered values in localStorage
    localStorage.setItem("name", enteredName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("phoneNumber", phoneNumber);
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
function returnPage() {
    window.location.href = 'jsweb2p1.html';
}