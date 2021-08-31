const loadQuotes = () => {
    fetch ('https://api.kanye.rest')
    .then (res => res.json())
    .then (data => displayQuote(data))
}
const displayQuote = quote => {
    const quoteElemnnt = document.getElementById('quote');
    quoteElemnnt.innerText = quote.quote;
}