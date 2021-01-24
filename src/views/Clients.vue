<template>
  <div class="clients">
    <list-clients :clients="clients" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {
    'list-clients': require('../components/ListOfClients.vue').default
  },
  computed: {
    ...mapGetters(['clients'])
  },
}
</script>

<style lang="scss">
</style>