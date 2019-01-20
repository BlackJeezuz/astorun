import filters from '~/static/filters.json'
import categories from '~/static/categories.json'
import hat from '~/static/hat.json'
import pants from '~/static/pants.json'
import sweetshot from '~/static/sweetshot.json'

const state = {
  filters: [],
  categories: [],
  products: [],
  selectedProduct: null
}

const getters = {
  products: state => {
    return state.products
  },
  getProductsByfilter: state => (filter) => {
    return state.products.filter(product => product.filter === filter)
  },
  getProductByID: state => (id) => {
    const product = state.products.find((item, index) => item.id === id)

    const categoryProducts = state.products.filter(item => item.category === product.category && item.filter === product.filter)

    const productIndex = categoryProducts.indexOf(product)
    const prevItem = categoryProducts[productIndex - 1]
    const nextItem = categoryProducts[productIndex + 1]
    const prevId = prevItem ? prevItem.id : categoryProducts[categoryProducts.length - 1].id
    const nextId = nextItem ? nextItem.id : categoryProducts[0].id

    return {
      ...product,
      prevId,
      nextId
    }
  },
  getFilters: state => state.filters,
  getCategories: state => state.categories,
  getSelectedProduct: state => state.selectedProduct
}

const mutations = {
  SELECT_PRODUCT (state, product) {
    state.selectedProduct = { ...product }
  },
  SET_PRODUCTS (state, products) {
    state.products = products
  },
  SET_FILTERS (state, filters) {
    state.filters = filters
  },
  SET_CATEGORIES (state, categories) {
    state.categories = categories
  }
}
const actions = {
  selectProduct: ({ commit }, {product, activeSize}) => {
    console.log(product, activeSize)
    commit('SELECT_PRODUCT', { ...product, activeSize })
  },
  nuxtServerInit ({ commit }, { app })  {
    commit('SET_FILTERS', filters)
    commit('SET_PRODUCTS', [...hat, ...pants, ...sweetshot])
    commit('SET_CATEGORIES', categories)
  }
  // async nuxtServerInit ({ commit }, { app }) {
  //   await app.$axios.get('./filters.json', {
  //     baseUrl: 'http://localhost:3000/static'
  //   }).then(res => {
  //     let filters = res.data
  //     commit('SET_FILTERS', filters)
  //     return Promise.all(filters.map(filter => app.$axios.get(`./${filter}.json`)))
  //     .then(res => {
  //       let products = []

  //       res.map(response => products = [...products, ...response.data])
        
  //       commit('SET_PRODUCTS', products)
  //     })
  //   })
  //   await app.$axios.get('./categories.json', {
  //     baseUrl: 'http://localhost:3000/static'
  //   }).then(res => commit('SET_CATEGORIES', res.data))
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}
