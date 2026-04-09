<script setup>
// 按需引入 Vue Router 的 RouterLink 组件（Vue3 + setup 语法需显式引入）
import { RouterLink } from 'vue-router'
import { getCategoryAPI } from '@/apis/layout'
// 【修改1】新增引入 onMounted 生命周期钩子（用于组件挂载后执行接口请求）
import { ref, onMounted } from "vue" 

const categoryList = ref([])
const getCategory = async () => {  //声明了函数
    const res = await getCategoryAPI()
    categoryList.value = res.result
}

// 【修改3】核心：调用异步函数（组件挂载后执行，符合Vue最佳实践）
onMounted(() => {
  getCategory() //调用函数
})
</script>

<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>
      <ul class="app-header-nav">
        <li class="home" v-for="item in categoryList" :key="item.id">
          <RouterLink to="/">{{ item.name }}</RouterLink>
        </li>
      </ul>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <!-- 头部购物车 -->
    </div>
  </header>
</template>

<style scoped lang='scss'>
// 补充缺失的 SCSS 变量（按需调整颜色值）
$xtxColor: #27ba9b; // 主色（小兔鲜品牌色）
$helpColor: #e26237; // 购物车角标警示色

.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }

  .app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;
  
    li {
      margin-right: 40px;
      width: 38px;
      text-align: center;
  
      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;
  
        &:hover {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }
  
      .active {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
  }

  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
      // 补充：去掉 input 默认边框和背景，适配样式
      border: none;
      outline: none;
      background: transparent;
    }
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>