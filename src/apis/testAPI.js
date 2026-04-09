//导入实例 
import httpInstance from '@/utils/http'

export function getCategory()
{
  return httpInstance({
    //好像说什么axios默认发送get请求
    url:'home/category/head'
  })
}