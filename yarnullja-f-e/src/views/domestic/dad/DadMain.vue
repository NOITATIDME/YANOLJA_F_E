<template>
  <div>
    <header-main></header-main> 

    <div class="container-fluid"
        style="height: 120px; width: 100%; background-color: #f2f2f2" >
        <h1 style="font-family: gmk; padding: 50px">
          추천, 인기, 가격... 등의 필터 자리
        </h1>
      </div>

      <div class="container-fluid">
        <div class="row">
          <!-- check payment Area -->
          <div class="col">
            <!-- title Area -->
            <div class="container-fluid">
              <div class="row" style="padding-top: 2%"> 
                <!-- title text -->
                <div style="text-align: left">
                  <h2 style="font-family: gmk">역삼컬리넌</h2>
                  <a :href="'https://www.naver.com'" target='_blank' ><h7 style="font-family: gmk">후기1개</h7></a> 
                  <h7 style="font-family: gmk; float: right;">♡ <a :href="'https://www.naver.com'" target='_blank' >저장</a></h7> 
                  
                </div>

              
 



              </div>
           </div>
         </div>
      </div>
    </div>

    <photo-detail /> <!-- 숙박사진 보기 -->
    <calendar-detail /> <!-- 숙박 체크인,아웃 달력 -->
    <review-detail /> <!-- 리뷰 카드 보기 -->
    <map-detail /> <!-- 숙박 위치 지도 보기 -->
    <payment-detail /> <!-- 숙박 예약,결제 보기 --> 
  </div>
</template>

<script lang="ts">
import HeaderMain from "../../common/header/HeaderMain.vue";
import PhotoDetail from "./components/PhotoDetail.vue";
import CheckCalendar from "./components/CheckCalendar.vue";
import ReviewCard from "./components/ReviewCard.vue";
import AccommodationMap from "./components/AccommodationMap.vue";
import AccommodationPayment from "./components/AccommodationPayment.vue";

export default {
  name: "DadMain",
  components: {
    "header-main": HeaderMain, //test
    "photo-detail": PhotoDetail,
    "calendar-detail": CheckCalendar,
    "review-detail": ReviewCard,
    "map-detail": AccommodationMap,
    "payment-detail": AccommodationPayment,
  },
};
</script>



<!-- 임시 스타일 -->
<style>
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
}</style>
