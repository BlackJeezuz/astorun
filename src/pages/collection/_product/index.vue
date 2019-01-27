<template>
  <section class="section">
    <div v-if="collection" class="container">
      <h1 class="main-title">{{ collection.description.title }}</h1>
      <div class="collection">
        <div
          v-for="(product, index) in products"
          :key="`block-${index}`"
          class="collection__block"
        >
          <Checkbox
            class="collection__checkbox"
            :id="`check-${product.id}`"
            :checked="getProductFromBascet(product.id) ? true : false"
            @onClick="handleCheck($event, product)"
          />
          <nuxt-link :to="`${localePath({
            name: 'product',
            params: { product: `${product.id}-${product.category}`}
          })}/`">
            <Slider class="collection__slider">
              <Slide
                v-for="(imgName, index) in product.images"
                :key="`slide-${index}`"
                class="collection__slide"
              >
                <img :src="require(`~/assets/images/${imgName}`)" class="collection__img">
              </Slide>
            </Slider>
          </nuxt-link>
        </div>

        <nuxt-link
          v-if="bascetLength"
          :to="`${localePath({ name: 'bascet' })}/`"
          class="btn-main btn-main--danger"
        >
          В корзину
        </nuxt-link>
      </div>
    </div>
    <ModalConfirm
      :removeId="removeId"
      @close="removeId = null"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Slider from '~/components/Slider'
import Checkbox from '~/components/Checkbox'
import ModalConfirm from '~/components/Modal/ModalConfirm'

export default {
  name: 'CollectionPage',
  components: {
    Slider,
    Checkbox,
    ModalConfirm
  },
  layout: 'aside',
  data () {
    return {
      collection: null,
      removeId: null
    }
  },
  computed: {
    ...mapGetters([
      'getCollection',
      'getProductFromBascet',
      'bascetLength'
    ]),
    products () {
      return this.collection.products || []
    }
  },
  created () {
    console.log(this.bascetLength)
    
    let routesData = this.$route.params.product.split('-')

    let category = routesData[routesData.length - 1]
    let id = routesData.filter(item => item !== category).join('-')

    this.collection = this.getCollection({
      id: id,
      category: category
    })
  },
  methods: {
    handleCheck (value, product) {
      if (value) this.removeId = product.id
      else this.$router.push(this.localePath({
        name: 'product',
        params: { product: `${product.id}-${product.category}`}
      }))
    }
  }
}
</script>

<style lang='scss'>
@import 'collection-page';
</style>