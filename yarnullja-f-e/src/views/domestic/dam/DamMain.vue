<template>
  <div>
    <header-main></header-main>
    <h2>국내 숙박 메인</h2>
  </div>
</template>

<script>
import HeaderMain from "../../common/header/HeaderMain.vue";

export default {
  name: "DamMain",
  components: {
    "header-main": HeaderMain,
  },
};
</script>
