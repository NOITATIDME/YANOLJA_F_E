<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <dam-main />
    <b-button>Button</b-button>
    <b-button variant="danger">Button</b-button>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button>
  </div>
</template>

<script>
import DamMain from "./domestic/dam/DamMain.vue";

export default {
  name: "HomeView",
  components: {
    "dam-main": DamMain,
  },
};
</script>
