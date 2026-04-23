<script setup>
import homeBanner from '@/views/Home/components/homeBanner.vue'
import homeNew from '@/views/Home/components/homeNew.vue'
import homeHot from '@/views/Home/components/homeHot.vue'
import homeCategory from '@/views/Home/components/homeCategory.vue'
import homeProduct from '@/views/Home/components/homeProduct.vue'
import homePanel from './components/homePanel.vue'
import HomePanel from './components/homePanel.vue'
</script>

<template>
  <div class="container">
    <homeCategory />
    <homeBanner />
  </div>
  <homeNew />
    <homeHot />
    <homeProduct />

</template>
