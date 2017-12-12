import $ from 'jquery';

export default function toggleNav() {
    // Toggle class for CSS transition when mobile nav toggle is pressed
    $('.nav-toggle a').on('click', function(e) {
        e.preventDefault();
        $('.main-nav-links').toggleClass('nav-active');
        $('.logo').toggleClass('nav-active');
    });
}