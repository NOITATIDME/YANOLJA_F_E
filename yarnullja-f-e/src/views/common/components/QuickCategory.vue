<template>
  <div id="Quick_Category" class="Container_768x68_no1">
    <div class="Container_Top">
      <p>
        <span class="Container_Title">바로 가기</span>
      </p>
    </div>
    <div class="Quick_Category_3_8">
      <router-link to="/" class="Quick_Category_3_8_items">
        <span class="Quick_Category_3_8_items_badge">쿠폰할인</span>
        <img src="@/assets/images/dai-images/quick-motel-icon.png" alt="모텔" />
        <p class="Quick_Category_Item_title">모텔</p>
      </router-link>
      <router-link to="/" class="Quick_Category_3_8_items">
        <span class="Quick_Category_3_8_items_badge_empty"></span>
        <img src="@/assets/images/dai-images/quick-hotel-icon.png" alt="호텔" />
        <p class="Quick_Category_Item_title">호텔</p>
      </router-link>
      <div to="/" class="Quick_Category_3_8_items"></div>
      <div to="/" class="Quick_Category_3_8_items"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Quick_Category",
  components: {},
};
</script>
