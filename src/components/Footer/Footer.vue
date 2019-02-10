<template>
  <footer class="footer">
    <div class="container footer__container">
      <nav class="footer__nav">
        <ul class="footer__list">
          <li
            v-for="link in navigation"
            :key="link.name"
            class="footer__item"
          >
            <nuxt-link
              class="footer__link"
              :to="`${localePath({ name: link.path })}/`"
            >
              {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="footer__copy">&copy; Asto.run 2019</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      navigation: [{
        name: this.$t('links.faq'),
        path: 'faq'
      }, {
        name: this.$t('links.rules'),
        path: 'rules'
      }, {
        name: this.$t('links.partner'),
        path: 'partnership'
      }, {
        name: this.$t('links.offer'),
        path: 'offer'
      }]
    }
  }
}
</script>

<style lang='scss'>
@import 'footer';
</style>