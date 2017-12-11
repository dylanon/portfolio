import $ from 'jquery';

export default function toggleNav() {
    // Toggle class for CSS transition when mobile nav toggle is pressed
    $('.nav-toggle').on('click', function() {
        $('.main-nav-links').toggleClass('nav-active');
        $('.logo').toggleClass('nav-active');
    });
}