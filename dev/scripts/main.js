import $ from 'jquery';

// Toggle class for CSS transition when mobile nav toggle is pressed
$(function() {
    $('.nav-toggle').on('click', function() {
        $('.main-nav-links').toggleClass('nav-active');
        $('.logo').toggleClass('nav-active');
    });
});