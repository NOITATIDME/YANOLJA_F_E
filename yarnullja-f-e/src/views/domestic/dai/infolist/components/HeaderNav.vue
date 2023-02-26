<template>
    <div style="border-bottom: 1px solid #e6e6e6;border-top: 1px solid #e6e6e6;">
        <nav class="navbar navbar-align">
            <div>
                <router-link to="/" >
                    <span class="Nav_Title">YANULLJA</span>
                </router-link>
            </div>
            
            <div class="search" >
                <input type="search" class="form-control" id="exampleFormControlInput1" placeholder="지역,숙소명,키워드로 찾아보세요" style="border: #ffffffff;">
            </div>
            <router-link to="/" class="">
                    <button class="navbar-toggler" type="button" style="float:right;border: #ffffffff;">
                        <span><i class="bi bi-search"></i></span>
                    </button>
             </router-link>
            <div style="text-align: right;"> 
                <router-link to="/" class="">
                    <button class="navbar-toggler" type="button" style="border: #ffffffff;">
                        <span><i class="bi bi-person"></i></span>
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