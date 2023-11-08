function reserveAirplane() {
    let planeReservations = JSON.parse(localStorage.getItem('Airplane Reservations')) || [];
    const selectedSeats = [];
    const firstClassRadio = document.getElementById('first class');
    const economicRadio = document.getElementById('economic');
    const checkboxes = document.querySelectorAll('#plane input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedSeats.push(checkbox.id);
            checkbox.disabled = true;
            checkbox.checked = false;
        }
    });

    let ticketPrice = firstClassRadio.checked ? 295 :
        economicRadio.checked ? 230 : 0;

    const currentPlaneReservation = {
        selectedSeats,
        ticketPrice: ticketPrice * selectedSeats.length
    };

    planeReservations.push(currentPlaneReservation);

    localStorage.setItem('Airplane Reservations', JSON.stringify(planeReservations));
    // localStorage.setItem('ticketPrice', ticketPrice);

    console.log('Airplane reserved');
}

function reserveHotel() {
    const selectedRooms = Array.from(document.querySelectorAll('#hotel input[type="checkbox"]'))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.id);

    document.querySelectorAll('#hotel input[type="checkbox"]')
        .forEach(checkbox => checkbox.checked && (checkbox.disabled = true));

    // Add the readonly attribute to the radio inputs
    document.querySelectorAll('#hotel input[type="radio"]')
        .forEach(radio => radio.readOnly = true);

    const roomPrice = getRoomPrice();

    localStorage.setItem('selectedRooms', JSON.stringify(selectedRooms));
    localStorage.setItem('roomPrice', roomPrice);

    console.log('Hotel reserved');
}

function getRoomPrice() {
    const penthouseRadio = document.getElementById('penthouse');
    const regularRadio = document.getElementById('regular');

    return penthouseRadio.checked ? 180 : regularRadio.checked ? 120 : 0;
}

function showReservations() {


    // const planeReservations = JSON.parse(localStorage.getItem('selectedSeats')) || [];
    // const hotelReservations = JSON.parse(localStorage.getItem('selectedRooms')) || [];

    // if (planeReservations.length > 0 && hotelReservations.length > 0) {
    // const planeReservationsTable = createTable(planeReservations, ['table', 'table-striped']);
    // const hotelReservationsTable = createTable(hotelReservations, ['table', 'table-striped', 'table-dark']);

    // const planeReservationsContainer = document.getElementById('planeReservations');
    // if (planeReservationsContainer) {
    // planeReservationsContainer.innerHTML = '';
    // planeReservationsContainer.appendChild(planeReservationsTable);
    // }

    // const hotelReservationsContainer = document.getElementById('hotelReservations');
    // if (hotelReservationsContainer) {
    // hotelReservationsContainer.innerHTML = '';
    // hotelReservationsContainer.appendChild(hotelReservationsTable);
    // }

    // console.log('Showing reservations');
    // } else {
    // console.log('No reservations found');
    // }

    const planeReservations = JSON.parse(localStorage.getItem('Airplane Reservations'));

    if (planeReservations) {
        const planeReservationsTable = createTable(planeReservations, ['table', 'table-striped']);
        const planeReservationsContainer = document.getElementById('planeReservations');
        if (planeReservationsContainer) {
            planeReservationsContainer.innerHTML = '';
            planeReservationsContainer.appendChild(planeReservationsTable);
        }
    }
}

function createTable(planeReservations, hotelReservations) {
    for (planeReservations) {
        
}
