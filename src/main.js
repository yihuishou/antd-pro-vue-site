import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/core/use'
import bootstrap from '@/core/bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted () {
    bootstrap.init()
  },
  render: h => h(App)
}).$mount('#app')
