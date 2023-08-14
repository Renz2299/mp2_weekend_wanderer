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
    // Location: Falmouth, UK
    pos = {lat: 50.152573, lng: -5.066270};
    map = new google.maps.Map(document.getElementById('guide-map'), {
        center: pos,
        zoom: 11
    });

    mapBounds = new google.maps.LatLngBounds();
    infoWindow = new google.maps.InfoWindow;
    currentInfoWindow = infoWindow;

    // Assigns 'card', 'photo' and 'details' from index.html to infoPanel variables
    infoPanel = document.getElementById('guide-card');
    infoPanelPhoto = document.getElementById('photo');
    infoPanelDetails = document.getElementById('details');

    getNearbyPlaces(pos);
}

// Perform a nearby search request
function getNearbyPlaces(position) {
    let request = {
        location: position,
        rankBy: google.maps.places.RankBy.DISTANCE,
        keyword: 'beach'
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, nearbyCallback);
}

// Handles the results (up to 20) of nearby search request
function nearbyCallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        createMarkers(results);
    }
}

// Creates markers for results and zooms map to fit
function createMarkers(places) {
    places.forEach(place => {
        let marker = new google.maps.Marker({
            position: place.geometry.location,
            icon: 'assets/img/beach_icon.png',
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
    let name = document.createElement('h3');
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
      websiteLink.setAttribute('target', '_blank');
      websiteLink.appendChild(websiteUrl);
      websiteLink.title = placeResult.website;
      websiteLink.href = placeResult.website;
      websitePara.appendChild(websiteLink);
      infoPanelDetails.appendChild(websitePara);
    }
  
    // Open the infoPanel
    infoPanel.classList.add("open");
}