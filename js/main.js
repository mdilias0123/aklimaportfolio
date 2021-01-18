$(function () {


    //    sticky manu
    //    $(window).on('scroll', function () {
    //        var scroll = $(window).scrollTop();
    //        if (scroll < 245) {
    //            $(".header-middle").removeClass("scroll-header");
    //        } else {
    //            $(".header-middle").addClass("scroll-header");
    //        }
    //    });


    //    scroll up
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        scrollDistance: 300, // Distance from top/bottom before showing element (px)
        scrollFrom: 'top', // 'top' or 'bottom'
        scrollSpeed: 300, // Speed back to top (ms)
        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
        animation: 'fade', // Fade, slide, none
        animationSpeed: 200, // Animation speed (ms)
        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false, // Set a custom target element for scrolling to. Can be element or number
        scrollText: '<i class="fas fa-angle-up"></i>', // Text for element, can contain HTML
        scrollTitle: false, // Set a custom <a> title if required.
        scrollImg: false, // Set true to use image
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647 // Z-Index for the overlay
    });


    //    Typed
    var typed = new Typed(".element", {
        strings: ["Web Designer",
             "Web Developer",
             "Freelancer"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
    });


    //    progressBar 
    $('.progress-title > span').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    //    Counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });



    //    // init Isotope
    //    var $grid = $('.grid').isotope({
    //        // options
    //    });
    //    // filter items on button click
    //    $('.portfolio-list ').on('click', 'li', function () {
    //        var filterValue = $(this).attr('data-filter');
    //        $grid.isotope({
    //            filter: filterValue
    //        });
    //    });








    //    testimonals js
    $('.testimonal-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        arrows: false,
        asNavFor: '.client-img',

    });

    $('.client-img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        dots: false,
        arrows: true,
        asNavFor: '.testimonal-content',
        prevArrow: '<i class="material-icons slick-left">chevron_left</i>',
        nextArrow: '<i class="material-icons slick-right">chevron_right</i>',

    });

   $('.filt-container').filterizr();





});
