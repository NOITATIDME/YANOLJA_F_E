<template>
  <div>
    <header-main></header-main>

    <!--<reservation-card v-for="item in CardLength" v-bind:key="item" />-->
    <!--reservation header-->
    <div class="reserve-header">
      <div class="row">
        <div class="col col-lg-2">
          <button id="non-img-btn"><p class="back">&lt;</p></button>
        </div>
        <div class="col col-lg-8">
          <h2 style="font-family: jal">국내여행 예약내역</h2>
        </div>
      </div>
      <div class="reserve-select-box">
        <select
          class="form-select category left"
          aria-label="Default select example"
        >
          <option selected>카테고리 전체</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select
          class="form-select period right"
          aria-label="Default select example"
        >
          <option selected>최근 3개월</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
    <!--reservation card list-->
    <div class="cardlist">
      <div class="card guide" style="clear: both">
        <div class="card-text" style="clear: both">
          예외 무료취소 가능 여부는 취소 요청 시 확인 가능합니다.&nbsp;&nbsp;
        </div>

        <div class="card-img" style="clear: both">
          <img src="@/assets/images/com/question-circle.svg" />
        </div>
      </div>
      <div v-for="item in CardLength" v-bind:key="item">
        <reservation-card />
      </div>
    </div>
    <!--안내 문구-->
    <div>
      예약내역은 최대 2년까지 조회할 수 있으며, 삭제하신 내역은 노출되지
      않습니다.
    </div>
    <div>
      (주)야놀자는 통신판매중개업자로서, 통신판매인 당사자가 아니라는 사실을
      고지하며 상품의 결제, 이용 및 환불 등과 관련한 의무와 책임<br />은 각
      판매자에게 있습니다.
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
<style scoped>
@font-face {
  font-family: "jal";
  src: url("@/assets/fonts/jalnan.ttf");
}
div.reserve-select-box {
  width: 100%;
}
div.guide {
  margin: 10px;
}
select.left {
  width: 50%;
  float: left;
}
select.right {
  width: 50%;
  float: right;
}
p.back {
  font-family: jal;
  background-color: white;
  font-size: 20px;
}
#non-img-btn {
  border: none;
  background-color: white;
}
.cardlist {
  background-color: #f2f2f2;
}
</style>
