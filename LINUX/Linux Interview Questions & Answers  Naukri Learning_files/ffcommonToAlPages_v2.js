/***********************************************checking if element in viewport js*******************************************/
$(document).ready(function(e) {
/**Twitter script**/

!function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, "script", "twitter-wjs");




/*****Fixed Navigation*********/
var lastScrollTop = 0, delta = 5;
var navHeight = $('.headGNBWrap').height();
$(window).bind('scroll', gnbScrol);

function gnbScrol() {
    var nowScrollTop = $(this).scrollTop();
    if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
        if (nowScrollTop > lastScrollTop) {
            if (nowScrollTop > navHeight) {
                $('#nav').addClass('fixed').stop().slideUp(100);
            }
        }
        else {
            // scrolling upwards
            $('#nav').stop().slideDown(100);
            if (nowScrollTop > navHeight) {
                $('#nav').addClass('fixed');
            }
            else {
                $('#nav').removeClass('fixed');
            }
        }
    }
    lastScrollTop = nowScrollTop;
}

});