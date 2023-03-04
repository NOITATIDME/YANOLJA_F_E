<template>
   <div class="wrap" >  
   <img src="@/assets/images/dai-images/IG_Jeju.png" style="width: 100%;"> 
   </div>
    
   <div class="grid-image" >
   <img src="@/assets/images/dai-images/IG_Gangwon.png" style="width: 45%;">
   <img src="@/assets/images/dai-images/IG_Busan.png" style="width: 45%;">
   <img src="@/assets/images/dai-images/IG_Gyeongbuk.png" style="width: 45%;">
   <img src="@/assets/images/dai-images/IG_Gyeongbuk.png" style="width: 45%;"> 
   </div>
    
</template>



<!-- 임시 스타일 -->
<style scoped> 

div.wrap {
   width:50%; 
   float: left; 
}

.grid-image {
   width:50%; 
    display:flex;
    flex-wrap:wrap;
    align-items:flex-start; 
}
.grid-image img {
    width:calc(33.333% - 10px);
    margin:0 5px 5px 5px;
}
.grid-image img:nth-of-type(4n),
.grid-image img:last-child {
    margin-right:0;
}
@media screen and (max-width:640px){
  .grid-image img {
    width:calc(50% - 15px);
  }
}
@media screen and (max-width:480px){
  .grid-image img:nth-of-type(2n) {
    margin-right:0;
  }
  .grid-image img:nth-of-type(3n) {
    margin-right:15px;
  }
}
 
 
</style>
