var endDate = new Date("02-20-2019 23:00:00");

$(document).ready(function () {
    $(document).on("scroll", function () {
        if ($(document).scrollTop() >= 80) {
            $(".navbar").addClass("compressed");
            document.getElementById("scrollTopButton").style.display = "block";
        } else {
            $(".navbar").removeClass("compressed");
            document.getElementById("scrollTopButton").style.display = "none";
        }
    });
});

$( window ).on('load',function(){
    scrollToTop();
    setInterval(refreshCounter, 500);
    refreshCounter();
});

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function refreshCounter(){
    var now = new Date();
    var diff = endDate - now;
    days = Math.floor(diff/86400000);
    rest = Math.floor(diff%86400000);
    hours = Math.floor(rest/3600000);
    rest = Math.floor(rest%3600000);
    min = Math.floor(rest/60000);
    rest = Math.floor(rest%60000);
    sec = Math.floor(rest/1000);
    $("#counter_d").html(""+days);
    $("#counter_h").html((hours < 10 ? "0" : "")+hours);
    $("#counter_m").html((min < 10 ? "0" : "")+min);
    $("#counter_s").html((sec < 10 ? "0" : "")+sec);

}