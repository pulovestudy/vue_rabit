<script setup>
// 定义props（名字叫 goods）即要接受一个参数，在子组件里面称为goods
//对于父组件，给子组件传了一个good商品
defineProps({
  goods: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <RouterLink to="/" class="goods-item">
    <!-- 必须用 goods.xxx  不是 good.xxx！！！ -->
    <img v-img-lazy="goods.picture" alt="" />
    <p class="name ellipsis">{{ goods.name }}</p>
    <p class="desc ellipsis">{{ goods.desc }}</p>
    <p class="price">¥{{ goods.price }}</p>
  </RouterLink>
</template>

<style lang="scss" scoped>
.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  transition: all 0.5s;
}
.goods-item:hover {
  transform: translate3d(0, -3px, 0);
  box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
}
.goods-item img {
  width: 160px;
  height: 160px;
}
.goods-item p {
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
  color: #cf4444;
  font-size: 20px;
}
</style>