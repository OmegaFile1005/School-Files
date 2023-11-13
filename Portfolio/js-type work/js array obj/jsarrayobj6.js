function addBook() {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    var title = document.getElementById("title").value;
    var ISBN = document.getElementById("ISBN").value;
    var pagecount = document.getElementById("pagecount").value;
    var book = {
        title: title,
        ISBN: ISBN,
        pagecount: pagecount
    };
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    console.log(books);
}

function submitBook() {
    const BookStatus = document.querySelector("input[name=status]:checked").value;

    let tbody = document.querySelector("tbody");
    let tr = document.createElement("tr");
    tbody.appendChild(tr);

    let tdTitle = document.createElement("td");
    let tdISBN = document.createElement("td");
    let tdPagecount = document.createElement("td");
    let Status = document.createElement("td");

    tr.appendChild(tdTitle);
    tr.appendChild(tdISBN);
    tr.appendChild(tdPagecount);
    tr.appendChild(Status);

    tdTitle.textContent = document.getElementById("title").value;
    tdISBN.textContent = document.getElementById("ISBN").value;
    tdPagecount.textContent = document.getElementById("pagecount").value;

    if (BookStatus == "checkOut") {
        Status.textContent = "Checked Out";
    } else {
        Status.textContent = "Available";
    }

    localStorage.setItem("book", JSON.stringify(tdTitle.textContent));

}