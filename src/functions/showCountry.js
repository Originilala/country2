import createList from "./createList";
//import getColors from "./getColors";

const showCountry = (country) => {
    const listItem = document.getElementById("country-list");
    //const sortedArr = sortCountry(fetchArr);
    listItem.innerHTML = `
            <img id="country-flag" src="${country[0].flags.png}" alt="${country[0].name}">
            <h1>${country[0].name}</h1>
            <hr>
            <p>${country[0].name} is situated in ${country[0].region}. It has a population of ${country[0].population} people</p>
            <p>The capital is ${country[0].capital}. And you can pay with ${createList(country[0].currencies)}'s</p>
            <p>They speak ${createList(country[0].languages)}</p>
            `
}

export default showCountry;