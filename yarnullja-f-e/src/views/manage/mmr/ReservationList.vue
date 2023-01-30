<template>
  <div>
    <header-main></header-main>
    <h2>예약 내역 리스트 페이지</h2>
    <!--<reservation-card v-for="item in CardLength" v-bind:key="item" />-->
    <div v-for="item in CardLength" v-bind:key="item">
      {{ item }} 번째 카드 <br />
      <reservation-card />
      -----------------------------------------------------------------------
    </div>
  </div>
</template>

<script lang="ts">
import HeaderMain from "../../common/header/HeaderMain.vue";
import ReservationCard from "./components/ReservationCard.vue";

export default {
  name: "ReservationList",
  data: function () {
    return {
      CardLength: 3,
    };
  },
  components: {
    "header-main": HeaderMain,
    "reservation-card": ReservationCard,
  },
};
</script>
