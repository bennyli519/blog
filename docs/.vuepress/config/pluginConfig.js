/*
 * @Author: Benny
 * @Date: 2021-12-24 00:19:57
 * @Description: 
 * @LastEditTime: 2022-01-03 00:25:09
 */
const secretKeyConfig = require('./secretKeyConfig.js');
module.exports = {
  "vuepress-plugin-auto-sidebar": {},
  // 进度条
  '@vuepress/nprogress': true,
  // Service Worker 的配置
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用!",
      buttonText: "刷新"
    }
  },
  // 谷歌分析
  // '@vuepress/google-analytics': {
  //   ga: secretKeyConfig.googleAnalytics.ga
  // },
  // 图片放大
  '@vuepress/medium-zoom': {
    selector: '.content__default img',
    // medium-zoom options here
    // See: https://github.com/francoischalifour/medium-zoom#options
    options: {
      margin: 16
    },
  },
  // 流程图
  'flowchart': true,
  'ribbon': {
    size: 66,     // 彩带的宽度，默认为 90
    opacity: 0.3, // 彩带的不透明度，默认为 0.3
    zIndex: -1    // 彩带的 z-index 属性，默认为 -1
  },
  // PDF
  'vuepress-plugin-export': true,
  // 动态标题
  'dynamic-title': {
    showIcon: "/favicon.ico",
    showText: "(/≧▽≦/)咦！又好了！",
    hideIcon: "/failure.ico",
    hideText: "(●—●)喔哟，崩溃啦！",
    recoverTime: 2000
  },
  // 标签加强
  'vuepress-plugin-boxx': true,
  // 代码复制弹窗插件
  'vuepress-plugin-nuggets-style-copy': {
    copyText: "复制",
    tip: {
      content: "复制成功!"
    }
  },
  'thirdparty-search': {
    thirdparty: [
      // 可选，默认 []
      {
        title: "在谷歌中搜索",
        frontUrl: "https://www.google.com.hk/search?q="
      },
      {
        title: "在百度中搜索", // 在搜索结果显示的文字
        frontUrl: "https://www.baidu.com/s?wd=", // 搜索链接的前面部分
        behindUrl: "" // 搜索链接的后面部分，可选，默认 ''
      },
      {
        title: "在360中搜索",
        frontUrl: "https://www.so.com/s?q="
      }
    ]
  },
  // 音乐插件 https://github.com/moefyit/vuepress-plugin-meting

  '@vuepress-reco/vuepress-plugin-kan-ban-niang': {
    // theme: ['whiteCat', 'blackCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
    theme: ['haruto'],
    clean: false,
    // width: 100,
    // height: 400,
    message: {
      welcome: '欢迎进来的小伙伴 🎉🎉🎉',
      home: '心里的花，我想要带你回家。',
      theme: '好吧，希望你能喜欢我的其他小伙伴。',
      close: '你知道我喜欢吃什么吗？痴痴地望着你。'
    },
    // btnStyle: {
    //     left: '300px',
    //     bottom: '150px',
    // },
    // messageStyle: {
    //     left: '120px',
    //     bottom: '440px',
    // },
    // modelStyle: {
    //     left: '50px',
    //     bottom: '70px',
    // },
  },
};
