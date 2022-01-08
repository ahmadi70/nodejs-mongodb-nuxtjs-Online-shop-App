import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _159cdccc = () => interopDefault(import('../pages/categories/index.vue' /* webpackChunkName: "pages/categories/index" */))
const _4d9b1fa2 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _4ab2222e = () => interopDefault(import('../pages/categories/all.vue' /* webpackChunkName: "pages/categories/all" */))
const _a20210d8 = () => interopDefault(import('../pages/products/report.vue' /* webpackChunkName: "pages/products/report" */))
const _a15ebaec = () => interopDefault(import('../pages/products/_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _13dc8ae7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/categories",
    component: _159cdccc,
    name: "categories"
  }, {
    path: "/products",
    component: _4d9b1fa2,
    name: "products"
  }, {
    path: "/categories/all",
    component: _4ab2222e,
    name: "categories-all"
  }, {
    path: "/products/report",
    component: _a20210d8,
    name: "products-report"
  }, {
    path: "/products/:id",
    component: _a15ebaec,
    name: "products-id"
  }, {
    path: "/",
    component: _13dc8ae7,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
