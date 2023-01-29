<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/dad">DAD</router-link> |
    <router-link to="/dai">DAI</router-link> |
    <router-link to="/dam">DAM</router-link> |
    <router-link to="/dap">DAP</router-link> |
    <router-link to="/basket">BASKET</router-link> |
    <router-link to="/info">INFO</router-link> |
    <router-link to="/reservation">RESERVATION</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
