"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/ifttt-presentation/index.html","9cfdbf015cdf9d94cbbf4c878ae7fc58"],["/ifttt-presentation/static/css/main.d103e04f.css","6de411e8dcbb343b502e178483a639ad"],["/ifttt-presentation/static/js/main.f6393b89.js","7c6f8d403c6d45771e71ac0423cf0155"],["/ifttt-presentation/static/media/banner.5c43deaa.png","5c43deaa39688ca8f05dc5e04a8f740c"],["/ifttt-presentation/static/media/bg.900133f4.png","900133f4ed5d1b56f9d15756e942fadd"],["/ifttt-presentation/static/media/box.132784d9.png","132784d91cb7a69d38d08eb599fecffe"],["/ifttt-presentation/static/media/global.ec698b8e.png","ec698b8e88f8f8cd23b1b4e5c04aecc6"],["/ifttt-presentation/static/media/iftt-start.b63c0817.png","b63c0817b88a53eaa173b61cbf666555"],["/ifttt-presentation/static/media/ifttt-actions-trigger.07f40e6b.png","07f40e6b0dad67148b4981f18f262d60"],["/ifttt-presentation/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/ifttt-presentation/static/media/partner.78959fe6.png","78959fe6ca3fb3ecbecfe5f5d2ba8d72"],["/ifttt-presentation/static/media/screenshot1.e252d57e.png","e252d57e187a8fcd13e0cba7019887f3"],["/ifttt-presentation/static/media/screenshot2.3d46ab88.png","3d46ab8863712520d5d2561c3492cd70"],["/ifttt-presentation/static/media/screenshot3.ad133dcd.png","ad133dcdc91b247191b8e4ce1fb714d5"],["/ifttt-presentation/static/media/screenshot4.36162a51.png","36162a517a6acd9b9f0c7e966a710cd8"],["/ifttt-presentation/static/media/screenshot5.8a6fd10d.png","8a6fd10d8180c73b8d962345ba5e4f9c"],["/ifttt-presentation/static/media/server.38ce6510.png","38ce65102a5524cedea84da2a9708074"],["/ifttt-presentation/static/media/twitter-gmail.e4e0499b.png","e4e0499b87a70e1a27bec9f9c98f64c6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/ifttt-presentation/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});