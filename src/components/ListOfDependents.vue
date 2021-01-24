<template>
  <div class="list-of-dependents">
    <el-table
      :data="dependents"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="Nome">
      </el-table-column>
      <el-table-column
        prop="age"
        label="Idade">
      </el-table-column>
      <el-table-column
        prop="relation"
        label="Relação">
      </el-table-column>
      <el-table-column
        label="Operações">
        <template slot-scope="scope">
          <el-button @click="removeDependent(scope.$index, clients)" type="text">
            <i class="el-icon-delete"></i>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ListOfDependents',
  props: {
    dependents: Array
  },
}
</script>

<style scoped>
</style>
