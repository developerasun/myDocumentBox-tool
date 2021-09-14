const quotes = [ 
    {
        quote: "There are two means of refuge from the miseries of life: music and cats.", 
        author: "Albert Schweitzer",
    },
    {
        quote: "A happy arrangement: many people prefer cats to other people, and many cats prefer people to other cats.", 
        author: "Mason Cooley",
    },
    {
        quote: "How we behave toward cats here below determines our status in heaven.", 
        author: " Robert A. Heinlein",
    },
    {
        quote: "I used to love dogs until I discovered cats.", 
        author: "Nafisa Joseph",
    },
    {
        quote: "You can not look at a sleeping cat and feel tense.", 
        author: "Jane Pauley",
    }
]; 

const quote = document.querySelector("#quote span:first-child"); 
const author = document.querySelector("#quote span:last-child"); 
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote; 
author.innerText = randomQuote.author; 