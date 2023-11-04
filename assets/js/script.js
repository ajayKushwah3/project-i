/* ----------------------------------------- */
/*  Header scroll actions  */
/* ----------------------------------------- */

jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 50) {
        jQuery(".main-header").addClass("header-fixed");
    } else {
        jQuery(".main-header").removeClass("header-fixed");
    }
});

/* ----------------------------------------- */
/* mobile menu */
/* ----------------------------------------- */

jQuery(document).on('click', '.menuActione', function() {
    jQuery('body').toggleClass('navigationAction');
});

ckHOhieght();


function ckHOhieght() {
    var headerouterh = jQuery('.main-header').outerHeight();
    var footerouterh = jQuery('.footer-section').outerHeight();
    jQuery('body').attr("style", "--bottom-padding:" + footerouterh + "px; --top-padding:" + headerouterh + "px;");
};
jQuery(window).resize(function() {
    ckHOhieght();
});





/* ----------------------------------------- */
/* slick Slider */
/* ----------------------------------------- */
let tsslider = jQuery('.tsslider');
if (tsslider.length) {
    tsslider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'ease',
        responsive: [{
            breakpoint: 1440,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    /* ----------------------------------------- */
    /* Slider hendler */
    /* ----------------------------------------- */
    jQuery(document).on('click', '.evanthendler', function() {
        jQuery('.evanthendler').removeClass('activeslider');
        const imagedata = jQuery(this).attr('dataimg');
        var iddata = jQuery(this).attr('dataSliderid');
        jQuery('.imgHendler').attr('src', imagedata)
        tsslider.slick('slickGoTo', parseInt(iddata), false);
        jQuery(this).addClass('activeslider');
    });


    jQuery("body").on("click", ".slick-dots li button", function() {
        var currentSlide = tsslider.slick('slickCurrentSlide');
        const imagedata = jQuery('[datasliderid=' + currentSlide + ']').attr('dataimg');
        jQuery('.evanthendler').removeClass('activeslider');
        jQuery('[datasliderid=' + currentSlide + ']').addClass('activeslider');
        jQuery('.imgHendler').attr('src', imagedata)    
    });

    tsslider.on('afterChange', function() {
        var currentSlide = tsslider.slick('slickCurrentSlide');
        const imagedata = jQuery('[datasliderid=' + currentSlide + ']').attr('dataimg');
        jQuery('.evanthendler').removeClass('activeslider');
        jQuery('[datasliderid=' + currentSlide + ']').addClass('activeslider');
        jQuery('.imgHendler').attr('src', imagedata)    
    });



}