<template>
    <div id="Quick_Category" class="Container_768x68_no1">
        <div class="Container_Top">
            <p>
                <span class="Container_Title">인기 여행지</span>
            </p>
            <router-link to="/" class="Top_Place_3_8_items">
                <p><span class="Container_More">전체 보기</span></p>
            </router-link>
        </div>
        <div class="Top_Place_3_8">
            <router-link to="/" class="Top_Place_3_8_items">
                <img src="@/assets/images/dai-images/IG_Jeju.png" alt="제주도">
                <p class="Top_Place_Item_title">제주도</p>
            </router-link>
            <router-link to="/" class="Top_Place_3_8_items">
                <img src="@/assets/images/dai-images/IG_Gangwon.png" alt="강원도">
                <p class="Top_Place_Item_title">강원도</p>
            </router-link>
            <router-link to="/" class="Top_Place_3_8_items">
                <img src="@/assets/images/dai-images/IG_Busan.png" alt="부산">
                <p class="Top_Place_Item_title">부산</p>
            </router-link>
            <router-link to="/" class="Top_Place_3_8_items">
                <img src="@/assets/images/dai-images/IG_Gyeongbuk.png" alt="경상북도">
                <p class="Top_Place_Item_title">경상북도</p>
            </router-link>
            <router-link to="/" class="Top_Place_3_8_items">
                <img src="@/assets/images/dai-images/IG_Gwangju.png" alt="광주">
                <p class="Top_Place_Item_title">광주</p>
            </router-link>

        </div>
    </div>
</template>


<script lang="ts">
export default {
    name: "QuickCategory",
    components: {},
};
</script>