function addBook() {
    const inventory = JSON.parse(localStorage.getItem("books")) || [];
    var booktitle = document.getElementById("title").value;
    var identifier = document.getElementById("ISBN").value;
    var pages = document.getElementById("pagecount").value;
    var book = {
        title: booktitle,
        ISBN: identifier,
        pagecount: pages,
        bookavailable: true
    };
    inventory.push(book);
    localStorage.setItem("book", JSON.stringify(inventory));
    console.log(inventory);
}

function submitBook() {
    // const bookStatus = document.querySelector("input[name=searchType]:checked").value;

    // if (bookStatus === "checkOut") {
    //     document.getElementById("checkOut").checked = true;
    // } else {
    //     document.getElementById("return").checked = true;
    // }

    // const tbody = document.querySelector("tbody");
    // const tr = document.createElement("tr");
    // tbody.appendChild(tr);

    // const tdTitle = document.createElement("td");
    // const tdISBN = document.createElement("td");
    // const tdPagecount = document.createElement("td");
    // const status = document.createElement("td");

    // tr.appendChild(tdTitle);
    // tr.appendChild(tdISBN);
    // tr.appendChild(tdPagecount);
    // tr.appendChild(status);

    // tdTitle.textContent = document.getElementById("title").value;
    // tdISBN.textContent = document.getElementById("ISBN").value;
    // tdPagecount.textContent = document.getElementById("pagecount").value;

    // if (bookStatus === "checkOut") {
    //     status.textContent = "Checked Out";
    // } else {
    //     status.textContent = "Available";
    // }

    // localStorage.setItem("book", JSON.stringify(tdTitle.textContent));

    let bookInventory = document.getElementById('bookList');

    if (localStorage.getItem("book") === null) {
        bookInventory = [];
    } else {
        bookInventory = JSON.parse(localStorage.getItem("book"));
    }

    localStorage.getItem("book");
    if (localStorage.getItem("book.ISBN") === document.getElementById("searchBook").value) {
        console.log("book exists");
        document.querySelectorAll("searchType").checked = true;
    } else {
        console.log("book does not exist");
        document.querySelectorAll("searchType").checked = false;
        document.getElementById("searchBook").value = "";
        return;
    }

    if (document.getElementById("checkOut").checked) {
        document.createAttribute("status").value = "Checked Out";
    } else {
        document.createAttribute("status").value = "Available";
    }

    if (document.getElementById("return").checked) {
        document.createAttribute("status").value = "Available";
    } else {
        document.createAttribute("status").value = "Checked Out";
    }

    if (document.getElementById("checkOut").checked || document.getElementById("return").checked) {
        alert("Book Checked Out or Returned");
    }

    document.getElementById("bookList").value = "";
    document.innerHTML = "<h3>Book List</h3>";
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
}