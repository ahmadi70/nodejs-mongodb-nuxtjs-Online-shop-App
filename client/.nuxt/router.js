import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4257d267 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _06d9ab27 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _54fc678a = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _b99033fe = () => interopDefault(import('../pages/products/_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _1062e5c4 = () => interopDefault(import('../pages/reviews/_id.vue' /* webpackChunkName: "pages/reviews/_id" */))
const _78b02f50 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/login",
    component: _4257d267,
    name: "login"
  }, {
    path: "/profile",
    component: _06d9ab27,
    name: "profile"
  }, {
    path: "/signup",
    component: _54fc678a,
    name: "signup"
  }, {
    path: "/products/:id?",
    component: _b99033fe,
    name: "products-id"
  }, {
    path: "/reviews/:id?",
    component: _1062e5c4,
    name: "reviews-id"
  }, {
    path: "/",
    component: _78b02f50,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
