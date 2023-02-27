<template>
    <div class="Page_Area">
        <div class="Container_Top">
            <span class="Container_Title">지역 선택</span>
            <router-link to="/dai_map" class="Top_Place_3_8_items">
                <p><span class="Container_More">
                    <i class="bi bi-geo-alt-fill"></i>
                    내 주변</span></p>
            </router-link>
        </div>
        <hr style="margin: 0.3rem ; background: #000000; border-width: 0.1rem; ">
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="row">
                <div class="accordion-item col">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            인기 지역
                        </button>
                    </h2>
                </div>
                <div class="accordion-item col">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            서울
                        </button>
                    </h2>
                </div>
            </div>
            <div class="row">
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <div class="row">
                        <router-link to="/" class="accordion-body col">
                                서울 강남/송파/서초
                        </router-link>
                        
                        <router-link to="/" class="accordion-body col">
                            서울 명동/동대문/종로
                        </router-link>
                    </div>
                    <div class="row">
                        <router-link to="/" class="accordion-body col">
                            서울 마포/영등포/용산
                        </router-link>
                        <router-link to="/" class="accordion-body col">
                            강원 강릉/속초/양양
                        </router-link>
                    </div>
                    <div class="row">
                        <router-link to="/" class="accordion-body col">
                            부산 해운대/광안리/서면
                        </router-link>
                        <router-link to="/" class="accordion-body col">
                            제주 서귀포/제주시
                        </router-link>
                    </div>
                </div>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample">
                    <div class="row">
                        <router-link to="/" class="accordion-body col">
                            서울 전체
                        </router-link>
                        <router-link to="/" class="accordion-body col">
                            강남/역삼/삼성
                        </router-link>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    compatConfig: { MODE: 3 }
}
</script>
