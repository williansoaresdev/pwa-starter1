var cacheName = 'x-pwa1';

console.log('self.addEventListener(install) criado');
self.addEventListener('install', (e) => {

  console.log('[Service Worker] Install');
  console.log('e.waitUntil...');

  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    if (cache) {
        
        /**
            NENHUM ARQUIVO NESTA LISTA PODE FALTAR...
            PRECISA EXISTIR NA HOSPEDAGEM!
        */

        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll([
          '/pwa/index.html',
          '/pwa/bootstrap/css/bootstrap.min.css',
          '/pwa/bootstrap/css/bootstrap.min.css.map',
          '/pwa/bootstrap/fonts/glyphicons-halflings-regular.eot',
          '/pwa/bootstrap/fonts/glyphicons-halflings-regular.svg',
          '/pwa/bootstrap/fonts/glyphicons-halflings-regular.ttf',
          '/pwa/bootstrap/fonts/glyphicons-halflings-regular.woff',
          '/pwa/bootstrap/fonts/glyphicons-halflings-regular.woff2',
          '/pwa/bootstrap/js/bootstrap.min.js',
          '/pwa/css/main.css',
          '/pwa/img/ic_launcher_48x48.png',
          '/pwa/img/ic_launcher_72x72.png',
          '/pwa/img/ic_launcher_96x96.png',
          '/pwa/img/ic_launcher_144x144.png',
          '/pwa/img/ic_launcher_192x192.png',
          '/pwa/img/apple-touch-icon.png',
          '/pwa/img/apple-touch-icon-57x57.png',
          '/pwa/img/apple-touch-icon-72x72.png',
          '/pwa/img/apple-touch-icon-76x76.png',
          '/pwa/img/apple-touch-icon-114x114.png',
          '/pwa/img/apple-touch-icon-120x120.png',
          '/pwa/img/apple-touch-icon-144x144.png',
          '/pwa/img/apple-touch-icon-152x152.png',
          '/pwa/img/apple-touch-icon-180x180.png',
          '/pwa/img/favicon.ico',
          '/pwa/img/logo1.png',
          '/pwa/jquery/jquery-1.12.4.min.js',
          '/pwa/main.js'
        ]);

    } else {
        console.log('nao abriu o cache');
    }
    
  })());
});

console.log('self.addEventListener(fetch) criado');
self.addEventListener('fetch', (e) => {
    
    console.log('self.addEventListener(fetch) disparado');
    e.respondWith((async () => {
        console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
        const r = await caches.match(e.request);
        if (r) {
            console.log('Achou o cache... retornando seus dados');
            return r;
        }
        const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
        cache.put(e.request, response.clone());
        return response;
    })());

});