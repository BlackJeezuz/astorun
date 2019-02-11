const state = () => ({
  basket: [],
  isLoaded: false
})

const mutations = {
  REMOVE_PRODUCT (state, id) {
    let position = null

    state.basket.forEach((item, index) => {
      if (item.id === id) position = index
    })

    if (position !== null) state.basket.splice(position, 1)
  },
  ADD_PRODUCT (state, product) {
    product.quantity = 1
    state.basket.push(product)
  },
  SET_basket (state, basket) {
    basket.forEach(item => state.basket.push(item))
    state.isLoaded = true
  }
}

const actions = {
  removeProduct: ({ commit }, id) => commit('REMOVE_PRODUCT', id),
  addProduct: ({ commit }, product) => commit('ADD_PRODUCT', product),
  setbasket ({ commit }, basket) {
    commit('SET_basket', basket)
  }
}

const getters = {
  getBasket: state => state.basket,
  getProductFromBasket: state => id => state.basket.find(item => item.id === id),
  basketLength: state => state.basket.length,
  isLoaded: state => state.isLoaded
}

export default {
  state,
  getters,
  mutations,
  actions
}