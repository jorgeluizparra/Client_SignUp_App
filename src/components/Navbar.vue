<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        <h2>Sistema de cadastro de cliente</h2>
      </div>
    </el-col>
    <el-col :span="24">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="page in pages" :key="page.name" :label="page.name" :to="page.route" :name="page.name" />
      </el-tabs>
    </el-col>
</el-row>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      activeName: 'Clientes',
      pages: [
        {
          name: 'Clientes',
          route: '/'
        },
        {
          name: 'Cadastrar cliente',
          route: '/add-client'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
      padding: 5px 20px;
    }
    .el-col {
      border-radius: 4px;
      h2 {
        margin: auto;
        text-align: center;
      }
      .bg-purple-dark {
        background: #99a9bf;
      }
      .grid-content {
        padding: 20px;
      }
    }
  }
</style>
