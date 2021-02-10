// const axios = require("axios");

async function getQuotes() {

    const response = await axios.get('https://api.kanye.rest');
    console.log("RES:", response);
    console.log("RANDOM QUOTE:", response.data)
    const quotesOfKanye = document.getElementById("quotes");
    console.log(quotesOfKanye)
    for (const quote of Object.keys(response.data)) {
        const quote = response.data;
        console.log('QUOTE:', quote)
        const listItem = document.createElement('li');

        listItem.textContent = `${quote.quote}`;
        console.log(listItem)
    quotesOfKanye.appendChild(listItem);
    }

}

getQuotes()

// console.log(allProvinces);
// for (const province of Object.keys(response.data)) {
//     console.log('PROVINCIE:', province)
// }