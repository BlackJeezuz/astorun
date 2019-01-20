<template>
  <section class="section category">
    <div class="container">
      <h1 class="main-title">{{ $t('shop.title') }} в категории {{ $route.params.filter }}</h1>
      <ul class="categories">
        <li v-for="category in categories" :key="category" class="categories__item">
          <button @click="activeCategory = category" :class="['categories__btn', { 'is-active': activeCategory === category}]">{{ category }}</button>
        </li>
      </ul>
      <transition-group
        v-if="activeCategory"
        name="fade-right"
        mode="out-in"
        tag="ul"
        class="product-list"
      >
        <li
          v-for="product in activeProducts"
          class="product-card"
          :key="product.id"
        >
          <nuxt-link :to="`${localePath({ name: 'product', params: { product: product.id }})}/`" class="product-card__link">
            <img :src="require(`~/assets/images/${product.mainImage}`)" alt="product-img" class="product-card__img">
            <h3 class="product-card__name">{{ product.description.title }}</h3>
          </nuxt-link>
        </li>
      </transition-group>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Category',
  layout: 'aside',
  data () {
    return {
      products: [],
      categories: [],
      activeCategory: null
    }
  },
  computed: {
    ...mapGetters(['getProductsByfilter', 'getCategories']),
    activeProducts () {
      return this.products.filter(product => product.category === this.activeCategory)
    }
  },
  created () {
    this.products = [...this.getProductsByfilter(this.$route.params.filter)],
    this.categories = [...this.getCategories]
    this.activeCategory = this.categories[0]
  }
}
</script>

<style lang="scss">
@import "filter";
</style>