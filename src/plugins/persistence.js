export default function ({ app }) {
  if (process.browser) {
    window.addEventListener('beforeunload', () => {
      app.$storage.setCookie('bascet', app.store.state.bascet.bascet)
    })
  }
}