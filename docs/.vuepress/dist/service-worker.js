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
    "revision": "15723b5306673ac254c88eed429f0e3e"
  },
  {
    "url": "algorithm/array/binary-search.html",
    "revision": "cd03046ccea521d5060b19283186efe3"
  },
  {
    "url": "algorithm/array/generate-matrix.html",
    "revision": "1a43b5c15adf2a23c72e7aae56341019"
  },
  {
    "url": "algorithm/array/minsub-array-len.html",
    "revision": "4a1e08034ae7786f51855b91b6d71aeb"
  },
  {
    "url": "algorithm/array/my-sqrt.html",
    "revision": "b1a873ec940b7aa19f268e78366b03b1"
  },
  {
    "url": "algorithm/array/perfact-sqrt.html",
    "revision": "3411bd9c31126295ee3f66c8fb603848"
  },
  {
    "url": "algorithm/array/remove-duplicates.html",
    "revision": "8bce12d8b408a8e13d17d586fc5e5bbd"
  },
  {
    "url": "algorithm/array/remove-element.html",
    "revision": "56d5e3552bd8b3ec8fc4d7e1019d269b"
  },
  {
    "url": "algorithm/array/search-insert.html",
    "revision": "1852b72eabe476e5c2582d2a9098778e"
  },
  {
    "url": "algorithm/array/search-range.html",
    "revision": "5d44e974c4b4a1baec70040ae1f4b6e5"
  },
  {
    "url": "algorithm/array/sorted-squares.html",
    "revision": "5291e478d75e036529a88b1669b53005"
  },
  {
    "url": "algorithm/linkList/test.html",
    "revision": "9342729571d65fcbd13f093b90e0667d"
  },
  {
    "url": "assets/css/0.styles.2643964b.css",
    "revision": "70b275419ab1e765ac32ad17b2a10405"
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
    "url": "assets/js/1.a4c7503a.js",
    "revision": "c0d2520cedee138ffbd201451f19b420"
  },
  {
    "url": "assets/js/10.005d5a4e.js",
    "revision": "753f5f0956a80d1e9089bf13270b9dc9"
  },
  {
    "url": "assets/js/11.454b0000.js",
    "revision": "8cf6965ab158401987843cd747e01aae"
  },
  {
    "url": "assets/js/12.b9998fc6.js",
    "revision": "17ec5243789c471aaf39c7d59eaa5eab"
  },
  {
    "url": "assets/js/13.b0e1af87.js",
    "revision": "25e9144ae67f3dd63da3ecf8f38813a5"
  },
  {
    "url": "assets/js/14.e2919619.js",
    "revision": "240bee0bc951c7229975986e117869dc"
  },
  {
    "url": "assets/js/15.170cb99f.js",
    "revision": "5d2ef66298b2a8378345dd372b732897"
  },
  {
    "url": "assets/js/16.f3aca33d.js",
    "revision": "14db1077c383b290f26ffe8136ba3d65"
  },
  {
    "url": "assets/js/17.02071879.js",
    "revision": "b6f555e7d7d258d5b9ebb34d3586e772"
  },
  {
    "url": "assets/js/18.fe613864.js",
    "revision": "c5f621dc9c62bfb41e3273e2d55b2158"
  },
  {
    "url": "assets/js/19.0a71cbc9.js",
    "revision": "b197811c716e0b05f55e8c85fd9fc0d2"
  },
  {
    "url": "assets/js/20.9f88fe83.js",
    "revision": "5e9139ffd07ca1417ac5dafb9070e28e"
  },
  {
    "url": "assets/js/21.3d0473a8.js",
    "revision": "c940f104e8384e11909842d7021fb6d6"
  },
  {
    "url": "assets/js/22.b4d296d6.js",
    "revision": "422bee9e5f20d7b7df5c253ed93a07d4"
  },
  {
    "url": "assets/js/23.68fa681f.js",
    "revision": "bf0ea987fb74f975b5b30958573854f5"
  },
  {
    "url": "assets/js/24.7cc5a4f8.js",
    "revision": "37897b4fe88c2c2a57047a1b676ddbce"
  },
  {
    "url": "assets/js/25.bb3d3ba6.js",
    "revision": "34cc817345bf7fb83652f3dcbff2da7f"
  },
  {
    "url": "assets/js/4.56229b0b.js",
    "revision": "c9a01bdf53e643c373a27c8f2969064b"
  },
  {
    "url": "assets/js/5.aa32f7a6.js",
    "revision": "44c7b46c56ecb749ee2f61b9c3b4536d"
  },
  {
    "url": "assets/js/6.e001a733.js",
    "revision": "2031e599da1eed3817e9df3f46739d2c"
  },
  {
    "url": "assets/js/7.2e0451bd.js",
    "revision": "b79a8be85cad6a3eb823f97d7f41b84f"
  },
  {
    "url": "assets/js/8.5adc152f.js",
    "revision": "f53b6e3ba54486c7d23a0a3245cbe616"
  },
  {
    "url": "assets/js/9.2250c63b.js",
    "revision": "090591ee569659e8b2a50aa9a785f656"
  },
  {
    "url": "assets/js/app.02e100db.js",
    "revision": "d6bc5b1cddef438561658c05bc75ee31"
  },
  {
    "url": "assets/js/vendors~flowchart.ebb43286.js",
    "revision": "b3fb589726b86c73489a57c7b256cdf3"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "categories/index.html",
    "revision": "8345aebd6e5d9ca4ca778306a0f1989c"
  },
  {
    "url": "categories/test/index.html",
    "revision": "0199241d522c1f582c2f940c95f1c46c"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "516519b76ffbb97fa7b2d96af6631b3b"
  },
  {
    "url": "categories/算法/page/2/index.html",
    "revision": "ddf21aeef095d542459127d4029fdf5f"
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
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/index.html",
    "revision": "056376a49708a11444d22414d89fbc80"
  },
  {
    "url": "tag/test/index.html",
    "revision": "abf05cf364cabfc0cfff8d4fc8924ce1"
  },
  {
    "url": "tag/二分法/index.html",
    "revision": "deba57243668dcdfe522d69b838cf80b"
  },
  {
    "url": "tag/双指针/index.html",
    "revision": "247fca83f29c54c61ebe09da3d3caa5b"
  },
  {
    "url": "tag/滑动窗口/index.html",
    "revision": "0bcebbf9c8da21f7226a040a2f60ec46"
  },
  {
    "url": "tag/螺旋矩阵/index.html",
    "revision": "74d7c130c784b700b9c5d59280f341e5"
  },
  {
    "url": "tag/链表/index.html",
    "revision": "c9674a29b535b4f64129bc03f1e95e54"
  },
  {
    "url": "test/test1.html",
    "revision": "ce18adf4ffa7eb89b9a6cc8c14b36d3f"
  },
  {
    "url": "test/test2.html",
    "revision": "feb42a4c9441d5ac3b0babcb659ee616"
  },
  {
    "url": "timeline/index.html",
    "revision": "97e31f776a8b13cbbbe7838f31865e62"
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
