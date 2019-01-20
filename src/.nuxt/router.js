import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _57f405f8 = () => interopDefault(import('..\\pages\\bascet\\index.vue' /* webpackChunkName: "pages_bascet_index" */))
const _4c65c118 = () => interopDefault(import('..\\pages\\collection\\index.vue' /* webpackChunkName: "pages_collection_index" */))
const _5d10617a = () => interopDefault(import('..\\pages\\contacts\\index.vue' /* webpackChunkName: "pages_contacts_index" */))
const _72493ac3 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages_news_index" */))
const _4dfe86c0 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages_shop_index" */))
const _215d660d = () => interopDefault(import('..\\pages\\thanks\\index.vue' /* webpackChunkName: "pages_thanks_index" */))
const _4bf75792 = () => interopDefault(import('..\\pages\\news\\_id\\index.vue' /* webpackChunkName: "pages_news__id_index" */))
const _28afe65d = () => interopDefault(import('..\\pages\\shop\\_filter\\index.vue' /* webpackChunkName: "pages_shop__filter_index" */))
const _14392bf6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _5a56efc6 = () => interopDefault(import('..\\pages\\_product\\index.vue' /* webpackChunkName: "pages__product_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/astorun/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/bascet",
      component: _57f405f8,
      name: "bascet___ru"
    }, {
      path: "/en/bascet",
      component: _57f405f8,
      name: "bascet___en"
    }, {
      path: "/ua/bascet",
      component: _57f405f8,
      name: "bascet___ua"
    }, {
      path: "/collection",
      component: _4c65c118,
      name: "collection___ru"
    }, {
      path: "/en/collection",
      component: _4c65c118,
      name: "collection___en"
    }, {
      path: "/ua/collection",
      component: _4c65c118,
      name: "collection___ua"
    }, {
      path: "/contacts",
      component: _5d10617a,
      name: "contacts___ru"
    }, {
      path: "/en/contacts",
      component: _5d10617a,
      name: "contacts___en"
    }, {
      path: "/ua/contacts",
      component: _5d10617a,
      name: "contacts___ua"
    }, {
      path: "/news",
      component: _72493ac3,
      name: "news___ru"
    }, {
      path: "/en/news",
      component: _72493ac3,
      name: "news___en"
    }, {
      path: "/ua/news",
      component: _72493ac3,
      name: "news___ua"
    }, {
      path: "/shop",
      component: _4dfe86c0,
      name: "shop___ru"
    }, {
      path: "/en/shop",
      component: _4dfe86c0,
      name: "shop___en"
    }, {
      path: "/ua/shop",
      component: _4dfe86c0,
      name: "shop___ua"
    }, {
      path: "/thanks",
      component: _215d660d,
      name: "thanks___ru"
    }, {
      path: "/en/thanks",
      component: _215d660d,
      name: "thanks___en"
    }, {
      path: "/ua/thanks",
      component: _215d660d,
      name: "thanks___ua"
    }, {
      path: "/news/:id",
      component: _4bf75792,
      name: "news-id___ru"
    }, {
      path: "/en/news/:id",
      component: _4bf75792,
      name: "news-id___en"
    }, {
      path: "/ua/news/:id",
      component: _4bf75792,
      name: "news-id___ua"
    }, {
      path: "/shop/:filter",
      component: _28afe65d,
      name: "shop-filter___ru"
    }, {
      path: "/en/shop/:filter",
      component: _28afe65d,
      name: "shop-filter___en"
    }, {
      path: "/ua/shop/:filter",
      component: _28afe65d,
      name: "shop-filter___ua"
    }, {
      path: "/",
      component: _14392bf6,
      name: "index___ru"
    }, {
      path: "/en/",
      component: _14392bf6,
      name: "index___en"
    }, {
      path: "/ua/",
      component: _14392bf6,
      name: "index___ua"
    }, {
      path: "/:product",
      component: _5a56efc6,
      name: "product___ru"
    }, {
      path: "/en/:product",
      component: _5a56efc6,
      name: "product___en"
    }, {
      path: "/ua/:product",
      component: _5a56efc6,
      name: "product___ua"
    }],

    fallback: false
  })
}
