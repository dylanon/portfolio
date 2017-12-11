import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import AOS from 'aos';

function closeNav() {
    $('.main-nav-links').removeClass('nav-active');
    $('.logo').removeClass('nav-active');
}

$(function() {
    // Toggle class for CSS transition when mobile nav toggle is pressed
    $('.nav-toggle').on('click', function() {
        $('.main-nav-links').toggleClass('nav-active');
        $('.logo').toggleClass('nav-active');
    });

    $('.main-nav-links a').smoothScroll({
        beforeScroll: closeNav,
        speed: 600
    });

    // Initialize Animate On Scroll
    AOS.init({
        duration: 700
    });
});