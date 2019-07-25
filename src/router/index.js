import Vue from 'vue'
import Router from 'vue-router'
import Manager from '../views/Manager'
import Customer from '../views/Customer'
import Home from '../views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/manager',
      name: 'manager',
      component: Manager
    },
    {
      path: '/customer',
      name: 'customer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      component: Customer
    }
  ]
})
