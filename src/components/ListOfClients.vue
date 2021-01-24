<template>
  <div class="list-of-clients">
    <el-table
      :data="clients"
      style="width: 100%">
      <el-table-column
        prop="code"
        label="Código">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Nome">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Endereço">
      </el-table-column>
      <el-table-column
        label="Operações">
        <template slot-scope="scope">
          <el-button @click="setEditClient(scope.$index, clients)" type="text">
            <i class="el-icon-folder-opened"></i>
          </el-button>
          <el-button @click="deleteClient(scope.$index, clients)" type="text">
            <i class="el-icon-delete"></i>
          </el-button>
        </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ListOfClients',
  props: {
    clients: Array
  },
  methods: {
    ...mapActions(['deleteClient', 'setEditClient'])
  },
}
</script>

<style lang="scss">
</style>
