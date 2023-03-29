$(document).ready(function() {
    
    //HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        dots: false,
        autoplay:true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
       
        animateOut: 'slideOutDown', // slide out animation
        animateIn: 'flipInX',
        smartSpeed: 1000,
        responsive:{
            0:{
                nav : false,
            },
            768:{
                nav:true,
            },
        }
    })
    
    //Testominal Slider
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        items:1,
        smartSpeed: 800,
        autoplay:true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
       
    })

    


});