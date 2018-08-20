var mobileCoeff;

//parallax js
function parallaxInit(){
    var $window = $(window);
    $('section[data-type="background"]').each(function () {
        var currentElement = $(this); // assigning the object
        parallaxApply(currentElement, $window);
        $(window).scroll(function () {
            parallaxApply(currentElement, $window);
        });
    });
};

function parallaxApply(currentElement, $window){
    if($window.width() >= 1600) {
        // console.log("xxl : "+$(window).width()+" / "+$(window).height());
        offset = currentElement.data('offset-xxl');
        zoom = currentElement.data('zoom-xxl');
        speed = currentElement.data('speed-xxl');
    }
    else if($window.width() >= 1200) {
        // console.log("xl : "+$(window).width()+" / "+$(window).height());
        offset = currentElement.data('offset-xl');
        zoom = currentElement.data('zoom-xl');
        speed = currentElement.data('speed-xl');
    }
    else if($window.width() >= 992) {
        // console.log("lg : "+$(window).width()+" / "+$(window).height());
        offset = currentElement.data('offset-lg');
        zoom = currentElement.data('zoom-lg')
        speed = currentElement.data('speed-lg');
    }
    else if($window.width() >= 768) {
        // console.log("md : "+$(window).width()+" / "+$(window).height());
        offset = currentElement.data('offset-md');
        zoom = currentElement.data('zoom-md');
        speed = currentElement.data('speed-md');
    }
    else if($window.width() >= 650) {
        // console.log("smd : "+$(window).width()+" / "+$(window).height());
        offset = currentElement.data('offset-smd');
        zoom = currentElement.data('zoom-smd');
        speed = currentElement.data('speed-smd');
    }
    else if($window.width() >= 576) {
        // console.log("sm : "+$(window).width()+" / "+$(window).height());
        offset = currentElement.data('offset-sm');
        zoom = currentElement.data('zoom-sm');
        speed = currentElement.data('speed-sm');
    }
    else{
        // console.log("xs : "+$(window).width()+" / "+$(window).height());
        offset = currentElement.data('offset-xs');
        zoom = currentElement.data('zoom-xs');
        speed = currentElement.data('speed-xs');
    }

    var yPos = speed ? ((($window.scrollTop()-currentElement.position().top )/ speed)+((offset/100)*currentElement.width())) : (offset/100)*currentElement.width() ;

    var img = $(currentElement.find(".imageContainer img")[0]);
    zoom = zoom/ 100;

    img.css({
        "top": yPos+"px",
        "transform": "scale("+zoom+")",

    });
}
