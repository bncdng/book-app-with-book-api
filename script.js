// GET ELEMENTS FROM HTML
const bookDetails = document.getElementById("bookDetails");
const table = document.getElementById("table");

// STATE
let state = {
  books: [],
};

// RENDER FUNCTION
function render() {
  state.books.forEach((book) => {
    // Create row for book details
    const tr = document.createElement("tr");
    tr.id = "bookDetails";

    // Create cell for cover
    const cover = document.createElement("td");
    cover.id = "cover";
    tr.append(cover);

    // Create a cell for cover image
    const coverImg = document.createElement("img");
    coverImg.src = book.cover;
    coverImg.alt = "Book Cover";
    cover.append(coverImg);
    tr.append(cover);

    // Create cell for title
    const title = document.createElement("td");
    title.id = "title";
    title.textContent = book.title;
    tr.append(title);

    // Create cell for ISBN
    const isbn = document.createElement("td");
    isbn.id = "isbn";
    isbn.textContent = book.isbn;
    tr.append(isbn);

    // Create anchor tag and append row content
    const anchor = document.createElement("a");
    anchor.href = `book_details/bookdetail.html?id=${book.id}`;
    anchor.append(title);
    anchor.append(isbn);
    tr.append(anchor);

    table.append(tr);
  });
}

render();

// REFRESH/LOAD FUNCTION
function loadFromAPI() {
  fetch("http://localhost:4730/books")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      state.books = data;
      render();
    });
}

loadFromAPI();
