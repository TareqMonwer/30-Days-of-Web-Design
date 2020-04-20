// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() {}

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
  docutitle = document.getElementById("title").value = "";
  author = document.getElementById("author").value = "";
  isbn = document.getElementById("isbn").value = "";
};

// Event listeners
document.getElementById("book-form").addEventListener("submit", function (e) {
  // get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // instantiate bok
  const book = new Book(title, author, isbn);

  // instantiate UI
  const ui = new UI();

  // add book to list.
  ui.addBookToList(book);
  // clear fields
  ui.clearField();

  console.log(book);

  e.preventDefault();
});
