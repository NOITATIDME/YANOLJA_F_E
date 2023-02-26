<template>
  <div class="Container_768x68_no1">
    <div class="Container_Top">
      <p>
        <span class="Container_Title">날짜</span>
        <span class="Container_More">상세보기></span>
      </p>
    </div>
    <div class="Card_Container">
      <div class="Card_left">
        <img src="@/assets/images/yeoksam-hotelstar.png" />
      </div>
      <div class="Card_right"></div>
    </div>
  </div>
  <div class="card-group">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This card has supporting text below as a natural lead-in to additional
          content.
        </p>
      </div>
    </div>
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
</style>
