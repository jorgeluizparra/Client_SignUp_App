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
        <template>
          <el-button @click="handleClick" type="text">
            <i class="el-icon-folder-opened"></i>
          </el-button>
          <el-button @click="handleClick" type="text">
            <i class="el-icon-delete"></i>
          </el-button>
        </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ListOfClients',
  props: {
    clients: Array
  }
}
</script>

<style lang="scss">
</style>
