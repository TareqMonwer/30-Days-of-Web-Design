class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
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
  }

  clearField() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  validateForm(title, author, isbn, book) {
    if (title === "" || author === "" || isbn === "") {
      return false;
    } else {
      return true;
    }
  }

  showAlert(msg, notif) {
    const bookform = document.getElementById("book-form"),
      bookapp = document.getElementById("book-app"),
      div = document.createElement("div");

    div.className = `message ${notif}`;
    div.innerText = msg;
    bookapp.insertBefore(div, bookform);

    setTimeout(function () {
      document.querySelector(".message").remove();
    }, 3000);
  }
}

// Local storage class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => {
      const ui = new UI();
      // add book to ui.
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

/***
 * DOM LOAD Event listeners
 **/
document.addEventListener("DOMContentLoaded", Store.displayBooks());

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
  if (ui.validateForm(title, author, isbn, book)) {
    ui.showAlert("Book added successfully", "success");
    // add book to list.
    ui.addBookToList(book);
    // add book to localstorage
    Store.addBook(book);
    // clear fields
    ui.clearField();
  } else {
    ui.showAlert("Fill out all the fields and submit again", "error");
  }

  e.preventDefault();
});

document.querySelector("#book-list").addEventListener("click", function (e) {
  // Instantiate UI
  const ui = new UI();

  // Delete book row
  ui.deleteBook(e.target);
  // delete book from localstore
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  ui.showAlert("Book removed.", "success");
  e.preventDefault();
});
