const createList = (country) => {
    //const sortedArr = sortCountry(fetchArr);
    let listText = ``
    let lastInList = country.pop();
    if(country.length){
        listText = country.map((item) => {
            return item.name;
        }).join(`, `);
        listText += ` and `;
    }
    return `${listText}${lastInList.name}`
}

export default createList;