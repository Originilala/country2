import {fetchCountry} from "./fetchCountry";

const input = document.getElementById('input-field');
const submit = document.getElementById('submit-btn')

const handleSubmit = () => {
    fetchCountry(input.value);
    input.value = "";
}

submit.addEventListener('click', handleSubmit);

input.addEventListener('keyup', (e) => {
    if(e.key === "Enter"){
        handleSubmit();
    }
});