import axios from 'axios'
import router from '../../router/index'

  const state = {
    endpoints: {
      getClients: 'http://localhost:5000/api/v1/clients/',
      createClient: 'http://localhost:5000/api/v1/clients/',
      deleteClient: 'http://localhost:5000/api/v1/clients/'
    },
    clientsList: [],
    newClientForm: {
      code: '',
      name: '',
      address: '',
      phone: '',
      dependents: []
    },
    editClientForm: {}
  }

  const mutations = {
    setClients (state, payload) {
      state.clientsList = payload;
    },
    addDependent (state, payload) {
      state.newClientForm.dependents.push(payload);
    },
    setNewClient (state, payload) {
      state.clientsList.push(payload);
    },
    removeClient (state, index) {
      state.clientsList.splice(index, 1);
    },
    setEditClient (state, index) {
      state.editClientForm = state.clientsList[index];
    }
  }

  const actions = {
    getClients ({state, commit}) {
      axios.get(state.endpoints.getClients)
        .then( res => {
          // console.log('get clients', res.data)
          commit('setClients', res.data);
        })
        .catch ( error => {
          console.log(error);
        })
    },
    addDependent ({commit}, payload) {
      commit('addDependent', payload);
    },
    saveNewClient ({state, commit}, payload) {
      axios.post(state.endpoints.createClient, payload)
        .then( res => {
          // console.log('new client', res.data);
          commit('setNewClient', res.data);
          router.push('/')
        })
        .catch ( error => {
          console.log(error);
        })
    },
    deleteClient ({state, commit}, index) {
      // console.log('delete client', state.clientsList[index].id);
      axios.delete(state.endpoints.deleteClient + state.clientsList[index].id)
        .then( () => {
          // console.log('delete client', res.data);
          commit('removeClient', index);
        })
        .catch ( error => {
          console.log(error);
        })
    },
    setEditClient ({commit}, index) {
      commit('setEditClient', index);
      router.push('/edit-client');
    }
  }

  const getters = {
    clients: (state) => {
      return state.clientsList
    },
    newClientForm: (state) => {
      return state.newClientForm
    },
    editClientForm: (state) => {
      return state.editClientForm
    }
  }

export default {
  state,
  mutations,
  actions,
  getters
}
