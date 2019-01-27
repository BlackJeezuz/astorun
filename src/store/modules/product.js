import filters from '~/static/placeholders/filters.json'
import categories from '~/static/placeholders/categories.json'
import hat from '~/static/placeholders/hat.json'
import pants from '~/static/placeholders/pants.json'
import sweetshot from '~/static/placeholders/sweetshot.json'
import collections from '~/static/placeholders/collections.json'

const state = {
  filters: [],
  categories: [],
  products: [],
  collections: [],
  selectedProduct: null,
  activeCategory: {
    shop: null,
    collection: null
  }
}

const getters = {
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
  getCollections: state => state.collections,
  getCollection: state => ({id, category}) => {
    let productsData = {}

    state.products
      .filter(product => product.collection === id && product.category === category)
      .map(product => {
        let productFilter = product.filter
        if (productFilter in productsData) productsData[productFilter].push(product)
        else productsData[productFilter] = [product]
      })
    
    let products = []
    
    state.filters.forEach(filter => {  
      if (productsData[filter.name]) products = [...products, ...productsData[filter.name]]
    })

    let collection = state.collections.find(collection => {
      return collection.id === id && collection.category === category
    })

    return {
      ...collection,
      products
    }
  },
  getActiveCategory: state => page => state.activeCategory[page]
}

const mutations = {
  SELECT_CATEGORY (state, {page, category}) {
    state.activeCategory[page] = category
  },
  SET_PRODUCTS (state, products) {
    state.products = products
  },
  SET_FILTERS (state, filters) {
    state.filters = filters.sort((a, b) => a.slideOrder - b.slideOrder)
  },
  SET_CATEGORIES (state, categories) {
    state.categories = categories
  },
  SET_COLLECTIONS (state, collections) {
    state.collections = collections
  }
}
const actions = {
  selectCategory: ({ commit }, { page, category }) => commit('SELECT_CATEGORY', { page, category }),
  nuxtServerInit ({ commit }, { app })  {
    commit('SET_FILTERS', filters)
    commit('SET_PRODUCTS', [...hat, ...pants, ...sweetshot])
    commit('SET_CATEGORIES', categories),
    commit('SELECT_CATEGORY', { page: 'shop', category: categories[0] }),
    commit('SELECT_CATEGORY', { page: 'collection', category: categories[0] }),
    commit('SET_COLLECTIONS', collections)
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
