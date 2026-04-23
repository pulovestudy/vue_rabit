<script setup>
//引入nav、header、footer这三个组件
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
//引入吸顶导航
import LayoutFixed from './components/LayoutFixed.vue'


//触发获取导航列表的action
import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';

const categoryStore=useCategoryStore()

onMounted(()=>categoryStore.getCategory())


</script>



<template>
  <!--渲染吸顶导航-->
  <LayoutFixed />

<!--渲染nav-->
  <LayoutNav />

  <LayoutHeader />

  <!--二级路由出口-->
  <!--方案一添加key 破坏复用机制 强制销毁重建-->
  <!-- <RouterView :key="$route.fullPath" /> -->
<RouterView  />

  <LayoutFooter />
</template>