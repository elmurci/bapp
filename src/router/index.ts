import Vue from 'vue'
import VueRouter from 'vue-router'

import { setPageTitleMiddleware } from './middlewares'
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'is-active',
  mode: 'history',
  routes
})

router.beforeEach(setPageTitleMiddleware)

export default router
