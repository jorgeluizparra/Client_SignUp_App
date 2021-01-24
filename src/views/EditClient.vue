<template>
  <div class="add-client">
    <edit-client-form :form="editClientForm" />
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  components: {
    'edit-client-form': require('../components/ClientForm.vue').default
  },
  computed: {
    ...mapGetters(['editClientForm'])
  },
}
</script>