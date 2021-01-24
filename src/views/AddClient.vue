<template>
  <div class="add-client">
    <new-client-form :form="newClientForm" />
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  components: {
    'new-client-form': require('../components/ClientForm.vue').default
  },
  computed: {
    ...mapGetters(['newClientForm'])
  },
}
</script>