var dropMarkersTimeout;
var createChartsTimeout;

var mapsWaypointDown = new Waypoint({
    element: $("#presentation_3"),
    handler: function(direction){
        if(direction === "down")
        {
            console.log("==== maps create waypoint down ====");
            dropMarkersTimeout = setTimeout(dropMarkersOnce,20);
        }
    },
    offset:"bottom-in-view"
});

var mapsWaypointUp = new Waypoint({
    element: $("#presentation_3"),
    handler: function(direction){
        if(direction === "up")
        {
            console.log("==== maps create waypoint up ====");
            dropMarkersTimeout = setTimeout(dropMarkersOnce,20);
        }
    }
});

var mapsWaypointExitDown = new Waypoint({
    element: $("#team"),
    handler: function(direction){
        if(direction === "down")
        {
            console.log("==== maps clear waypoint down ====");
            clearTimeout(dropMarkersTimeout);
            clearMapsMarkers();
        }
    },
});

var mapsWaypointExitUp = new Waypoint({
    element: $("#presentation_2"),
    handler: function(direction){
        if(direction === "up")
        {
            console.log("==== maps clear waypoint up ====");
            clearTimeout(dropMarkersTimeout);
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
            console.log("==== chart create waypoint down ====");
            createChartsTimeout = setTimeout(createCharts,500);
        }
        else if(direction === "up")
        {
            console.log("==== chart clear waypoint up ====");
            clearTimeout(createChartsTimeout);
            destroyCharts();
        }
    },
    offset:"bottom-in-view"
});

var chartsWaypointUp = new Waypoint({
    element: $("#media"),
    handler: function(direction){
        if(direction === "up")
        {
            console.log("==== chart create waypoint up ====");
            createChartsTimeout = setTimeout(createCharts,500);
        }
        else if(direction === "down")
        {
            console.log("==== chart clear waypoint down ====");
            clearTimeout(createChartsTimeout);
            destroyCharts();
        }
    }
});
