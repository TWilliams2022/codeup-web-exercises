"use strict";
//my location
let startingLat = 34.852619;
let startingLon = -82.3940;
let map = initMap(startingLon, startingLat);
let marker = createMarker(startingLon, startingLat);
let popup = createPopup(startingLon, startingLat);


//restaurant location
let longit = -80.843147;
let latit = 35.218208;
let restMarker = newMarker(longit, latit);
let restPopup = newPopup(longit, latit);

// ****************************************************************************************************

marker.setPopup(popup);
restMarker.setPopup(restPopup);
// ****************************************************************************************************

// function to create map
function initMap(lon, lat) {
    mapboxgl.accessToken = MAP_KEY;
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        zoom: 10,
        center: [lon, lat]
    });
}

// ****************************************************************************************************

// function to create My location marker
function createMarker(lon, lat) {
    return new mapboxgl.Marker()
        .setLngLat([lon, lat])
        .addTo(map);
}

// function to create Restaurant marker
function newMarker(lon, lat) {
    return new mapboxgl.Marker()
        .setLngLat([lon, lat])
        .addTo(map);
}

// ****************************************************************************************************

// function to create popup

function createPopup(lon, lat) {
    return new mapboxgl.Popup()
        .setLngLat([lon, lat])
        .setHTML("<p>GREENVILLE, SC!!! </p>")
}

//Restaurant POPUP
function newPopup(lon, lat) {
    return new mapboxgl.Popup()
        .setLngLat([longit, latit])
        .setHTML("<h1>My favorite! <em>Gyu-Kaku!!!</em></h1> " +
            "<br> <p><img src='data:image/jpeg;base64,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' width='90px' height='90px'> " +
            "<img src='https://www.gyu-kaku.com/wp-content/uploads/2020/01/chr_interior2001a-2048x1536.jpg' width='90px' height='90px'> " +
            "<img src='https://d1ralsognjng37.cloudfront.net/45b34e9f-f404-43c1-911c-7d563127d4ff.jpeg' width='90px' height='90px'></p> " +
            "<p><strong>Japenese BBQ</strong></p>")
}

// ****************************************************************************************************

// geocode stuff

$('#GyuKaku').click(function () {
    geocode("650 E Stonewall St unit a, Charlotte, NC 28202", MAP_KEY).then(function (result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(18);
    });
});

// can reset map properties programatically
// map.setZoom(5);
// map.setCenter([lat, lon])


//trying to add restaurant in foreach loop
const restaurants = ["Gyu Kaku", "Zaxby's", "Steak House"];

restaurants.forEach(function (restaurant, index, array) {
    console.log(array[0])
});


// drag marker

// mapboxgl.accessToken = MAP_KEY;
// const coordinates = document.getElementById('coordinates');
// const maps = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: [0, 0],
//     zoom: 2
// });
//
// const mover = new mapboxgl.Marker({
//     draggable: true
// })
//     .setLngLat([0, 0])
//     .addTo(maps);
//
// function onDragEnd() {
//     const lngLat = mover.getLngLat();
//     coordinates.style.display = 'block';
//     coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
// }
//
// mover.on('dragend', onDragEnd);
