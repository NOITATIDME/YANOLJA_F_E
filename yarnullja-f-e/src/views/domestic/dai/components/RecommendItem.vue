<template>
    <div class="Container_768x68_no1">
        <div class="Container_Title">
            우리도 호캉스 갈까?
        </div>
        
        <!-- TAP NAV -->
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="tab-1" data-bs-toggle="tab" data-bs-target="#tab-1-pane" type="button"
                    role="tab" aria-controls="tab-1-pane" aria-selected="true">서울</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="tab-2" data-bs-toggle="tab" data-bs-target="#tab-2-pane" type="button"
                    role="tab" aria-controls="tab-2-pane" aria-selected="false">강원</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="tab-3" data-bs-toggle="tab" data-bs-target="#tab-3-pane" type="button"
                    role="tab" aria-controls="tab-3-pane" aria-selected="false">부산</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="tab-4" data-bs-toggle="tab" data-bs-target="#tab-4-pane"
                    type="button" role="tab" aria-controls="tab-4-pane" aria-selected="false">인기</button>
            </li>
        </ul>


        <!-- TAP CONTENT -->
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="tab-1-pane" role="tabpanel" aria-labelledby="tab-1" tabindex="0">
                    <div class="card-group">
                        <div class="card">
                            <img src="@/assets/images/dai-images/hotel1.png" class="card-img-top card-img-size" alt="hotel_1">
                            <div class="card-body">
                                <h5 class="card-title card-title-CSS">서울_Hotel_NAME_1
                                </h5>
                                <div style="text-align: left;">
                                    <span class='star-rating'>
                                        <span style="width:70%"></span>
                                    </span>
                                    <span style="font-size: medium;;">0.7</span>
                                    <span style="font-size: small;">(777,777)</span>
                                </div>
                                <br>
                                <div class="card-price">
                                    <span class="description ">대실: 4시간</span>
                                    <span class="price ">10,000원</span>
                                </div>
                                <div class="card-price">
                                    <span class="description ">숙박 : 21:00 부터</span>
                                    <span class="price ">100,000원</span>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <img src="@/assets/images/dai-images/hotel2.png" class="card-img-top card-img-size" alt="hotel_2">
                            <div class="card-body">
                                <h5 class="card-title card-title-CSS">서울_Hotel_NAME_2
                                </h5>
                                <div style="text-align: left;">
                                    <span class='star-rating'>
                                        <span style="width:50%"></span>
                                    </span>
                                    <span style="font-size: medium;;">0.5</span>
                                    <span style="font-size: small;">(777,777)</span>
                                </div>
                                <br>
                                <div class="card-price">
                                    <span class="description ">대실: 4시간</span>
                                    <span class="price ">10,000원</span>
                                </div>
                                <div class="card-price">
                                    <span class="description ">숙박 : 21:00 부터</span>
                                    <span class="price ">100,000원</span>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <img src="@/assets/images/dai-images/hotel3.png" class="card-img-top card-img-size" alt="hotel_3">
                            <div class="card-body">
                                <h5 class="card-title card-title-CSS">서울_Hotel_NAME_3
                                </h5>
                                <div style="text-align: left;">
                                    <span class='star-rating'>
                                        <span style="width:50%"></span>
                                    </span>
                                    <span style="font-size: medium;;">0.5</span>
                                    <span style="font-size: small;">(777,777)</span>
                                </div>
                                <br>
                                <div class="card-price">
                                    <span class="description ">대실: 4시간</span>
                                    <span class="price ">10,000원</span>
                                </div>
                                <div class="card-price">
                                    <span class="description ">숙박 : 21:00 부터</span>
                                    <span class="price ">100,000원</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="tab-pane fade" id="tab-2-pane" role="tabpanel" aria-labelledby="tab-2" tabindex="0">...
                <div class="card-group">
                    <div class="card">
                        <img src="@/assets/images/dai-images/hotel1.png" class="card-img-top card-img-size" alt="hotel_1">
                        <div class="card-body">
                            <h5 class="card-title card-title-CSS">강원_Hotel_NAME_1
                            </h5>
                            <div style="text-align: left;">
                                <span class='star-rating'>
                                    <span style="width:70%"></span>
                                </span>
                                <span style="font-size: medium;;">0.7</span>
                                <span style="font-size: small;">(777,777)</span>
                            </div>
                            <br>
                            <div class="card-price">
                                <span class="description ">대실: 4시간</span>
                                <span class="price ">10,000원</span>
                            </div>
                            <div class="card-price">
                                <span class="description ">숙박 : 21:00 부터</span>
                                <span class="price ">100,000원</span>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img src="@/assets/images/dai-images/hotel2.png" class="card-img-top card-img-size" alt="hotel_2">
                        <div class="card-body">
                            <h5 class="card-title card-title-CSS">강원_Hotel_NAME_2
                            </h5>
                            <div style="text-align: left;">
                                <span class='star-rating'>
                                    <span style="width:50%"></span>
                                </span>
                                <span style="font-size: medium;;">0.5</span>
                                <span style="font-size: small;">(777,777)</span>
                            </div>
                            <br>
                            <div class="card-price">
                                <span class="description ">대실: 4시간</span>
                                <span class="price ">10,000원</span>
                            </div>
                            <div class="card-price">
                                <span class="description ">숙박 : 21:00 부터</span>
                                <span class="price ">100,000원</span>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img src="@/assets/images/dai-images/hotel3.png" class="card-img-top card-img-size" alt="hotel_3">
                        <div class="card-body">
                            <h5 class="card-title card-title-CSS">강원_Hotel_NAME_3
                            </h5>
                            <div style="text-align: left;">
                                <span class='star-rating'>
                                    <span style="width:50%"></span>
                                </span>
                                <span style="font-size: medium;;">0.5</span>
                                <span style="font-size: small;">(777,777)</span>
                            </div>
                            <br>
                            <div class="card-price">
                                <span class="description ">대실: 4시간</span>
                                <span class="price ">10,000원</span>
                            </div>
                            <div class="card-price">
                                <span class="description ">숙박 : 21:00 부터</span>
                                <span class="price ">100,000원</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="tab-3-pane" role="tabpanel" aria-labelledby="tab-3" tabindex="0">
                    <div class="card-group">
                        <div class="card">
                            <img src="@/assets/images/dai-images/hotel1.png" class="card-img-top card-img-size" alt="hotel_1">
                            <div class="card-body">
                                <h5 class="card-title card-title-CSS">부산_Hotel_NAME_1
                                </h5>
                                <div style="text-align: left;">
                                    <span class='star-rating'>
                                        <span style="width:70%"></span>
                                    </span>
                                    <span style="font-size: medium;;">0.7</span>
                                    <span style="font-size: small;">(777,777)</span>
                                </div>
                                <br>
                                <div class="card-price">
                                    <span class="description ">대실: 4시간</span>
                                    <span class="price ">10,000원</span>
                                </div>
                                <div class="card-price">
                                    <span class="description ">숙박 : 21:00 부터</span>
                                    <span class="price ">100,000원</span>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <img src="@/assets/images/dai-images/hotel2.png" class="card-img-top card-img-size" alt="hotel_2">
                            <div class="card-body">
                                <h5 class="card-title card-title-CSS">부산_Hotel_NAME_2
                                </h5>
                                <div style="text-align: left;">
                                    <span class='star-rating'>
                                        <span style="width:50%"></span>
                                    </span>
                                    <span style="font-size: medium;;">0.5</span>
                                    <span style="font-size: small;">(777,777)</span>
                                </div>
                                <br>
                                <div class="card-price">
                                    <span class="description ">대실: 4시간</span>
                                    <span class="price ">10,000원</span>
                                </div>
                                <div class="card-price">
                                    <span class="description ">숙박 : 21:00 부터</span>
                                    <span class="price ">100,000원</span>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <img src="@/assets/images/dai-images/hotel3.png" class="card-img-top card-img-size" alt="hotel_3">
                            <div class="card-body">
                                <h5 class="card-title card-title-CSS">부산_Hotel_NAME_3
                                </h5>
                                <div style="text-align: left;">
                                    <span class='star-rating'>
                                        <span style="width:50%"></span>
                                    </span>
                                    <span style="font-size: medium;;">0.5</span>
                                    <span style="font-size: small;">(777,777)</span>
                                </div>
                                <br>
                                <div class="card-price">
                                    <span class="description ">대실: 4시간</span>
                                    <span class="price ">10,000원</span>
                                </div>
                                <div class="card-price">
                                    <span class="description ">숙박 : 21:00 부터</span>
                                    <span class="price ">100,000원</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="tab-pane fade" id="tab-4-pane" role="tabpanel" aria-labelledby="tab-4" tabindex="0">
                    <div class="card-group">
                        <div class="card">
                            <img src="@/assets/images/dai-images/hotel1.png" class="card-img-top card-img-size" alt="hotel_1">
                            <div class="card-body">
                                <h5 class="card-title card-title-CSS">인기_Hotel_NAME_1
                                </h5>
                                <div style="text-align: left;">
                                    <span class='star-rating'>
                                        <span style="width:70%"></span>
                                    </span>
                                    <span style="font-size: medium;;">0.7</span>
                                    <span style="font-size: small;">(777,777)</span>
                                </div>
                                <br>
                                <div class="card-price">
                                    <span class="description ">대실: 4시간</span>
                                    <span class="price ">10,000원</span>
                                </div>
                                <div class="card-price">
                                    <span class="description ">숙박 : 21:00 부터</span>
                                    <span class="price ">100,000원</span>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <img src="@/assets/images/dai-images/hotel2.png" class="card-img-top card-img-size" alt="hotel_2">
                            <div class="card-body">
                                <h5 class="card-title card-title-CSS">인기_Hotel_NAME_2
                                </h5>
                                <div style="text-align: left;">
                                    <span class='star-rating'>
                                        <span style="width:50%"></span>
                                    </span>
                                    <span style="font-size: medium;;">0.5</span>
                                    <span style="font-size: small;">(777,777)</span>
                                </div>
                                <br>
                                <div class="card-price">
                                    <span class="description ">대실: 4시간</span>
                                    <span class="price ">10,000원</span>
                                </div>
                                <div class="card-price">
                                    <span class="description ">숙박 : 21:00 부터</span>
                                    <span class="price ">100,000원</span>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <img src="@/assets/images/dai-images/hotel3.png" class="card-img-top card-img-size" alt="hotel_3">
                            <div class="card-body">
                                <h5 class="card-title card-title-CSS">인기_Hotel_NAME_3
                                </h5>
                                <div style="text-align: left;">
                                    <span class='star-rating'>
                                        <span style="width:50%"></span>
                                    </span>
                                    <span style="font-size: medium;;">0.5</span>
                                    <span style="font-size: small;">(777,777)</span>
                                </div>
                                <br>
                                <div class="card-price">
                                    <span class="description ">대실: 4시간</span>
                                    <span class="price ">10,000원</span>
                                </div>
                                <div class="card-price">
                                    <span class="description ">숙박 : 21:00 부터</span>
                                    <span class="price ">100,000원</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import "@/css/domestic/dai.css"

// import * as $ from 'jquery';

export default {
    compatConfig: { MODE: 3 }
    
}

</script>