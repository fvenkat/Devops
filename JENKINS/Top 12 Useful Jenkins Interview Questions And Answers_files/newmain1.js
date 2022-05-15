var $portfolio;
var $masonry_block;
var $portfolio_selectors;
var $portfolio_selectors_li;
var $blog;
var hashfilter;

jQuery(document).ready(function () {

    // Show Animated Counters
    animatecounters();
    
    /* ===================================
    counter number reset while scrolling
    ====================================== */

    jQuery('.timer').appear();
    jQuery(document.body).on('appear', '.timer', function (e) {
        // this code is executed for each appeared element
        if (!jQuery(this).hasClass('appear')) {
            animatecounters();
            jQuery(this).addClass('appear');
        }
    });
        
    /*==============================================================*/
    //Smooth Scroll - START CODE
    /*==============================================================*/
    jQuery('.inner-top').smoothScroll({
        speed: 900,
        offset: -68
    });
    /*==============================================================*/
    //Smooth Scroll - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Set Resize Header Menu - START CODE
    /*==============================================================*/
    SetResizeHeaderMenu();
    /*==============================================================*/
    //Set Resize Header Menu - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //For shopping cart- START CODE
    /*==============================================================*/
    var isMobile = false;
    var isiPhoneiPad = false;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        isiPhoneiPad = true;
    }
    if (!isMobile) {
        jQuery(".top-cart a.shopping-cart, .cart-content").hover(function () {
            jQuery(".cart-content").css('opacity', '1');
            jQuery(".cart-content").css('visibility', 'visible');
        }, function () {
            jQuery(".cart-content").css('opacity', '0');
            jQuery(".cart-content").css('visibility', 'hidden');
        });
    }
    if (isiPhoneiPad) {
        jQuery(".video-wrapper").css('display', 'none');
    }

    jQuery(".top-cart a.shopping-cart").click(function () {
        //jQuery('.navbar-collapse').collapse('hide');

        if (jQuery('.cart-content').css('visibility') == 'visible') {
            jQuery(".cart-content").css('opacity', '0');
            jQuery(".cart-content").css('visibility', 'hidden');
        }
        else {
            jQuery(".cart-content").css('opacity', '1');
            jQuery(".cart-content").css('visibility', 'visible');

        }
    });

    /*==============================================================*/
    //Shrink nav on scroll - START CODE
    /*==============================================================*/

    if (jQuery(window).scrollTop() > 10) {
        jQuery('nav').addClass('shrink-nav');
    } else {
        jQuery('nav').removeClass('shrink-nav');
    }
    /*==============================================================*/
    //Shrink nav on scroll - END CODE
    /*==============================================================*/


    /*==============================================================*/
    //Portfolio - START CODE
    /*==============================================================*/
    if (Modernizr.touch) {
        // show the close overlay button
        jQuery(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        jQuery(".porfilio-item").click(function (e) {
            if (!jQuery(this).hasClass("hover")) {
                jQuery(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        jQuery(".close-overlay").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (jQuery(this).closest(".porfilio-item").hasClass("hover")) {
                jQuery(this).closest(".porfilio-item").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        jQuery(".porfilio-item").mouseenter(function () {
            jQuery(this).addClass("hover");
        })
                // handle the mouseleave functionality
                .mouseleave(function () {
                    jQuery(this).removeClass("hover");
                });
    }

    // use for portfolio sotring with masonry

    $portfolio = jQuery('.masonry-items');
    $portfolio_selectors = jQuery('.portfolio-filter > li > a');
    $portfolio_selectors_li = jQuery('.portfolio-filter li');

    hashfilter = "*";
    if(location.hash!=""){
        var temphashfilter = "." + location.hash.substr(1);
        if (temphashfilter==".*")
        {
            temphashfilter="*";
        }

        $portfolio_selectors.each(function(){
                 if (jQuery(this).attr("data-filter") == temphashfilter) {
                    $portfolio_selectors_li.removeClass('active');
                    $portfolio_selectors_li.find('a[data-filter="'+temphashfilter+'"]').parent('li').addClass("active");

                    var autoscrolltoelement = function(){
                        jQuery("html, body").animate({
                         scrollTop: jQuery('.portfolio-filter').parents('section').offset().top-60
                        });
                    };
                    setTimeout(autoscrolltoelement, 500);
                    hashfilter=temphashfilter;
                 }
             });        
    }
    
    

    $portfolio.imagesLoaded(function () {
        $portfolio.isotope({
            filter: hashfilter,
            itemSelector: 'li',
            layoutMode: 'masonry'
        });
    });

    // use for simple masonry ( for example home-photography.html page )

    $masonry_block = jQuery('.masonry-block-items');
    $masonry_block.imagesLoaded(function () {
        $masonry_block.isotope({
            itemSelector: 'li',
            layoutMode: 'masonry'
        });
    });


    $portfolio_selectors.on('click', function () {
        $portfolio_selectors.parent().removeClass('active');
        jQuery(this).parent().addClass('active');
        var selector = jQuery(this).attr('data-filter');
        $portfolio.isotope({filter: selector});
       
        if (selector.substr(1)!="" && selector.substr(1)!="#")
        {
             location.hash = selector.substr(1);     
        }
        else
        {
            location.hash ="*";
        }
        return false;
    });

    $blog = jQuery('.blog-masonry');
    $blog.imagesLoaded(function () {

        //ISOTOPE FUNCTION - FILTER PORTFOLIO FUNCTION
        $blog.isotope({
            itemSelector: '.blog-listing',
            layoutMode: 'masonry'
        });
    });

    jQuery(window).resize(function () {
        setTimeout(function () {
            $portfolio.isotope('layout');
            $blog.isotope('layout');
            $masonry_block.isotope('layout');
        }, 500);
    });
    /*==============================================================*/
    //Portfolio - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Set Parallax - START CODE
    /*==============================================================*/
    SetParallax();
    /*==============================================================*/
    //Set Parallax - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Sliders owlCarousel - START CODE
    /*==============================================================*/


    jQuery("#owl-demo").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle : "fade",
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    jQuery("#owl-demo-small").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    jQuery("#owl-demo-products").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    jQuery("#owl-demo-background").owlCarousel({
        transitionStyle: "fade",
        autoPlay: 3000,
        slideSpeed: 100,
        singleItem: true,
        navigation: false,
        pagination: false,
        touchDrag: false,
        mouseDrag: false
    });
    jQuery("#blog-slider-grid").owlCarousel({
        navigation: true,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        items: 1,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    jQuery("#blog-slider").owlCarousel({
        navigation: false,
        items: 3,
        itemsDesktop: [1200, 3],
        itemsTablet: [800, 2],
        itemsMobile: [700, 1]
    });
    jQuery("#approach-slider").owlCarousel({
        navigation: false,
        items: 3,
        itemsDesktop: [1200, 3],
        itemsTablet: [800, 3],
        itemsMobile: [700, 1]
    });
    jQuery("#testimonial-slider").owlCarousel({
        navigation: false,
        items: 3,
        itemsDesktop: [1200, 3],
        itemsTablet: [800, 3],
        itemsMobile: [700, 1]
    });
    jQuery("#shop-products").owlCarousel({
        navigation: true,
        items: 3,
        itemsDesktop: [1200, 3],
        itemsTablet: [800, 3],
        itemsMobile: [700, 1],
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    jQuery("#owl-demo-brand").owlCarousel({
        navigation: true,
        items: 4,
        itemsDesktop: [1200, 4],
        itemsTablet: [800, 3],
        itemsMobile: [700, 1],
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    /*==============================================================*/
    //Sliders owlCarousel - END CODE
    /*==============================================================*/

 
    /*==============================================================*/
    //Stop Closing magnificPopup on selected elements - START CODE
    /*==============================================================*/

    jQuery(".owl-pagination > .owl-page").click(function (e) {
        if (jQuery(e.target).is('.mfp-close'))
            return;
        return false;
    });
    jQuery(".owl-buttons > .owl-prev").click(function (e) {
        if (jQuery(e.target).is('.mfp-close'))
            return;
        return false;
    });
    jQuery(".owl-buttons > .owl-next").click(function (e) {
        if (jQuery(e.target).is('.mfp-close'))
            return;
        return false;
    });
    /*==============================================================*/
    //Stop Closing magnificPopup on selected elements - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Revolution Slider  - START CODE
    /*==============================================================*/

    jQuery('.revolution-agency-intro').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1170,
                startheight: 700,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "solo",
                navigationStyle: "preview2",
                touchenabled: "on",
                onHoverStop: "off",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner1",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header"
            });
    jQuery('.revolution-agency-intro2').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1920,
                startheight: 980,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "none",
                navigationStyle: "none",
                touchenabled: "on",
                onHoverStop: "off",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner1",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header"
            });
    jQuery('.revolution-product-intro').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1920,
                startheight: 980,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "none",
                navigationStyle: "none",
                touchenabled: "on",
                onHoverStop: "off",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner1",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header"
            });
    jQuery('.revolution-intro-restaurant').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1920,
                startheight: 980,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "none",
                navigationStyle: "none",
                touchenabled: "on",
                onHoverStop: "off",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner1",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header"
            });
    jQuery('.revolution-slider-half').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1170,
                startheight: 700,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "solo",
                navigationStyle: "preview1",
                touchenabled: "on",
                onHoverStop: "on",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "on",
                fullScreen: "off",
                spinner: "spinner0",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                forceFullWidth: "off",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                parallax: "mouse",
                parallaxBgFreeze: "on",
                parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],
            });
    jQuery('.revolution-slider-full').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1170,
                startheight: 700,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "solo",
                navigationStyle: "preview1",
                touchenabled: "on",
                onHoverStop: "on",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner0",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header"
            });
    jQuery('.photography-revolution-slider-full').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1170,
                startheight: 700,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "bullet",
                navigationArrows: "none",
                navigationStyle: "preview5",
                touchenabled: "on",
                onHoverStop: "on",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner0",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header"
            });
    jQuery('.revolution-intro-travel').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1920,
                startheight: 980,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "solo",
                navigationStyle: "preview2",
                touchenabled: "on",
                onHoverStop: "off",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner1",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header"
            });
    jQuery('.revolution-intro-travel2').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1920,
                startheight: 980,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "solo",
                navigationStyle: "preview2",
                touchenabled: "on",
                onHoverStop: "off",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner1",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header",
                parallax: "mouse",
                parallaxBgFreeze: "on",
                parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0]
            });
    jQuery('.revolution-intro-fashion').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1900,
                startheight: 977,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "solo",
                navigationStyle: "preview4",
                touchenabled: "on",
                onHoverStop: "off",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner1",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header"
            });
    jQuery('.revolution-masonry-portfolio').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1170,
                startheight: 700,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "solo",
                navigationStyle: "preview1",
                touchenabled: "off",
                onHoverStop: "off",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "off",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "on",
                fullScreen: "off",
                spinner: "spinner0",
                stopLoop: "on",
                stopAfterLoops: 1,
                stopAtSlide: 1,
                shuffle: "off",
                autoHeight: "off",
                forceFullWidth: "off",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                parallax: "mouse",
                parallaxBgFreeze: "on",
                parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],
            });
    jQuery('.revolution-onepage-restaurant').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1170,
                startheight: 700,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "solo",
                navigationStyle: "preview2",
                touchenabled: "on",
                onHoverStop: "off",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner1",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header"
            });
    /*==============================================================*/
    //Revolution Slider  - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //WOW Animation  - START CODE
    /*==============================================================*/

    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 90,
        mobile: false,
        live: true
    });
    wow.init();
    /*==============================================================*/
    //WOW Animation  - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //accordion  - START CODE
    /*==============================================================*/

    jQuery('.collapse').on('show.bs.collapse', function () {
        var id = jQuery(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-minus-circle title-small"></i>');
    });
    jQuery('.collapse').on('hide.bs.collapse', function () {
        var id = jQuery(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-plus-circle title-small"></i>');
    });
    jQuery('.nav.navbar-nav a.inner-link').click(function () {
        jQuery(this).parents('ul.navbar-nav').find('a.inner-link').removeClass('active');
        jQuery(this).addClass('active');
        if (jQuery('.navbar-header .navbar-toggle').is(':visible'))
            jQuery(this).parents('.navbar-collapse').collapse('hide');
    });
    jQuery('.accordion-style2 .collapse').on('show.bs.collapse', function () {
        var id = jQuery(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-up"></i>');
    });
    jQuery('.accordion-style2 .collapse').on('hide.bs.collapse', function () {
        var id = jQuery(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-down"></i>');
    });
    jQuery('.accordion-style3 .collapse').on('show.bs.collapse', function () {
        var id = jQuery(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-up"></i>');
    });
    jQuery('.accordion-style3 .collapse').on('hide.bs.collapse', function () {
        var id = jQuery(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-down"></i>');
    });
    /*==============================================================*/
    //accordion - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //toggles  - START CODE
    /*==============================================================*/

    jQuery('toggles .collapse').on('show.bs.collapse', function () {
        var id = jQuery(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-minus"></i>');
    });
    jQuery('toggles .collapse').on('hide.bs.collapse', function () {
        var id = jQuery(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-plus"></i>');
    });
    jQuery('.toggles-style2 .collapse').on('show.bs.collapse', function () {
        var id = jQuery(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-up"></i>');
    });
    jQuery('.toggles-style2 .collapse').on('hide.bs.collapse', function () {
        var id = jQuery(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-down"></i>');
    });
    /*==============================================================*/
    //toggles  - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //fit video  - START CODE
    /*==============================================================*/
    // Target your .container, .wrapper, .post, etc.
    try {
        jQuery(".fit-videos").fitVids();
    }
    catch (err) {

    }


    /*==============================================================*/
    //fit video  - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //google map - mouse scrolling wheel behavior - START CODE
    /*==============================================================*/
    // you want to enable the pointer events only on click;

    jQuery('#map_canvas1').addClass('scrolloff'); // set the pointer events to none on doc ready
    jQuery('#canvas1').on('click', function () {
        jQuery('#map_canvas1').removeClass('scrolloff'); // set the pointer events true on click
    });
    // you want to disable pointer events when the mouse leave the canvas area;

    jQuery("#map_canvas1").mouseleave(function () {
        jQuery('#map_canvas1').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
    });
    /*==============================================================*/
    //google map - mouse scrolling wheel behavior - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Search - START CODE
    /*==============================================================*/
    jQuery("input.search-input").bind("keypress", function (event) {
        if (event.which == 13 && !isMobile) {
            jQuery("button.search-button").click();
            event.preventDefault();
        }
    });
    jQuery("input.search-input").bind("keyup", function (event) {
        if (jQuery(this).val() == null || jQuery(this).val() == "") {
            jQuery(this).css({"border": "none", "border-bottom": "2px solid red"});
        }
        else {
            jQuery(this).css({"border": "none", "border-bottom": "2px solid #000"});
        }
    });
    function validationSearchForm() {
        var error = true;
        jQuery('#search-header input[type=text]').each(function (index) {
            if (index == 0) {
                if (jQuery(this).val() == null || jQuery(this).val() == "") {
                    jQuery("#search-header").find("input:eq(" + index + ")").css({"border": "none", "border-bottom": "2px solid red"});
                    error = false;
                }
                else {
                    jQuery("#search-header").find("input:eq(" + index + ")").css({"border": "none", "border-bottom": "2px solid #000"});
                }
            }
        });
        return error;
    }
    jQuery("form.search-form, form.search-form-result").submit(function (event) {
        var error = validationSearchForm();
        if (error) {
            var action = jQuery(this).attr('action');
            action = action == '#' || action == '' ? 'blog-grid-3columns.html' : action;
            action = action + '?' + jQuery(this).serialize();
            window.location = action;
        }

        event.preventDefault();
    });
    jQuery('.navbar .navbar-collapse a.dropdown-toggle, .accordion-style1 .panel-heading a, .accordion-style2 .panel-heading a, .accordion-style3 .panel-heading a, .toggles .panel-heading a, .toggles-style2 .panel-heading a, .toggles-style3 .panel-heading a, a.carousel-control, .nav-tabs a[data-toggle="tab"], a.shopping-cart').click(function (e) {
        e.preventDefault();
    });
    jQuery('body').on('touchstart click', function (e) {
        if (jQuery(window).width() < 992) {
            if (!jQuery('.navbar-collapse').has(e.target).is('.navbar-collapse') && jQuery('.navbar-collapse').hasClass('in') && !jQuery(e.target).hasClass('navbar-toggle')) {
                jQuery('.navbar-collapse').collapse('hide');
            }
        }
        else {
            if (!jQuery('.navbar-collapse').has(e.target).is('.navbar-collapse') && jQuery('.navbar-collapse ul').hasClass('in')) {
                console.log(this);
                jQuery('.navbar-collapse').find('a.dropdown-toggle').addClass('collapsed');
                jQuery('.navbar-collapse').find('ul.dropdown-menu').removeClass('in');
                jQuery('.navbar-collapse a.dropdown-toggle').removeClass('active');
            }
        }
    });
    jQuery('.navbar-collapse a.dropdown-toggle').on('touchstart', function (e) {
        jQuery('.navbar-collapse a.dropdown-toggle').not(this).removeClass('active');
        if (jQuery(this).hasClass('active'))
            jQuery(this).removeClass('active');
        else
            jQuery(this).addClass('active');
    });

    jQuery("button.navbar-toggle").click(function () {
        if (isMobile) {
            jQuery(".cart-content").css('opacity', '0');
            jQuery(".cart-content").css('visibility', 'hidden');

        }
    });
    jQuery("a.dropdown-toggle").click(function () {
        if (isMobile) {
            jQuery(".cart-content").css('opacity', '0');
            jQuery(".cart-content").css('visibility', 'hidden');

        }
    });



    /*==============================================================*/
    //Search - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Parallax - START CODE
    /*==============================================================*/

    var $elem = jQuery('#content');
    jQuery('#scroll_to_top').fadeIn('slow');
    jQuery('#nav_down').fadeIn('slow');
    jQuery(window).bind('scrollstart', function () {
        jQuery('#scroll_to_top,#nav_down').stop().animate({'opacity': '0.2'});
    });
    jQuery(window).bind('scrollstop', function () {
        jQuery('#scroll_to_top,#nav_down').stop().animate({'opacity': '1'});
    });
    jQuery('#nav_down').click(
            function (e) {
                jQuery('html, body').animate({scrollTop: $elem.height()}, 800);
            }
    );
    jQuery('#scroll_to_top').click(
            function (e) {
                jQuery('html, body').animate({scrollTop: '0px'}, 800);
            }
    );
    /*==============================================================*/
    //Parallax - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //FORM TO EMAIL - START CODE
    /*==============================================================*/
    jQuery("#success").hide();

    jQuery("#contact-us-button").click(function () {
        var error = validationContactUsForm();
        if (error) {
            jQuery.ajax({
                type: "POST",
                url: "contact.php",
                data: jQuery("#contactusform").serialize(),
                success: function (result) {
                    jQuery('input[type=text],textarea').each(function () {
                        jQuery(this).val('');
                    })
                    jQuery("#success").html(result);
                    jQuery("#success").fadeIn("slow");
                    jQuery('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function validationContactUsForm() {
        var error = true;
        jQuery('#contactusform input[type=text]').each(function (index) {

            if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(jQuery(this).val()))) {
                    jQuery("#contactusform").find("input:eq(" + index + ")").css({"border": "1px solid red"});
                    error = false;
                } else {
                    jQuery("#contactusform").find("input:eq(" + index + ")").css({"border": "1px solid #dfdfdf"});
                }
            }
            else if (index == 0) {
                if (jQuery(this).val() == null || jQuery(this).val() == "") {
                    jQuery("#contactusform").find("input:eq(" + index + ")").css({"border": "1px solid red"});
                    error = false;
                }
                else {
                    jQuery("#contactusform").find("input:eq(" + index + ")").css({"border": "1px solid #dfdfdf"});
                }
            }
        });
        return error;
    }

    jQuery("#notifyme-button").click(function () {
        var error = validationnotifymeForm();
        if (error) {
            jQuery.ajax({
                type: "POST",
                url: "notifyme.php",
                data: jQuery("#notifymeform").serialize(),
                success: function (result) {
                    jQuery('input[type=text],textarea').each(function () {
                        jQuery(this).val('');
                    })

                    jQuery("#success").html(result);
                    jQuery("#success").fadeIn("slow");
                    jQuery('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function validationnotifymeForm() {
        var error = true;
        jQuery('#notifymeform input[type=text]').each(function (index) {

            if (index == 0) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(jQuery(this).val()))) {
                    jQuery("#notifymeform").find("input:eq(" + index + ")").css({"border": "1px solid red"});
                    error = false;
                } else {
                    jQuery("#notifymeform").find("input:eq(" + index + ")").css({"border": "1px solid #dfdfdf"});
                }
            }

        });
        return error;
    }

    jQuery("#success-free30daytrial").hide();
    jQuery("#free30daytrial-button").click(function () {
        var error = validationfree30daytrialForm();
        if (error) {
            jQuery.ajax({
                type: "POST",
                url: "free30daytrial.php",
                data: jQuery("#free30daytrialform").serialize(),
                success: function (result) {
                    jQuery('input[type=text],textarea').each(function () {
                        jQuery(this).val('');
                    })
                    jQuery("#success-free30daytrial").html(result);
                    jQuery("#success-free30daytrial").fadeIn("slow");
                    jQuery('#success-free30daytrial').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function validationfree30daytrialForm() {
        var error = true;
        jQuery('#free30daytrialform input[type=text]').each(function (index) {

            if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(jQuery(this).val()))) {
                    jQuery("#free30daytrialform").find("input:eq(" + index + ")").css({"border": "1px solid red"});
                    error = false;
                } else {
                    jQuery("#free30daytrialform").find("input:eq(" + index + ")").css({"border": "1px solid #dfdfdf"});
                }
            }
            else if (index == 0) {
                if (jQuery(this).val() == null || jQuery(this).val() == "") {
                    jQuery("#free30daytrialform").find("input:eq(" + index + ")").css({"border": "1px solid red"});
                    error = false;
                }
                else {
                    jQuery("#free30daytrialform").find("input:eq(" + index + ")").css({"border": "1px solid #dfdfdf"});
                }
            }
        });
        return error;
    }


    jQuery("#event-button").click(function () {
        var error = validationeventForm();
        if (error) {
            jQuery.ajax({
                type: "POST",
                url: "rsvp.php",
                data: jQuery("#eventform").serialize(),
                success: function (result) {
                    jQuery('input[type=text],textarea').each(function () {
                        jQuery(this).val('');
                    })
                    jQuery("#success").html(result);
                    jQuery("#success").fadeIn("slow");
                    jQuery('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function validationeventForm() {
        var error = true;
        jQuery('#eventform input[type=text]').each(function (index) {

            if (index == 0) {
                if (jQuery(this).val() == null || jQuery(this).val() == "") {
                    jQuery("#eventform").find("input:eq(" + index + ")").css({"border": "1px solid red"});
                    error = false;
                }
                else {
                    jQuery("#eventform").find("input:eq(" + index + ")").css({"border": "1px solid #dfdfdf"});
                }
            }
        });
        return error;
    }

    jQuery("#careers-button").click(function () {
        var error = validationcareersForm();
        if (error) {
            jQuery.ajax({
                type: "POST",
                url: "careers.php",
                data: jQuery("#careersform").serialize(),
                success: function (result) {
                    jQuery('input[type=text],textarea').each(function () {
                        jQuery(this).val('');
                    })
                    jQuery("#success").html(result);
                    jQuery("#success").fadeIn("slow");
                    jQuery('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function validationcareersForm() {
        var error = true;
        jQuery('#careersform input[type=text]').each(function (index) {

            if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(jQuery(this).val()))) {
                    jQuery("#careersform").find("input:eq(" + index + ")").css({"border": "1px solid red"});
                    error = false;
                } else {
                    jQuery("#careersform").find("input:eq(" + index + ")").css({"border": "1px solid #dfdfdf"});
                }
            }
            else if (index == 0) {
                if (jQuery(this).val() == null || jQuery(this).val() == "") {
                    jQuery("#careersform").find("input:eq(" + index + ")").css({"border": "1px solid red"});
                    error = false;
                }
                else {
                    jQuery("#careersform").find("input:eq(" + index + ")").css({"border": "1px solid #dfdfdf"});
                }
            }
            else if (index == 2) {
                if (jQuery(this).val() == null || jQuery(this).val() == "") {
                    jQuery("#careersform").find("input:eq(" + index + ")").css({"border": "1px solid red"});
                    error = false;
                }
                else {
                    jQuery("#careersform").find("input:eq(" + index + ")").css({"border": "1px solid #dfdfdf"});
                }
            }
        });
        return error;
    }
    /*==============================================================*/
    //FORM TO EMAIL - END CODE
    /*==============================================================*/

    // pull-menu close on href click event in mobile devices
    jQuery('.pull-menu a.inner-link')
            .click(function (e) {
                    jQuery('#close-button').click();
            });
});

    function animatecounters() {
    
    /*==============================================================*/
    //Counter Number - START CODE
    /*==============================================================*/

    jQuery('.timer').each(count);
        function count(options) {
            var $this = jQuery(this);
            options = jQuery.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
    /*==============================================================*/
    //Counter Number - END CODE
    /*==============================================================*/
    
    }

var inViewchart = false;
var inViewanimnumberpizza = false;
var inViewanimnumberclient = false;
var inViewanimnumberprojects = false;
var inViewanimnumbercomments = false;
var inViewcounter1 = false;
var inViewcounter2 = false;
var inViewcounter3 = false;
var inViewcounter4 = false;
var inViewcounter5 = false;
var inViewcounter6 = false;
var inViewcounter7 = false;

function isScrolledIntoView(elem) {
    try {
        var docViewTop = jQuery(window).scrollTop();
        var docViewBottom = docViewTop + jQuery(window).height();

        var elemTop = jQuery(elem).offset().top;
        var elemBottom = elemTop + jQuery(elem).height();

        return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
    }
    catch (ex) {
        return false;
    }


}



/*==============================================================*/
//Navigation - START CODE
/*==============================================================*/
// Shrink nav on scroll
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 10) {
        jQuery('nav').addClass('shrink-nav');
    } else {
        jQuery('nav').removeClass('shrink-nav');
    }

    //Animate Elements in view position
    if (isScrolledIntoView('.chart')) {
        if (inViewchart == false) {
            inViewchart = true;

            jQuery(".chart").each(function () {
                try {
                    jQuery(this).data('easyPieChart').update(0);
                    jQuery(this).data('easyPieChart').update(jQuery(this).attr("data-percent"));
                }
                catch (ex) {
                }
            });

            jQuery(".chart2").each(function () {
                try {
                    jQuery(this).data('easyPieChart').update(0);
                    jQuery(this).data('easyPieChart').update(jQuery(this).attr("data-percent"));
                }
                catch (ex) {
                }
            });
        }
    }

  
eduload();


});
// Resize Header Menu
function SetResizeHeaderMenu() {
    var width = jQuery('nav.navbar').children('div.container').width();
    jQuery("ul.mega-menu-full").each(function () {
        jQuery(this).css('width', width + 'px');
    });
}
/*==============================================================*/
//Navigation - END CODE
/*==============================================================*/


/*==============================================================*/
//Parallax - START CODE
/*==============================================================*/
// Parallax Fix Image Scripts 

jQuery('.parallax-fix').each(function () {
    if (jQuery(this).children('.parallax-background-img').length) {
        var imgSrc = jQuery(this).children('.parallax-background-img').attr('src');
        jQuery(this).css('background', 'url("' + imgSrc + '")');
        jQuery(this).children('.parallax-background-img').remove();
        jQuery(this).css('background-position', '50% 0%');
    }

});
var IsParallaxGenerated = false;
function SetParallax() {
    if (jQuery(window).width() > 1030 && !IsParallaxGenerated) {
        jQuery('.parallax1').parallax("50%", 0.1);
        jQuery('.parallax2').parallax("50%", 0.2);
        jQuery('.parallax3').parallax("50%", 0.3);
        jQuery('.parallax4').parallax("50%", 0.4);
        jQuery('.parallax5').parallax("50%", 0.5);
        jQuery('.parallax6').parallax("50%", 0.6);
        jQuery('.parallax7').parallax("50%", 0.7);
        jQuery('.parallax8').parallax("50%", 0.8);
        jQuery('.parallax9').parallax("50%", 0.05);
        jQuery('.parallax10').parallax("50%", 0.02);
        jQuery('.parallax11').parallax("50%", 0.01);
        jQuery('.parallax12').parallax("50%", 0.099);
        IsParallaxGenerated = true;
    }
}
/*==============================================================*/
//Parallax - END CODE
/*==============================================================*/

/*==============================================================*/
//Mobile Toggle Control - START CODE
/*==============================================================*/

jQuery('.mobile-toggle').click(function () {
    jQuery('nav').toggleClass('open-nav');
});
jQuery('.dropdown-arrow').click(function () {
    if (jQuery('.mobile-toggle').is(":visible")) {
        if (jQuery(this).children('.dropdown').hasClass('open-nav')) {
            jQuery(this).children('.dropdown').removeClass('open-nav');
        } else {
            jQuery('.dropdown').removeClass('open-nav');
            jQuery(this).children('.dropdown').addClass('open-nav');
        }
    }
});
/*==============================================================*/
//Mobile Toggle Control - END CODE
/*==============================================================*/

/*==============================================================*/
//Position Fullwidth Subnavs fullwidth correctly - START CODE
/*==============================================================*/
jQuery('.dropdown-fullwidth').each(function () {
    jQuery(this).css('width', jQuery('.row').width());
    var subNavOffset = -(jQuery('nav .row').innerWidth() - jQuery('.menu').innerWidth() - 15);
    jQuery(this).css('left', subNavOffset);
});
/*==============================================================*/
//Position Fullwidth Subnavs fullwidth correctly - END CODE
/*==============================================================*/

/*==============================================================*/
//Smooth Scroll - START CODE
/*==============================================================*/
var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
jQuery('a.scrollto').bind('click.smoothscroll', function (event) {
    event.preventDefault();
    var target = this.hash;
    jQuery('html, body').stop()
            .animate({
                'scrollTop': jQuery(target)
                        .offset()
                        .top
            }, scrollAnimationTime, scrollAnimation, function () {
                window.location.hash = target;
            });
});
// Inner links
jQuery('.inner-link').smoothScroll({
    speed: 900,
    offset: -0
});

    jQuery('.section-link').smoothScroll({
        speed: 900,
        offset: 1
    });
// Scroll To Down
function scrollToDown() {
    var target = jQuery('#features');
    jQuery('html, body').animate({scrollTop: jQuery(target).offset().top}, 800);
}
function scrollToDownSection() {
    var target = jQuery('#about');
    jQuery('html, body').animate({scrollTop: jQuery(target).offset().top}, 800);
}
/*==============================================================*/
//Smooth Scroll - END CODE
/*==============================================================*/

/*==============================================================*/
//Full Screen Header - START CODE
/*==============================================================*/

function SetResizeContent() {
    var minheight = jQuery(window).height();
    jQuery(".full-screen").css('min-height', minheight);
    
    var minwidth = jQuery(window).width();
    jQuery(".full-screen-width").css('min-width', minwidth);
}

SetResizeContent();
/*==============================================================*/
//Full Screen Header - END CODE
/*==============================================================*/


/*==============================================================*/
//Window Resize Events - START CODE
/*==============================================================*/
jQuery(window).resize(function () {
    //Position Fullwidth Subnavs fullwidth correctly
    jQuery('.dropdown-fullwidth').each(function () {
        jQuery(this).css('width', jQuery('.row').width());
        var subNavOffset = -(jQuery('nav .row').innerWidth() - jQuery('.menu').innerWidth() - 15);
        jQuery(this).css('left', subNavOffset);
    });
    SetResizeContent();
    setTimeout(function () {
        SetResizeHeaderMenu();
    }, 200);
    if (jQuery(window).width() >= 992 && jQuery('.navbar-collapse').hasClass('in')) {
        jQuery('.navbar-collapse').removeClass('in');
        //jQuery('.navbar-collapse').removeClass('in').find('ul.dropdown-menu').removeClass('in').parent('li.dropdown').addClass('open');
        jQuery('.navbar-collapse ul.dropdown-menu').each(function () {
            if (jQuery(this).hasClass('in')) {
                jQuery(this).removeClass('in'); //.parent('li.dropdown').addClass('open');
            }
        });
        jQuery('ul.navbar-nav > li.dropdown > a.dropdown-toggle').addClass('collapsed');
        jQuery('.logo').focus();
        jQuery('.navbar-collapse a.dropdown-toggle').removeClass('active');
    }

    setTimeout(function () {
        SetParallax();
    }, 1000);
});
/*==============================================================*/
//Window Resize Events - END CODE
/*==============================================================*/




/*==============================================================*/
//Scroll To Top - START CODE
/*==============================================================*/
jQuery(window).scroll(function () {
    if (jQuery(this)
            .scrollTop() > 100) {
        jQuery('.scrollToTop')
                .fadeIn();
    } else {
        jQuery('.scrollToTop')
                .fadeOut();
    }
});
//Click event to scroll to top
jQuery('.scrollToTop').click(function () {
    jQuery('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});
/*==============================================================*/
//Scroll To Top - END CODE
/*==============================================================*/

jQuery('nav.full-width-pull-menu ul.panel-group li.dropdown a.dropdown-toggle').click(function () {
    if (jQuery(this).parent('li').find('ul.dropdown-menu').length > 0)
    {
        if (jQuery(this).parent('li').hasClass('open')) {
            jQuery(this).parent('li').removeClass('open');
        }
        else{
            jQuery(this).parent('li').addClass('open');
        }
    }
});

// pull-menu close on href click event in mobile devices
jQuery('.pull-menu a.section-link').click(function (e) {
    if (jQuery(window).width() <= 500)
        jQuery('#close-button').click();
});

/*==============================================================*/
// Main navigation href
/*==============================================================*/

jQuery(document).ready(function () {
    jQuery(document).on('click', '.menu-first-level > a:first-child', function() {
        var geturl = jQuery(this).attr('data-redirect-url');
        if(geturl != '#' && geturl != ''){
            if ( jQuery(this).attr('target') == '_blank') {
                window.open(geturl, '_blank');
            }else{
                window.location = geturl;
            }
        }
    });
});