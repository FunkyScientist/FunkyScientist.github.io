'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3efe24f76cd85a133fa68e72be968a88",
"assets/AssetManifest.bin.json": "7de04d6724dd072dfb480d3c7dd50293",
"assets/AssetManifest.json": "183128b348b0b828dcc3ae1f07eb5b7c",
"assets/assets/Hanan/colors.png": "bbaf33e27f59ef7b6447eaab738f6948",
"assets/assets/Hanan/concept.png": "08d13cb088bd18f850463e1aac5f06bb",
"assets/assets/Hanan/icon.png": "a86278222aaeab99650f19508930a0ec",
"assets/assets/Hanan/logo-bg.png": "a031ffb57cea7af7c558c238d903df6b",
"assets/assets/Hanan/logo.png": "9d449690fa53664f84685050042a0518",
"assets/assets/Hanan/logomark-inv.png": "3e202778512c1d98b946e827638e75a2",
"assets/assets/Hanan/logomark.png": "18b83d6ed09ed7186d173c3789567c90",
"assets/assets/Hanan/mock1.jpg": "532250b715baa9072a21e31564139e92",
"assets/assets/Hanan/mock2.jpg": "85da95b3535df25390d167c409f9c23a",
"assets/assets/Hanan/mock3.jpg": "3f1701e07ed8e1c33cf79c603cd2731f",
"assets/assets/Hanan/sketch.png": "f31bbe4b459ee88fa2bdb8bff82b31d9",
"assets/FontManifest.json": "48293e3249b4c545dd35f98d7ff694fe",
"assets/fonts/ClashDisplay-Medium.otf": "4c49fc387f94a3022d00245e4590cc9f",
"assets/fonts/ClashDisplay-Regular.otf": "8a81aaa5c6c6cba6e387259de997bfe9",
"assets/fonts/ClashDisplay-Semibold.otf": "a09de8515fa0c37044d41c9dcd6a5226",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "f4336d74284e09b4bf54e873523c5146",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "78c0b2706a065d45a23e5531452a3278",
"canvaskit/canvaskit.js.symbols": "ea644f94fbe518565f00f8aea3939a85",
"canvaskit/canvaskit.wasm": "463b3ec70ea03178c6e43d734ef189a0",
"canvaskit/chromium/canvaskit.js": "7211de9279796931fcbcb2e8326fa8b8",
"canvaskit/chromium/canvaskit.js.symbols": "be3f472936e566931df576ad11ead3e2",
"canvaskit/chromium/canvaskit.wasm": "1728a42feab1b266f18654a53a8c017d",
"canvaskit/skwasm.js": "411f776c9a5204d1e466141767f5a8fa",
"canvaskit/skwasm.js.symbols": "a948b882658d66e5512a736848e2b8dc",
"canvaskit/skwasm.wasm": "d0e2526d6bac00206151306cf6c579f6",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "ee2ba77e1a1227f095bade90bbc1e208",
"flutter.js": "5aee128657b91f4e3e1eeec85c7ee066",
"icons/Icon-192.png": "ee2ba77e1a1227f095bade90bbc1e208",
"icons/Icon-512.png": "ee2ba77e1a1227f095bade90bbc1e208",
"icons/Icon-maskable-192.png": "ee2ba77e1a1227f095bade90bbc1e208",
"icons/Icon-maskable-512.png": "ee2ba77e1a1227f095bade90bbc1e208",
"index.html": "7e7f24a0d20c1ce6b209871970a3af7a",
"/": "7e7f24a0d20c1ce6b209871970a3af7a",
"main.dart.js": "904e3912a2a5e7d5a38d41eed046b911",
"manifest.json": "521e20d3fe96306a4b734fde066d97ec",
"version.json": "96e95de1fccc32b88cc16f029bd5778b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
