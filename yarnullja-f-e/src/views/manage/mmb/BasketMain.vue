<template>
  <div>
    <header-main></header-main>
    <h2>장바구니 메인</h2>
    <!--<basket-info-card v-for="item in CardLength" v-bind:key="item" />-->
    <div v-for="item in CardLength" v-bind:key="item">
      {{ item }} 번째 카드 <br />
      <basket-info-card />
      -----------------------------------------------------------------------
    </div>
  </div>
</template>

<script lang="ts">
import HeaderMain from "../../common/header/HeaderMain.vue";
import BasketInfoCard from "./components/BasketInfoCard.vue";

export default {
  name: "BasketMain",
  data: function () {
    return {
      CardLength: 3,
    };
  },
  components: {
    "header-main": HeaderMain,
    "basket-info-card": BasketInfoCard,
  },
};
</script>
