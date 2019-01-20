<template>
  <section class="section product" v-if="product">
    <h1 class="main-title product__title">{{ product.description.title }}</h1>
    <div class="product__body">
      <div class="product__container">
        <Slider v-if="product.images.length" class="product__slider">
          <Slide v-for="(imageUrl, index) in product.images" :key="`slide-${index}`" class="product__slide">
            <img :src="require(`~/assets/images/${imageUrl}`)" class="product__img">
          </Slide>
        </Slider>
      </div>
      <div class="product__info">
        <div class="product__container">
          <div class="product__price">{{ product.price }}</div>
          <Dropdown
            class="product__dropdown"
            :options="dropOptions"
            optionTypes="buttons"
          >
            <span slot="icon" class="dropdown__icon fas fa-chevron-down" />
          </Dropdown>
          <button @click="handleBuy(product)" class="product__btn">Buy</button>
        </div>
      </div>
      <div class="product__container">
        <main class="product__description" v-html="product.description.text" />
        <nav class="product-nav">
          <nuxt-link
            v-if="product.nextId"
            :to="`${localePath({ name: 'product', params: { product: product.nextId }})}/`"
            class="product-nav__link product-nav__link--next"
          >
            <span>Next {{ product.filter }}</span>
            <span class="product-nav__icon fas fa-arrow-circle-right" />
          </nuxt-link>
          <nuxt-link
            v-if="product.prevId"
            :to="`${localePath({ name: 'product', params: { product: product.prevId }})}/`"
            class="product-nav__link product-nav__link--prev"
          >
            <span class="product-nav__icon fas fa-arrow-circle-left" />
            <span>Prev {{ product.filter }}</span>
          </nuxt-link>
          <nuxt-link :to="`${localePath({ name: 'shop-filter', params: { filter: product.filter }})}/`" class="product-nav__link">Back</nuxt-link>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from '~/components/Slider'
import Dropdown from '~/components/Dropdown'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Product',
  layout: 'aside',
  components: {
    Slider,
    Dropdown
  },
  data () {
    return {
      product: null,
      activeSize: null
    }
  },
  computed: {
    ...mapGetters(['getProductByID']),
    dropOptions () {
      return this.product.sizes.map(size => {
        return {
          text: size,
          handler: this.optionHandler(size)
        }
      })
    }
  },
  created () {
    this.product = this.getProductByID(this.$route.params.product)
    this.activeSize = this.product.sizes[0]
  },
  methods: {
    ...mapActions(['selectProduct']),
    optionHandler (option) {
      return () => this.activeSize = option
    },
    handleBuy (product) {
      this.selectProduct({product, activeSize: this.activeSize})
      this.$router.push(this.localePath({ name: 'bascet' }))
    }
  }
}
</script>

<style lang="scss">
@import "product";
</style>