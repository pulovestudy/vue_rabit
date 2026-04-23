
import httpInstance from '@/utils/http'
import request from '@/utils/request'

export function getCategoryAPI(id){
  return httpInstance({
    url:'/category',
    params:{
      id
    }
  })
}

//封装二级分类里面的面包屑接口(这个接口有问题)
export const  getCategoryFilterAPI =(id)=> {
  return request({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}

/**
 * @description: 获取导航数据
 * @data { 
 * 由于这是一个post请求，因此需要传入参数
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return request({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}