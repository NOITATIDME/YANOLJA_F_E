<template>
    <div class="app">
        <header-nav></header-nav>
        <!-- <div>
            <header-main></header-main>
            <h2>국내 모텔/호텔 정보</h2>
        </div> -->
        <select-region></select-region>
        <event-banner></event-banner>
        <recommand-item></recommand-item>
        <!-- <exhibition-item></exhibition-item> -->
    </div>
</template>


<script lang="ts">
import "@/main.ts"
// import HeaderMain from "@/views/common/header/HeaderMain.vue";
import HeaderNav from "@/views/domestic/dai/components/HeaderNav.vue"
import SelectRegion from "@/views/domestic/dai/components/SelectRegion.vue"
import EventBanner from "@/views/domestic/dai/components/EventBanner.vue"
import RecommandItem from "@/views/domestic/dai/components/RecommendItem.vue"
// import ExhibitionItem from "@/views/domestic/dai/components/ExhibitionItem.vue"



export default {
    name: "DaiMain",
    components: {
        // "header-main": HeaderMain,
        "header-nav": HeaderNav,
        "select-region": SelectRegion,
        "event-banner": EventBanner,
        "recommand-item": RecommandItem,
        // "exhibition-item": ExhibitionItem
    },
};
</script>