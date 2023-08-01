onload = function() {
    console.log('Hello, World!');
}

// The following code was created following a Google codelab: https://developers.google.com/codelabs/maps-platform/google-maps-nearby-search-js#0

let pos;
let map;
let mapBounds;
let infoWindow;
let currentInfoWindow;
let service;
let infoPanel;

function initMap() {
    mapBounds = new google.maps.LatLngBounds();
    infoWindow = new google.maps.InfoWindow;
    currentInfoWindow = infoWindow;

    // HTML5 geolocation
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
        };
        map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 15
        });
        mapBounds.extend(pos);

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);

    }, () => {
        // Browser supports geolocation, but user has denied permission
        handleLocationError(true, infoWindow);
    });
    } else {
    // Browser doesn't support geolocation
    handleLocationError(false, infoWindow);
    }
}

// Handles a geolocation error
function handleLocationError(browserHasGeolocation, infoWindow) {
    // Default location: Sydney, Australia
    pos = {lat: -33.856, lng: 151.215};
    map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 15
    });

    // Displays an InfoWindow at centre of map
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
    'Geolocation permissions denied. Using default location.' :
    'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
    currentInfoWindow = infoWindow;
}