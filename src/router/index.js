import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import Analytics from '../views/Analytics.vue'
import Cards from '../views/cards.vue'

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
    path: "/cards",
    name : 'CardsVue',
    component : Cards
   },
   {
    path: '/:pathMatch(.*)*',
    name : 'NotFound',
    component : NotFound
   },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
