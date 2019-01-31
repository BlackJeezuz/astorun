import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _0d2b69bf = () => interopDefault(import('..\\pages\\bascet\\index.vue' /* webpackChunkName: "pages_bascet_index" */))
const _0c27e95f = () => interopDefault(import('..\\pages\\collection\\index.vue' /* webpackChunkName: "pages_collection_index" */))
const _16655d4a = () => interopDefault(import('..\\pages\\contacts\\index.vue' /* webpackChunkName: "pages_contacts_index" */))
const _d076376c = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages_news_index" */))
const _737a3047 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages_shop_index" */))
const _52d66c58 = () => interopDefault(import('..\\pages\\thanks\\index.vue' /* webpackChunkName: "pages_thanks_index" */))
const _aaea8422 = () => interopDefault(import('..\\pages\\collection\\_product\\index.vue' /* webpackChunkName: "pages_collection__product_index" */))
const _32c88710 = () => interopDefault(import('..\\pages\\news\\_id\\index.vue' /* webpackChunkName: "pages_news__id_index" */))
const _4bfd04b6 = () => interopDefault(import('..\\pages\\shop\\_filter\\index.vue' /* webpackChunkName: "pages_shop__filter_index" */))
const _780f7286 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _c1770466 = () => interopDefault(import('..\\pages\\_product\\index.vue' /* webpackChunkName: "pages__product_index" */))

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
      component: _0d2b69bf,
      name: "bascet___ru"
    }, {
      path: "/en/bascet",
      component: _0d2b69bf,
      name: "bascet___en"
    }, {
      path: "/ua/bascet",
      component: _0d2b69bf,
      name: "bascet___ua"
    }, {
      path: "/collection",
      component: _0c27e95f,
      name: "collection___ru"
    }, {
      path: "/en/collection",
      component: _0c27e95f,
      name: "collection___en"
    }, {
      path: "/ua/collection",
      component: _0c27e95f,
      name: "collection___ua"
    }, {
      path: "/contacts",
      component: _16655d4a,
      name: "contacts___ru"
    }, {
      path: "/en/contacts",
      component: _16655d4a,
      name: "contacts___en"
    }, {
      path: "/ua/contacts",
      component: _16655d4a,
      name: "contacts___ua"
    }, {
      path: "/news",
      component: _d076376c,
      name: "news___ru"
    }, {
      path: "/en/news",
      component: _d076376c,
      name: "news___en"
    }, {
      path: "/ua/news",
      component: _d076376c,
      name: "news___ua"
    }, {
      path: "/shop",
      component: _737a3047,
      name: "shop___ru"
    }, {
      path: "/en/shop",
      component: _737a3047,
      name: "shop___en"
    }, {
      path: "/ua/shop",
      component: _737a3047,
      name: "shop___ua"
    }, {
      path: "/thanks",
      component: _52d66c58,
      name: "thanks___ru"
    }, {
      path: "/en/thanks",
      component: _52d66c58,
      name: "thanks___en"
    }, {
      path: "/ua/thanks",
      component: _52d66c58,
      name: "thanks___ua"
    }, {
      path: "/collection/:product",
      component: _aaea8422,
      name: "collection-product___ru"
    }, {
      path: "/en/collection/:product",
      component: _aaea8422,
      name: "collection-product___en"
    }, {
      path: "/ua/collection/:product",
      component: _aaea8422,
      name: "collection-product___ua"
    }, {
      path: "/news/:id",
      component: _32c88710,
      name: "news-id___ru"
    }, {
      path: "/en/news/:id",
      component: _32c88710,
      name: "news-id___en"
    }, {
      path: "/ua/news/:id",
      component: _32c88710,
      name: "news-id___ua"
    }, {
      path: "/shop/:filter",
      component: _4bfd04b6,
      name: "shop-filter___ru"
    }, {
      path: "/en/shop/:filter",
      component: _4bfd04b6,
      name: "shop-filter___en"
    }, {
      path: "/ua/shop/:filter",
      component: _4bfd04b6,
      name: "shop-filter___ua"
    }, {
      path: "/",
      component: _780f7286,
      name: "index___ru"
    }, {
      path: "/en/",
      component: _780f7286,
      name: "index___en"
    }, {
      path: "/ua/",
      component: _780f7286,
      name: "index___ua"
    }, {
      path: "/:product",
      component: _c1770466,
      name: "product___ru"
    }, {
      path: "/en/:product",
      component: _c1770466,
      name: "product___en"
    }, {
      path: "/ua/:product",
      component: _c1770466,
      name: "product___ua"
    }],

    fallback: false
  })
}
