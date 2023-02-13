<template>
    <div class="Quick_Rolling_Banner_768x68">
        <div class="Slider-Banner">
            <carousel v-bind="options" @initialized="init" @changed="changed">
                <img src="@/assets/images/dai-images/banner1.png" />
                <img src="@/assets/images/dai-images/banner2.png" />
                <img src="@/assets/images/dai-images/banner3.png" />
            </carousel>
        </div>
    </div>
</template>



<script>
import carousel from 'vue-owl-carousel';

export default {
    name: "swipeTest",
    components: {
        carousel,
    },
    data() {
        return {
            plugin: null,
            options: {
                autoplay: false,
                items: 1,
                startPosition: 2,
                autoplayTimeout: 1000,
            },
        };
    }
};
</script>



<style scoped>
.test-wrap {

    border: 1px solid #000;

    height: 3000px;

}

.carousel-wrap {

    width: 300px;

    margin: 0 auto;

}
</style>

