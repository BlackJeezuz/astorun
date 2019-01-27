<template>
  <section class="section">
    <div class="container">
      <h1 class="main-title">{{ $t('shop.title') }} в категории {{ $route.params.filter }}</h1>
      <ProductGrid :products="products" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductGrid from '~/components/ProductGrid'

export default {
  name: 'Category',
  layout: 'aside',
  components: {
    ProductGrid
  },
  data () {
    return {
      products: [],
      categories: []
    }
  },
  computed: {
    ...mapGetters(['getProductsByfilter', 'getCategories'])
  },
  created () {
    this.products = [...this.getProductsByfilter(this.$route.params.filter)],
    this.categories = [...this.getCategories]
  }
}
</script>

<style lang="scss">
@import "filter";
</style>