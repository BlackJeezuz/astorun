import news from '~/static/placeholders/news.json'

const state = () => ({
  news: []
})

const getters = {
  getNews: state => (from, to) => {
    let news = []

    for (let i = from; i < to; i++) {
      if (!state.news[i]) break
      news.push(state.news[i])
    }

    return news
  },
  getNewsitem: state => id => {
    let itemIndex = null

    let newsitem = state.news.find((item, index) => {
      if (item.id === id) {
        itemIndex = index
        return true
      }
      return false
    })

    let prevItem = state.news[itemIndex - 1]
    let nextItem = state.news[itemIndex + 1]

    let prevId = prevItem ? prevItem.id : null
    let nextId = nextItem ? nextItem.id : null

    return {
      ...newsitem,
      prevId,
      nextId
    }
  }
}

const mutations = {
  SET_NEWS (state, news) {
    state.news = news
  }
}

const actions = {
  nuxtServerInit ({ commit }, { app })  {
    commit('SET_NEWS', news)
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}