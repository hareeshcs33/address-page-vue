import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Address from '@/components/address'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    },
  ]
})
