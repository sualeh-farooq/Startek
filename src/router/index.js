import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import Analytics from '../views/Analytics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component : HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component : Analytics
  },
  {
    path: '/:pathMatch(.*)*',
    name : 'NotFound',
    component : NotFound
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
