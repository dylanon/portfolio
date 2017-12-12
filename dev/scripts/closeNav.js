import $ from 'jquery';

export default function closeNav() {
    $('.main-nav-links').removeClass('nav-active');
    $('.logo').removeClass('nav-active');
    $('.toggle-bar').removeClass('nav-active');
}