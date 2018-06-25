const cacheName = '2018-06-24';

// Caches application assets for offline use
// during the installation phase for the service worker
self.addEventListener('install', e => {
  // Extends the `install` event until passed promise resolves
  e.waitUntil(
    // Create or open a cache by name (returns a promise)
    caches
      .open(cacheName)
      .then(cache => {
        // Cache items for offline access
        return cache.addAll([
          '/',
          '/index.html',
          '/styles/style.css',
          '/scripts/main.js',
          '/assets/blue-triangle.png',
          '/assets/blue-wave.png',
          '/assets/green-arrow-wavy.png',
          '/assets/green-arrow-wavy.png',
          '/assets/grey-dotted-circle.png',
          '/assets/grey-dotted-square.png',
          '/assets/headshot.jpg',
          '/assets/pink-ring.png',
          '/assets/pink-squiggle.png',
          '/assets/pink-triangle.png',
          '/assets/purple-ring.png',
          '/assets/purple-washer.png',
          '/assets/screen-anywiki-nexus6p.png',
          '/assets/screen-doggo-iphone8.png',
          '/assets/screen-froogle-macbook.png',
          '/assets/screen-jobseeker-macbook.png',
          '/assets/screen-tpllive-macbook.png',
          '/assets/screen-wasisleeping2-macbook.png',
          '/assets/screen-zap-macbook.png',
          // Fonts
          'https://fonts.googleapis.com/css?family=Montserrat:400,700|Playfair+Display',
          // Dev icons
          'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css',
          // Font Awesome 5 JavaScript for transforming <i></i> to <svg>
          'https://use.fontawesome.com/releases/v5.0.0/js/all.js'
        ]);
      })
      .catch(err => {
        console.error(`Offline caching failed with ${err}`);
      })
  );
});

// Responds to network requests from the cache
// If it can't find something in cache to respond with, it fetches from the network.
// TODO: Rewrite to be more straightforward
// Example code from MDN
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function(resp) {
        return (
          resp ||
          fetch(event.request).then(function(response) {
            let responseClone = response.clone();
            caches
              .open(cacheName)
              .then(function(cache) {
                return cache.put(event.request, responseClone);
              })
              .catch(err => console.error(err));
            return response;
          })
        );
      })
      .catch(err => {
        console.error(
          `Service worker encountered an error while responding to a fetch event: ${err}`
        );
      })
  );
});

// Cleans up old caches on activation of the service worker
self.addEventListener('activate', e => {
  // Get the list of cache names
  caches.keys().then(keys => {
    // Compare each one to the current cache name
    keys.forEach(key => {
      if (key !== cacheName) {
        // If it doesn't match the current cache name, delete it
        caches.delete(key);
      }
    });
  });
});
