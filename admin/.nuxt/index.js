import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_7309bb41 from 'nuxt_plugin_plugin_7309bb41' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_workbox_c05c499a from 'nuxt_plugin_workbox_c05c499a' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_nuxticons_3c8277d1 from 'nuxt_plugin_nuxticons_3c8277d1' // Source: ./nuxt-icons.js (mode: 'all')
import nuxt_plugin_bootstrapvue_7d251706 from 'nuxt_plugin_bootstrapvue_7d251706' // Source: ./bootstrap-vue.js (mode: 'all')
import nuxt_plugin_pluginclient_22c9fe3d from 'nuxt_plugin_pluginclient_22c9fe3d' // Source: ./content/plugin.client.js (mode: 'client')
import nuxt_plugin_pluginserver_eef92076 from 'nuxt_plugin_pluginserver_eef92076' // Source: ./content/plugin.server.js (mode: 'server')
import nuxt_plugin_axios_92fc0052 from 'nuxt_plugin_axios_92fc0052' // Source: ./axios.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"admin","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"## Build Setup"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"admin"},{"hid":"theme-color","name":"theme-color","content":"black"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"admin"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"admin"},{"hid":"og:description","name":"og:description","property":"og:description","content":"## Build Setup"}],"script":[{"src":"\u002Fjs\u002Fsolid.js"},{"src":"\u002Fjs\u002Ffontawesome.js"},{"src":"\u002Fjs\u002Fjquery.min.js"},{"src":"\u002Fjs\u002Fjquery-3.5.1.slim.min.js"},{"src":"\u002Fjs\u002Fpopper.min.js"},{"src":"\u002Fjs\u002Fjs.js"},{"src":"\u002Fjs\u002Fbootstrap.min.js"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"\u002Fcss\u002Fbootstrap.min.css"},{"rel":"stylesheet","href":"\u002Fcss\u002Fcustom-style.css"},{"rel":"stylesheet","href":"\u002Fcss\u002FadminLayout.css"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.d10405ab.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.5f6a36.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.5f6a36.png","sizes":"512x512"}],"style":[],"htmlAttrs":{"lang":"en"}},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_7309bb41 === 'function') {
    await nuxt_plugin_plugin_7309bb41(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_c05c499a === 'function') {
    await nuxt_plugin_workbox_c05c499a(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxticons_3c8277d1 === 'function') {
    await nuxt_plugin_nuxticons_3c8277d1(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_7d251706 === 'function') {
    await nuxt_plugin_bootstrapvue_7d251706(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_22c9fe3d === 'function') {
    await nuxt_plugin_pluginclient_22c9fe3d(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_eef92076 === 'function') {
    await nuxt_plugin_pluginserver_eef92076(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_92fc0052 === 'function') {
    await nuxt_plugin_axios_92fc0052(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
