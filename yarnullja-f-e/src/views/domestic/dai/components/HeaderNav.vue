<template>
    <div style="border-bottom: 1px solid #e6e6e6;border-top: 1px solid #e6e6e6;">
        <nav class="navbar row">
            <div class="col">
                <router-link to="/" >
                    <span class="Nav_Title">YANULLJA</span>
                </router-link>
            </div>
            <div class="col">
                <p class="Container_Title" style="text-align: center;"> 호텔 / 리조트</p>
            </div>
            <div class="col" style="text-align: right;"> 
                <router-link to="/" class="">
                    <button class="navbar-toggler" type="button" style="border: #ffffffff;">
                        <span><i class="bi bi-search"></i></span>
                    </button>
                </router-link>
                <router-link to="/" class="">
                    <button class="navbar-toggler" type="button" style="border: #ffffffff;">
                        <span><i class="bi bi-cart"></i></span>
                    </button>
                </router-link> 
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
import "@/css/domestic/dai.css"

export default {
    compatConfig: { MODE: 3 }
}
</script>