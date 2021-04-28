
$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 5, /* distancia entre as caixas */
    nav: false, /* barra menu de naveg */
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})