import Vue from 'vue'
import VueRouter from 'vue-router'

// Views
import Clients from '../views/Clients.vue'
import AddClient from '../views/AddClient.vue'
import EditClient from '../views/EditClient.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Clients',
    component: Clients
  },
  {
    path: '/add-client',
    name: 'AddClient',
    component: AddClient
  },
  {
    path: '/edit-client',
    name: 'EditClient',
    component: EditClient
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
