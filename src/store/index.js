import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// modules
import demo from './modules/demo';

export default new Vuex.Store({
  modules: {
    // vuex modules
    demo
  },
  // 在開發模式中，如果不是通過mutations改變state則報錯
  strict: process.env.NODE_ENV !== 'production'
});
