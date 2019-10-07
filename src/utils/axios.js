import axios from 'axios';
import qs from 'qs';
import log from './log';

const $axios = axios.create({
  baseURL: process.envVUE_APP_API_URL,

  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Accept: 'application/json'
  },
  validateStatus(status) {
    return status === 200;
  }
});

// 表單提交
$axios.formPost = function(url, data = {}, config = {}) {
  config.headers = config.headers || {};
  config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/x-www-form-urlencoded';
  return $axios.post(url, qs.stringify(data), config);
};

// 請求攔截器
$axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 返回攔截器
$axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    log.error('API ERROR:' + error);
    return Promise.reject(error);
  }
);

export default $axios;
