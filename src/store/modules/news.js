const state = {
  news: [{
    id: 'awesome-product-is-comming',
    img: 'foto1.jpg',
    images: ['foto1.jpg', 'foto2.jpg'],
    time: '11/06/2008',
    title: 'Awesome product is comming!',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate ducimus amet saepe! Officiis error quas porro non iure soluta ut nisi aut cumque mollitia optio nulla labore, laborum veritatis.',
    content: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate ducimus amet saepe! Officiis error quas porro non iure soluta ut nisi aut cumque mollitia optio nulla labore, laborum veritatis.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate ducimus amet saepe! Officiis error quas porro non iure soluta ut nisi aut cumque mollitia optio nulla labore, laborum veritatis.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate ducimus amet saepe! Officiis error quas porro non iure soluta ut nisi aut cumque mollitia optio nulla labore, laborum veritatis.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate ducimus amet saepe! Officiis error quas porro non iure soluta ut nisi aut cumque mollitia optio nulla labore, laborum veritatis.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate ducimus amet saepe! Officiis error quas porro non iure soluta ut nisi aut cumque mollitia optio nulla labore, laborum veritatis.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate ducimus amet saepe! Officiis error quas porro non iure soluta ut nisi aut cumque mollitia optio nulla labore, laborum veritatis.</p>'
  }, {
    id: 'awesome-product-2',
    route: 'products-2-news',
    img: 'foto2.jpg',
    images: ['foto1.jpg', 'foto2.jpg'],
    time: '11/06/2008',
    title: 'Awesome product is comming!',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate ducimus amet saepe! Officiis error quas porro non iure soluta ut nisi aut cumque mollitia optio nulla labore, laborum veritatis.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate ducimus amet saepe! Officiis error quas porro non iure soluta ut nisi aut cumque mollitia optio nulla labore, laborum veritatis.'
  }]
}

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
export default {
  state,
  getters
}