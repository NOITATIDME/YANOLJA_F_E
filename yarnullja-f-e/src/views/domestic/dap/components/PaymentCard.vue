<template>
  <div class="container-fluid" style="text-align: left;">
    <div class="row">
      <div  align="left"  class="col-5">
        <img src="@/assets/images/dai-images/IG_Jeju.png" style="width: 100%;  border-radius: 1em;"/>
      </div>
      <div class="col">
        <div class="container-fluid row-10">
          <p>{레지던스 전체}</p>
          <p>{신규오픈 등대해변 풀전말 테라스 보유 #배달가능 #취사가능}</p>
        </div>
        <div class="row-10" style="padding-top:10%;">
          ★ {4.83 (후기 58개)}
        </div>
      </div>
    </div>
    <hr>
    <div class="container-fluid">
      <p>야널자커버를 통한 예약 보호</p>
    </div>
    <hr>
    <div class="container-fluid">
      <h4 style="font-family: gmk;">요금 세부정보</h4>
      <br>
      <p>{$99,640 x 5 } 박</p>
      <p>서비스 수수료</p>
    </div>
    <hr>
    <div class="container-fluid">
      <h6 style="font-family: gmk;">총 합계 ({KRW})</h6>
    </div>
    <hr>
    <div class="container-fluid">
      <p>해외에서 결제가 처리되기 때문에 카드 발행사에서 추가
        수수료를 부과할 수 있습니다.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PaymentCard",
};
</script>

<!-- 임시 스타일 -->
<style>
@font-face {
  font-family: 'jal';
  src: url('@/assets/fonts/jalnan.ttf');
}

@font-face {
  font-family: 'gmk';
  src: url('@/assets/fonts/GmarketSansTTFBold.ttf');
}

@font-face {
  font-family: 'gmk-m';
  src: url('@/assets/fonts/GmarketSansTTFMedium.ttf');
}
</style>