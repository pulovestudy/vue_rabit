

//引入封装好的实例
import httpInstance from "@/utils/http"


//获取首页分类的接口,定义一个函数进行返回
export function getCategoryAPI(){
  return httpInstance({
    //里面的是配置请求需要的参数，看文档，本次是一个get请求
    url: '/home/category/head'
  })
}