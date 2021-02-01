document.getElementById('subject-submit').addEventListener('click', function() {
  fetchAndDisplay()
})


function fetchAndDisplay() {
  const searchTerm = document.getElementById('subject-input').value

  fetch(`https://openlibrary.org/subjects/${searchTerm}.json`)
  .then((res) => res.json())
  .then((json) => {
    const works = json.works
    const randomIndex = Math.floor(Math.random() * works.length)
    const randomWork = works[randomIndex]
  
    const authorsString = turnAuthorsIntoString(randomWork.authors)
    const coverSrc = `http://covers.openlibrary.org/b/id/${randomWork.cover_id}-M.jpg`
  
    document.getElementById('display-title').innerText = randomWork.title
    document.getElementById('display-author').innerText = authorsString
    document.getElementById('display-cover').src = coverSrc
    document.querySelector('.display-zone').classList.remove('hidden')
    document.querySelector('.error-zone').classList.add('hidden')
  }).catch((error) => {
    document.querySelector('.display-zone').classList.add('hidden')
    document.querySelector('.error-zone').classList.remove('hidden')
  })
}



function turnAuthorsIntoString(authors) {
  let authorsStrings = []

  authors.forEach((authorObj) => {
    authorsStrings.push(authorObj.name)
  })

  return authorsStrings.join(', ')
}
