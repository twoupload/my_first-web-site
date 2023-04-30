const quotes = [
    {
        quote: "With great power comes great responsibility.",
        author: "spiderman",
    },
    {
        quote: "I can do this all day.",
        author: "Captain America",
    },
    {
        quote: "It's still you inside of it.",
        author: "Betty Ross",
    },
    {
        quote: "It's hard for a good man to be a king.",
        author: "Black panther",
    },
    {
        quote: "We can't do this alone. We need you.",
        author: "Carol Danvers",
    },
    {
        quote: "I just wanted to take another look at you.",
        author: "A star is born",
    },
    {
        quote: "The greatest thing you'll ever learn is just to love and be loved in return.",
        author: "Moulin Rouge",
    },
    {
        quote: "It's only after we've lost everything that we're free to do anything.",
        author: "Tyler durben",
    },
    {
        quote: "If we didn't do what we loved, we wouldn't exist.",
        author: "Adonis",
    },
    {
        quote: "Every man dies, not every man really lives.",
        author: "Braveheart",
    },
];

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;