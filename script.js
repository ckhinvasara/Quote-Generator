let apiQuotes = [];
const quoteText = document.getElementById("quote");
const author = document.getElementById("author");
const newquote = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");

function newQuote() {
    const randomInt = Math.floor(Math.random() * apiQuotes.length);
    const quote = apiQuotes[randomInt];
    quoteText.textContent = quote["text"];
    if(!quote["author"]){
        author.textContent = "Unknown"; 
    }else{
        author.textContent = quote["author"];
    }
    
}

function shareQuote() {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.textContent}`;
    window.open(twitterURL, "_blank");
}

async function getQuotes() {
    const apiURL = "https://type.fit/api/quotes";
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
}


newquote.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", shareQuote);

getQuotes();