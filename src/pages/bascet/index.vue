<template>
  <section class="section bascet">
    <div class="container" v-if="selectedProduct">
      <h1 class="main-title">Оформление заявки на покупку {{ selectedProduct.description.title }}</h1>
      <img class="bascet__img" :src="require(`~/assets/images/${selectedProduct.mainImage}`)" alt="product image">
      <div class="bascet-details">
        <div class="bascet-details__field">Size: <span class="bascet-details__caption">{{ selectedProduct.activeSize }}</span></div>
        <div class="bascet-details__field">Price: <span class="bascet-details__caption">{{ selectedProduct.price }}</span></div>
      </div>
      <main-form @submit="submitHandler"/>
      <ul class="social-list">
        <li class="social-list__item">
          <a href="#" class="social-list__link">
            <span class="fab fa-vk" />
          </a>
        </li>
        <li class="social-list__item">
          <a href="#" class="social-list__link">
            <span class="fab fa-facebook-square" />
          </a>
        </li>
        <li class="social-list__item">
          <a href="#" class="social-list__link">
            <span class="fab fa-instagram" />
          </a>
        </li>
        <li class="social-list__item">
          <a href="#" class="social-list__link">
            <span class="fab youtube" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import MainForm from '~/components/MainForm'
import { mapGetters } from 'vuex'

export default {
  name: 'Bascet',
  layout: 'aside',
  components: {
    MainForm
  },
  data () {
    return {
      selectedProduct: null
    }
  },
  computed: {
    ...mapGetters(['getSelectedProduct'])
  },
  created () {
    this.selectedProduct = this.getSelectedProduct
    if (!this.selectedProduct) return this.$router.push('shop')
  },
  methods: {
    submitHandler (params) {
      this.$router.push(this.localePath({ name: 'thanks' }))
    }
  }
}
</script>

<style lang="scss">
@import "bascet";
</style>
