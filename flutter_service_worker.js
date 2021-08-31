'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5d89b24a5f79c755595e28d9b78b7ea7",
".git/config": "fde7470a5875be2a26f293e9b16c37e7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b87f93386bce9d55920ec8ca5ebfcedb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f4fce2b60b1f12b7e8e60b6513b22afb",
".git/logs/refs/heads/master": "f4fce2b60b1f12b7e8e60b6513b22afb",
".git/logs/refs/remotes/origin/master": "38c6900fed0cd9636b53686316dfb3e0",
".git/objects/13/0bc8bee7ed844511d23d5570bc92b26c0b3ef7": "8b583939292cf491e14de097c5240812",
".git/objects/14/c12700cea1484c627397302fd4ccbde49a22b6": "ddb3a85a5538beca7b5cb679d1da6fd2",
".git/objects/15/224792792620b9b982cbbc009bc397cda4008d": "699f21d318fff8e903d54c04f17bbf8c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/1819bca06ec2b584dd1c24ccd701082d12774f": "2b4dafa16f0126cf2f9badcb914b8567",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/e706be6d23405538c42c4e4e1c0d0126d230ca": "af712ee4992ee5198f2d046b81d84746",
".git/objects/3d/43775c4dd76b70ecb0d14bd0aa3c5307f70244": "ef23e7026fd68f6d994b45dec572d30c",
".git/objects/67/b35477d2ae1705a5f166e295cc8fb8b072b827": "6a7b582ee7431d7040d3bd3127bd6716",
".git/objects/69/9f43d24979eb961cc8e40b6275dfcb4a6c1807": "61aa7385e482cbf862d2a49b5c6f4639",
".git/objects/69/ddc3da8d54c73eb7a873c5ae259c1e3cef2953": "1a30d1ca55d196fda10bf243073321ee",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/f51a34180a832148b86fc76a29e31380776343": "43350f2b9b6e31665e08738e0e11e3a7",
".git/objects/82/70b376a17d90e8ded5e03bf8b5e95accf99d2e": "6db6ed665067aebd3fbe174b7d2e7524",
".git/objects/86/3bcc2a89521434ae0216a3fb81799d77809f1c": "f84e743979d5870a742bb9631058e6fb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ca27a062e44478b891858b257c36aa337e7b6d": "a0a3c3c1bf24cb7606c39bb7b9ca70a7",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/94/b978a0a89f67ae7d13eba671b37168b9d9fdf3": "09dfed2b3ecb347e9abb87594a4aba71",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/6fa32c37176785bc57e0ccf07c964af66f565b": "64dca98a94d131c3aba0b0062bb6975b",
".git/objects/b3/8b263ebe82bdcb8dae9b1d1999405d0cacc978": "e8e34f9fcf3c8ee5ea9e1bf51061150f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/8422dc19d6d6694f2b6abd9e66a894b7f35231": "c9ac911042fbfc44eaec89b75ca73798",
".git/objects/db/3f42c17e08197f3142d6bdaf4b0d7defa9d339": "75fa72ab947fe73643497bb7c2c4846c",
".git/objects/dc/1e85b419b05391d0d4bcc56ddf3665ee7143a8": "c55a2190eadbb79f80e0a5f8b93f4291",
".git/objects/e0/49b2c690c77afa009524fc344fc1c99fbd8b6b": "0429dff32041d8057c671b2094a931bd",
".git/objects/e3/497a97e8fb781b9ef8b7fc79531d1eb67861cd": "1d4dee4d817a828481a3898fea397a06",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ed/93e6490a264f8482c8d55c824f679ebfd2208c": "2281d1059596d4b96c9bd3d6a6caa35f",
".git/objects/ff/7a306f176c0b6f27b7a2928e84853247a6eb35": "b2b565c86cec1bef420c31d35bbba1e1",
".git/refs/heads/master": "8de2cca6c8d9b69eedd4da26bb4d4b17",
".git/refs/remotes/origin/master": "8de2cca6c8d9b69eedd4da26bb4d4b17",
"assets/AssetManifest.json": "6f8cf5cffdf729bb7c7dd61e29ca1927",
"assets/FontManifest.json": "72f8fa3d605620845511887c6a1329a2",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/images/dark_theme_bar.png": "243c336500c66b51be333f8180f01e1f",
"assets/images/light_theme_bar.png": "2d76dc0eb80e744e9da25a3cd68a68e8",
"assets/images/splash_screen_dark_theme.png": "c5d959816dbe542a780ebd6f9b70c3dc",
"assets/images/splash_screen_light_theme.png": "735151df0b78f3866f4658063fe7cf52",
"assets/images/transparent_background.png": "8cb173b8e7df2e5dc9af96243fb3b6ba",
"assets/images/transparent_dark_theme.png": "89e14852f59f3e3c9bcfa152418c4540",
"assets/images/transparent_project_dark_theme.png": "1a5a2436ac60ca07d0449052449a293f",
"assets/images/transparent_project_light_theme.png": "f847703ecf81be30e46dc92641c2d1db",
"assets/NOTICES": "7d98daccd9aed40ba2dc0886bd1f1071",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "623c702f920903d0beb6956836289747",
"/": "623c702f920903d0beb6956836289747",
"main.dart.js": "66e453758452e39e40da0563f430c657",
"manifest.json": "1988c86ca74ca4a932b951471a15f285",
"mongoose.conf": "87e7a92a9585c5b7eb10983cfb712dba",
"version.json": "bb071c42d19e929c65f272d4fa386d99"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
