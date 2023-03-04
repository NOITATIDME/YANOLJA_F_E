<template>
  <div>
    <header-main></header-main>

    <div
      class="container-fluid"
      style="height: 120px; width: 100%; background-color: #f2f2f2"
    >
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
                <a :href="'https://www.naver.com'" target="_blank">
                  <h7 style="font-family: gmk">후기1개</h7>
                </a>
                <h7 style="font-family: gmk; float: right">♡
                  <a :href="'https://www.naver.com'" target="_blank">저장
                  </a>
                </h7>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
    <photo-detail />   <!-- 숙박사진 보기 -->
     
      <div class="container-fluid" style="text-align: left; float: left; width: 50%;">
                <p style="font-family: gmk">마음껏 물놀이를 즐기세요</p>
                <p>
                  해당 지역에서 수영장을 갖춘 몇 안 되는 숙소 중 하나입니다. 
                </p>
                <p style="font-family: gmk">1월20일 전까지 무료로 취소하실 수 있습니다.</p>
                <div style="padding-top: 2%" /> 
                <hr />

                <h4 style="font-family: gmk">에어커버</h4>
                <p>
                  모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은 경우 또는 체크인에
                  문제가 있는 상황에 대비한 무료 보호 프로그램이 포함됩니다. 
                </p>
                <a :href="'https://www.naver.com'" target="_blank">더 알아보기</a>
                <hr />
                <div style="padding-top: 2%" />
 
                  <p>
                    안녕하세요. 저희는 다양한 휴식 공간은 연구하고 제공하는 Onda입니다. 이 곳에서 머무르실
                    모든 분들께서 편안하고 행복한 시간을 보내시길 바랍니다.
                  <br/>
                    [숙소 소개]
                    눈 아퓨에 바다를 보면서 사랑하는 이들과 힐링 할 수 있는 완벽한 바다뷰 숙소 입니다.
                    ...
                  </p>
                  <a :href="'https://www.naver.com'" target="_blank">더 보기 ></a>
                  <hr />
                  <div style="padding-top: 2%" />

                  <h4 style="font-family: gmk">숙소 편의시설</h4>  
                  <b-button variant="outline-primary">편의시설 22개 모두보기</b-button>
                  <hr />
                  <div style="padding-top: 2%" /> 
      
      <calendar-detail /> <!-- 숙박 체크인,아웃 달력 -->
      <review-detail /> <!-- 리뷰 카드 보기 -->
      </div>
    
      <div class="container-fluid" style="text-align: left; float: right; width: 50%; height: 100%;" >  
        <div class="box2">
               <payment-detail /> <!-- 숙박 예약,결제 보기 --> 
        </div>
      </div> 
  </div>

  <div>
    <map-detail /> <!-- 숙박 위치 지도 보기 -->
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
<style scoped>
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

a {
  text-decoration: none;
}
</style>
