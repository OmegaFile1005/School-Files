const bookInventory = [];
function addBook() {
    const booktitle = document.getElementById("title").value;
    const identifier = document.getElementById("ISBN").value;
    const pages = document.getElementById("pagecount").value;
    const book = {
        title: booktitle,
        ISBN: identifier * 1,
        pagecount: pages * 1,
        bookavailable: "Available",
    };
    bookInventory.push(book);
    localStorage.setItem("book", JSON.stringify(bookInventory));
    console.log(bookInventory);
}

function submitBook() {
    const bookInventory = JSON.parse(localStorage.getItem("book") || "[]");
    const searchBookInput = document.getElementById("searchBook").value;
    const bookavailable = document.querySelector('input[name=searchType]:checked').value;
    const bookUpdate = document.querySelector('#searchType input[name=searchType]:checked');

    const bookAvailability = bookavailable === 'Return' ? 'Available' : bookavailable === 'Check Out' ? 'Checked Out' : '';

    const statusAttribute = document.createAttribute("status");
    statusAttribute.value = bookUpdate ? (bookavailable === 'Return' ? "Available" : "Checked Out") : (bookavailable === 'Return' ? "Checked Out" : "Available");

    const bookAvailabilityIsAvailable = bookUpdate || bookAvailability === 'Available';
    if (bookAvailabilityIsAvailable) {
        alert("Book is available");
    } else {
        alert("Book is checked out");
    }

    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "<h3>List of Checked Out Books</h3>";

    let table = document.getElementById("bookList");
    if (!table) {
        table = document.createElement('table');
        table.classList.add('table', 'table-striped');
        bookList.appendChild(table);
    } else {
        table.innerHTML = '';
    }

    const createTableCell = (text) => {
        const td = document.createElement('td');
        td.textContent = text;
        return td;
    };

    const createTableHeader = () => {
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');
        tr.appendChild(createTableCell('Title'));
        tr.appendChild(createTableCell('ISBN'));
        tr.appendChild(createTableCell('Page Count'));
        tr.appendChild(createTableCell('Status'));
        thead.appendChild(tr);
        table.appendChild(thead);
        return thead;
    };

    const createTableBody = () => {
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
        return tbody;
    };

    const createTable = () => {
        const thead = createTableHeader();
        const tbody = createTableBody();
        return { thead, tbody };
    };

    const { thead, tbody } = createTable();

    bookInventory.forEach(book => {
        const tr = document.createElement('tr');
        const tdTitle = createTableCell(book.title);
        const tdISBN = createTableCell(book.ISBN);
        const tdPagecount = createTableCell(book.pageCount);
        const tdStatus = createTableCell(book.status);
        tr.appendChild(tdTitle);
        tr.appendChild(tdISBN);
        tr.appendChild(tdPagecount);
        tr.appendChild(tdStatus);
        tbody.appendChild(tr);
    });
}
