import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import closeNav from './closeNav';

export default function smoothScrollLinks() {
    // Add to nav links
    $('.main-nav-links a').smoothScroll({
        beforeScroll: closeNav,
        speed: 600
    });

    // Add to contact link in bio
    $('#bio-contact-link').smoothScroll({
        speed: 600
    });
}