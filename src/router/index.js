
//createRouters是用来创建router实例对象
//createWebHistory是用来创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //这里的routes是用来配置path和component对应关系
  routes: [
    // 首页
    {
      path:'/',
      component:Layout,
      children:[
          {
            //home
            path:'',//默认二级路由可将路径设置为空即可
            component:Home
          },
          {
            //分类
            path: 'Category',
            component: Category
          }
      ]
    },
    //登录页
    {
      path: '/login',
      component: Login
    }
  ],
})

export default router
