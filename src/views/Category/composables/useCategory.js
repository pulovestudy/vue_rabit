//封装分类相关业务代码

import { ref, onMounted } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'//导入方法
import { getCategoryAPI } from '@/apis/category'
//----------------获取分类数据------------------
export function useCategory(){
  const categoryData = ref({})
  const router = useRoute()
  const getCategory = async (id = router.params.id) => {
    //由于组件内部需要获取参数，因此使用useRouter方法来获得参数
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(() => getCategory())

  //当路由参数变化的时候，可以把分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    //如果仅仅调用getCategory()还不够，因为router.params.id有滞后性
    //我们需要：使用最新的路由参数请求最新的分类数据，可以使用to这个参数
    getCategory(to.params.id)
  })

  return {
    categoryData
  }
}