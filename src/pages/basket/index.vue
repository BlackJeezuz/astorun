<template>
  <section class="section">
    <div v-if="isLoaded" class="container">
      <h1 class="main-title">{{ $t('basket.title') }}</h1>
      <template v-if="basketLength">
        <div class="basket">
          <ul class="basket__list">
            <li v-for="product in basket" :key="product.id" class="basket__item">
              <div class="basket__container">
                <img
                  class="basket__img"
                  :src="require(`~/assets/images/${product.mainImage}`)"
                  alt="product image"
                >
                <div class="basket-details">
                  <h2 class="basket-details__title">{{ product.description.title }}</h2>
                  <div class="basket-details__field">
                    {{ $t('basket.size') }}:
                    <span class="basket-details__caption">{{ product.activeSize }}</span>
                  </div>
                  <div class="basket-details__field">
                    {{ $t('basket.price') }}:
                    <span
                      class="basket-details__caption"
                    >{{ product.price*product.quantity }}$</span>
                  </div>
                  <div class="basket-details__field basket-quantity">
                    <label :for="product.id" class="basket-quantity__label">{{ $t('basket.quant') }}:</label>
                    <button class="basket-quantity__btn" @click="handleQuantity(product)">
                      <span class="fas fa-chevron-left"/>
                    </button>
                    <input
                      type="tel"
                      class="basket-quantity__input"
                      :value="product.quantity"
                      @change="handleChange($event, product)"
                      :id="product.id"
                    >
                    <button class="basket-quantity__btn" @click="handleQuantity(product, true)">
                      <span class="fas fa-chevron-right"/>
                    </button>
                  </div>
                </div>
                <button
                  class="btn-default basket__remove"
                  title="remove from basket"
                  @click="removeId = product.id"
                />
              </div>
            </li>
          </ul>
          <div class="basket-total">
            <span class="basket-total__caption">{{ $t('basket.total') }}:</span>
            <span class="basket-total__sum">{{ totalSum }}$</span>
          </div>
        </div>
        <MainForm @submit="submitHandler" :checkbox="true" :title="$t('basket.livecontacts')" />
      </template>
      <div v-else class="basket-fallback">
        <h2 class="basket-fallback__title">{{ $t('basket.placeholder') }}</h2>
        <div class="basket-fallback__buttons">
          <nuxt-link class="btn-main btn-main--danger" :to="`${localePath('shop')}/`">
            {{ $t('basket.toshop') }}
            <span class="fas fa-chevron-right"/>
          </nuxt-link>
          <nuxt-link class="btn-main btn-main--danger" :to="`${localePath('collection')}/`">
            {{ $t('basket.tocollection') }}
            <span class="fas fa-chevron-right"/>
          </nuxt-link>
        </div>
      </div>
      <SocialList />
    </div>
    <ModalConfirm :removeId="removeId" @close="removeId = null"/>
  </section>
</template>

<script>
import MainForm from '~/components/MainForm';
import { mapGetters, mapActions } from 'vuex';
import ModalConfirm from '~/components/Modal/ModalConfirm';
import SocialList from '~/components/SocialList'

export default {
  name: 'Basket',
  layout: 'aside',
  components: {
    MainForm,
    ModalConfirm,
    SocialList
  },
  data() {
    return {
      basket: [],
      removeId: null
    };
  },
  computed: {
    ...mapGetters(['getBasket', 'isLoaded', 'basketLength']),
    totalSum() {
      return this.basket.reduce(
        (sum, product) => sum + product.quantity * product.price,
        0
      );
    }
  },
  created () { 
    this.basket = this.getBasket
    if (!this.basket) return this.$router.push('shop');
  },
  methods: {
    submitHandler(params) {
      this.$router.push(this.localePath({ name: 'thanks' }));
    },
    handleQuantity(product, isIncrement) {
      if (isIncrement) ++product.quantity;
      else {
        if (product.quantity === 1) return;
        --product.quantity;
      }
    },
    handleChange(e, product) {
      let value = e.target.value;

      if (!+value) e.target.value = product.quantity;
      product.quantity = value;
    }
  }
};
</script>

<style lang="scss">
@import "basket";
</style>
