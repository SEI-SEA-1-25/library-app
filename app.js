// variables

// DOM references
let form = document.querySelector('#form')
let input = document.querySelector('#text-field')
let bookContainer = document.querySelector('.book-container')

// listeners
form.addEventListener('submit', fetchBookData)

// functions
// function searchBooks()

async function fetchBookData(event) {
    try {
    event.preventDefault();
    let searchQuery = input.value
    const response = await fetch(`http://openlibrary.org/subjects/${searchQuery}.json?`)
    const data = await response.json()
    clear();
    // console.log(data)
    let book = data.works
    function randomBook(info) {
        return info[Math.floor(Math.random()*book.length)];
    }
    var newBook = randomBook(book)
    // console.log(newBook)
    let title = newBook.title
    // console.log(title)
    let author = newBook.authors[0].name
    // console.log(author)
    let cover = newBook.cover_id
    // console.log(cover)
    let coverSrc = `http://covers.openlibrary.org/b/id/${cover}-L.jpg`

    let divEl = createBook(title, coverSrc, author)
    bookContainer.appendChild(divEl)
    } catch (err) {
    clear();
    let h2El = document.createElement('h2');
    h2El.textContent = "No results!";
    bookContainer.appendChild(h2El)
    let divEl = document.createElement('div');
    divEl.style.background = "rgb(189, 189, 189)"
}
}

function createBook(title, coverSrc, author) {
    let divEl = document.createElement('div');
    
    let titleEl = document.createElement('h2');
    titleEl.textContent = title;

    let imgEl = document.createElement('img');
    imgEl.src = coverSrc;

    let authorEl = document.createElement('h3');
    authorEl.textContent = author;

    divEl.appendChild(titleEl);
    divEl.appendChild(imgEl);
    divEl.appendChild(authorEl);
    divEl.classList.add("book-container-gray")
    return divEl;
}

function clear() {
    // while the post-container still has child divs, remove the first child.
while(bookContainer.firstChild) {
     bookContainer.removeChild(bookContainer.firstChild)
}
}