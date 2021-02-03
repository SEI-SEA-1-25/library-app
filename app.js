let searchBar = document.querySelector(".search_bar");
let goButton = document.querySelector("button");

async function fetchLibrary() {
  const response = await fetch(`http://openlibrary.org/subjects/romance.json`);
  const data = await response.json();
  let title = data.works;
  let genre = data.name;
  console.log(title);
}
fetchLibrary();
/////
const createTitle = (title) => {
  // for (let i = 0; i < formContainer.length; i++) {
  let div = document.createElement("div");
  div.textContent = title;

  title.appendChild("div");
  return title;
};
createTitle();
//////
goButton.addEventListener("click", showResults);

function showResults() {
  let showResults = document.querySelector(".container2").innerText;
}
