export default fetchCountries;
import renderMarkup from "./renderMarkap";

import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";

function fetchCountries(name) {
    // console.log(name)
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(response => {
            return response.json();
        })
        .then(arr => {    
            console.log(arr);
            renderMarkup(arr);            
        })
        .catch(onFetchError)
}

function onFetchError() {
    
    error({
        title: "I can't find this country!",
        text: "Please check the spelling!",
        delay: 1500,
    });
     }



