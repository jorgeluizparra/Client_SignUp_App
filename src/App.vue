<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  components: {
    'nav-bar': require('./components/Navbar.vue').default
  },
  methods: {
    ...mapActions(['getClients'])
  },
  beforeMount() {
    this.getClients();
  },
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  font-family: Arial;
  #app {
    padding: 10px;
  }
}
</style>
