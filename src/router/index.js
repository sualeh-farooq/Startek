import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component : ()=>import('../views/Analytics.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component : ()=>import('../views/Analytics.vue')
  },
   {
    path: "/cards",
    name : 'CardsVue',
    component : ()=>import('../views/HomeView.vue')
   },
   {
    path: "/forms",
    name : 'FormVue',
    component : ()=>import('../views/Form.vue')
   },
   {
    path: "/charts",
    name : 'ChartVue',
    component : ()=>import('../views/AllCharts.vue')
   },
   {
    path: "/calendar",
    name : 'CalenderVue',
    component : ()=>import('../views/Calendar.vue')
   },
   {
    path: "/inbox",
    name : 'Inbox',
    component : ()=>import('../views/AllChats.vue')
   },
   {
    path: "/tables",
    name : 'TablesVue',
    component : ()=>import('../views/Tables.vue')
   },
   {
    path: "/kanban",
    name : 'Kanban',
    component : ()=>import('../views/KanbanBoard.vue')
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
