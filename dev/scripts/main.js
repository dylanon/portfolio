// jQuery and associated plugins
import $ from 'jquery';

// Navigation
import toggleNav from './toggleNav';
import smoothScrollLinks from './smoothScrollLinks';

// Animations
import aosInit from './aosInit';

function init() {
    toggleNav();
    smoothScrollLinks();
    aosInit();
}

// Initialize when the document is ready
$(function() {
    init();
});