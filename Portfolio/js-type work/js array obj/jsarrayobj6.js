function addBook() {
    const bookInventory = JSON.parse(localStorage.getItem("book") || "[]");
    const bookTitle = document.getElementById("title").value;
    const identifier = document.getElementById("ISBN").value;
    const pages = document.getElementById("pagecount").value;

    if (bookTitle === '' || identifier === '' || pages === '') {
        console.log('Invalid input');
        return;
    }

    const bookExists = bookInventory.some(book => book.SerialNumber === Number(identifier));
    if (bookExists) {
        console.log('Book already exists');
        return;
    }

    const book = {
        title: bookTitle,
        SerialNumber: Number(identifier),
        pagecount: Number(pages),
        bookavailable: false === 'Checked Out',
    };

    if (book.bookavailable !== true) {
        console.log('Book is not available');
    } else {
        console.log('Book is available');
        book.bookavailable = true;
        return;
    }

    bookInventory.push(book);
    console.log(bookInventory);
    localStorage.setItem("Book", JSON.stringify(bookInventory));
    showAll();
}

let table = document.querySelector("table");
function showAll() {
    const allBooks = JSON.parse(localStorage.getItem("Book") || "[]");
    const bookList = document.getElementById("bookList");

    bookList.innerHTML = "<h3>List of Checked Out Books</h3>";
    let table = document.getElementById("bookList");
    if (!table) {
        table = document.createElement('table');
        table.classList.add('table', 'table-striped');
        bookList.appendChild(table);
    } else {
        table.innerHTML = '';
        return;
    }

function createTableCell(text) {
    const td = document.createElement('td');
    td.textContent = text;
    return td;
}

function createTableHeader() {
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    tr.appendChild(createTableCell('Title'));
    tr.appendChild(createTableCell('ISBN'));
    tr.appendChild(createTableCell('Pages'));
    tr.appendChild(createTableCell('Status'));
    thead.appendChild(tr);
    return thead;
}

function createTableRow(book) {
    const tr = document.createElement('tr');
    tr.appendChild(createTableCell(book.title));
    tr.appendChild(createTableCell(book.SerialNumber));
    tr.appendChild(createTableCell(book.pagecount));
    tr.appendChild(createTableCell("Checked Out"));
    return tr;
}
    console.log("Creating table header");
    table.appendChild(createTableHeader());
    console.log("Creating table body");
    table.appendChild(createTableBody(allBooks));
    console.log(allBooks);
}

function submitBook() {
    const searchedBook = JSON.parse(localStorage.getItem("Book") || "[]");
    const ISBNTitle = document.getElementById("searchBook").value;
    const bookUpdate = document.querySelector('#searchType input[name=searchType]:checked');
    const bookExists = searchedBook.some(book => book.SerialNumber === Number(ISBNTitle));

    const bookAvailablity = bookUpdate.value; 
    if (bookAvailablity === 'available') {
        bookUpdate.value = 'checked out';
    } else if (bookAvailablity === 'checked out') {
        bookUpdate.value = 'available';
    }

    if (ISBNTitle === '') {
        console.log('Invalid input');
        return;
    }

    if (bookExists) {
        bookExists.bookavailable = bookUpdate.value;
        alert('Book updated successfully');
        localStorage.setItem("Book", JSON.stringify(searchedBook));
        showAll();
    } else {
        console.log('Book not found');
        return;
    }
}