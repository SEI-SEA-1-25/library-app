// Variables
let submitButton = document.querySelector("#submit");
let form = document.querySelector("#form");
let bookBox = document.querySelector("#book-box");
// event listeners
form.addEventListener("submit", search);

// functions

//
async function search(event) {
  event.preventDefault();
  let searchQuery = form.value; // create array of books
  try {
    // try catch
    const library = await fetch("http://openlibrary.org/subjects/love.json");
    const data = await library.json();
    const books = data.works;
    books.forEach(function (book) {
      //for each looping
      //   console.log(book);
    });
    let booksArray = books.map(function (book) {
      return {
        title: book.title,
        // img: book.cover_id,
        author: book.authors[0].name,
      };
    });
    console.log(booksArray);
    let divEl = creatBookList(booksArray[0].title, booksArray[0].author);
    bookBox.appendChild(divEl);
  } catch (err) {
    // .filter no relevant result
    console.log("oh noooo");
  }
}

// clear function
// function clear() {
//     while (postContainer.firstChild) {
//       postContainer.removeChild(postContainer.firstChild);
//     }
//   }

// put the books on the screen
// title, img, author, genre
// .map

function creatBookList(title, author) {
  let divEl = document.createElement("div");
  //   let imgEl = document.createElement("img");
  //   imgEl.src = img;

  let h2El = document.createElement("h2");
  h2El.textContent = title;
  let h3El = document.createElement("h3");
  h3El.textContent = author;

  divEl.appendChild(h2El);
  divEl.appendChild(h3El);
  //   divEl.appendChild(imgEl);
  // return a div back
  return divEl;
}
