// jQuery and associated plugins
import $ from 'jquery';

// Navigation
import toggleNav from './toggleNav';
import smoothScrollLinks from './smoothScrollLinks';

// Animations
import aosInit from './aosInit';

// Service worker
import registerServiceWorker from './registerServiceWorker';

function init() {
  toggleNav();
  smoothScrollLinks();
  aosInit();
}

// Initialize when the document is ready
$(function() {
  init();
});

// Wait to register service worker until everything on the page has loaded
window.addEventListener('load', registerServiceWorker);
