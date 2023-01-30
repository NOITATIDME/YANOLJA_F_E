<template>
  <div>
    <header-main></header-main>
    <h2>장바구니 메인</h2>
  </div>
</template>

<script lang="ts">
import HeaderMain from "../../common/header/HeaderMain.vue";

export default {
  name: "BasketMain",
  components: {
    "header-main": HeaderMain,
  },
};
</script>
