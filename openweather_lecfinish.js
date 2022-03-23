"use strict";

// DO FETCH STUFF

let startingLat = 33.44;
let startingLon = -94.04;

getWeatherData(startingLat, startingLon);

function getWeatherData(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${OWM_KEY}`)
        .then(response => response.json())
        .then(data => {
            $('#weather').html(buildCardCont(data.daily));
        });
}

function extractWeatherData(dayObj) {
    return {
        date: dayObj.dt,
        dailyTemp: dayObj.temp.day,
        humidity: dayObj.humidity,
        pressure: dayObj.pressure
    }
}

function buildCardCont(dayArr) {
    let html = '<div class="row">'
    for (let i = 0; i < 5; i++) {
        html += buildWeatherCard(dayArr[i]);
    }
    html += '</div>';
    return html;
}

function buildWeatherCard(day) {
    let html = '';
    let weather = extractWeatherData(day);
    let formattedDate = formatDate(weather.date);
    // language=HTML
    html += `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    ${formattedDate}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Temp: ${weather.dailyTemp}</li>
                    <li class="list-group-item">Hum: ${weather.humidity}</li>
                    <li class="list-group-item">Pressure: ${weather.pressure}</li>
                </ul>
            </div>`
    return html;
}

function formatDate(unixDate) {
    return new Date(unixDate * 1000).toISOString().split('T')[0];
}


$('#submit').click(function (e) {
    e.preventDefault();
    let userLat = $('#lat').val();
    let userLon = $('#lon').val();
    getWeatherData(userLat, userLon);
})

