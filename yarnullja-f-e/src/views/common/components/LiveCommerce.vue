<template>
    <div id="LiveCommerce" class="Container_768x68_no2">
        <div class="Container_Top">
            <p style="margin: 0">
                <span class="Container_Title">야널자 라이브</span>
            </p>
        </div>
        <div class="Quick_Category_3_8">
            <router-link to="/" class="Quick_Category_3_8_items">
                <span class="Quick_Category_3_8_items_badge">쿠폰할인</span>
                <img src="@/assets/images/dai-images/quick-motel-icon.png" alt="모텔">
                <p class="QuickCategoryItem_title">모텔</p>
            </router-link>
            <router-link to="/" class="Quick_Category_3_8_items">
                <span class="Quick_Category_3_8_items_badge_empty"></span>
                <img src="@/assets/images/dai-images/quick-hotel-icon.png" alt="호텔">
                <p class="QuickCategoryItem_title">호텔</p>
            </router-link>
            <router-link to="/" class="Quick_Category_3_8_items">
                <span class="Quick_Category_3_8_items_badge_empty"></span>
                <img src="@/assets/images/dai-images/quick-empty-img.png" alt="empty">
            </router-link>
            <router-link to="/" class="Quick_Category_3_8_items">
                <span class="Quick_Category_3_8_items_badge_empty"></span>
                <img src="@/assets/images/dai-images/quick-empty-img.png" alt="empty">
            </router-link>
        </div>
    </div>
</template>


<script lang="ts">
export default {
    name: "LiveCommerce",
    components: {},
};
</script>