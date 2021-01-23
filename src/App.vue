<template>
  <div id="app">
    <nav-bar />
    <router-view/>
  </div>
</template>

<script>
export default {
  components: {
    'nav-bar': require('./components/Navbar.vue').default
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  font-family: Arial;
}
</style>
