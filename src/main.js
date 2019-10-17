import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './filters';

// 全局信息
window.appInfo = {
  version: process.env.VUE_APP_VERSION
};

// 第三方utils
// import dayjs from 'dayjs';
// import { debounce, throttle } from 'lodash';
import log from '@/utils/log';

Vue.prototype.log = log;
Vue.prototype.logInfo = log.info; // 常用封裝

Vue.config.productionTip = process.env.NODE_ENV === 'production' ? false : true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
