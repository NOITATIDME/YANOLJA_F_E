<template>
    <div id="WeeklyTop" class="Container_768x68_no2">
        <div class="Container_Top">
            <p>
                <span class="Container_Title">위클리 인기 TOP &emsp; </span><br>
                <span class="Container_Desc">관심 지역 근처의 구매 많은 순 추천</span>
            </p>
            <router-link to="/" class="Top_Place_3_8_items">
                <p><span class="Container_More">전체 보기</span></p>
            </router-link>
        </div>
        <div class="Container_Button">
            <!-- <button class="Category-button-select" @click="changeCategory">모텔</button> -->
            <li>
                <button class="Category-button-select" @click="changeCategory">모텔</button>
                <button class="Category-button" @click="changeCategory">호텔</button>
            </li>
        </div>
        <div>
            <h1>{{ category }}</h1>
        </div>
    </div>
</template>


<script lang="ts">
export default {
    name: "WeeklyTop",
    components: {},
    data() {
        return {
            category: "motel"
        }
    },
    methods: {
        changeCategory() {
            console.log("motel");
        }
    }
};
</script>