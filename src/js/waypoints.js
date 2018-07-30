var dropMarkersTimeout;

var mapsWaypointDown = new Waypoint({
    element: $("#presentation_3"),
    handler: function(direction){
        if(direction === "down")
        {
            dropMarkersTimeout = setTimeout(dropMarkersOnce,50);
        }
    },
    offset:"bottom-in-view"
});

var mapsWaypointUp = new Waypoint({
    element: $("#presentation_3"),
    handler: function(direction){
        if(direction === "up")
        {
            dropMarkersTimeout = setTimeout(dropMarkersOnce,50);
        }
    }
});

var mapsWaypointExitDown = new Waypoint({
    element: $("#team"),
    handler: function(direction){
        if(direction === "down")
        {
            clearMapsMarkers();
        }
    },
});

var mapsWaypointExitUp = new Waypoint({
    element: $("#presentation_2"),
    handler: function(direction){
        if(direction === "up")
        {
            clearMapsMarkers();
        }
    },
    offset:"bottom-in-view"
});

var chartsWaypointDown = new Waypoint({
    element: $("#team_3"),
    handler: function(direction){
        if(direction === "down")
        {
            createChartsTimeout = setTimeout(createCharts,500);
        }
    },
    offset:"bottom-in-view"
});

var chartsWaypointExitDown = new Waypoint({
    element: $("#budget"),
    handler: function(direction){
        if(direction === "down")
        {
            clearTimeout(createChartsTimeout);
            destroyCharts();
        }
    },
});