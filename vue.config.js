// 版本號環境變量
process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // 全局scss變量
        data: '@import "~@/assets/css/variables.scss";'
      }
    },
    modules: true // 全局使用css modules
  },
  transpileDependencies: [] // 需要 babel處理的依賴項
};
