<template>
    <div class="app">
        <header-nav></header-nav>
        <!-- <div>
            <header-main></header-main>
            <h2>국내 모텔/호텔 정보</h2>
        </div> -->
        <dai-card></dai-card>

    </div>
</template>


<script lang="ts">
import "@/main.ts"
// import HeaderMain from "@/views/common/header/HeaderMain.vue";
import HeaderNav from "@/views/domestic/dai/infolist/components/HeaderNav.vue"
import DaiCard from "@/views/domestic/dai/infolist/components/DaiCard.vue"


export default {
    name: "DaiListMain",
    components: {
        // "header-main": HeaderMain,
        "header-nav": HeaderNav,
        "dai-card": DaiCard,
    },
};
</script>