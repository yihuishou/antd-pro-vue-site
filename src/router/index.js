import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from '@/config/router.config'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        // selector: to.hash
      }
    } else {
      return { y: 0 }
    }
  }
})
