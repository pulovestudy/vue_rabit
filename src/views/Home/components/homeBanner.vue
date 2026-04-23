<script setup>
//接口有问题，轮播图内容暂时无法显示
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px"><!--外层的盒子-->
      <el-carousel-item v-for="item in 4" :key="item"><!--里层的图片组件-->
        <img src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/6d202d8e-bb47-4f92-9523-f32ab65754f4.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>