<template>
  <div>
    <header-main></header-main>
    <h2>예약 내역 리스트 페이지</h2>
  </div>
</template>

<script lang="ts">
import HeaderMain from "../../common/header/HeaderMain.vue";

export default {
  name: "ReservationList",
  components: {
    "header-main": HeaderMain,
  },
};
</script>
