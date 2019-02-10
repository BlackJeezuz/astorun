<template>
  <section class="section shop">
    <div class="container">
      <h1 class="main-title">{{ $t('shop.title') }}</h1>
      <nav class="shop-nav">
        <ul class="shop-nav__list">
          <li v-for="filter in filters" class="shop-nav__item" :key="filter.name">
            <nuxt-link
              :to="`${localePath({ name: 'shop-filter', params: { filter: filter.name }})}/`"
              class="shop-nav__link"
            >
              {{ $t(`filters.${filter.name}`) }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Shop',
  layout: 'aside',
  data () {
    return {
      filters: []
    }
  },
  computed: {
    ...mapGetters(['getFilters'])
  },
  created () {
    this.filters = [...this.getFilters]
  }
}
</script>
<style lang="scss">
@import "shop";
</style>
