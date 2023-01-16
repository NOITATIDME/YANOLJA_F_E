<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <dam-main/>
  </div>
</template>

<script>
import DamMain from './domestic/dam/DamMain.vue'; 

export default {
  name: 'HomeView',
  components: {
    'dam-main':DamMain
  }
}
</script>