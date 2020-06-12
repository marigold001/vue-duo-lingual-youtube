import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AgCookie from './cookie'

Vue.config.productionTip = false
Vue.prototype.$cookie = AgCookie

new Vue({
  router,
  AgCookie,
  render: h => h(App) 
}).$mount('#app')
