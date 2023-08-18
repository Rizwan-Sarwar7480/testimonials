document.addEventListener('DOMContentLoaded', function () {
    var SplideScrollLtr = new Splide('.splide', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 4,
        pagination: false,
        arrows: false,
        autoScroll: {
            speed: 1,
        },
    });
    SplideScrollLtr.mount(window.splide.Extensions);
    
    var SplideScrollRtl = new Splide('.splide__scroll__rtl', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 4,
        pagination: false,
        arrows: false,
        autoScroll: {
            speed: -1,
        },
    })
    SplideScrollRtl.mount(window.splide.Extensions);
});