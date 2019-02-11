export default function ({ app }) {
  if (process.browser) {
    window.onNuxtReady(({ $store }) => {
      let basket = app.$storage.getLocalStorage('basket')
      if (basket) $store.dispatch('setbasket', basket)
    })
    
    window.addEventListener('beforeunload', () => {
      app.$storage.setLocalStorage('basket', app.store.state.basket.basket)
    })
  }
}
