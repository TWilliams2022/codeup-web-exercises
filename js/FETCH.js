"use strict";

const options = {method: 'GET', headers: {Accept: 'application/json'}};

fetch('https://api.tomorrow.io/v4/locations/locationId?apikey=qJynOu5lV51oXFQ97H68hivrBAWgObAK', options)
    // promise
    .then(response => response.json())
    // promise void
    .then(response => console.log("A"))
    .catch(err => console.error(err));

console.log("B");