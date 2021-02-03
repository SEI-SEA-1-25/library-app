let searchWord
let bookList
let book
let id

let title
let author

let imageUrl

const titleEl = document.querySelector("#booktitle")
const authorEl = document.querySelector("#author")

const inputEl = document.querySelector("#inputText")
const coverImageEl = document.querySelector("#coverImage")

const SubmitButtonEl = document.querySelector("#submitButton")

async function fetchBookList(){
    const res  = await fetch(`http://openlibrary.org/subjects/${searchWord}.json`)
    const data = await res.json()
    console.log(data.works)
    bookList = data.works
}

function chooseBook(){
console.log(bookList)
   console.log(bookList.length)
   let index = Math.floor( Math.random() * bookList.length)
   book = bookList[index]
   console.log(book)
}

function getInformation(){
title = book.title
author = book.authors[0].name
id = book.cover_id

console.log(title)
console.log(author)

}


function updatesDOM(){

titleEl.innerText = title
authorEl.innerText = author

}

function readForm(){
searchWord = inputEl.value;
console.log(searchWord)
}

function getImageUrl(){
    imageUrl = `http://covers.openlibrary.org/b/id/${id}-L.jpg`
    console.log(imageUrl)
}

function displayImage(){
    coverImageEl.src = imageUrl
}

function getImage(){
    getImageUrl(book.cover_id);
    displayImage();
}

async function searchAndDisplay(){
    readForm();
    await fetchBookList();
    chooseBook();

    getInformation();
    getImageUrl();
    displayImage();
    updatesDOM();
}

function handleForm(event) { 
    event.preventDefault(); 
    searchAndDisplay();
} 


//searchAndDisplay();
SubmitButtonEl.addEventListener("click",handleForm)







// console.log(books)

// fetch('https://api.kanye.rest')
// .then(function(res) {
//     return res.json()
// })
// .then(function(data) {
//     console.log(data); //line to put on screen, etc.
// })
// .catch((error) => {
//     // handle the error however you want
// })
// // until fetch is done
// // have to put async to use await
// async function fetchKanyeData() {
//     const res= await fetch('https://api.kany.rest')
//     const data = await res.json()
//     console.log(data) // put it on the screen, etc.
// fetchKanyeData() 
// try {
//     console.log(fakeVar);
// }   catch(err) {
//     console.log('uh oh');
// }