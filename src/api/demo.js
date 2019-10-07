import * as api from './api';

/**
 * 接口說明
 *
 * @author xuehua_li
 * @created 2019-10-05 10:49:02
 * @modified
 * @param {Number} [demo=0] 接口參數說明
 *
 * @static
 * @category Lang
 * @example
 * const demo = 1
 */
const api_demo = (demo = 0) => {
  return api.request
    .get(api.url.demo, { params: demo })
    .then(res => {
      // do something
      return res;
    })
    .catch();
};

export default api_demo;
