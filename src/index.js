import './sass/main.scss';
const debounce = require('lodash.debounce');
import countryCardTpl from './templates/countryCardTpl.hbs';
import countryListTpl from './templates/countryListTpl.hbs';

import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import * as Confirm from "@pnotify/confirm";
import "@pnotify/confirm/dist/PNotifyConfirm.css";

import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
defaultModules.set(PNotifyMobile, {});


const refs = {
    inputEl: document.querySelector('#country-name-input'),
    container: document.querySelector('.card-container')
}

console.log(refs.container);
refs.inputEl.addEventListener('input', debounce(getCountry, 500));

console.log(refs.inputEl);

function getCountry(event) {
    //event.preventDefault();
    let inputValue = event.target
    console.log(inputValue);
    // const form = event.currentTarget;
    // console.log(form.elements)

    return fetchCountry(event.target.value)
}

function fetchCountry(name) {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(response => {
            return response.json();
        })
        // .then(renderCard)
        .then(renderInterfeys)
        .catch(onFetchError)
        // .finally(() => { refs.inputE.reset() })
    
}

function renderInterfeys(arrCountries) {
    refs.container.innerHTML = '';
    if (arrCountries.length === 1) {
        console.log('risyu 1')
        console.log(arrCountries);
        renderCard(arrCountries);
    } else if (arrCountries.length > 1 && arrCountries.length <= 10) {
        console.log(arrCountries);
        console.log(arrCountries.length > 1 && arrCountries.length <= 10);
        renderListCountry(arrCountries);
    }
    else if (arrCountries.length > 10) {
        console.log(arrCountries.length);
        console.log(arrCountries);
        console.log("bolshe 10")
        notifError();
    } else {
        onFetchError();
    }
}



function renderListCountry(arrCountries) {
    // refs.inputEl.value = '';
    const markup = countryListTpl(arrCountries);
    //console.log(markup);
    refs.container.innerHTML = markup;
}
    

function renderCard(country) {
    refs.inputEl.value = ''; 
    
    console.log(country);
    const markup = countryCardTpl(country);
    //console.log(markup);
    refs.container.innerHTML = markup;
}

function onFetchError() {
    error({
        title: `Too many matches found.`,
        text: `We found ${data.length} countries. Please enter a more specific query!`,
        styling: 'brighttheme',
        delay: 300,
    });
 }

function notifError() {
    error({
        title: "Too many matches found!",
        text: "Please enter a more specific query!",
        delay: 1000,
    });
};
