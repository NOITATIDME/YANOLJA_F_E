<template>
  <div class="container-fluid" style="background-color: white;">
    <div style="padding-top: 3%" />
    <div style="text-align: left">
      <h5 style="font-family: jal">현대수 리조트 속초</h5>
      <p style="font-family: gmk-m">숙소 | 강원도 속초시 미옥로 153</p>
    </div>
    <hr/>
    <div style="height: 200px;">
      <div class = "row" style="font-family: jal">
        <div class="col col-lg-9">
          <div class="row">
            <div class="col col-lg-1" align="right">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
            </div>
            <div class="col col-lg-3" align="left">
              <img src ="@/assets/images/com/210920530.jpg" style="width: 150px; height: 150px;"/>
            </div>
            <div class="col col-lg-8" align="left" >
                <h5> 23평형(게릴라특가)</h5>
                <h10 style="font-family: gmk-m"> 2022.12.19 (월) ~2022.12.20(화) : 1박</h10> <br>
                <h10 style="font-family: gmk-m"> 체크인 14:00 : 체크아웃 12:00</h10><br>
                <h10 style="font-family: gmk-m"> 기준 4명 / 최대5명</h10><br>
                <img  class="img-rounded" style="background-color: #6573F2;"> <!-- 나중에 도형으로 만듬-->
                선착순 | 1.1만원
            </div>
          </div>
        </div>
        <div class="col col-lg-3" align="right">
          <div style="padding-top: 60%" />
          <h10 style="font-family: gmk-m"> 숙박</h10> <h10 style="font-family: gmk">53,000원</h10><br>
          <h11 style="font-family: gmk-m; color: #6573F2;"> 취소 및 환불불가 </h11><br>
        </div>
      </div>
    </div>
    <div style="padding-top: 3%" />
  </div>
</template>

<script lang="ts">
export default {
  name: "BasketInfoCard",
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
</style>