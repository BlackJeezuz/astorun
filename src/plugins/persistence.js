export default function ({ app }) {
  if (process.browser) {
    window.onNuxtReady(({ $store }) => {
      let bascet = app.$storage.getLocalStorage('bascet')
      if (bascet) $store.dispatch('setBascet', bascet)
    })
    
    window.addEventListener('beforeunload', () => {
      app.$storage.setLocalStorage('bascet', app.store.state.bascet.bascet)
    })
  }
}