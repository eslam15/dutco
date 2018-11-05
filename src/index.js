import 'bootstrap'
import 'slick-carousel'
import './sass/main.scss'


$(document).ready(function() {
    // homepage slider
    $('.home-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.home-slider-nav'
    });
    $('.home-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.home-slider',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
    // stats slider
    $('.stats-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });
    // clients slider
    $('.clients-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true,
        touchThreshold: 20,
        autoplay: true,
        autoplaySpeed: 3000
    });
    // leadership slider
    $('.leadership-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.leadership-slider-nav'
    });
    $('.leadership-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.leadership-slider',
        dots: true,
        focusOnSelect: true,
        centerMode: true,
    });
});