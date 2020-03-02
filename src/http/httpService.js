import axios from 'axios'
import qs from 'qs'
import { Toast, Indicator } from 'mint-ui'
import APIConfig from './APIConfig'

//实例化axios
const Axios = axios.create({
  // baseURL: APIConfig.BASE_URL,
  headers: { 'Content-Type': 'application/json;charset=UTF-8'},
  timeout: 10000,
  withCredentials: false,
  responseType: 'json'
})
// 添加请求拦截器
Axios.interceptors.request.use(
  config => {
    // 发送请求之前做一些处理
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    // 请求异常时做一些处理
    return Promise.reject(error)
  }
);
// 添加响应拦截器
Axios.interceptors.response.use(
  response => {
    Indicator.close()
    // let data;
    // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
    // if(response.data === undefined){
    //   data = response.request.responseText
    // } else {
    //   data = response.data
    // }
    // if (response.data && !response.data.success) {
    //   return Promise.reject(response.data.error.message);
    // }
    // return data;
    return response;
  },
  error => {
    Indicator.close()
    // if (error.response) {
    //   switch (error.response.status) {
    //     case 404:
    //       error.message = '请求地址出错404'
    //       break
    //     case 500:
    //       error.message = '服务器内部错误500'
    //       break
    //   }
    // }
    // Toast({
    //   message: error.message,
    //   position: 'bottom',
    //   duration: 1000
    // });
    return Promise.reject(error);
  }
)

export default {
  get (httpConfig) {
    if (!httpConfig) {
      return Promise.reject({
        success: false,
        message: 'no http config',
        code: 'NO_HTTP_CONFIG'
      });
    }
    return Axios(httpConfig).then(
      result => {
        var resultData = result.data;
        return resultData;
      }
    ).catch(
      error => {
        return Promise.reject(error);
      }
    )
  },
  post (httpConfig) {
    if (!httpConfig) {
      return Promise.reject({
        success: false,
        message: 'no http config',
        code: 'NO_HTTP_CONFIG'
      });
    }
    return Axios(httpConfig).then(
      result => {
        var resultData = result.data;
        if (typeof(resultData) == "string") {
          resultData = JSON.parse(resultData)
        }
        return resultData;
      }
    ).catch(
      error => {
        return Promise.reject(error);
      }
    )
  }
}

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
// export default {
//   install: function(Vue, Option) {
//     Object.defineProperty(Vue.prototype, "NetWorks", { value: Axios });
//   }
// };
