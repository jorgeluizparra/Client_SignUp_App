<template>
    <div class="new-client-form">
        <el-form ref="form" :model="form" >
            <el-form-item>
                <el-input :disabled="codeField" v-model="form.code" placeholder="Código do cliente" />
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.name" placeholder="Nome completo" />
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.address" placeholder="Endereço" />
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.phone" placeholder="Telefone" />
            </el-form-item>
            <dependents-list :dependents="form.dependents" />
            <new-dependent-dialog
              :showDialog="showDialog"
              :form="newDependent"
              v-on:submitForm="addDependentToList($event)"
              v-on:handleClose="showDialog = false" />
            <el-form-item id="addDependentButton">
                <el-button type="button" @click="showDialog = !showDialog">Adicionar dependente</el-button>
            </el-form-item>
            <el-form-item>
                <el-button @click="submitForm()">Salvar</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    components: {
        'dependents-list': require('../components/ListOfDependents.vue').default,
        'new-dependent-dialog': require('../components/NewDependentDialog.vue').default
    },
    props: {
      form: Object,
      codeField: Boolean
    },
    methods: {
        ...mapActions(['addDependent', 'saveNewClient']),
        addDependentToList(payload) {
            this.addDependent(payload);
            this.showDialog = false;

            // Clear fields
            // this.newDependent.name = ''
            // this.newDependent.age = ''
            // this.newDependent.relation = ''
        },
        submitForm () {
            this.saveNewClient(this.form);
        }
    },
    data() {
        return {
            showDialog: false,
            newDependent: {
                name: '',
                age: '',
                relation: ''
            }
        }
    },
}
</script>

<style lang="scss">
    .el-button {
        margin-top: 10px;
    }
    #addDependentButton {
        text-align: center;
    }
</style>