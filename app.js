




    let searchBar = document.querySelector(".search-bar")
    let goButton = document.querySelector("#button")
    goButton.addEventListener('click', loadInfo)
        
        
    
    async function loadInfo() {
        
        let userQuery = searchBar.value
        let searchQuery = "http://openlibrary.org/subjects/" + userQuery + ".json?"
        // console.log(searchQuery)  
        
    const response = await fetch(searchQuery);
    const data = await response.json();
    
    console.log(data);


        let bookWorks = data.works
        // console.log(bookWorks)

  
    bookWorks.forEach(function(authorArr){
        //  console.log(authorArr.authors)

         let nameObj = authorArr.authors

         console.log(nameObj.name)
    })
    
}








// let userQuery = document.querySelector(".search-bar")
//     userQuery.addEventListener('submit', function() {


//     })


//    Mystery 


///Build a function that first allows the user to enter a genre into the search feild.  Upon clicking "go" it injects their
//search query into the link and fetches 

//set search query to a variable,  string together that search query to the link. 


// async function newQuote() {
   
//     const res = await fetch('https://api.kanye.rest');
//     const data = await res.json();
//     console.log(data);