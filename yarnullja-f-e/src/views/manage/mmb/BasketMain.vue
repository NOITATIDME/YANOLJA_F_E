<template>
  <div class="container-fluid" >
    <div class = "row">
      <div class="col col-lg-2">
        <button id="non-img-btn"><p class="back">&lt;</p></button>
      </div>
      <div class="col col-lg-8">
          <h2 style="font-family: jal">장바구니</h2>
      </div>
      <div class="col col-lg-2">
          <button id="non-img-btn"><img src="@/assets/images/com/house-door-fill.svg" width="100%"></button>
      </div>
    </div>
    <div style="text-align: left;  font-family: jal"><h5>전체(2)</h5></div>
    <hr/>
    <div class = "row" style="width: 20%;">
      <div class = "col col-lg-2" style="text-align: left">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
      </div>
      <div align="left" class="col col-lg-10" style="font-family: jal">
        <h6>전체 선택</h6>
      </div>
    </div>
    <div class="container-fluid" style="background-color: #f2f2f2" >
      <div style="padding-top: 5%" />
      <div v-for="item in CardLength" v-bind:key="item" style="width: 90%%">
        <basket-info-card/>
          <div style="padding-top: 5%" />
      </div>
      <div style="padding-top: 5%" />
    </div>


  </div>
</template>

<script lang="ts">
import BasketInfoCard from "./components/BasketInfoCard.vue";
export default {
  name: "BasketMain",
  data: function () {
    return {
      CardLength: 3,
    };
  },
  components: {
    "basket-info-card": BasketInfoCard,
  },
};
</script>

<!-- 임시 스타일 -->
<style scope>
@font-face {
  font-family: "jal";
  src: url("@/assets/fonts/jalnan.ttf");
}

@font-face {
  font-family: "gmk";
  src: url("@/assets/fonts/GmarketSansTTFBold.ttf");
}

@font-face {
  font-family: "gmk-m";
  src: url("@/assets/fonts/GmarketSansTTFMedium.ttf");
}

#non-img-btn {
  border: none;
  background-color: white;
}

p.back {
  font-family: jal;
  background-color: white;
  font-size: 20px;
}

div.box1 {
  border: 1px solid #cecdcd;
  padding-top: 3%;
  padding-left: 3%;
  border-radius: 1em;
  width: 90%;
}

div.box2 {
  border: 1px solid #cecdcd;
  padding-top: 3%;
  padding-left: 3%;
  border-radius: 1em;
}

#app {
  margin: 0 auto;
  width: 65%;
  min-height: 100%;
  text-align: center;
}
</style>
