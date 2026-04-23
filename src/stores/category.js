

import { ref} from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'


//外层大函数
export const useCategoryStore = defineStore('category', () => {
  //state 导航列表数据
  const categoryList = ref([])

  //action 获取导航数据的方法
  const getCategory = async () => { 
    const res = await getCategoryAPI()
    //把响应的数据赋值给categoryList
    categoryList.value = res.result
  }

  return {
    categoryList,
    getCategory
  }

})
