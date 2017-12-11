import $ from 'jquery';
import AOS from 'aos'

$(function() {
    // Toggle class for CSS transition when mobile nav toggle is pressed
    $('.nav-toggle').on('click', function() {
        $('.main-nav-links').toggleClass('nav-active');
        $('.logo').toggleClass('nav-active');
    });

    // Initialize Animate On Scroll
    AOS.init({
        duration: 700
    });
});