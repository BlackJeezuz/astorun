<template>
  <header class="header">
    <div class="container header__container">
      <nuxt-link :to="localePath('index')" class="logo">
        <img class="logo__img" src="~assets/images/logo1.png" alt="astorun">
      </nuxt-link>

      <button
        @click="isMenuActive = !isMenuActive"
        type="button"
        :class="['btn-menu btn-default', {'is-active': isMenuActive}]"
      >
        <span class="btn-menu__text">{{ isMenuActive ? $t('buttons.close') : $t('buttons.menu') }}</span>
        <span class="btn-menu__item btn-menu__item--top" />
        <span class="btn-menu__item btn-menu__item--mid" />
        <span class="btn-menu__item btn-menu__item--bot" />
      </button>

      <div class="header__overlay">
        <nav class="nav">
          <ul class="nav__list">
            <li v-for="link in navigation" :key="link.path" class="nav__item" @click="isMenuActive=false">
              <nuxt-link :to="localePath(link.path)" class="nav__link">{{ $t(link.text) }}</nuxt-link>
            </li>
          </ul>
        </nav>

        <div class="header__langs btn-group">
          <nuxt-link :to="switchLocalePath('ua')" :class="['btn-local', {'is-active': $store.state.i18n.locale === 'ua'}]">UA</nuxt-link>
          <nuxt-link :to="switchLocalePath('ru')" :class="['btn-local', {'is-active': $store.state.i18n.locale === 'ru'}]">RU</nuxt-link>
          <nuxt-link :to="switchLocalePath('en')" :class="['btn-local', {'is-active': $store.state.i18n.locale === 'en'}]">EN</nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SideMenu',
  data () {
    return {
      isMenuActive: false
    }
  },
  computed: {
    navigation () {
      return [{
        text: 'links.mainpage',
        path: 'index'
      }, {
        text: 'links.shop',
        path: 'shop'
      }, {
        text: 'links.collection',
        path: 'collection'
      }, {
        text: 'links.contacts',
        path: 'contacts'
      }, {
        text: 'links.news',
        path: 'news'
      }]
    }
  },
  methods: {
    handleNavClick (target) {
      if (!target.classList.contains('navigation__link') && !target.classList.contains('navigation__text')) return
      this.isMenuActive = !this.isMenuActive
    }
  }
}
</script>

<style lang="scss">
@import "header";
</style>
