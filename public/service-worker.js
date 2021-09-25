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
    "revision": "185d0504b441b8783e5603a14d487481"
  },
  {
    "url": "assets/css/0.styles.9c3985f9.css",
    "revision": "bd8bacdabe3db36c37ead3a2a83d65f2"
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
    "url": "assets/js/12.b09a6d0b.js",
    "revision": "e74de900f56beac5a7b164c8aaf5c0a0"
  },
  {
    "url": "assets/js/13.3f35f1f4.js",
    "revision": "98a392e22a9edecb1ac786ab3a86a85e"
  },
  {
    "url": "assets/js/14.07c6c4ed.js",
    "revision": "d9cca3919b5459e4c819d7616b7960be"
  },
  {
    "url": "assets/js/15.2ad6b3fb.js",
    "revision": "9fa572d5182bb29deb41678813ba3632"
  },
  {
    "url": "assets/js/16.16db0cba.js",
    "revision": "ca523377a19211eb9c6170ff7fee6c41"
  },
  {
    "url": "assets/js/17.05e6aa8b.js",
    "revision": "eb712bac1fa4b6798fa2e423e1020d1e"
  },
  {
    "url": "assets/js/18.cb6d19b5.js",
    "revision": "c16931fe0341470338d556db6ac00a0d"
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
    "url": "assets/js/app.93ecc9d6.js",
    "revision": "b4d0b6c8ebe761d55aeda9f6f1d0699e"
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
    "revision": "1d1ffebdcb4b9a6ee05096bb172ac984"
  },
  {
    "url": "categories/test/index.html",
    "revision": "39a411bdce54d889aad387437b5632fe"
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
    "revision": "af8d937a3975c90a5b6b4bfd2cfd58b8"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/index.html",
    "revision": "3a60e2de37c95f73261c6a62fbb274de"
  },
  {
    "url": "tag/test/index.html",
    "revision": "0f811f1de16f60d54b1253bf1deb0b9a"
  },
  {
    "url": "test/test1.html",
    "revision": "54ab529d3e9a6802671ab40bfbe74263"
  },
  {
    "url": "test/test2.html",
    "revision": "2ad8c9cd6614abaaced8b092237aa7b1"
  },
  {
    "url": "theme-reco/api.html",
    "revision": "fb754cffb9b34f9ec2b16fc16a0c1cf5"
  },
  {
    "url": "theme-reco/index.html",
    "revision": "703cb7d3cc619f67abbfee94731f24b2"
  },
  {
    "url": "theme-reco/plugin.html",
    "revision": "2bf10b5a5302c99b75eed1f41f447483"
  },
  {
    "url": "theme-reco/theme.html",
    "revision": "98bef29f6f3f0ed33e8b54dd0a5978e9"
  },
  {
    "url": "timeline/index.html",
    "revision": "1cb008cb95031af3cf2ad96ecce08a60"
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
