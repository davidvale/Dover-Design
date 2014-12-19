// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

$(document).ready(function(){
    // Homepage carousel
    if ($('.slideshow').length > 0) {
        $('.slideshow').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
            slide: 'div',
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000,
        });
    }

    // // Work details & Team grid
    // var container = document.querySelector('#masonry');
    // var msnry = new Masonry( container, {
    //   // columnWidth: 1,
    //   itemSelector: '.item',
    //   // gutter: 5
    // });
});
