<template>
  <section class="section">
    <div class="container">
      <h1 class="main-title">{{ $t('bascet.title') }}</h1>
      <template v-if="bascet.length">
        <div class="bascet">
          <ul class="bascet__list">
            <li v-for="product in bascet" :key="product.id" class="bascet__item">
              <div class="bascet__container">
                <img
                  class="bascet__img"
                  :src="require(`~/assets/images/${product.mainImage}`)"
                  alt="product image"
                >
                <div class="bascet-details">
                  <h2 class="bascet-details__title">{{ product.description.title }}</h2>
                  <div class="bascet-details__field">
                    {{ $t('bascet.size') }}:
                    <span class="bascet-details__caption">{{ product.activeSize }}</span>
                  </div>
                  <div class="bascet-details__field">
                    {{ $t('bascet.price') }}:
                    <span
                      class="bascet-details__caption"
                    >{{ product.price*product.quantity }}$</span>
                  </div>
                  <div class="bascet-details__field bascet-quantity">
                    <label :for="product.id" class="bascet-quantity__label">{{ $t('bascet.quant') }}:</label>
                    <button class="bascet-quantity__btn" @click="handleQuantity(product)">
                      <span class="fas fa-chevron-left"/>
                    </button>
                    <input
                      type="tel"
                      class="bascet-quantity__input"
                      :value="product.quantity"
                      @change="handleChange($event, product)"
                      :id="product.id"
                    >
                    <button class="bascet-quantity__btn" @click="handleQuantity(product, true)">
                      <span class="fas fa-chevron-right"/>
                    </button>
                  </div>
                </div>
                <button
                  class="btn-default bascet__remove"
                  title="remove from bascet"
                  @click="removeId = product.id"
                />
              </div>
            </li>
          </ul>
          <div class="bascet-total">
            <span class="bascet-total__caption">{{ $t('bascet.total') }}:</span>
            <span class="bascet-total__sum">{{ totalSum }}$</span>
          </div>
        </div>
        <MainForm @submit="submitHandler" :checkbox="true" :title="$t('bascet.livecontacts')" />
      </template>
      <div v-else class="bascet-fallback">
        <h2 class="bascet-fallback__title">{{ $t('bascet.placeholder') }}</h2>
        <div class="bascet-fallback__buttons">
          <nuxt-link class="btn-main btn-main--danger" :to="`${localePath('shop')}/`">
            {{ $t('bascet.toshop') }}
            <span class="fas fa-chevron-right"/>
          </nuxt-link>
          <nuxt-link class="btn-main btn-main--danger" :to="`${localePath('collection')}/`">
            {{ $t('bascet.tocellection') }}
            <span class="fas fa-chevron-right"/>
          </nuxt-link>
        </div>
      </div>
    </div>
    <SocialList />
    <ModalConfirm :removeId="removeId" @close="removeId = null"/>
  </section>
</template>

<script>
import MainForm from "~/components/MainForm";
import { mapGetters, mapActions } from "vuex";
import ModalConfirm from "~/components/Modal/ModalConfirm";
import SocialList from '~/components/SocialList'

export default {
  name: "Bascet",
  layout: "aside",
  components: {
    MainForm,
    ModalConfirm,
    SocialList
  },
  data() {
    return {
      bascet: [],
      removeId: null
    };
  },
  computed: {
    ...mapGetters(["getBascet"]),
    totalSum() {
      return this.bascet.reduce(
        (sum, product) => sum + product.quantity * product.price,
        0
      );
    }
  },
  created() {
    this.bascet = this.getBascet;
    if (!this.bascet) return this.$router.push("shop");
  },
  methods: {
    submitHandler(params) {
      this.$router.push(this.localePath({ name: "thanks" }));
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
@import "bascet";
</style>
