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
});

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}