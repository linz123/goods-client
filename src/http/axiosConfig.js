import axios from 'axios'
import {notification, message} from "ant-design-vue";

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  console.log('response', response);
  if (response.data.code === 200) {
    return Promise.resolve(response.data);
  } else {
    message.info(response.data.message);
  }
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  console.log('error', error);
  notification.open({
    message: '错误',
    description: error.message,
  });

  return Promise.reject(error);
});


export {axios};
