<template>
    <el-dialog
    title="Adicionar dependente"
    :visible.sync="showDialog"
    :before-close="handleClose"
    width="30%">
        <el-form ref="form" :model="form">
            <el-form-item>
                <el-input v-model="form.name" placeholder="Nome completo" />
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.age" placeholder="Idade" />
            </el-form-item>
            <el-select v-model="form.relation" placeholder="Relação">
                <el-option label="Mãe" value="Mãe"></el-option>
                <el-option label="Pai" value="Pai"></el-option>
                <el-option label="Filho(a)" value="Filho(a)"></el-option>
                <el-option label="Avô(ó)" value="Avô(ó)"></el-option>
                <el-option label="Irmãos" value="Irmãos"></el-option>
            </el-select>
            <el-form-item>
                <el-button @click="$emit('submitForm', form)">Salvar</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
export default {
    props: {
       showDialog : Boolean,
       form: Object
    },
    methods: {
        handleClose () {
            this.$emit('handleClose');
        }
    },
}
</script>