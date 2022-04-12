import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage'
import UserCrud from '../pages/UserCrud'
import DanielTeixeira from '../pages/DanielTeixeira'


Vue.use(VueRouter)

const routes = [
  { path: '/',      name: 'HomePage',    component: HomePage   },
  { path: '/users', name: 'UserCrud', component: UserCrud },
  { path: '/danielteixeira', name: 'DanielTeixeira', component: DanielTeixeira }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
