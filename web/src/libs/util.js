import axios from 'axios';

let util = {};

const ajaxUrl = process.env.NODE_ENV === 'development'
  // 测试环境api接口
  ? 'http://localhost:3000/v1'
  // 线上环境api接口
  : '/civil/servant';

util.ajax = axios.create({
  baseURL: ajaxUrl,
  timeout: 30000
});

util.api = ajaxUrl;
util.oauthUrl = ajaxUrl;

export default util;
