function reserveAirplane() {
    let planeReservations = JSON.parse(localStorage.getItem('Airplane Reservations')) || [];
    const selectedSeats = [];
    const seatClass = document.querySelector('input[name="seatClass"]:checked').value;
    const seatCheckboxes = document.querySelectorAll('#plane input[type="checkbox"]');

    seatCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedSeats.push(checkbox.id);
            checkbox.disabled = true;
            checkbox.checked = false;
        }
    });

    if (selectedSeats.length === 0) {
        alert('Please select at least one seat.');
        return;
    }

    let ticketPrice = seatClass === 'First Class' ? 295 :
        seatClass === 'Economic' ? 230 : 0;

    const currentPlaneReservation = {
        selectedSeats,
        ticketPrice: ticketPrice * selectedSeats.length,
        seatClass
    };

    planeReservations.push(currentPlaneReservation);

    localStorage.setItem('Airplane Reservations', JSON.stringify(planeReservations));
    // localStorage.setItem('ticketPrice', ticketPrice);

    console.log('Airplane reserved');
}

function reserveHotel() {
    let hotelReservations = JSON.parse(localStorage.getItem('Room Reservations')) || [];
    const selectedRooms = [];
    const roomClass = document.querySelector('input[name="roomType"]:checked').value;
    const roomCheckboxes = document.querySelectorAll('#hotel input[type="checkbox"]');

    roomCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedRooms.push(checkbox.id);
            checkbox.disabled = true;
            checkbox.checked = false;
        }
    });

    if (selectedRooms.length === 0) {
        alert('Please select at least one room.');
        return;
    }

    let roomPrice = roomClass === 'Penthouse' ? 180 :
        roomClass === 'Regular' ? 150 : 0;

    const currentHotelReservation = {
        selectedRooms,
        roomPrice: roomPrice * selectedRooms.length,
        roomClass
    };

    hotelReservations.push(currentHotelReservation);

    localStorage.setItem('Room Reservations', JSON.stringify(hotelReservations));

    console.log('Hotel reserved');
}

function showReservations() {
    const planeReservations = JSON.parse(localStorage.getItem('Airplane Reservations'));
    const hotelReservations = JSON.parse(localStorage.getItem('Room Reservations'));

    const planeReservationsTable = createTable(planeReservations, ['table', 'table-hover'], ['Number', 'Class', 'Seats', 'Price'], createPlaneRow);
    const hotelReservationsTable = createTable(hotelReservations, ['table', 'table-dark', 'table-striped'], ['Number', 'Type', 'Rooms', 'Price'], createHotelRow);

    const planeReservationsContainer = document.getElementById('planeReservations');
    if (planeReservationsContainer) {
        planeReservationsContainer.innerHTML = '';
        planeReservationsContainer.innerHTML = '<h3 class="text-center" id="planeList">List of Plane Reservations</h3>';
        planeReservationsContainer.appendChild(planeReservationsTable);
    }

    const hotelReservationsContainer = document.getElementById('hotelReservations');
    if (hotelReservationsContainer) {
        hotelReservationsContainer.innerHTML = '';
        hotelReservationsContainer.innerHTML = '<h3 class="text-center" id="hotelList">List of Hotel Reservations</h3>';
        hotelReservationsContainer.appendChild(hotelReservationsTable);
    }

    console.log('showReservations called');

    function createTable(reservations, classes, headers, createRow) {
        const table = document.createElement('table');
        table.classList.add(...classes);
        const tbody = document.createElement('tbody');
        const headerRow = createRow(headers);
        tbody.appendChild(headerRow);
        reservations.forEach(function (reservation, i) {
            const row = createRow([
                i + 1,
                reservation.seatClass || reservation.roomClass,
                reservation.selectedSeats?.join(', ') || reservation.selectedRooms?.join(', ') || '',
                `$${reservation.ticketPrice || reservation.roomPrice}`
            ]);
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        return table;
    }

    function createPlaneRow(data) {
        return createRow(data, ['table-hover']);
    }

    function createHotelRow(data) {
        return createRow(data, ['table-dark']);
    }

    function createRow(data, classes) {
        const row = document.createElement('tr');
        row.classList.add(...classes);
        data.forEach(function (item) {
            const cell = document.createElement('td');
            cell.textContent = item;
            row.appendChild(cell);
        });
        return row;
    }
}
