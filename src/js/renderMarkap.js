import countryCardTpl from '../templates/countryCardTpl.hbs';
import countryListTpl from '../templates/countryListTpl.hbs';
import fetchCountries from '../js/fetchCountries'
import { refs } from '../index';

export default renderMarkup;

import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";


function renderMarkup(arrCountries) {

        refs.container.innerHTML = '';

        if (arrCountries.length < 1) {
            return;
        } else if (arrCountries.length === 1) {
            renderCard(arrCountries);
        } else if (arrCountries.length > 1 && arrCountries.length <= 10) {            
            renderListCountry(arrCountries);
            renderOneOfMany(arrCountries);
        } else if (arrCountries.length > 10) {
            notifError();
        } else {
            onFetchError();
        }
    }

    function openOnClick (event){
        // console.log(event.target)
        console.log(event.target.textContent)
        fetchCountries(event.target.textContent)
     }

    function renderListCountry(arrCountries) {
        const markup = countryListTpl(arrCountries);
        refs.container.innerHTML = markup;
    }
        
    
    function renderCard(country) {            
        //console.log(country);
        //console.log(refs.inputEl.value);
        const markup = countryCardTpl(country);        
        refs.container.innerHTML = markup;

        changeСountryInInput(country);
    }


    function notifError() {
    error({
        title: "Too many matches found!",
        text: "Please enter a more specific query!",
        delay: 1500,
    });
};

    function renderOneOfMany(arrCountries){
        let countryListEl = document.querySelector('.country__list')
        countryListEl.addEventListener("click", openOnClick);
}

    function changeСountryInInput (country) {
    let selectedCountry = document.querySelector('.country__title');
    console.log(selectedCountry.textContent)
    refs.inputEl.value = selectedCountry.textContent; 
    }