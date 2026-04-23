//axios基础封装
import axios from 'axios'


//生成实例
const request = axios.create({
  //1.根域名（接口基地址）
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  //2.超时时间
  timeout: 5000,

})


//拦截器
// 3.axios请求拦截器
request.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// 4.axios响应式拦截器
request.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})

export default request