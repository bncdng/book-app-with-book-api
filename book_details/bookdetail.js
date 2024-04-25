const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");
const main = document.getElementById("main");

console.log(id);

document.write(id);

let state = {
  book: null,
};

// RENDER FUNCTION
function render() {
  // Create cover image
  const coverImg = document.createElement("img");
  coverImg.src = state.book.cover;
  coverImg.alt = "Book Cover";
  main.append(coverImg);

  // Create title
  const title = document.createElement("h2");
  title.textContent = state.book.title;
  title.id = "title";
  main.append(title);

  // Create Author
  const author = document.createElement("p");
  author.textContent = state.book.author;
  author.id = "author";
  main.append(author);

  // Create Book Description (Abstract)
  const abstract = document.createElement("p");
  abstract.textContent = state.book.abstract;
  abstract.id = "abstract";
  main.append(abstract);
}

// REFRESH/LOAD FUNCTION
function loadFromAPI() {
  fetch(`http://localhost:4730/books/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      state.book = data;
      render();
    });
}

loadFromAPI();
