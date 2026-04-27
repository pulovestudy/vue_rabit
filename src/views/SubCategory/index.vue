<script setup>
import {getCategoryFilterAPI,getSubCategoryAPI} from '@/apis/category'
import {ref,onMounted} from 'vue'
import { useRoute } from 'vue-router'
import GoodsItem from '../Home/components/GoodsItem.vue'
const route=useRoute()


//获取面包屑导航数据
const categoryDate=ref({})
const getCategoryDate=async()=>{
  const res= await getCategoryFilterAPI(route.params.id)
  categoryDate.value=res.result
}
onMounted(()=>getCategoryDate())


//获取基础列表数据
const goodList=ref([])
const reqData=ref({
   categoryId: route.params.id,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime'
})
const getGoodList=async()=>{
  const res= await getSubCategoryAPI(reqData.value)
  goodList.value=res.result.items
}
onMounted(()=>getGoodList())


//tabChange回调函数
const tabChange=()=>{
  reqData.page=1
  getGoodList()
}

//加载更多
const load=async()=>{
  const disabld=ref(false)
  //获取下一页数据
  reqData.value.page++
  const res=await getSubCategoryAPI(reqData.value)
  //数据赋值和拼接
  goodList.value=[...goodList.value,...res.result.items]
  //加载完毕结束监听
  if(res.reqData.items.length===0)
  disabld.value=true
}


</script>

<template>
  <div class="container ">
   
     <!-- 面包屑 -->
    <div class="bread-container">
     <div class="breadcrumb" style="display: flex; gap: 6px; color: #666;">
       <router-link :to="`/detail/${item.id }`" class="breadcrumb-item">首页</router-link>
       <span>&gt;</span>
       <router-link :to="`/category/${categoryDate.parentID}`" class="breadcrumb-item">
         {{ categoryDate.parentName }}
       </router-link>
       <span>&gt;</span>
       <span class="breadcrumb-item" style="color: #333; font-weight: 500;">{{ categoryDate.name }}</span>
     </div>
    </div>

    
    <div class="sub-container">
      <!--筛选-->
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新" name="publishTime"></el-tab-pane>
        <el-tab-pane label="人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论" name="evaluateNum"></el-tab-pane>
      </el-tabs>

      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabld">
         <!-- 商品列表-->
          <GoodsItem v-for="goods in goodList" :goods="goods" :key="goods.id"/>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>