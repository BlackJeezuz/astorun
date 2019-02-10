<template>
  <section class="section product" v-if="product">
    <h1 class="main-title product__title">{{ product.description.title }}</h1>
    <div class="product__body">
      <div class="product__container">
        <Slider v-if="product.images.length" class="product__slider">
          <Slide
            v-for="(imageUrl, index) in product.images"
            :key="`slide-${index}`"
            class="product__slide"
          >
            <img :src="require(`~/assets/images/${imageUrl}`)" class="product__img">
          </Slide>
        </Slider>
      </div>
      <div class="product__info">
        <div class="product__container">
          <div class="product__price">{{ product.price }}</div>
          <Dropdown class="product__dropdown" :options="dropOptions" optionTypes="buttons">
            <span slot="icon" class="dropdown__icon fas fa-chevron-down"/>
          </Dropdown>
          <button v-if="!isProductInBascet" @click="handleBuy" class="product__btn">{{ $t('product.buy') }}</button>
          <nuxt-link
            v-else
            :to="`${localePath({ name: 'bascet' })}/`"
            class="product__btn product__btn--success"
          >{{ $t('product.tobascet') }}</nuxt-link>
        </div>
      </div>
      <div class="product__container">
        <main class="product__description" v-html="product.description.text"/>
        <nav class="product-nav">
          <nuxt-link
            v-if="product.nextProduct"
            :to="`${localePath({ name: 'product', params: { product: `${product.nextProduct.id}-${product.nextProduct.category}` }})}/`"
            class="product-nav__link product-nav__link--next"
          >
            <span>{{ $t('product.navigation.next') }}</span>
            <span class="product-nav__icon fas fa-arrow-circle-right"/>
          </nuxt-link>
          <nuxt-link
            v-if="product.prevProduct"
            :to="`${localePath({ name: 'product', params: { product: `${product.prevProduct.id}-${product.prevProduct.category}` }})}/`"
            class="product-nav__link product-nav__link--prev"
          >
            <span class="product-nav__icon fas fa-arrow-circle-left"/>
            <span>{{ $t('product.navigation.prev') }} {{ product.filter }}</span>
          </nuxt-link>
          <button @click="$router.back()" class="btn-default product-nav__link">{{ $t('product.navigation.back') }}</button>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from "~/components/Slider";
import Dropdown from "~/components/Dropdown";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Product",
  layout: "aside",
  components: {
    Slider,
    Dropdown
  },
  data() {
    return {
      product: null,
      activeSize: null
    };
  },
  computed: {
    ...mapGetters(["getProductByID", "getProductFromBascet"]),
    dropOptions() {
      return this.product.sizes.map(size => {
        return {
          text: size,
          handler: this.optionHandler(size)
        };
      });
    },
    isProductInBascet() {
      return this.getProductFromBascet(this.product.id);
    }
  },
  created() {
    let routesData = this.$route.params.product.split("-");

    let category = routesData[routesData.length - 1];
    let id = routesData.filter(item => item !== category).join("-");

    this.product = this.getProductByID(id);
    this.activeSize = this.product.sizes[0];
  },
  methods: {
    ...mapActions(["addProduct"]),
    optionHandler(option) {
      return () => (this.activeSize = option);
    },
    handleBuy() {
      this.addProduct({ ...this.product, activeSize: this.activeSize });
    }
  }
};
</script>

<style lang="scss">
@import "product";
</style>