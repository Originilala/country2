import axios from "axios";
import showCountry from "./showCountry.js";
//import countryQuery from "./countryQuery";

export const fetchCountry = async (query) => {
    const URI = `https://restcountries.com`;
    const endpoint = `/v2/name/`;
    const countryQuery1 = query;
    //const countryQuery1 = countryQuery();

    try {
        const response = await axios.get(`${URI}${endpoint}${countryQuery1}`);
        showCountry(response.data);
        console.log(response.data);
        // response.data.map((country) => {
        //     console.log(country);
        // })
    } catch (err) {
        console.log(err);
    }

};