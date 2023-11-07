function saveMovie() {
    var fields = ['title', 'director', 'year'];
    var isMissing = fields.some(function(field) {
        return document.getElementById(field).value === '';
    });
    if (isMissing) {
        alert('Please fill in all fields.');
        return;
    }
    var movie = {
        title: document.getElementById('title').value,
        director: document.getElementById('director').value,
        year: document.getElementById('year').value,
        borrowed: document.getElementById('borrow').checked
    };
    var movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(movies));
    console.log(movies);
}

function showBorrowed() {
    const heading = document.querySelector('h3');
    heading.removeAttribute('hidden');

    const movies = JSON.parse(localStorage.getItem('movies'));

    const borrowedMovies = movies.filter(movie => movie.borrowed);

    const borrowedList = document.getElementById('borrowed');

    const table = document.createElement('table');
    table.classList.add('table', 'table-striped');

    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const thTitle = document.createElement('th');
    thTitle.textContent = 'Title';
    const thDirector = document.createElement('th');
    thDirector.textContent = 'Director';
    const thYear = document.createElement('th');
    thYear.textContent = 'Year';

    tr.appendChild(thTitle);
    tr.appendChild(thDirector);
    tr.appendChild(thYear);
    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    borrowedMovies.forEach(movie => {
        const tr = document.createElement('tr');
        const tdTitle = document.createElement('td');
        tdTitle.textContent = movie.title;
        const tdDirector = document.createElement('td');
        tdDirector.textContent = movie.director;
        const tdYear = document.createElement('td');
        tdYear.textContent = movie.year;

        tr.appendChild(tdTitle);
        tr.appendChild(tdDirector);
        tr.appendChild(tdYear);
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    borrowedList.appendChild(table);
}
