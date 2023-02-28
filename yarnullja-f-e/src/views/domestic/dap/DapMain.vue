<template>
  <div>
    <header-main />
  </div>
  <!-- Search Area -->
  <div
    class="container-fluid"
    style="height: 120px; width: 100%; background-color: #f2f2f2"
  >
    <h1 style="font-family: gmk; padding: 50px">
      추천, 인기, 가격... 등의 필터 자리
    </h1>
  </div>

  <!-- Contents Area -->
  <div class="container-fluid">
    <div class="row">
      <!-- check payment Area -->
      <div class="col">
        <!-- title Area -->
        <div class="container-fluid">
          <div class="row" style="padding-top: 5%">
            <!-- back button -->
            <div align="left" class="col col-lg-1">
              <button id="non-img-btn"><p class="back">&lt;</p></button>
            </div>
            <!-- title text -->
            <div class="col" style="text-align: left">
              <h3 style="font-family: jal">확인 및 결제</h3>
            </div>
          </div>
          <div />
          <!-- blank -->
          <!-- rate cut Area -->
          <div class="container-fluid" style="text-align: left">
            <div class="box1">
              <h6 style="font-family: gmk">요금 인하</h6>
              <p>
                검색하시는 날짜는 지난 60일간 평균 1박 요금보다 <br />
                { $12345 } 저렴합니다.
              </p>
            </div>
          </div>
          <div style="padding-top: 5%" />
          <!-- blank -->
          <!-- Reservation information Area -->
          <div class="container-fluid" style="text-align: left">
            <h4 style="font-family: gmk">예약 정보</h4>
            <div style="padding-top: 2%" class="row">
              <div class="col">
                <h6 style="font-family: gmk">날짜</h6>
                <p>{ 2023년 1월 1일~6일 }</p>
              </div>
              <div class="col">
                <button class="btn btn-link">수정</button>
              </div>
            </div>
            <div style="padding-top: 2%" class="row">
              <div class="col">
                <h6 style="font-family: gmk">게스트</h6>
                <p>{ 게스트 1명 }</p>
              </div>
              <div class="col">
                <button class="btn btn-link">수정</button>
              </div>
            </div>
          </div>
          <hr />
          <div style="padding-top: 2%" />
          <!-- blank -->
          <!-- payment method Area -->
          <div class="container-fluid" style="text-align: left">
            <h4 style="font-family: gmk">결제 수단</h4>
            <div style="padding-top: 3%" />
            <!-- blank -->
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <button class="btn btn-link">쿠폰 입력하기</button>
          </div>
          <hr />
          <div style="padding-top: 2%" />
          <!-- blank -->
          <!-- refund policy Area -->
          <div class="container-fluid" style="text-align: left">
            <h4 style="font-family: gmk">환불 정책</h4>
            <p>
              {12월 31일} 전까지 무료로 취소하실 수 있습니다. 체크인 날짜인 {1월
              1일} 전에 취소하면 부분 환불을 받으실 수 있습니다.
            </p>
          </div>
          <hr />
          <div style="padding-top: 2%" />
          <!-- blank -->
          <!-- basic rules Area -->
          <div class="container-fluid" style="text-align: left">
            <h4 style="font-family: gmk">기본 규칙</h4>
            <p>
              훌륭한 게스트가 되기 위한 몇 가지 간단한 규칙을 지켜주실 것을 모든
              게스트에게 당부드리고 있습니다.
            </p>
            <p>
              º 숙소 이용규칙을 준수하세요. <br />
              º 호스트의 집도 자신의 집처럼 아껴주세요.
            </p>
          </div>
          <hr />
          <div style="padding-top: 2%" />
          <!-- blank -->
          <!-- check and pay Area -->
          <div
            class="container-fluid"
            style="text-align: left; font-size: 15px"
          >
            <p>
              아래 버튼을 선택하면 호스트가 설정한 숙소 이용규칙, 게스트에게
              적용되는 기본규칙, 야널자 재예약 및 환불 정책에 동의하며, 피해에
              대한 책임이 본인에게 있을 경우 에어비앤비가 결제 수단으로 청구의
              조치를 취할 수 있다는 사실에 동의하는 것입니다.
            </p>
            <div style="padding-top: 3%" />
            <!-- blank -->
            <button
              type="button"
              class="btn btn-primary btn-lg"
              style="font-family: gmk-m"
            >
              확인 및 결제
            </button>
          </div>
          <div style="padding-top: 20%" />
          <!-- blank -->
        </div>
      </div>

      <div class="col">
        <div style="padding-top: 10%" />
        <!-- blank -->
        <div class="container-fluid" style="text-align: center">
          <div class="box2">
            <payment-card />
          </div>
        </div>
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
  width: 1000px;
  min-height: 100%;
  text-align: center;
}
</style>
