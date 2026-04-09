import httpInstance from "@/utils/http"
//获取首页分类的接口,定义一个函数进行返回
export function getCategoryAPI(){
  return httpInstance({
    url: '/home/category/head'
  })
}