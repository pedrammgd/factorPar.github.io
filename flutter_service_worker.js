'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cbb20dcd1592a35e4c4870ef3178a053",
"assets/assets/fonts/iran_sans/IRANSansMobile.ttf": "7053ef9b87586e56bb37ca6c11eae47f",
"assets/assets/fonts/iran_sans/IRANSansMobile_Black.ttf": "b5e9092bc82a7b48d4a19fa6eb82bd6d",
"assets/assets/fonts/iran_sans/IRANSansMobile_Bold.ttf": "4bac6b68236f494a59b54c44a1ed529f",
"assets/assets/fonts/iran_sans/IRANSansMobile_Light.ttf": "3d18be052a4de0da6d0f2aaef74bbae5",
"assets/assets/fonts/iran_sans/IRANSansMobile_Medium.ttf": "c37aafe885d7245042a5731e96a2acd2",
"assets/assets/fonts/iran_sans/IRANSansMobile_UltraLight.ttf": "35b822df0e8d7af2f66c3f3c9c4940f0",
"assets/assets/images/jpg/ads_image.jpg": "6d20bb55bf4694576ffc3a08ab27d810",
"assets/assets/images/png/add-factor-official.png": "fa3e915f9f6bef5524394c03ce1636da",
"assets/assets/images/png/add_factor_un_official.png": "29f929e3cefd35c6449c5eb4ce3f9b2f",
"assets/assets/images/png/barcode-scanner.png": "6851d9d0476a4523a55298a182b62dda",
"assets/assets/images/png/bronze-cup.png": "d2d05ae72a1f575143d16c9eef239494",
"assets/assets/images/png/buyer_empty_list_icon.png": "13fa7c5eecd7c68dd21e7e622a98cf49",
"assets/assets/images/png/chart.png": "d3fe000336fd096d84f5d6fb549d7500",
"assets/assets/images/png/coffee-cup.png": "9676a1b1c4e8262fbf44136e024aaf80",
"assets/assets/images/png/dark-mode.png": "7101ce45ca9a5938bea46b706db08727",
"assets/assets/images/png/document-header.png": "b33490d057a7c3292caa9b4f8d27e4c9",
"assets/assets/images/png/empty_list.png": "ab746eb0a2268113166cf667f9bcffe8",
"assets/assets/images/png/format_size.png": "a45bbc810cc187cd905eec98eea5ea07",
"assets/assets/images/png/gold_cup.png": "a0aae82199a91846a49f5607444f4509",
"assets/assets/images/png/home.png": "f57db47d10f091d8444fcc4295956854",
"assets/assets/images/png/light-icon.png": "acec27f2d07cba5d319d593ff333e6bd",
"assets/assets/images/png/logo-design.png": "4b05e72d331fe30216e5b036da7074c0",
"assets/assets/images/png/logo_factor.png": "308466e896373167e20a7128482835b1",
"assets/assets/images/png/money.png": "a3b81e05bbcf629b4112979706a1a0a0",
"assets/assets/images/png/more.png": "21ae81a67ec287877f34c763264cd08f",
"assets/assets/images/png/my_profile.png": "c40564945256baf80928eedc3fcc70d8",
"assets/assets/images/png/seal_icon.png": "b7527d436135b7758003fbf565b99bc1",
"assets/assets/images/png/signature.png": "80004af172d39d69502ebfa798adc04e",
"assets/assets/images/png/silver-cup.png": "e9c17a8634df5776014d5fdc8f33cd77",
"assets/assets/images/png/support.png": "463b1770088be69668ccd899e6022119",
"assets/assets/images/png/warehouse.png": "34e3439ed96c687e44d419788222d495",
"assets/FontManifest.json": "4d693e99480438379417608b6341152a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "e20f004886438f5e34e10054078f763f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "f7fc848fef6e923e97fb7aec4f735f5c",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "82a9594dc03ec97da2367760d2b4e4c4",
"/": "82a9594dc03ec97da2367760d2b4e4c4",
"main.dart.js": "913798cc1325bf65f2fa7161b3176be1",
"manifest.json": "eca4735f8b81d8579ee566c97ced6302",
"version.json": "2799224e05bc8afc730083862bf084d7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
