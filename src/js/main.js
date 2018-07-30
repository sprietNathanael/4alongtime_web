var endDate = new Date("02-20-2019 23:00:00");

$(document).ready(function () {
    parallaxInit();
    $(document).on("scroll", function () {
        if ($(document).scrollTop() >= 80) {
            $(".navbar").addClass("compressed");
            document.getElementById("scrollTopButton").style.display = "block";
        } else {
            $(".navbar").removeClass("compressed");
            document.getElementById("scrollTopButton").style.display = "none";
        }
    });
    // createCharts();
    refreshCounter();
    setInterval(refreshCounter, 500);
});

$(window).on('load', function () {
    console.log("========== scroll to top ==========");
    scrollToTop();
    clearTimeout(dropMarkersTimeout);
    clearTimeout(createChartsTimeout);
    clearMapsMarkers();
    destroyCharts();
    console.log("========== scroll to top ends ==========");

});

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    smoothScroll(0, "#");
}

function refreshCounter() {
    var now = new Date();
    var diff = endDate - now;
    days = Math.floor(diff / 86400000);
    rest = Math.floor(diff % 86400000);
    hours = Math.floor(rest / 3600000);
    rest = Math.floor(rest % 3600000);
    min = Math.floor(rest / 60000);
    rest = Math.floor(rest % 60000);
    sec = Math.floor(rest / 1000);
    $("#counter_d").html("" + days);
    $("#counter_h").html((hours < 10 ? "0" : "") + hours);
    $("#counter_m").html((min < 10 ? "0" : "") + min);
    $("#counter_s").html((sec < 10 ? "0" : "") + sec);

}

// Add scrollspy to <body>
$('body').scrollspy({
    target: ".navbar",
    offset: 66
});

// Add smooth scrolling on all links inside the navbar
$(".smoothScroll a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;
        smoothScroll(($(hash).offset().top-65), hash);

    } // End if

});

function smoothScroll(top, hash) {
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    console.log(top);
    $('html, body').animate({
        scrollTop: top
    }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
    });
}