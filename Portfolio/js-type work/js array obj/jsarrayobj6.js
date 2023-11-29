    window.onload = showAll();

function addBook() {
    const bookInventory = JSON.parse(localStorage.getItem("Book")) || [];
    const bookTitle = document.getElementById("title").value;
    const identifier = document.getElementById("ISBN").value;
    const pages = document.getElementById("pagecount").value;

    if (bookTitle === '' || identifier === '' || pages === '') {
        console.log('Invalid input');
        return;
    }

    const bookExists = bookInventory.some(book => book.SerialNumber === Number(identifier) && book.title === bookTitle);
    if (bookExists) {
        console.log('Book already exists');
        return;
    }

    const book = {
        title: bookTitle,
        SerialNumber: Number(identifier),
        pagecount: Number(pages),
        bookavailable: 'Returned',
    };

    bookInventory.push(book);
    console.log(bookInventory);
    localStorage.setItem("Book", JSON.stringify(bookInventory));
    showAll();
}

let table = document.querySelector("table");
function showAll() {
    const allBooks = JSON.parse(localStorage.getItem("Book") || "[]");

    let list = '';
    allBooks.forEach(book => {
        list += `
        <tr>
            <td>${book.title}</td>
            <td>${book.SerialNumber}</td>
            <td>${book.pagecount}</td>
            <td>${book.bookavailable}</td>
        </tr>`;
    })
    document.getElementById("bookList").innerHTML = `<h3>List of Checked Out Books</h3>
    <table class="table table-striped">
    <thead>
        <tr>
            <th>Title</th>
            <th>ISBN</th>
            <th>Pages</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        ${list}
    </tbody>
    </table>`;
}

function submitBook() {
    const searchedBook = JSON.parse(localStorage.getItem("Book"));
    const ISBNTitle = document.getElementById("searchBook").value;
    const bookUpdate = document.querySelector('input[name=searchType]:checked');
    const bookExists = searchedBook.find(book => book.SerialNumber === Number(ISBNTitle));
    console.log(bookExists);

    const bookAvailablity = bookUpdate.value;
    if (bookAvailablity === 'Returned') {
        bookUpdate.value = 'Checked Out';
    } else if (bookAvailablity === 'Checked Out') {
        bookUpdate.value = 'Returned';
    }

    if (ISBNTitle === '') {
        console.log('Invalid input');
        alert('Invalid input');
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

    showAll();
}