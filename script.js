// Created a function
document.addEventListener("DOMContentLoaded",  function(){ // addEventListener listens to the function that I am displaying
    const searchButton = document.querySelector("#button"); //  the first Element within the document that matches the specified CSS selector, or group of CSS selectors
    const searchInput = document.querySelector("input[name='searchBox']"); // Targets the first element with the specific CSS with it 

    // Another function 
    searchButton.addEventListener("click", function(){
        const query = searchInput.value.trim(); // Removes whitespace from both sides of the string 
        if (query) { // Boolean  (window.location.href returns the URL to the current page)
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`; // It uses the google search URL to search up what was put inside the inputBox 
            // method encodes a URI component. and turns it into a string 
        } else {
            alert("Please enter something in the search inputbox") // This shows an error if you don't enter something in the searchBox (Validation)
        }
    });
});




