<template>
  <div>
    <header-main></header-main>
    <h2>내 정보 관리 메인</h2>
  </div>
</template>

<script>
import HeaderMain from "../../common/header/HeaderMain.vue";

export default {
  name: "InfoMain",
  components: {
    "header-main": HeaderMain,
  },
};
</script>
