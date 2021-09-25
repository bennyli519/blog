const pluginConfig = require('./config/pluginConfig.js');
const headConfig = require('./config/headConfig.js');
const themeConfig = require('./config/themeConfig');
module.exports = {
  base: '/blog/',
  title: "Benny's Blog",
  description: "每一个不曾起舞的日子，都是对生命的辜负！",
  // dest: "public",
  head: headConfig,
  theme: "reco",
  themeConfig,
  markdown: {
    // 为每行代码增加行号
    lineNumbers: true,
    // anchor: {
    //   permalink: true, permalinkBefore: true, permalinkSymbol: '🌙'
    // },
  },
  // 插件
  plugins: pluginConfig,
}