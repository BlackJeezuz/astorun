import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _21c34b88 = () => import('..\\pages\\thanks\\index.vue' /* webpackChunkName: "pages_thanks_index" */).then(m => m.default || m)
const _34167113 = () => import('..\\pages\\collection\\index.vue' /* webpackChunkName: "pages_collection_index" */).then(m => m.default || m)
const _5859eb73 = () => import('..\\pages\\bascet\\index.vue' /* webpackChunkName: "pages_bascet_index" */).then(m => m.default || m)
const _4ffa41fe = () => import('..\\pages\\contacts\\index.vue' /* webpackChunkName: "pages_contacts_index" */).then(m => m.default || m)
const _97f4e20a = () => import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages_shop_index" */).then(m => m.default || m)
const _a564871e = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



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
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
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


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/vue_shop/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/thanks",
			component: _21c34b88,
			name: "thanks___ru"
		},
		{
			path: "/en/thanks",
			component: _21c34b88,
			name: "thanks___en"
		},
		{
			path: "/ua/thanks",
			component: _21c34b88,
			name: "thanks___ua"
		},
		{
			path: "/collection",
			component: _34167113,
			name: "collection___ru"
		},
		{
			path: "/en/collection",
			component: _34167113,
			name: "collection___en"
		},
		{
			path: "/ua/collection",
			component: _34167113,
			name: "collection___ua"
		},
		{
			path: "/bascet",
			component: _5859eb73,
			name: "bascet___ru"
		},
		{
			path: "/en/bascet",
			component: _5859eb73,
			name: "bascet___en"
		},
		{
			path: "/ua/bascet",
			component: _5859eb73,
			name: "bascet___ua"
		},
		{
			path: "/contacts",
			component: _4ffa41fe,
			name: "contacts___ru"
		},
		{
			path: "/en/contacts",
			component: _4ffa41fe,
			name: "contacts___en"
		},
		{
			path: "/ua/contacts",
			component: _4ffa41fe,
			name: "contacts___ua"
		},
		{
			path: "/shop",
			component: _97f4e20a,
			name: "shop___ru"
		},
		{
			path: "/en/shop",
			component: _97f4e20a,
			name: "shop___en"
		},
		{
			path: "/ua/shop",
			component: _97f4e20a,
			name: "shop___ua"
		},
		{
			path: "/",
			component: _a564871e,
			name: "index___ru"
		},
		{
			path: "/en/",
			component: _a564871e,
			name: "index___en"
		},
		{
			path: "/ua/",
			component: _a564871e,
			name: "index___ua"
		}
    ],
    
    
    fallback: false
  })
}
