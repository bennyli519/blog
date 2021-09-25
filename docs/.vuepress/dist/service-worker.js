/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1c94e1564b7e8d39f389008210115d91"
  },
  {
    "url": "assets/css/0.styles.65381ac7.css",
    "revision": "a94978727c8b089698113b59f8e1b206"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.fb790f36.js",
    "revision": "3c4464208061b29802480870774ee39b"
  },
  {
    "url": "assets/js/10.b8e199c7.js",
    "revision": "0bff53fb2db19eec58ad471a3eb0493f"
  },
  {
    "url": "assets/js/11.323fbfb6.js",
    "revision": "b1457ddb5930acf8bf213b368fbb2b86"
  },
  {
    "url": "assets/js/12.7b688bb8.js",
    "revision": "d91f67de13f7d73e23b7ae8c314fb826"
  },
  {
    "url": "assets/js/13.2a5a09b6.js",
    "revision": "c8c01237db5c37ba14cfdd5039be7427"
  },
  {
    "url": "assets/js/14.80124825.js",
    "revision": "e18953029a7646deb3dd0452900f9a50"
  },
  {
    "url": "assets/js/15.81ef1ff2.js",
    "revision": "a848265dbd8505cc139503716eddf845"
  },
  {
    "url": "assets/js/16.ae213a2f.js",
    "revision": "be3fa0ce74146128f8a5819168b9a113"
  },
  {
    "url": "assets/js/17.17025725.js",
    "revision": "5016e5ddf5f0ee16e9e86c10bfde64c7"
  },
  {
    "url": "assets/js/18.37fa92d3.js",
    "revision": "e4582bef60e641d9c2b53923dd5e201c"
  },
  {
    "url": "assets/js/19.609b2e43.js",
    "revision": "ea27e03c0f68c30a26ea644f1f81a022"
  },
  {
    "url": "assets/js/4.fc2ecdf9.js",
    "revision": "1ee8905c826e032a5a654161822803c7"
  },
  {
    "url": "assets/js/5.d97f6ea5.js",
    "revision": "c89a05b6aaa523a07caf2c8370d7a926"
  },
  {
    "url": "assets/js/6.0a19321e.js",
    "revision": "436fa6bf099fcbe49761c28a7f2d2160"
  },
  {
    "url": "assets/js/7.58d7ee85.js",
    "revision": "5296298e6144811f8665e9c8cd7637e4"
  },
  {
    "url": "assets/js/8.55df38b2.js",
    "revision": "43edf12778637b9aa7bd33af0f7d80dd"
  },
  {
    "url": "assets/js/9.aad7f615.js",
    "revision": "4d176203fad8622132f6e146ac3caeea"
  },
  {
    "url": "assets/js/app.59c1ec29.js",
    "revision": "8214262d1cd4d04348b79dd5f1f8e5f5"
  },
  {
    "url": "assets/js/vendors~flowchart.ff9cedef.js",
    "revision": "c50cb463f33f9f3a207bc4e176422d07"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "categories/index.html",
    "revision": "3673d52344a8dbfbb2c3a3e0dfbb8d28"
  },
  {
    "url": "categories/test/index.html",
    "revision": "3f92e6d4513830d4e2243867ef8029f3"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "images/avatar.png",
    "revision": "62818ccf873639612d8ea9a6e2cf7b0f"
  },
  {
    "url": "images/bg/1.jpg",
    "revision": "8d1f45887a8da85b0e02ce88f6f4065f"
  },
  {
    "url": "index.html",
    "revision": "19e9fca54ee2de75c2602e85068aa358"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/index.html",
    "revision": "0c5263969627f599c854111c9e727ed6"
  },
  {
    "url": "tag/test/index.html",
    "revision": "f5142d583cb1b8b42a910a656ffb1b72"
  },
  {
    "url": "test/test1.html",
    "revision": "6e1f0f9f22dcefd984e507445f785524"
  },
  {
    "url": "test/test2.html",
    "revision": "288c189921ec3f8d052c4db4249f5347"
  },
  {
    "url": "theme-reco/api.html",
    "revision": "1ff4b4c2e7d9c83cc7fb5f1e646d9634"
  },
  {
    "url": "theme-reco/index.html",
    "revision": "befb338ecc023c62f3c20fb1113cdeab"
  },
  {
    "url": "theme-reco/plugin.html",
    "revision": "57562f00bcd4a1c772f800985ca8cfd1"
  },
  {
    "url": "theme-reco/theme.html",
    "revision": "c83b8e198b959e992576b99ae9dfa400"
  },
  {
    "url": "timeline/index.html",
    "revision": "e74e3e89fb3ed0f4bdebfc53f0edf9bb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
