<template>
  <div>
    <header-main />
    <payment-card />
  </div>
  <!-- Search Area -->
  <div class="container-fluid" style="height: 150px; background-color: #F2F2F2;">
      <h1 style="font-family: gmk; padding:50px;"> 추천, 인기, 가격... 등의 필터 자리 </h1>
  </div>

  <!-- Contents Area -->
  <div class="container-fluid" >
    <div class="row" style="height: 900px;">

      <!-- check payment Area -->
      <div class="col">
          <!-- title Area -->
            <div class = "container-fluid">
              <div class="row" style="padding: 3%;">
                <!-- back button -->
                <div class="col col-lg-2">
                  <button type="button" class="btn btn-outline-secondary"><h9 style="font-family: jal;">&lt;</h9></button>
                </div>
                <!-- title text -->
                <div class="col">
                  <h2 style="font-family: gmk;"> 확인 및 결제</h2>
                </div>
              </div>
            </div>
      </div>
      <!-- Rate details Area -->
      <div class="col" style="background-color:  #848484;">
          <h1 style="padding:30%"> Component Area</h1>


      </div>
    </div>
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

<!-- 임시 스타일 -->
<style>
@font-face {
  font-family: 'jal';
  src: url('../../../assets/fonts/jalnan.ttf');
}

@font-face {
  font-family: 'gmk';
  src: url('../../../assets/fonts/GmarketSansTTFBold.ttf');
}
</style>
