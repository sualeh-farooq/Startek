import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import '@mdi/font/css/materialdesignicons.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import sweetalert from './plugins/sweetalert'

Vue.config.productionTip = false

new Vue({
  router,
  sweetalert,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
