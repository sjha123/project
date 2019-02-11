/*jslint browser: true*/
/*global $, window, WOW*/

$(function() {
    "use strict";
    new WOW().init();
});


$(function () {
       "use strict";
    
   $("#work").magnificPopup({
    delegate: 'a',                 /*child items selector, by clicking on it popup will open*/
    type: 'image',
    gallery: {
              enabled: true
               }
   });
    
});


/* --------------team---------*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
             items: 3
        }        
    }
    });
});


/*------testimonials-------*/
$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true
    });
});
    
/* --------------Navigation---------*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50){
            //hide nav
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
            
        }
        else {
            
            //show nav
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
        
    });
});
$(function (){
   $(".navbar-collapse ul li a").on("click touch", function (){
      $(".navbar-toggle").click(); 
   });
});
/* --------------Navigation--------
$(function () {
    $("a.smooth-scroll").click(function (event) {
       event.preventDefault();
        var section = $(this).attr("href");
        
        $('html,body').animate({
            scrollTop: $(section).offset().top - 64
            }, 1250, "easeInOutExpo");
    });
});*/