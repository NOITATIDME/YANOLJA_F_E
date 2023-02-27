<template>
  <header-nav></header-nav>
  <h2>구글맵 하는 중</h2>
  <googlemap-view></googlemap-view>
</template>


<script lang="ts">
import "@/main.ts"
// import HeaderMain from "@/views/common/header/HeaderMain.vue";
import HeaderNav from "@/views/domestic/dai/components/HeaderNav.vue"
import GoogleMapView from "@/views/domestic/dai/map/components/GoogleMapView.vue"

export default {
  name: "MapInfo",
  components: {
    "header-nav": HeaderNav,
    "googlemap-view": GoogleMapView,
  },
};
</script>