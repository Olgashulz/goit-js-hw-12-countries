import countryCardTpl from '../templates/countryCardTpl.hbs';
import countryListTpl from '../templates/countryListTpl.hbs';
import { refs } from '../index';

export default renderMarkup;

import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";


function renderMarkup(arrCountries) {
        refs.container.innerHTML = '';

        if (arrCountries.length === 1) {
            renderCard(arrCountries);
        } else if (arrCountries.length > 1 && arrCountries.length <= 10) {
            renderListCountry(arrCountries);
        }
        else if (arrCountries.length > 10) {
            notifError();
        } else {
            onFetchError();
        }
    }

    function renderListCountry(arrCountries) {
        const markup = countryListTpl(arrCountries);
        refs.container.innerHTML = markup;
    }
        
    
    function renderCard(country) {
        refs.inputEl.value = '';     
        //console.log(country);
        const markup = countryCardTpl(country);
        refs.container.innerHTML = markup;
    }

    function notifError() {
    error({
        title: "Too many matches found!",
        text: "Please enter a more specific query!",
        delay: 1500,
    });
};