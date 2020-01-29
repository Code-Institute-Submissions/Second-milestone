const locations = [
    { lat: 55.87751, lng: -4.2914007, name: "Cail Bruich", website: "https://www.google.com" },
    { lat: 55.8706124, lng: -4.3181257, name: "Basta Pizza" },
    { lat: 55.8723885, lng: -4.2847306, name: "Catch of The Day" },
];

function initMap() {
    const infowindow = new google.maps.InfoWindow();
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(55.860916, -4.251433)
    });

    function placeMarker(loc) {
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(loc.lat, loc.lng),
            map: map
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.close();
            infowindow.setContent(`<div id="infowindow">${loc.name}<a href=${loc.website}>Website</a></div >`);
            infowindow.open(map, marker);
        });
    }

    locations.forEach(placeMarker);

    function goToLocation(locationIndex) {
        let location = locations[locationIndex];/*from here we zoom on location, and open the window, moved it init map*/
        alert(location)
    }

}

function goToLocation(locationIndex) {
    let location = locations[locationIndex];/*from here we zoom on location, and open the window, moved it init map*/
    alert(location)
}


/*google.maps.event.addDomListener(window, 'load', initMap);*/

/*let mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(55.87751, -4.2914007),
    mapTypeId: 'roadmap'
};
let map = new google.maps.Map(document.getElementById('map'), mapOptions);*/

/*let cailBruichPosition = { lat: 55.87751, lng: -4.2914007 };

let bastaPizzaPosition = {
     lat: 55.8706124, lng: -4.3181257,
     map: map,
     title: 'Basta Pizza'
 };

let markers = new google.maps.Marker({
    position: cailBruichPosition,
    map: map,
    title: 'Cail Bruich',
});

let contentString = `< div id = "content" > <h2>Cail Bruich</h2> <p>Cail Bruich has been one thekbhhj hgjh
 it stillmlm lkjlkl ihiooi. Attribution:<a href="https://www.cailbruich.co.uk" target="_blank">"https://www.cailbruich.co.uk"</a></p></div > `;

let infowindow = new google.maps.InfoWindow({
    content: contentString
});

markers.addListener('click', function () {
    infowindow.open(map, markers);
});

}*/

/*function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 55.860916,
            lng: -4.251433,
        }
    });

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";

    let locations = [
        { name: 'Cail Bruich', lat: 55.87751, lng: -4.2914007 },
        { lat:'Basta Pizza', 55.8706124, lng: -4.3181257 },
        { lat:'Catch of the Day',55.8723885, lng: -4.2847306, },
    ];

    //the function below can take 3 arguments, need to find out what third argument can be
    let markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });

    });
    let markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}*/