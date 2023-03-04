<template>
  <div class="container-fluid" style="text-align: left;">
    <b>₩339,200 </b> <span class="profile">/ 박</span>

    <table class="type11"> 
      <tbody>
      <tr>
          <td><span>체크인<br/>2023-03-01</span></td>
          <td><span>체크아웃<br/>2023-03-04</span></td> 
      </tr>
      <tr>
          <td colspan="2"><span>인원<br/>게스트 1명</span></td> 
      </tr>
       
      </tbody>
  </table>
   
    

    <div style="padding-top: 2%" /> 
    <button type="button" class="btn btn-primary btn-lg" style="font-family: gmk-m; width:100%" >
                예약하기
    </button>
    <div style="padding-top: 2%" /> 
     
    <div class="container-fluid">
      <p style="text-align:center;">예약 확정 전에는 요금이 청구되지 않습니다.</p> 
      <p>{$99,640 x 5 } 박</p>
      <p>서비스 수수료</p>
    </div>
    <hr>
    <div class="container-fluid">
      <h6 style="font-family: gmk;">총 합계 ({KRW})</h6>
    </div> 
  </div>
</template>

 
<!-- 임시 스타일 -->
<style scoped> 
@font-face {
  font-family: 'jal';
  src: url('@/assets/fonts/jalnan.ttf');
}

@font-face {
  font-family: 'gmk';
  src: url('@/assets/fonts/GmarketSansTTFBold.ttf');
}

@font-face {
  font-family: 'gmk-m';
  src: url('@/assets/fonts/GmarketSansTTFMedium.ttf');
}

/* DivTable.com */
 table.type11 {
    border-collapse: separate;
    border-spacing: 1px;
    text-align: center;
    line-height: 1.5; 
    width: 100%;
    height: 150px;
  }
table.type11 th {
    width: 155px;
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    color: #fff;
    background: #ce4869 ;
}
table.type11 td {
    width: 155px;
    padding: 10px;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
    background: #eee; 
    text-align: left;

}
</style>