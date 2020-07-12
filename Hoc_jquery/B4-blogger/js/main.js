function toggleMenu(){
    document.getElementById("headerMenu").classList.toggle("active");
    document.getElementById("icon-social").classList.toggle("active");
}

$(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$(".owl-navigation .owl-nav-prev"),$(".owl-navigation .owl-nav-next")],
        responsive:responsive
    });
});

const responsive = {
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}