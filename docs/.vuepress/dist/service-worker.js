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
    "revision": "25477bbc93c8e222c081e7108cfa02c9"
  },
  {
    "url": "assets/css/0.styles.a093d0c8.css",
    "revision": "de40c738aa27de9bf3d8f0b26df857f6"
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
    "url": "assets/js/13.638120fb.js",
    "revision": "eb39afcc3b10565481a6047cd4b56b13"
  },
  {
    "url": "assets/js/14.2b99cbbe.js",
    "revision": "7db5782f8fbae0faf76763078910cc6d"
  },
  {
    "url": "assets/js/15.2ad6b3fb.js",
    "revision": "9fa572d5182bb29deb41678813ba3632"
  },
  {
    "url": "assets/js/16.4c3fc987.js",
    "revision": "a97f170c4ad4538074a19de2d815afe4"
  },
  {
    "url": "assets/js/17.17025725.js",
    "revision": "5016e5ddf5f0ee16e9e86c10bfde64c7"
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
    "url": "assets/js/app.f895b332.js",
    "revision": "c229cb87d583d8cdc36b73e9028d0da0"
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
    "revision": "d314f955327a0551ff1135deec113ce3"
  },
  {
    "url": "categories/test/index.html",
    "revision": "1dbfcd63fc1d9116cb9c381aa4360497"
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
    "revision": "841544bdc51a07526c8e16dc18a186f4"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/index.html",
    "revision": "38dc62b4d8ae053e08399abfde4a6877"
  },
  {
    "url": "tag/test/index.html",
    "revision": "cac101c97244b25fbddaee2458ea6cd7"
  },
  {
    "url": "test/test1.html",
    "revision": "bce8be7f3c87342b5c9c126c9c1c0f1c"
  },
  {
    "url": "test/test2.html",
    "revision": "8376899240c4f1af3e8f04aeb30eebcf"
  },
  {
    "url": "theme-reco/api.html",
    "revision": "5b5a768d42d6130bf6226ee289dd654c"
  },
  {
    "url": "theme-reco/index.html",
    "revision": "1e580adec365c7c83683aad484232fd0"
  },
  {
    "url": "theme-reco/plugin.html",
    "revision": "fdd909b6e7c720d5ea0733f505565533"
  },
  {
    "url": "theme-reco/theme.html",
    "revision": "dd30f60c0a5a9179495482eac0a3145c"
  },
  {
    "url": "timeline/index.html",
    "revision": "582416a94872532f23a9e6605ae98b5f"
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
