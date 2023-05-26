// 명언 만들기
const quotes = [
    {
        quote: "With great power comes great responsibility.",
        author: "spiderman",
    }, // 콤마(,)로 구분한다.
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
]; // 마무리할 때는 ;로 닫아준다. 

const quote = document.querySelector("#quote span:first-child")

const author = document.querySelector("#quote span:last-child")

// 무작위로 명언을 불러오도록 함.
// Math 모듈을 사용해야 함. 브라우저에 기본 지급
// Math.random() : 0 부터 1까지의 수 중 아무나
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]; // 가지고 있는 명언의 갯수만큼 더해준다. 

// Math.round() : 반올림 해서 올려준다.
// Math.floor() : 반을 내려준다.  
// Math. ceil() : 반올림 하되 전부 올려준다. 


quote.innerText = todaysQuote.quote; // html의  quote의 span을 채워준다.
author.innerText = todaysQuote.author; // html의author의 span을 채워준다. 