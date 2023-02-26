<template>
  <div>
    <header-main></header-main>
    <h2>내 정보 관리 메인</h2>
    <div class="manager">
      큰틀
      <!--profile-->
      <div class="container-fluid profile">
        프로필
        <!--profile image-->
        <div class="image">
          <img id="png" src="@/assets/images/blank-profile-picture.png" />
        </div>
        <!--profile nicname-->
        <p>{$river}</p>
        <!--profile email-->
        <p>{$river2745@nate.com}</p>
      </div>

      <!-- info -->
      <div class="container-fluid info">
        <!-- info title-->
        <h4 style="font-family: gmk">개인 정보</h4>
        <hr size="2" color="gray" />
        <!-- info id-->
        <div>아이디</div>
        <!-- info email -->
        <div>이메일</div>
        <!-- info password -->
        <div>비밀번호</div>
        <!-- info phone number -->
        <div>휴대폰 번호</div>
      </div>
      <!-- reservation list-->
      <div class="container-fluid reservation">
        <h4 style="font-family: gmk">예약 내역</h4>
        <div class="row">
          <div class="col">국내여행 통합예약</div>
          <div class="col"><button class="btn btn-link">></button></div>
        </div>
      </div>
      <!-- accept -->
      <div class="container-fluid accept">
        <h4 style="font-family: gmk">광고성 정보 수신동의</h4>
        <hr size="2" color="gray" />
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label class="form-check-label" for="defaultCheck1"> E-mail </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label class="form-check-label" for="defaultCheck1"> 문자 </label>
        </div>
      </div>
      <!-- delete account -->
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <h4 style="font-family: gmk">회원 탈퇴</h4>
          </div>
          <div class="col">
            <button class="btn btn-link">
              <router-link to="/reservation">></router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HeaderMain from "../../common/header/HeaderMain.vue";

export default {
  name: "InfoMain",
  components: {
    "header-main": HeaderMain,
  },
};
</script>
<style scoped>
#app {
  margin: 0 auto;
  width: 65%;
  min-height: 100%;
  text-align: center;
}
div.manager {
  height: 90%;
  background-color: #f2f2f2;
}
div.accept {
  margin: 60;
}
div.container-fluid {
  text-align: center;
  background-color: #ffffff;
}
div.reservation {
  text-align: center;
  background-color: #f2f2f2;
}

div.row {
  background-color: #ffffff;
  border-radius: 1em;
}

/* div.move-list {
  text-align: left;
}
div.move-list-btn {
  width: 500px;
  text-align: right;
} */
@font-face {
  font-family: "jal";
  src: url("@/assets/fonts/jalnan.ttf");
}

@font-face {
  font-family: "title";
  src: url("@/assets/fonts/GmarketSansTTFBold.ttf");
}

@font-face {
  font-family: "gmk-m";
  src: url("@/assets/fonts/GmarketSansTTFMedium.ttf");
}

.image {
  height: 100px;
}
#png {
  width: 100px;
  border-radius: 50em;
}
</style>
