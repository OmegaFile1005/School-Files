const bookInventory = [];
function addBook() {
    const booktitle = document.getElementById("title").value;
    const identifier = document.getElementById("ISBN").value;
    const pages = document.getElementById("pagecount").value;
    const book = {
        title: booktitle,
        ISBN: identifier * 1,
        pagecount: pages * 1,
        bookavailable: true
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

    if (bookInventory.some(book => book.title === searchBookInput)) {
        console.log("book exists");
        document.querySelector("input[name=searchType]").checked = true;
    } else {
        console.log("book does not exist");
        document.querySelectorAll("input[name=searchType]").forEach(input => input.checked = false);
        document.getElementById("searchBook").value = "";
        return;
    }

    let bookAvailability =
        bookavailable === 'Return' ? 'Available' :
            bookavailable === 'Check Out' ? 'Checked Out' : '';
``
    const statusAttribute = document.createAttribute("status");
    statusAttribute.value = bookUpdate ? "Checked Out" : "Available";
    if (bookavailable === 'Return') {
        statusAttribute.value = bookUpdate ? "Available" : "Checked Out";
    }

    if (bookUpdate || bookAvailability === 'Available') {
        alert("Book is available");
    } else {
        alert("Book is checked out");
    }

    document.getElementById("bookList").value = "";
    document.getElementById("bookList").innerHTML = "<h3>Book List</h3>";
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    const tr = document.createElement('tr');
    const thTitle = document.createElement('th');
    const thISBN = document.createElement('th');
    const thPagecount = document.createElement('th');
    const thStatus = document.createElement('th');

    thTitle.textContent = "Title";
    thISBN.textContent = "ISBN";
    thPagecount.textContent = "Page Count";
    thStatus.textContent = "Status";

    tr.appendChild(thTitle);
    tr.appendChild(thISBN);
    tr.appendChild(thPagecount);
    tr.appendChild(thStatus);

    thead.appendChild(tr);

    bookInventory.forEach(book => {
        const tr = document.createElement('tr');
        const tdTitle = document.createElement('td');
        const tdISBN = document.createElement('td');
        const tdPagecount = document.createElement('td');
        const tdStatus = document.createElement('td');

        tdTitle.textContent = book.title;
        tdISBN.textContent = book.ISBN;
        tdPagecount.textContent = book.pagecount;
        tdStatus.textContent = book.status;

        tr.appendChild(tdTitle);
        tr.appendChild(tdISBN);
        tr.appendChild(tdPagecount);
        tr.appendChild(tdStatus);

        tbody.appendChild(tr);
    });

    document.body.appendChild(table);
    document.getElementById("bookList").appendChild(table);
}
