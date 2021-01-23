<template>
  <div class="clients">
    <list-clients :clients="clients" />
  </div>
</template>

<script>
export default {
  components: {
    'list-clients': require('../components/ListOfClients.vue').default
  },
  data() {
    return {
      clients: [
        {
          id: 1,
          code: '123456',
          name: 'Jorge',
          address: 'teste',
          phone: '2354456352'
        },
        {
          id: 2,
          code: '123456',
          name: 'Jorge',
          address: 'teste',
          phone: '2354456352'
        }
      ]
    }
  },
}
</script>

<style lang="scss">
  .clients {
    padding: 0 20px;
  }  
</style>