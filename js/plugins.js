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
!function(e){e.fn.dissolveGallery=function(){return console.log(this),this.each(function(){function n(e){c(),s.eq(u).removeClass("selected"),a.eq(u).velocity("fadeOut",{duration:400}),u=e,s.eq(u).addClass("selected"),a.eq(u).velocity("fadeIn",{duration:400}),t()}function i(){var e=h>u?u+1:0;n(e)}function t(){l=setInterval(i,r)}function c(){clearInterval(l)}console.log(this);var l,o=e(this),s=o.find(".thumbs img"),a=o.find(".images img"),d=o.find(".next-btn"),f=o.find(".prev-btn"),u=0,r=5e3,h=s.length-1;a.hide().eq(u).show(),s.eq(u).addClass("selected"),t(),d.click(i),f.click(function(){var e=u>0?u-1:h;n(e)}),s.click(function(){n(s.index(this))})})}}(jQuery);