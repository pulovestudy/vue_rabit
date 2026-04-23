

//引入封装好的实例
import httpInstance from "@/utils/http"


//获取首页分类的接口,定义一个函数进行返回
export function getBannerAPI(params={}) {
  //由于默认为1，商品为2 需要进行解构赋值
  const {distributionSite='1'}=params
  return httpInstance({
    //里面的是配置请求需要的参数，看文档，本次是一个get请求
    url: '/home/banner',
    params:{
      distributionSite
    }
  })
}

//获取首页新鲜好物的接口
export function getNewAPI() {
  return httpInstance({
    //里面的是配置请求需要的参数，看文档，本次是一个get请求
    url: '/home/new'
  })
}

//获取首页人气推荐的接口
export function getHotAPI(){
  return httpInstance({
    //里面的是配置请求需要的参数，看文档，本次是一个get请求
    url: '/home/hot'
  })
}


//获取首页产品列表的接口
export function getGoodsAPI() {
  return httpInstance({
    //里面的是配置请求需要的参数，看文档，本次是一个get请求
    url: '/home/goods'
  })
}