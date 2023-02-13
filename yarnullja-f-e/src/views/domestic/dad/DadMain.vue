<template>
  <div>
    <header-main></header-main>
    <h2>국내 모텔/호텔 상세</h2>
    <photo-detail />
  </div>
</template>

<script lang="ts">
import HeaderMain from "../../common/header/HeaderMain.vue";
import PhotoDetail from "./components/PhotoDetail.vue";

export default {
  name: "DadMain",
  components: {
    "header-main": HeaderMain, //test
    "photo-detail": PhotoDetail,
  },
};
</script>
