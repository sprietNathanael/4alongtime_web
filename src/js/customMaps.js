styles = [{
        "elementType": "geometry",
        "stylers": [{
            "color": "#ebe3cd"
        }]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#523735"
        }]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [{
            "color": "#f5f1e6"
        }]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#c9b2a6"
        }]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#dcd2be"
        }]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#ae9e90"
        }]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [{
            "color": "#dfd2ae"
        }]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#dfd2ae"
        }]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#93817c"
        }]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#a5b076"
        }]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#447530"
        }]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f5f1e6"
        }]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#fdfcf8"
        }]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f8c967"
        }]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#e9bc62"
        }]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [{
            "color": "#e98d58"
        }]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#db8555"
        }]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#806b63"
        }]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
            "color": "#dfd2ae"
        }]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#8f7d77"
        }]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "color": "#ebe3cd"
        }]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
            "color": "#dfd2ae"
        }]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#b9d3c2"
        }]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#92998d"
        }]
    }
]

var markers = [];

var tripStep = [{
        lat: 45.764043,
        lng: 4.835658999999964,
        title: "Lyon",
        desc: "Notre ville de départ",
        icon: "http://maps.google.com/mapfiles/kml/pal3/icon56.png"
    },
    {
        lat: 43.4831519,
        lng: -1.5586260000000038,
        title: "Biarritz",
        desc: "Le village départ du raid, où seront vérifiées toutes les 4L",
        icon: "http://maps.google.com/mapfiles/kml/pal3/icon31.png"
    },
    {
        lat: 36.1407591,
        lng: -5.4562329999999974,
        title: "Algéciras",
        icon: "http://maps.google.com/mapfiles/ms/micons/ferry.png"
    },
    {
        lat: 33.9715904,
        lng: -6.849812899999961,
        title: "Rabat"
    },
    {
        lat: 31.6294723,
        lng: -7.981084499999952,
        title: "Marrakech"
    },
    {
        lat: 30.662833556499905,
        lng: -6.224905945056435,

    },
    {
        lat: 30.51151129249514,
        lng: -5.510794616931435
    },
    {
        lat: 30.662833556499905,
        lng: -4.401175476306435
    },
    {
        lat: 31.096564907882417,
        lng: -4.115530945056435
    },
    {
        lat: 31.84617569877643,
        lng: -3.8298864138064346
    },
    {
        lat: 32.6799423,
        lng: -4.732926799999973
    },
    {
        lat: 33.9715904,
        lng: -6.849812899999961,
        title: "Rabat"
    }

];

var lineSymbol = {
    path: "M 0,-1 0,1 z M 2,-1 2,1",
    strokeOpacity: 1,
    scale: 2
}

var map;
var tripPath

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {
            lat: 38.5,
            lng: 0.5629708883479907
        },
        styles: styles,
        mapTypeId: 'terrain'
    });

    tripPath = new google.maps.Polyline({
        path: [],
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 0,
        // strokeWeight: 2,
        icons: [{
            icon: lineSymbol,
            offset: "0",
            repeat: "10px"
        }],
        map: map

    });
}

function addMarker(step) {
    console.log("Add marker");
    intMarker = new google.maps.Marker({
        position: new google.maps.LatLng(step.lat, step.lng),
        title: step.title,
        icon: step.icon ? step.icon : "http://labs.google.com/ridefinder/images/mm_20_gray.png",
        map: map,
        animation: google.maps.Animation.DROP
    });
    latlng = new google.maps.LatLng(step.lat, step.lng);
    tripPath.getPath().push(latlng);
    markers.push(intMarker);
}

var markersAlreadyDropped = false;
var markersTimeout = [];

function dropMapMarkers(timeout) {
    if (!markersAlreadyDropped) {
        console.log("drop all markers");
        markersAlreadyDropped = true;
        for (let i = 0; i < tripStep.length; i++) {
            console.log("drop a markers");
            markersTimeout.push(setTimeout(function () {
                addMarker(tripStep[i]);
            }, i * timeout));
        }
    }
}

function clearMapsMarkers() {
    console.log("remove all markers : "+markers.length);
    console.log("clear all timeouts : "+markersTimeout.length);
    for(let i = 0; i < markersTimeout.length; i++) {
        clearTimeout(markersTimeout[i]);
    }
    markersTimeout = [];
    tripPath.getPath().clear();
    console.log("clear markers : "+markers.length);
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
    markersAlreadyDropped = false;
}

function dropMarkersOnce() {
    dropMapMarkers(250);
}


/*for(i = 0; i < markers.length; i++)

{
    if(markers[i].desc !== undefined)
    {
        markers[i].infoWindow = new google.maps.InfoWindow({
            content: "<div id='content'><div id='siteNotice'></div><h1 id='firstHeading' class='firstHeading'>"+
            markers[i].title+
            "</h1><div class='bodyContent'>"+
            markers[i].desc+
            "</div></div>"
        })
        markers[i].addListener('click', function(){
            console.log("test");
            markers[i].infoWindow.open(map, markers[i]);
        });
    }
}*/
