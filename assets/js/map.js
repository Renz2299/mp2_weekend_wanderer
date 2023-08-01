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

    // Assigns 'card' from index.html to infoPanel
    infoPanel = document.getElementById('card');

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

// Perform a nearby search request
function getNearbyPlaces(position) {
    let request = {
      location: position,
      rankBy: google.maps.places.RankBy.DISTANCE,
      keyword: 'hiking'
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

// Creates markers for results and zooms map to fit
function createMarkers(places) {
    places.forEach(place => {
      let marker = new google.maps.Marker({
        position: place.geometry.location,
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
    });

    // Zooms the map to fit
    map.fitBounds(mapBounds);
}

// Shows place details in infoWindow above marker
function showDetails(placeResult, marker, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      let placeInfowindow = new google.maps.InfoWindow();
      placeInfowindow.setContent('<div><strong>' + placeResult.name + '</strong><br>' + 'Rating:' + placeResult.rating + '</div>');
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
    while (infoPanel.lastChild) {
      infoPanel.removeChild(infoPanel.lastChild);
    }
    // Add primary photo, if there is one
    if (placeResult.photos != null) {
      let firstPhoto = placeResult.photos[0];
      let photo = document.createElement('img');
      photo.classList.add('hero');
      photo.src = firstPhoto.getUrl();
      infoPanel.appendChild(photo);
    }
  
    // Add place details with formatting
    let name = document.createElement('h1');
    name.classList.add('place');
    name.textContent = placeResult.name;
    infoPanel.appendChild(name);
    if (placeResult.rating != null) {
      let rating = document.createElement('p');
      rating.classList.add('details');
      rating.textContent = `Rating: ${placeResult.rating} \u272e`;
      infoPanel.appendChild(rating);
    }
    let address = document.createElement('p');
    address.classList.add('details');
    address.textContent = placeResult.formatted_address;
    infoPanel.appendChild(address);
    if (placeResult.website) {
      let websitePara = document.createElement('p');
      let websiteLink = document.createElement('a');
      let websiteUrl = document.createTextNode(placeResult.website);
      websiteLink.appendChild(websiteUrl);
      websiteLink.title = placeResult.website;
      websiteLink.href = placeResult.website;
      websitePara.appendChild(websiteLink);
      infoPanel.appendChild(websitePara);
    }
  
    // Open the infoPanel
    infoPanel.classList.add("open");
}