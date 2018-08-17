var mobileCoeff;

//parallax js
function parallaxInit(){
    var $window = $(window);
    mobileCoeff = mobileUsed ? -1 : -1;
    $('section[data-type="background"]').each(function () {
        var $bgobj = $(this); // assigning the object
        parallaxApply($bgobj, $window);
        $(window).scroll(function () {
            parallaxApply($bgobj, $window);
        });
    });
};

function parallaxApply($bgobj, $window){
    if($window.width() >= 1600) {
        console.log("xxl : "+$(window).width()+" / "+$(window).height());
        offset = $bgobj.data('offset-xxl');
        zoom = $bgobj.data('zoom-xxl');
        speed = $bgobj.data('speed-xxl');
    }
    else if($window.width() >= 1200) {
        console.log("xl : "+$(window).width()+" / "+$(window).height());
        offset = $bgobj.data('offset-xl');
        zoom = $bgobj.data('zoom-xl');
        speed = $bgobj.data('speed-xl');
    }
    else if($window.width() >= 992) {
        console.log("lg : "+$(window).width()+" / "+$(window).height());
        offset = $bgobj.data('offset-lg');
        zoom = $bgobj.data('zoom-lg')
        speed = $bgobj.data('speed-lg');
    }
    else if($window.width() >= 768) {
        console.log("md : "+$(window).width()+" / "+$(window).height());
        offset = $bgobj.data('offset-md');
        zoom = $bgobj.data('zoom-md');
        speed = $bgobj.data('speed-md');
    }
    else if($window.width() >= 650) {
        console.log("smd : "+$(window).width()+" / "+$(window).height());
        offset = $bgobj.data('offset-smd');
        zoom = $bgobj.data('zoom-smd');
        speed = $bgobj.data('speed-smd');
    }
    else if($window.width() >= 576) {
        console.log("sm : "+$(window).width()+" / "+$(window).height());
        offset = $bgobj.data('offset-sm');
        zoom = $bgobj.data('zoom-sm');
        speed = $bgobj.data('speed-sm');
    }
    else{
        console.log("xs : "+$(window).width()+" / "+$(window).height());
        offset = $bgobj.data('offset-xs');
        zoom = $bgobj.data('zoom-xs');
        speed = $bgobj.data('speed-xs');
    }
    // offset = $bgobj.data('offset1200');

    // var yPos = speed ? mobileCoeff*(($window.scrollTop() / speed)+((offset/100)*$bgobj.width())) : (offset/100)*$bgobj.width() ;
    var yPos = (offset/100)*$bgobj.width() ;

    // Put together our final background position
    var coords = '50% ' + yPos + 'px';

    // Move the background
    $bgobj.css({
        backgroundPosition: coords,
        backgroundSize: zoom
    });
}
