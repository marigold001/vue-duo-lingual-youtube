<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/en/videos">EN</router-link>&nbsp;
      <router-link to="/rs/videos">RS</router-link>&nbsp;
    </div>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mode: 'light'
    }
  }
}
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-size: 200%;
        text-decoration: none;
        color: rgb(165, 22, 22);
        margin: 0 50px 40px 0px;
        display: inline-block;

    &.router-link-exact-active {
      font-size: 200%;
        text-decoration: none;
        color: rgb(165, 22, 22);
        margin: 0 50px 40px 0px;
        display: inline-block;
    }
  }
}
</style>
