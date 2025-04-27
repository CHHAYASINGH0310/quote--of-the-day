const quotes = [{
        quote: "you're on your own ,so live your life like it's your own.",
        author: "chhaya singh"
    },


    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Act as if what you do makes a difference. It does.",
        author: "William James"
    }
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    document.getElementById('quote').textContent = `"${selectedQuote.quote}"`;
    document.getElementById('author').textContent = `- ${selectedQuote.author}`;
}