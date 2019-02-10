const state = {
  bascet: []
}

const mutations = {
  REMOVE_PRODUCT (state, id) {
    let position = null

    state.bascet.forEach((item, index) => {
      if (item.id === id) position = index
    })

    if (position !== null) state.bascet.splice(position, 1)
  },
  ADD_PRODUCT (state, product) {
    product.quantity = 1
    state.bascet.push(product)
  },
  SET_BASCET (state, bascet) {
    state.bascet = bascet
  }
}

const actions = {
  removeProduct: ({ commit }, id) => commit('REMOVE_PRODUCT', id),
  addProduct: ({ commit }, product) => commit('ADD_PRODUCT', product),
  nuxtServerInit ({ commit }, { app }) {
    let bascet = app.$storage.getCookie('bascet')

    if (bascet) {
      commit('SET_BASCET', bascet)
    }
  }
}

const getters = {
  getBascet: state => state.bascet,
  getProductFromBascet: state => id => state.bascet.find(item => item.id === id),
  bascetLength: state => state.bascet.length
}

export default {
  state,
  getters,
  mutations,
  actions
}