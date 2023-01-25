import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.min.css'
import '@mdi/font/css/materialdesignicons.css'
import '../node_modules/vuetify/dist/vuetify.min.css'
import '../node_modules/vuetify/dist/vuetify.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'
import sweetalert from './plugins/sweetalert'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false

new Vue({
  router,
  sweetalert,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
