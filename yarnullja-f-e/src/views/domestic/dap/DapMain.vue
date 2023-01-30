<template>
  <div>
    <header-main />
    <h2>국내 모텔/호텔 결제 메인</h2>
    <!--<payment-card v-for="item in CardLength" v-bind:key="item" />-->
    <payment-card />
  </div>
</template>

<script lang="ts">
import HeaderMain from "../../common/header/HeaderMain.vue";
import PaymentCard from "./components/PaymentCard.vue";

export default {
  name: "DapMain",
  components: {
    "header-main": HeaderMain,
    "payment-card": PaymentCard,
  },
};
</script>
