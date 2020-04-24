/***
 * Book constructor.
 **/
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

/***
 * UI Constructor.
 **/
function UI() {}

/***
 * UI Prototypes definition.
 **/
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  // create tr elem
  const row = document.createElement("tr");
  // insert book data tds
  row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
  list.appendChild(row);
};

UI.prototype.clearField = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

UI.prototype.showAlert = function (msg, notif) {
  const bookform = document.getElementById("book-form"),
    bookapp = document.getElementById("book-app"),
    div = document.createElement("div");

  div.className = `message ${notif}`;
  div.innerText = msg;
  bookapp.insertBefore(div, bookform);

  setTimeout(function () {
    document.querySelector(".message").remove();
  }, 3000);
};

UI.prototype.validateForm = function (title, author, isbn, book) {
  if (title === "" || author === "" || isbn === "") {
    // show error msg
    this.showAlert("Fill out all the fields and submit again", "error");
  } else {
    this.showAlert("Book added successfully", "success");
    // add book to list.
    this.addBookToList(book);
    // clear fields
    this.clearField();
  }
};

UI.prototype.deleteBook = function (target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};

/***
 * Event listeners
 **/
document.getElementById("book-form").addEventListener("submit", function (e) {
  // get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // instantiate book
  const book = new Book(title, author, isbn);

  // instantiate UI
  const ui = new UI();

  // validate form
  ui.validateForm(title, author, isbn, book);

  e.preventDefault();
});

document.querySelector("#book-list").addEventListener("click", function (e) {
  // Instantiate UI
  const ui = new UI();

  // Delete book row
  ui.deleteBook(e.target);
  ui.showAlert("Book removed.", "success");
  e.preventDefault();
});
