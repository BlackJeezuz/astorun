<template>
  <div class="products">
    <ul class="filters">
      <li v-for="filter in filters" :key="filter" class="filters__item">
        <button @click="handleFilter(filter)" :class="['filters__btn', { 'is-active': activeFilter === filter}]">{{ $t(`categories.${filter}`) }}</button>
      </li>
    </ul>
    <transition-group
      v-if="activeFilter"
      name="fade-right"
      mode="out-in"
      tag="ul"
      class="product-list"
    >
      <li
        v-for="(product, index) in activeProducts"
        class="product-card"
        :key="`${index}-${product.category}-${product.id}`"
      >
        <nuxt-link :to="`${localePath({ name: pathName, params: { product: `${product.id}-${activeFilter}` } })}/`" class="product-card__link">
          <img :src="require(`~/assets/images/${product.mainImage}`)" alt="product-img" class="product-card__img">
          <h3 class="product-card__name">{{ product.description.title }}</h3>
        </nuxt-link>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProductGrid',
  props: {
    products: {
      type: Array,
      default: () => []
    },
    pathName: {
      type: String,
      default: 'product'
    },
    page: {
      type: String,
      default: 'shop'
    }
  },
  data () {
    return {
      filters: [],
      activeFilter: null
    }
  },
  computed: {
    ...mapGetters(['getActiveCategory', 'getCategories']),
    activeProducts () {
      return this.products.filter(product => product.category === this.activeFilter)
    }
  },
  created () {
    this.filters = this.getCategories
    this.activeFilter = this.getActiveCategory(this.page)
  },
  methods: {
    ...mapActions(['selectCategory']),
    handleFilter (filter) {
      this.activeFilter = filter
      this.selectCategory({ page: this.page, category: this.activeFilter })
    }
  }
}
</script>

<style lang="scss">
@import 'product-grid';
</style>
