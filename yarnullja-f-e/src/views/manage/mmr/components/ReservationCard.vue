<template>
  <div class="card">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <div class="card-title">날짜</div>
        <div class="card-more">상세보기</div>
      </li>
      <li class="list-group-item second-card">
        <div class="card-left">
          <img id="png" src="@/assets/images/yeoksam-hotelstar.png" />
        </div>
        <div class="card-right">aa</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "ReservationCard",
};
</script>

<style scoped>
div.Card_Container {
  max-width: 76.8rem;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  position: relative;
  padding: 1rem 3rem 1rem 3rem;
}
div.card-title {
  width: 50%;
  float: left;
}
div.card-more {
  width: 50%;
  float: right;
}
div.card-left {
  width: 50%;
  float: left;
}
div.card-right {
  width: 50%;
  float: right;
}
#png {
  height: 200px;
  width: 200px;
}
</style>
