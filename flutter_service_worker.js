'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "80e48e7258e4a8a781824e836ec68e55",
"assets/AssetManifest.bin.json": "ede957ae480ab0d659bb43d56df4dcba",
"assets/AssetManifest.json": "b921ba3713f15acbcc4c243bb93ea48f",
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
"assets/assets/MoreProj/0-l.png": "31e83e5b497f6f171d2b3279a6a82eb9",
"assets/assets/MoreProj/0-r.png": "7b9784e113c072b7d384a392937bfd3b",
"assets/assets/MoreProj/1-l.png": "40aa6b636eb1e5d917dff7b14e0d3784",
"assets/assets/MoreProj/1-r.png": "94f648595d6e92406c4d9838e5810f81",
"assets/assets/MoreProj/2-l.png": "dad99fcc4afdcda8ce24ad847a3a7e87",
"assets/assets/MoreProj/2-r.png": "5d70feff41699677ed3c8c25fc741612",
"assets/assets/MoreProj/3-l.png": "e45c70c1204a24bac48ce875026b839f",
"assets/assets/MoreProj/3-r.png": "ee77a3d11c3cede9895f8edaf3f5de8c",
"assets/assets/MoreProj/4-l.png": "ad252893db18db63a4be0f179859fe6b",
"assets/assets/MoreProj/4-r.png": "3322b9765a326529ca48e290902d5cf6",
"assets/assets/MoreProj/5-l.png": "e8416716276d8d62340bee279783d7f8",
"assets/assets/MoreProj/5-r.png": "ed15879942b81d72309ab3f7aea54321",
"assets/assets/Numa/colors.png": "8fc06b5c8f305071619d90d1b5c13498",
"assets/assets/Numa/concept.png": "fea384e6468449af3acf9551555d7fa5",
"assets/assets/Numa/icon.png": "163d2ab32a9d59e7dc67cbb91ce090da",
"assets/assets/Numa/logo-bg.png": "4e2263f425632d3c9bdf4ab4f9c42af6",
"assets/assets/Numa/logo.png": "c04fb71398563cb21d7bd348d1be180f",
"assets/assets/Numa/logomark-inv.png": "6c37c4b722cb1283cc91ac255d6cf244",
"assets/assets/Numa/logomark.png": "ed15879942b81d72309ab3f7aea54321",
"assets/assets/Numa/mock1.jpg": "b94f3b499b32ec444a97789c314e9c7d",
"assets/assets/Numa/mock2.jpg": "fc622f8c7df3d04d8ff05a1ff0339c42",
"assets/assets/Numa/mock3.jpg": "0b1a192bed0ecd67c730dd0198189640",
"assets/assets/Numa/sketch.png": "b02eef31208307fcfd91fa374df1079f",
"assets/assets/Quotish/colors.png": "a73d43c3a1766709c898f7a19164033c",
"assets/assets/Quotish/concept.png": "f03e96566f9760b3e453a7bb183bcb2c",
"assets/assets/Quotish/icon.png": "cea53b2b815ddeb193d2b7b3f4d4d018",
"assets/assets/Quotish/logo-bg.png": "72fe7f565683e35f94dbfd0066051de2",
"assets/assets/Quotish/logo.png": "a66d481a978608941c4e639008250859",
"assets/assets/Quotish/logomark-inv.png": "0a40bbc25998c70026eac5bdb0fb59b8",
"assets/assets/Quotish/logomark.png": "a26a009c575e77e2843702c9b4460250",
"assets/assets/Quotish/mock1.jpg": "c25ed2171b360422121321b92a8b186b",
"assets/assets/Quotish/mock2.jpg": "02f718140a0339895524d511acb079ae",
"assets/assets/Quotish/mock3.jpg": "be71a345d3c725793131db0eb2fc5bd3",
"assets/assets/Quotish/sketch.png": "810a063bd6693fa8f91f23eb5ad6935a",
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
"index.html": "31517fc91c0ff53aec60fd3c07f9db0b",
"/": "31517fc91c0ff53aec60fd3c07f9db0b",
"main.dart.js": "517da9ec684ac0127e898e0957fbfaf8",
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
