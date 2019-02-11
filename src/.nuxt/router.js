import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _0776a2ef = () => interopDefault(import('..\\pages\\basket\\index.vue' /* webpackChunkName: "pages_basket_index" */))
const _2b780cd2 = () => interopDefault(import('..\\pages\\collection\\index.vue' /* webpackChunkName: "pages_collection_index" */))
const _c38fc8fc = () => interopDefault(import('..\\pages\\contacts\\index.vue' /* webpackChunkName: "pages_contacts_index" */))
const _b6aaaf2e = () => interopDefault(import('..\\pages\\faq\\index.vue' /* webpackChunkName: "pages_faq_index" */))
const _014102fc = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages_news_index" */))
const _36b7b023 = () => interopDefault(import('..\\pages\\offer\\index.vue' /* webpackChunkName: "pages_offer_index" */))
const _47754a8a = () => interopDefault(import('..\\pages\\partnership\\index.vue' /* webpackChunkName: "pages_partnership_index" */))
const _722ce2a8 = () => interopDefault(import('..\\pages\\rules\\index.vue' /* webpackChunkName: "pages_rules_index" */))
const _49d66b02 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages_shop_index" */))
const _7c1c93e8 = () => interopDefault(import('..\\pages\\thanks\\index.vue' /* webpackChunkName: "pages_thanks_index" */))
const _72d9e827 = () => interopDefault(import('..\\pages\\collection\\_product\\index.vue' /* webpackChunkName: "pages_collection__product_index" */))
const _b564e050 = () => interopDefault(import('..\\pages\\news\\_id\\index.vue' /* webpackChunkName: "pages_news__id_index" */))
const _6fc0697e = () => interopDefault(import('..\\pages\\shop\\_filter\\index.vue' /* webpackChunkName: "pages_shop__filter_index" */))
const _3140eaf5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _27173c05 = () => interopDefault(import('..\\pages\\_product\\index.vue' /* webpackChunkName: "pages__product_index" */))

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
      path: "/basket",
      component: _0776a2ef,
      name: "basket___ru"
    }, {
      path: "/en/basket",
      component: _0776a2ef,
      name: "basket___en"
    }, {
      path: "/ua/basket",
      component: _0776a2ef,
      name: "basket___ua"
    }, {
      path: "/collection",
      component: _2b780cd2,
      name: "collection___ru"
    }, {
      path: "/en/collection",
      component: _2b780cd2,
      name: "collection___en"
    }, {
      path: "/ua/collection",
      component: _2b780cd2,
      name: "collection___ua"
    }, {
      path: "/contacts",
      component: _c38fc8fc,
      name: "contacts___ru"
    }, {
      path: "/en/contacts",
      component: _c38fc8fc,
      name: "contacts___en"
    }, {
      path: "/ua/contacts",
      component: _c38fc8fc,
      name: "contacts___ua"
    }, {
      path: "/faq",
      component: _b6aaaf2e,
      name: "faq___ru"
    }, {
      path: "/en/faq",
      component: _b6aaaf2e,
      name: "faq___en"
    }, {
      path: "/ua/faq",
      component: _b6aaaf2e,
      name: "faq___ua"
    }, {
      path: "/news",
      component: _014102fc,
      name: "news___ru"
    }, {
      path: "/en/news",
      component: _014102fc,
      name: "news___en"
    }, {
      path: "/ua/news",
      component: _014102fc,
      name: "news___ua"
    }, {
      path: "/offer",
      component: _36b7b023,
      name: "offer___ru"
    }, {
      path: "/en/offer",
      component: _36b7b023,
      name: "offer___en"
    }, {
      path: "/ua/offer",
      component: _36b7b023,
      name: "offer___ua"
    }, {
      path: "/partnership",
      component: _47754a8a,
      name: "partnership___ru"
    }, {
      path: "/en/partnership",
      component: _47754a8a,
      name: "partnership___en"
    }, {
      path: "/ua/partnership",
      component: _47754a8a,
      name: "partnership___ua"
    }, {
      path: "/rules",
      component: _722ce2a8,
      name: "rules___ru"
    }, {
      path: "/en/rules",
      component: _722ce2a8,
      name: "rules___en"
    }, {
      path: "/ua/rules",
      component: _722ce2a8,
      name: "rules___ua"
    }, {
      path: "/shop",
      component: _49d66b02,
      name: "shop___ru"
    }, {
      path: "/en/shop",
      component: _49d66b02,
      name: "shop___en"
    }, {
      path: "/ua/shop",
      component: _49d66b02,
      name: "shop___ua"
    }, {
      path: "/thanks",
      component: _7c1c93e8,
      name: "thanks___ru"
    }, {
      path: "/en/thanks",
      component: _7c1c93e8,
      name: "thanks___en"
    }, {
      path: "/ua/thanks",
      component: _7c1c93e8,
      name: "thanks___ua"
    }, {
      path: "/collection/:product",
      component: _72d9e827,
      name: "collection-product___ru"
    }, {
      path: "/en/collection/:product",
      component: _72d9e827,
      name: "collection-product___en"
    }, {
      path: "/ua/collection/:product",
      component: _72d9e827,
      name: "collection-product___ua"
    }, {
      path: "/news/:id",
      component: _b564e050,
      name: "news-id___ru"
    }, {
      path: "/en/news/:id",
      component: _b564e050,
      name: "news-id___en"
    }, {
      path: "/ua/news/:id",
      component: _b564e050,
      name: "news-id___ua"
    }, {
      path: "/shop/:filter",
      component: _6fc0697e,
      name: "shop-filter___ru"
    }, {
      path: "/en/shop/:filter",
      component: _6fc0697e,
      name: "shop-filter___en"
    }, {
      path: "/ua/shop/:filter",
      component: _6fc0697e,
      name: "shop-filter___ua"
    }, {
      path: "/",
      component: _3140eaf5,
      name: "index___ru"
    }, {
      path: "/en/",
      component: _3140eaf5,
      name: "index___en"
    }, {
      path: "/ua/",
      component: _3140eaf5,
      name: "index___ua"
    }, {
      path: "/:product",
      component: _27173c05,
      name: "product___ru"
    }, {
      path: "/en/:product",
      component: _27173c05,
      name: "product___en"
    }, {
      path: "/ua/:product",
      component: _27173c05,
      name: "product___ua"
    }],

    fallback: false
  })
}
