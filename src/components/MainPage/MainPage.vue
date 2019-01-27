<template>
  <section class="main">
    <div class="container">
      <nuxt-link :to="localePath('index')" class="logo-link" title="to main page">
        <img class="logo-link__img" src="~assets/images/logo.png" alt="logo">
      </nuxt-link>
      <nav class="main-nav">
        <nuxt-link :to="localePath('shop')" class="main-nav__link">{{ $t('links.shop') }}</nuxt-link>
        <nuxt-link :to="localePath('news')" class="main-nav__link">{{ $t('links.news') }}</nuxt-link>
        <nuxt-link :to="localePath('collection')" class="main-nav__link">{{ $t('links.collection') }}</nuxt-link>
        <nuxt-link :to="localePath('contacts')" class="main-nav__link">{{ $t('links.contacts') }}</nuxt-link>
      </nav>
      <div class="main__langs btn-group">
        <nuxt-link :to="switchLocalePath('ua')" :class="['btn-main-local', {'is-active': $store.state.i18n.locale === 'ua'}]">UA</nuxt-link>
        <nuxt-link :to="switchLocalePath('ru')" :class="['btn-main-local', {'is-active': $store.state.i18n.locale === 'ru'}]">RU</nuxt-link>
        <nuxt-link :to="switchLocalePath('en')" :class="['btn-main-local', {'is-active': $store.state.i18n.locale === 'en'}]">EN</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>

<style lang="scss">
@import "mainpage";
</style>
