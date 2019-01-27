<template>
  <section class="section category">
    <div class="container">
      <h1 class="main-title">{{ $t('collection.title') }}</h1>
      <ProductGrid :products="collections" pathName="collection-product" page="collection" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductGrid from '~/components/ProductGrid'

export default {
  name: 'Collection',
  layout: 'aside',
  components: {
    ProductGrid
  },
  data () {
    return {
      collections: null,
      categories: null
    }
  },
  computed: {
    ...mapGetters(['getCollections', 'getCategories'])
  },
  created () {
    const collectionData = this.getCollections
    this.categories = [...this.getCategories]
    this.collections = [...this.getCollections]
  }
}
</script>
