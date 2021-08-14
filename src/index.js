import './sass/main.scss';
const debounce = require('lodash.debounce');
import countryCardTpl from './templates/countryCardTpl.hbs';


const refs = {
    inputEl: document.querySelector('#country-name-input'),
    container: document.querySelector('.container')
}

console.log(refs.container);
refs.inputEl.addEventListener('input', debounce(getCountry, 2000));

console.log(refs.inputEl);

function getCountry(event) {
    return fetchCountry(event.target.value)
}

function fetchCountry(name) {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(response => {
            return response.json();
        })
        .then(country => {
            console.log(country);
            const markup = countryCardTpl(country);
            console.log(markup);
        })
        .catch(error => {
            console.log(error);
        })
}
