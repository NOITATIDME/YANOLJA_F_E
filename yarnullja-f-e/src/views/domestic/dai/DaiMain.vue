<template>
  <div>
    <header-main></header-main>
    <h2>국내 모텔/호텔 정보</h2>
  </div>
</template>

<script lang="ts">
import HeaderMain from "../../common/header/HeaderMain.vue";

export default {
  name: "DaiMain",
  components: {
    "header-main": HeaderMain,
  },
};
</script>
