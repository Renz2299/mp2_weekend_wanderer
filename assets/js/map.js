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
let infoPanelPhoto;
let infoPanelDetails;

function initMap() {
    mapBounds = new google.maps.LatLngBounds();
    infoWindow = new google.maps.InfoWindow;
    currentInfoWindow = infoWindow;

    // Assigns 'card', 'photo' and 'details' from index.html to infoPanel variables
    infoPanel = document.getElementById('card');
    infoPanelPhoto = document.getElementById('photo');
    infoPanelDetails = document.getElementById('details');

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

        getNearbyPlaces(pos);

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

    getNearbyPlaces(pos);
}

let button = document.getElementById('btnactivity');

let activity = document.getElementById('activity');

var userInput;

var iconBase;

function changeInput() {
  userInput = activity.options[activity.selectedIndex].value;
  deleteMarkers()
  mapBounds = new google.maps.LatLngBounds(null);
  if (userInput === 'hike') {
    iconBase = "assets/img/hiking2.png";
  } else if (userInput === 'nature reserve') {
    iconBase = "assets/img/forest2.png";
  } else if (userInput === 'beach') {
    iconBase = "assets/img/beach_icon.png";
  } else if (userInput === 'landmark') {
    iconBase = "assets/img/tower.png";
  }
  getNearbyPlaces(pos);
}
 
// Perform a nearby search request
function getNearbyPlaces(position) {
  let request = {
    location: position,
    rankBy: google.maps.places.RankBy.DISTANCE,
    keyword: userInput
  };
  
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, nearbyCallback);
}

// Handles the results (up to 20) of nearby search request
function nearbyCallback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      createMarkers(results);
    }
}

let markers = [];

// Creates markers for results and zooms map to fit
function createMarkers(results) {
  results.forEach(place => {
    let marker = new google.maps.Marker({
      position: place.geometry.location,
      icon: iconBase,
      map: map,
      title: place.name
    });
    
      
    // Adds click event listener to each marker
    google.maps.event.addListener(marker, 'click', () => {
      let request = {
        placeId: place.place_id,
        fields: ['name', 'formatted_address', 'geometry', 'rating', 'website', 'photos']
      };
  
      // Only fetch place details when user clicks on a marker
      service.getDetails(request, (placeResult, status) => {
        showDetails(placeResult, marker, status)
      });
    });
      
    mapBounds.extend(place.geometry.location);

    markers.push(marker);
  });

  // Zooms the map to fit
  map.fitBounds(mapBounds);

}

// Deletes previous markers
function deleteMarkers() {
  for (var i = 0; i < markers.length; i ++) {
    markers[i].setMap(null);
  }
  markers.length = 0;
}

// Shows place details in infoWindow above marker
function showDetails(placeResult, marker, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      let placeInfowindow = new google.maps.InfoWindow();
      placeInfowindow.setContent('<div class="info-window"><strong>' + placeResult.name + '</strong><br>' + 'Rating: ' + placeResult.rating + '</div>');
      placeInfowindow.open(marker.map, marker);
      currentInfoWindow.close();
      currentInfoWindow = placeInfowindow;
      showPanel(placeResult);
    } else {
      console.log('showDetails failed:' + status);
    }
}

// Displays place details in infoPanel AKA 'card'
function showPanel(placeResult) {
    // If infoPanel is already open, close it
    if (infoPanel.classList.contains("open")) {
      infoPanel.classList.remove("open");
    }
  
    // Clear previous details
    while (infoPanelPhoto.lastChild) {
        infoPanelPhoto.removeChild(infoPanelPhoto.firstChild);
    }
    while (infoPanelDetails.hasChildNodes()) {
        infoPanelDetails.removeChild(infoPanelDetails.firstChild);
    }

    // Add primary photo, if there is one
    if (placeResult.photos != null) {
      let firstPhoto = placeResult.photos[0];
      let photo = document.createElement('img');
      photo.classList.add('hero');
      photo.src = firstPhoto.getUrl();
      infoPanelPhoto.appendChild(photo);
    }
  
    // Add place details with formatting
    let name = document.createElement('h2');
    name.classList.add('place');
    name.textContent = placeResult.name;
    infoPanelDetails.appendChild(name);
    if (placeResult.rating != null) {
      let rating = document.createElement('p');
      rating.classList.add('details');
      rating.textContent = `Rating: ${placeResult.rating} \u272e`;
      infoPanelDetails.appendChild(rating);
    }
    let address = document.createElement('p');
    address.classList.add('details');
    address.textContent = placeResult.formatted_address;
    infoPanelDetails.appendChild(address);
    if (placeResult.website) {
      let websitePara = document.createElement('p');
      let websiteLink = document.createElement('a');
      let websiteUrl = document.createTextNode(placeResult.website);
      websiteLink.appendChild(websiteUrl);
      websiteLink.title = placeResult.website;
      websiteLink.href = placeResult.website;
      websitePara.appendChild(websiteLink);
      infoPanelDetails.appendChild(websitePara);
    }
  
    // Open the infoPanel
    infoPanel.classList.add("open");
}