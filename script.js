
function search_week() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('week');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }
} 
const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author");

const API_URL = "https://quoteslate.vercel.app/api/quotes/random";

const getQuote = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const quote = data.quote || 'Unknown';
    const author = data.author || 'Unknown';

    quoteEl.textContent = quote;
    authorEl.textContent = author;
  } catch (error) {
    console.log(error);
    quoteEl.textContent = 'Oops! Something went wrong.';
    authorEl.textContent = '';
  }
}

const newQuoteBtn = document.querySelector(".button-27")

// rest of the code

 // fetching a quote on page load

newQuoteBtn.addEventListener('click', getQuote); // attaching an event listener to the new quote button

