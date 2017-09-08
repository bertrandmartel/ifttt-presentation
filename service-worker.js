"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","57a7fe064916b353c4cd5a523c1a5cb9"],["/static/css/main.d103e04f.css","6de411e8dcbb343b502e178483a639ad"],["/static/js/main.16079493.js","0d5a8ccf3514481cb56a79575651bc75"],["/static/media/banner.5c43deaa.png","5c43deaa39688ca8f05dc5e04a8f740c"],["/static/media/bg.900133f4.png","900133f4ed5d1b56f9d15756e942fadd"],["/static/media/box.132784d9.png","132784d91cb7a69d38d08eb599fecffe"],["/static/media/global.ec698b8e.png","ec698b8e88f8f8cd23b1b4e5c04aecc6"],["/static/media/iftt-start.b63c0817.png","b63c0817b88a53eaa173b61cbf666555"],["/static/media/ifttt-actions-trigger.07f40e6b.png","07f40e6b0dad67148b4981f18f262d60"],["/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/static/media/partner.78959fe6.png","78959fe6ca3fb3ecbecfe5f5d2ba8d72"],["/static/media/screenshot1.e252d57e.png","e252d57e187a8fcd13e0cba7019887f3"],["/static/media/screenshot2.3d46ab88.png","3d46ab8863712520d5d2561c3492cd70"],["/static/media/screenshot3.ad133dcd.png","ad133dcdc91b247191b8e4ce1fb714d5"],["/static/media/screenshot4.36162a51.png","36162a517a6acd9b9f0c7e966a710cd8"],["/static/media/screenshot5.8a6fd10d.png","8a6fd10d8180c73b8d962345ba5e4f9c"],["/static/media/server.38ce6510.png","38ce65102a5524cedea84da2a9708074"],["/static/media/twitter-gmail.e4e0499b.png","e4e0499b87a70e1a27bec9f9c98f64c6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});