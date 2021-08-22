import './sass/main.scss';
import fetchCountries from './js/fetchCountries';

import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
defaultModules.set(PNotifyMobile, {});

const debounce = require('lodash.debounce');


export const refs = {
    inputEl: document.querySelector('#country-name-input'),
    container: document.querySelector('.card-container'),
    body: document.querySelector('body'),
    
}

refs.inputEl.addEventListener('input', debounce(getCountry, 500));
refs.body.addEventListener('click', closeContryCard );
window.addEventListener('keydown', closeEscModal);


function getCountry(event) {
    // console.log(event.target.value);
    return fetchCountries(event.target.value)
}

function closeContryCard(){
    if (document.querySelector('.country__card')){
        refs.container.innerHTML = '';
        refs.inputEl.value = '';

    }
}

function closeEscModal(event) {
    const ESC_KEY_CODE = 'Escape';
    if (event.code === ESC_KEY_CODE) {
        closeContryCard();
    }
  }




/////////////////////////////////////////////////////////////////////////
// Все в 1 фвайле! 

// import './sass/main.scss';
// const debounce = require('lodash.debounce');
// import countryCardTpl from './templates/countryCardTpl.hbs';
// import countryListTpl from './templates/countryListTpl.hbs';

// import { error } from "@pnotify/core";
// import "@pnotify/core/dist/PNotify.css";
// import "@pnotify/core/dist/BrightTheme.css";
// import * as Confirm from "@pnotify/confirm";
// import "@pnotify/confirm/dist/PNotifyConfirm.css";

// import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
// defaultModules.set(PNotifyMobile, {});


// const refs = {
//     inputEl: document.querySelector('#country-name-input'),
//     container: document.querySelector('.card-container')
// }

// //console.log(refs.container);
// refs.inputEl.addEventListener('input', debounce(getCountry, 500));

// //console.log(refs.inputEl);

// function getCountry(event) {
//     let inputValue = event.target
//     //console.log(inputValue);
//     return fetchCountries(event.target.value)
// }

// // function fetchCountries(name) {
// //     fetch(`https://restcountries.eu/rest/v2/name/${name}`)
// //         .then(response => {
// //             return response.json();
// //         })
// //         .then(renderInterfeys)
// //         .catch(onFetchError)   
// // }

// function renderInterfeys(arrCountries) {
//     refs.container.innerHTML = '';
//     if (arrCountries.length === 1) {
//         // console.log('risyu 1')
//         // console.log(arrCountries);
//         renderCard(arrCountries);
//     } else if (arrCountries.length > 1 && arrCountries.length <= 10) {
//         // console.log(arrCountries);
//         // console.log(arrCountries.length > 1 && arrCountries.length <= 10);
//         renderListCountry(arrCountries);
//     }
//     else if (arrCountries.length > 10) {
//         // console.log(arrCountries.length);
//         // console.log(arrCountries);
//         // console.log("bolshe 10")
//         notifError();
//     } else {
//         onFetchError();
//     }
// }



// function renderListCountry(arrCountries) {
//     // refs.inputEl.value = '';
//     const markup = countryListTpl(arrCountries);
//     //console.log(markup);
//     refs.container.innerHTML = markup;
// }
    

// function renderCard(country) {
//     refs.inputEl.value = '';     
//     //console.log(country);
//     const markup = countryCardTpl(country);
//     refs.container.innerHTML = markup;
// }

// // function onFetchError() {
// // console.log("Ошибка")
// //  }

// function notifError() {
//     error({
//         title: "Too many matches found!",
//         text: "Please enter a more specific query!",
//         delay: 1000,
//     });
// };
