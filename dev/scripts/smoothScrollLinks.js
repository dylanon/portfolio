import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import closeNav from './closeNav';

export default function smoothScrollLinks() {
    $('.main-nav-links a').smoothScroll({
        beforeScroll: closeNav,
        speed: 600
    });
}