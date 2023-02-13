<template>
  <div>
    <header-main></header-main>
    <h2>국내 모텔/호텔 정보</h2>
  </div>
  <!-- <slider-banner></slider-banner> -->
  <quick-category></quick-category>
  <live-commerce></live-commerce>
  <top-place></top-place>
  <weeky-top></weeky-top>
</template>

<script lang="ts">
//css
import "@/css/dai.css" 
import "@/css/font.css"

//Header 
import HeaderMain from "@/views/common/header/HeaderMain.vue";
// import SliderBanner from "@/views/common/components/SliderBanner.vue";
import QuickCategory from "@/views/common/components/QuickCategory.vue";
import LiveCommerce from "@/views/common/components/LiveCommerce.vue";
import TopPlace from "@/views/common/components/TopPlace.vue";
import WeeklyTop from "@/views/common/components/WeeklyTop.vue";


export default {
  name: "DaiMain",
  components: {
    "header-main": HeaderMain,
    // "slider-banner": SliderBanner,
    "quick-category": QuickCategory,
    "live-commerce": LiveCommerce,
    "top-place": TopPlace,
    "weeky-top": WeeklyTop
  }
};
</script>