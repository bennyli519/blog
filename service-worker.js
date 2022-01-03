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
    "revision": "e0ac9147658b235447bbac01d16bf75b"
  },
  {
    "url": "algorithm/array/binary-search.html",
    "revision": "058bbff22c24b1c38b5bd4c885d90478"
  },
  {
    "url": "algorithm/array/generate-matrix.html",
    "revision": "48ff0a50f21d07a5aa216097b49847c6"
  },
  {
    "url": "algorithm/array/minsub-array-len.html",
    "revision": "6238c6fd22773156cbfb54d1d1434049"
  },
  {
    "url": "algorithm/array/my-sqrt.html",
    "revision": "ca367b8dd70f4740acedae2d4cb6cd2a"
  },
  {
    "url": "algorithm/array/perfact-sqrt.html",
    "revision": "3da9c4eb94cc9d364381965965321453"
  },
  {
    "url": "algorithm/array/remove-duplicates.html",
    "revision": "dc83b6db0faac25737d81e3416d5b0a5"
  },
  {
    "url": "algorithm/array/remove-element.html",
    "revision": "25e370ef7cd23fc5bb18bbb978885dcf"
  },
  {
    "url": "algorithm/array/search-insert.html",
    "revision": "028391c3c69f70c21fae9a439c3232af"
  },
  {
    "url": "algorithm/array/search-range.html",
    "revision": "fad44b97f8a1b7734fbfd1e80d48fad4"
  },
  {
    "url": "algorithm/array/sorted-squares.html",
    "revision": "a16bcbdc33a44820be852be5543c3b59"
  },
  {
    "url": "algorithm/linkList/mylink-list.html",
    "revision": "e64b13d9fba33c3062c1fa0aa1098803"
  },
  {
    "url": "algorithm/linkList/reverse-list.html",
    "revision": "e1de354252c6c953dd3cc4d7a44fb229"
  },
  {
    "url": "assets/css/0.styles.2643964b.css",
    "revision": "70b275419ab1e765ac32ad17b2a10405"
  },
  {
    "url": "assets/img/1.e91853e9.gif",
    "revision": "e91853e9a21fd017f1ac81f17ad62c67"
  },
  {
    "url": "assets/img/2.ec35354e.png",
    "revision": "ec35354e6600941110140836ba79bf2c"
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
    "url": "assets/js/1.506bad70.js",
    "revision": "e2e7e855c51524e2f6678dc2b06b933d"
  },
  {
    "url": "assets/js/10.99d5f1e6.js",
    "revision": "6228f745c58cebd98fe1e253bdcddf92"
  },
  {
    "url": "assets/js/11.47e0f713.js",
    "revision": "6af7619f5aade7700ce97ca868e05e8e"
  },
  {
    "url": "assets/js/12.eccff9d5.js",
    "revision": "13f3a5df24cf06e14d5b017a8e9a1808"
  },
  {
    "url": "assets/js/13.8f13ccc5.js",
    "revision": "28f21b89e0de79d65cc1d9066d8cc04b"
  },
  {
    "url": "assets/js/14.84c1bd86.js",
    "revision": "1773dedcffa0f649774571e67dae556d"
  },
  {
    "url": "assets/js/15.d4eb85f8.js",
    "revision": "d176600c74512a7542596a1c5f265797"
  },
  {
    "url": "assets/js/16.899fad2c.js",
    "revision": "49e1cebfe2f80a168f4a3925b172b5c9"
  },
  {
    "url": "assets/js/17.d0ce165a.js",
    "revision": "5c517c33632975650131a983797fe9e9"
  },
  {
    "url": "assets/js/18.d07f0e1a.js",
    "revision": "fd4430d65bc20462c152ecd020f4d9e4"
  },
  {
    "url": "assets/js/19.5e9cee36.js",
    "revision": "838b08b666d0e76a0bd3e468dafbce32"
  },
  {
    "url": "assets/js/20.86392ae8.js",
    "revision": "5976598946da1cc7090d0c5bd475c9dc"
  },
  {
    "url": "assets/js/21.ca6b5dd8.js",
    "revision": "01f334aef8dfd628b4bc061a8f102d8f"
  },
  {
    "url": "assets/js/22.a40d0851.js",
    "revision": "2af33f63cdab18a2d124362221fb8bec"
  },
  {
    "url": "assets/js/23.d3eed201.js",
    "revision": "1a5966599f34a99b4798e908617b1b3d"
  },
  {
    "url": "assets/js/24.9b66f4a9.js",
    "revision": "802c23217a886ee95ce2abf1ae9120d0"
  },
  {
    "url": "assets/js/25.b4c27b8d.js",
    "revision": "eb427436a054f088a6ab2eb3a6f38b94"
  },
  {
    "url": "assets/js/4.f208496d.js",
    "revision": "2d00adc076abc948b8cb360dad2a0645"
  },
  {
    "url": "assets/js/5.d9f956ed.js",
    "revision": "1633810a7a72f0136e7881c6cfdc60ec"
  },
  {
    "url": "assets/js/6.396d833b.js",
    "revision": "07f47ec7abc3453055cb61becf7548da"
  },
  {
    "url": "assets/js/7.f6c82df5.js",
    "revision": "b83eb6900914595a14a8b1fd741a1627"
  },
  {
    "url": "assets/js/8.eb81f23c.js",
    "revision": "648199d09aef63ef7a8bd93eaf598d4d"
  },
  {
    "url": "assets/js/9.e156cd51.js",
    "revision": "ac84252bad0593e7b949bdb96b2786f4"
  },
  {
    "url": "assets/js/app.59ebddc5.js",
    "revision": "9feae2f74f2188bd99d184bd0a1a1bc1"
  },
  {
    "url": "assets/js/vendors~flowchart.81ba3858.js",
    "revision": "fa151b1786f60a9b23c69ffafc8cbd1a"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "categories/index.html",
    "revision": "018a59ffb22b9ca453942cf4277a274c"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "b9a3ba290d89dd0185c4b3f614f7e45d"
  },
  {
    "url": "categories/算法/page/2/index.html",
    "revision": "95214ed0175cd0c54d414a89c879e266"
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
    "revision": "21391c7d75ab8d3525fa7ed2d31711ee"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/index.html",
    "revision": "22f4be474fa54e05bbe8413c8628e6c1"
  },
  {
    "url": "tag/二分法/index.html",
    "revision": "86f74501d2b175c93c8fac733a136032"
  },
  {
    "url": "tag/双指针/index.html",
    "revision": "a0f9bd1754c40cbc643a3fad0ff489a2"
  },
  {
    "url": "tag/滑动窗口/index.html",
    "revision": "b20ffffd736730fc454f0902ef6c3b57"
  },
  {
    "url": "tag/螺旋矩阵/index.html",
    "revision": "f138d195800dc25e09fdbc136d9a96a5"
  },
  {
    "url": "tag/链表/index.html",
    "revision": "43abb4e426e4d610fafc0ddf255c803a"
  },
  {
    "url": "timeline/index.html",
    "revision": "a7b285301bf5f9724ee353ede2bc81c6"
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
