import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import AppLayout from './layout/App.vue'
import './scss/style.scss'

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  offset: -100
})

Vue.component('app-layout', AppLayout)

new Vue({
  i18n,
  name: 'Root',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
