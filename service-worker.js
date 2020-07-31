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

var precacheConfig = [["2020/03/08/初时JUC/index.html","3bfac34ce9f9f0ccde74758ea50b07b6"],["2020/03/10/hexo-algolia-常见问题解决办法/index.html","304cf270ffc614c4e0216727de1eab52"],["2020/03/10/hexo主题中添加相册功能/index.html","4f887943067375c0a760654e7834a86f"],["2020/03/10/给主题添加音乐/index.html","b0e0b15e25b22a82b3ff4b9aee2bdce3"],["2020/03/11/Github-Actions自动部署hexo/index.html","46c41dd282e1db0e2424fb1f3d5273ed"],["2020/03/11/初时JVM/index.html","2f80e69cc6797ccc42e809f82412f326"],["2020/03/12/Lock锁/index.html","69535dc2c1ee659edf89a9bc64932179"],["2020/03/13/中间件之RabbitMq/index.html","cf8ffdbcb76ebce7fab9d05800222fbe"],["2020/03/13/密码加密之JWT/index.html","91c11e8d95e2e3e1cd95924cecaf8368"],["2020/03/14/JVM-堆与栈/index.html","4dbb4716ef61fc9e94c801c9ad6ae412"],["2020/03/14/垃圾回收GC/index.html","fc791780431852195077908d7e03ea3c"],["2020/03/14/锁之8锁/index.html","af5eb54dfc45623777acccdf0510861c"],["2020/03/15/SpringBoot原理探究/index.html","41606759643d5d79270265777689b8ba"],["2020/03/18/SpringBoot操作数据库/index.html","bdd14ba6406fb77b8a18d1d847aee2b7"],["2020/03/18/编写一个启动器/index.html","786deefaf50b379b15b83d8b1259f16a"],["2020/03/23/静态资源处理及webjars理解/index.html","e5cd679488e1eff2f0e23fd7d1838e69"],["2020/03/24/MVC自动配置/index.html","055422374d3dc5c40a15324c98550eaf"],["2020/03/30/走进Swagger/index.html","4f5fd12dd81164f851686f699403453e"],["2020/03/31/走进-VUE/index.html","7329bcf67b09234b126dd17b6b440036"],["2020/04/05/MyBatis-Plus初体验/index.html","29a481037dc39a41df23f337078c32ec"],["2020/04/05/MyBatis-Plus常用策略/index.html","c33fac8e18fde464a78c680c50ab5c23"],["about/index.html","5ba0457cb75af974b42209ad89700bf5"],["archives/2020/03/index.html","ef7c0cf45362c2972cbb9ee1f60441fe"],["archives/2020/03/page/2/index.html","9ab8ff1bc8d955fd83d80e41a9c7cbe1"],["archives/2020/04/index.html","b6cd6c01b3d1bffcae5b3699032b0657"],["archives/2020/index.html","e63feb448e5f45b2415dfb54aa0fe257"],["archives/2020/page/2/index.html","76587d23ad974e878714db4676fb497c"],["archives/2020/page/3/index.html","1395b7451d48d5a909fdcb998589b29e"],["archives/index.html","7038f73e3fd3a5c801a3401ad95e00ca"],["archives/page/2/index.html","4a6804dfef73891e2df79c7b8af593fb"],["archives/page/3/index.html","32fe032d1ccb3d96cecaa03ee7412e7d"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["books/index.html","c8832239ee4dd1e3aa6b4efc1e72ddb6"],["categories/Github/hexo/index.html","5c99c3fc6f5c10360ef35a6fb7cd871b"],["categories/Github/index.html","cc52bae7a3e87953e433c44528202989"],["categories/JUC/index.html","df1ac4f34678a19b6cec99cdbe214110"],["categories/JVM/index.html","2be8dd0c683f70712bc59fe1867e2d63"],["categories/JWT/index.html","1df9305353f98228b447fa62100986eb"],["categories/MyBatis-Plus/index.html","cc476c3930cc5c220ebb2482425521f6"],["categories/RabbitMq/index.html","5ae91fbf7eb1f861210e872f38de5c8b"],["categories/SpringBoot/SpringData/index.html","607fe9eb3117d0c770271188104f8c8c"],["categories/SpringBoot/index.html","b00139ec895da17c109d646ff5efcdc8"],["categories/Swagger/index.html","7c5ac58adf2d5af1d71de8c1cdef7b60"],["categories/VUE/index.html","4d8e6fbc2214e149a71ed2919ca7d708"],["categories/hexo/erro/index.html","04024733545bdc044c0d5288df7c2650"],["categories/hexo/index.html","4e3096be2630109a7755715ae9d238b1"],["categories/index.html","5b0e1e2ff029c40b0e0ddeeefc317622"],["categories/springBoot/index.html","8f6ed33a08bf9e85253218e60f80b584"],["categories/锁/JUC/index.html","7e6612d1e0b464a0f512351caf144f84"],["categories/锁/index.html","6a4e7add7f71a1e08595f97b90052ba0"],["css/index.css","bd1426a7672691fdd4ae654789f5ab0c"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["index.html","98b8828c54dd92997dc4dd0a4b2fc1e3"],["js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["link/index.html","55e983fb31eebd4b6e2fb341c3c33560"],["movies/index.html","0a3b33fba69e58d11b594dc720350b19"],["music/index.html","deee89efb59f202c3a61b19c69d92ee5"],["page/2/index.html","10c9f7dba606d369e68e4495702dc347"],["page/3/index.html","b8cba827a0fcb46d68373d8c170b65e5"],["photos/index.html","d67089d22abf09bc6dbafef0e523c93e"],["tags/Butterfly/index.html","120496e74d4d6881e1588a96c7980fb6"],["tags/Druid/index.html","26f238039b7f45837edc51b924db598c"],["tags/GC/index.html","d5cfc7bae41727f48aa16391424c8d7a"],["tags/Github/index.html","73987ab1446fa6a471505d18d5e15211"],["tags/JUC/index.html","82d8d9db61f87911e2911a65c116a607"],["tags/JVM/index.html","540601e63887f90882913306941b68ff"],["tags/JWT/index.html","54371136d8e8a2abf6d83536df60459d"],["tags/Lock/index.html","3846c9dfd11ec662676b23962c107cf8"],["tags/MyBatis-Plus/index.html","657a6784d49ba0615992ac41b4cd78a9"],["tags/RabbitMq/index.html","bfaa48ab181a62838d2433ab48374cc8"],["tags/Spring/index.html","1b620762ff66aa371c4b3b81cfc60b76"],["tags/SpringBoot/index.html","8b458d1abe5a8ee34975142ce72432e7"],["tags/SpringData/index.html","44d405c138f0544c7fce172107e40596"],["tags/SpringMVC/index.html","6b511301f63e1467c3d86fb1f44c9462"],["tags/VUE/index.html","997d83ba8c1e3a8a8220643d9502f9f4"],["tags/hexo/index.html","9de1b94794d9e5cc1072bb2ffbb6a7ac"],["tags/index.html","2e0d25978209b0b45d849aa359666427"],["tags/spring/index.html","6f94fc075c90c5f18e9e1a33e04dfb52"],["tags/springMvc/index.html","3a0efc632c717e12ee95ccb5af8193f4"],["tags/swagger/index.html","891e8fb3c9496e9fd4f70614a17cb6c1"],["tags/web/index.html","cdf3b73385f7d2704dde5bcc6f291f8e"],["tags/堆/index.html","dbab944b8ca5510ef07f832a3a178587"],["tags/栈/index.html","951948fc29dccb0303144b72228db6e9"],["tags/锁/index.html","044b9c91c8ea08a37d68fef2316d9818"]];
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







