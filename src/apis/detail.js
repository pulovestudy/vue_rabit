import request from '@/utils/request'

export const getDetail=(id)=>{
  return request({
    url:'/goods',
    params:{
      id
    }
  })
}

//1代表24小时热榜
//2代表周热榜
export const getHotGoodsAPI=({id,type,limit=3})=>{
  return request({
    url:'/goods/hot',
    params:{
      id,
      type,
      limit
    }
  })
}