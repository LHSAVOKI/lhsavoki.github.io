/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/lh_blog/public/2021/01/25/REUSE-ALV-GRID-DISPLAY-LVC与REUSE-ALV-GRID-DISPLAY的区别/index.html","64e5f0b9ea1248f2eed5b6b91522d723"],["C:/lh_blog/public/2021/01/25/good day/index.html","2d7b98134d76da1e49bda16fe37515e1"],["C:/lh_blog/public/2021/01/25/数据字典/index.html","21ea4e2f2ed98b84922495bd4884d1a6"],["C:/lh_blog/public/2021/01/25/调用浏览器/index.html","dc75c0e8aba0327a8c0f19f5551b78c5"],["C:/lh_blog/public/2021/01/26/APPEND-lines/index.html","09368eabd8e7c6b8c1123c7ef9b10292"],["C:/lh_blog/public/2021/01/26/sap-快捷键整理/SAP.png","61294c48d7983e76317d7367243d2970"],["C:/lh_blog/public/2021/01/26/sap-快捷键整理/index.html","200c519ea0340d32ff352817886072eb"],["C:/lh_blog/public/2021/01/26/从一个程序调用另外一个程序的perform/index.html","d399ce66b33eb5351c936a24df6be337"],["C:/lh_blog/public/2021/01/26/通过BAPI方式展示长文本/index.html","09556826c60993167c955b16a89aed1f"],["C:/lh_blog/public/2021/01/27/abap-事件/index.html","96db3e0b674d2fa0295ddb93e954d929"],["C:/lh_blog/public/2021/01/27/abap-事件/progress.png","1a474f5c661a4b561aab8570b1821ba6"],["C:/lh_blog/public/2021/01/28/ALV字段目录，dump/alv_filecat_error.png","96b153b6821ab50ebd909cd2a4932c6e"],["C:/lh_blog/public/2021/01/28/ALV字段目录，dump/index.html","38fa5b7020f67c10fc8ad4baa23e657d"],["C:/lh_blog/public/2021/01/29/ABAP-读取Excel方法大全/index.html","07bd89d9899c10ffc8e896cc67166e8d"],["C:/lh_blog/public/archives/2021/01/index.html","2e86ca56402247385334fd65f26152c8"],["C:/lh_blog/public/archives/2021/01/page/2/index.html","25764ab5426d7ae282214be7fbd43a58"],["C:/lh_blog/public/archives/2021/index.html","a2b989de4f890880ec7095d4ed731665"],["C:/lh_blog/public/archives/2021/page/2/index.html","812eef5eece8cbebc0e23a7a7bdbd699"],["C:/lh_blog/public/archives/index.html","76786430d01e664ad24ae38608f2d3cc"],["C:/lh_blog/public/archives/page/2/index.html","a448174ae92aa5645d7a8a90f8921fe5"],["C:/lh_blog/public/artitalk/index.html","5d72e4eba1ccaa384c795cbf2850c150"],["C:/lh_blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["C:/lh_blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["C:/lh_blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["C:/lh_blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["C:/lh_blog/public/categories/index.html","04e50ce7a3bd8cdd786ca5c2338e08bb"],["C:/lh_blog/public/css/index.css","0f39482e0856cad567e5a6f065ba134d"],["C:/lh_blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lh_blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/lh_blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lh_blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["C:/lh_blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/lh_blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/lh_blog/public/index.html","00bb519541aad9be9682a01dd1371f43"],["C:/lh_blog/public/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["C:/lh_blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["C:/lh_blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["C:/lh_blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["C:/lh_blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["C:/lh_blog/public/page/2/index.html","e2a6742df96e208409e954db80fbe2b0"],["C:/lh_blog/public/tags/SAP-ABAP/index.html","0f3afc336191147649cc3fced4b8c334"],["C:/lh_blog/public/tags/index.html","0101c39add15416925c16aeaedb5a80f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







