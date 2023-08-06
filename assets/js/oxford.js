onload = function() {
    console.log('Hello, Oxford!');
}

let pos;
let map;
let marker;

function initMap() {
    pos = {lat: 51.752022, lng: -1.257726};
    map = new google.maps.Map(document.getElementById('guide-map'), {
        center: pos,
        zoom: 11
    });

    // Lye Valley Path
    addMarker({
        coords:{lat: 51.745060, lng: -1.208960},
        iconImage: 'assets/img/hiking2.png',
        title: '<h3>Lye Valley Path</h3>',
        rating: '<p>Rating: 4.8</p>'
    });
    // Wolvercote Goose Green
    addMarker({
        coords:{lat: 51.7864, lng: -1.2864},
        iconImage: 'assets/img/hiking2.png',
        title: '<h3>Wolvercote Goose Green</h3>',
        rating: '<p>Rating: 4.3</p>'
    });
    // RSPB Otmoor
    addMarker({
        coords:{lat: 51.809871, lng: -1.174442},
        iconImage: 'assets/img/forest2.png',
        title: '<h3>RSPB Otmoor</h3>',
        rating: '<p>Rating: 4.7</p>'
    })
    // Chilswell Valley
    addMarker({
        coords:{lat: 51.728798, lng: -1.277156},
        iconImage: 'assets/img/forest2.png',
        title: '<h3>Chilswell Valley</h3>',
        rating: '<p>Rating: 4.7</p>'
    })
    // The Watcher Tree
    addMarker({
        coords:{lat: 51.75071, lng: -1.249208},
        iconImage: 'assets/img/tower.png',
        title: '<h3>The Watcher Tree</h3>',
        rating: '<p>Rating: 3.6</p>'
    })
    // Devil's Quoits
    addMarker({
        coords:{lat: 51.73505, lng: -1.407093},
        iconImage: 'assets/img/tower.png',
        title: "<h3>Devil's Quoits</h3>",
        rating: '<p>Rating: 4.3</p>'
    })
}

function addMarker(props) {
    marker = new google.maps.Marker ({
    position: props.coords,
    map: map,
    icon: props.iconImage
    });
    let infoWindow = new google.maps.InfoWindow({
        content: props.title + props.rating
    });
    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
}