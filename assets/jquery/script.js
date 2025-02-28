$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,           // Auto-slide
        autoplaySpeed: 2000,      // Time per slide (in ms)
        dots: true,               // Show dots navigation
        arrows: true,             // Show prev/next arrows
        infinite: true,           // Infinite loop
        speed: 500,               // Transition speed
        slidesToShow: 3,          // Show 3 images at a time
        slidesToScroll: 1,        // Scroll 1 image at a time
        responsive: [
            {
                breakpoint: 768,  // For tablets and small screens
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,  // For mobile screens
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
