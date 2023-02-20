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
      <div class="container-fluid">
        <!-- info title-->
        <div>개인 정보</div>
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
      <div class="container-fluid">예약 내역</div>
      <!-- accept -->
      <div class="container-fluid">광고성 정보 수신동의</div>
      <!-- delete account -->
      <div class="container-fluid">회원 탈퇴</div>
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
div.manager {
  height: 90%;
  background-color: #f2f2f2;
}
div.container-fluid > .profile {
  text-align: center;
  background-color: #ffffff;
}

.image {
  height: 100px;
}
#png {
  width: 100px;
  border-radius: 50em;
}
</style>
