const PRECACHE = 'precache';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
    
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', function(event) {
  // Perform install steps
  /*event.waitUntil(
    caches.open(PRECACHE)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(PRECACHE_URLS);
      })
  );*/
});

self.addEventListener('activate', function(event) {
  //var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.map(function(cacheName) {
//            // debugger;
//         //   if (PRECACHE !== cacheName) {
//         //     return caches.delete(cacheName);
//         //   }
//         })
//       );
//     })
//   );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
    // Skip cross-origin requests, like those for Google Analytics.
    // if (event.request.url.startsWith(self.location.origin)) {
        /*event.respondWith(
            caches.match(event.request).then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return caches.open(PRECACHE).then(cache => {
                    console.log('Cache Opened');
                    return fetch(event.request).then(response => {
                        // Put a copy of the response in the runtime cache.
                        return cache.put(event.request, response.clone()).then(() => {
                            return response;
                        });
                    });
                });
            })
        );*/
    // }
});