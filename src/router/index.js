import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // component : import( '../views/HomeView.vue')
    component : HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component : HomeView
  },
   {
    path: '/:pathMatch(.*)*',
    name : 'NotFound',
    component : NotFound
   }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import( '../views/AboutView.vue')
  // },
  // {
  //   path: '/inbox',
  //   name: 'inbox',
  //   component: () => import( '../views/Inbox.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
