$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        pause: 3000,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        randomStart: true,
        captions: true,
        pager: true,
        pagerType: 'short',
        pagerCustom: '#id_pager'
    });
});