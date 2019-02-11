<template>
  <header class="header" ref="header">
    <div class="container header__container">
      <nuxt-link :to="localePath({ name: 'index'} )" class="logo">
        <img class="logo__img" src="~assets/images/logo1.png" alt="astorun">
      </nuxt-link>

      <button
        @click="handleMenu"
        type="button"
        :class="['btn-menu btn-default', {'is-active': isMenuActive}]"
      >
        <span class="btn-menu__item btn-menu__item--top"/>
        <span class="btn-menu__item btn-menu__item--mid"/>
        <span class="btn-menu__item btn-menu__item--bot"/>
      </button>

      <div class="header__overlay">
        <nav class="nav">
          <ul class="nav__list">
            <li
              v-for="link in navigation"
              :key="link.path"
              class="nav__item"
              @click="isMenuActive=false"
            >
              <nuxt-link :to="`${localePath(link.path)}/`" class="nav__link">{{ $t(link.text) }}</nuxt-link>
            </li>
          </ul>
        </nav>

        <div class="header__langs btn-group">
          <nuxt-link
            :to="switchLocalePath('ua')"
            :class="['btn-local', {'is-active': $store.state.i18n.locale === 'ua'}]"
          >UA</nuxt-link>
          <nuxt-link
            :to="switchLocalePath('ru')"
            :class="['btn-local', {'is-active': $store.state.i18n.locale === 'ru'}]"
          >RU</nuxt-link>
          <nuxt-link
            :to="switchLocalePath('en')"
            :class="['btn-local', {'is-active': $store.state.i18n.locale === 'en'}]"
          >EN</nuxt-link>
        </div>
      </div>

      <nuxt-link class="header-basket" :to="`${localePath('basket')}/`" title="В корзину">
        <span class="header-basket__icon fas fa-shopping-cart"/>
        <transition name="bounce">
          <span
            :key="`numb-${basketLength}`"
            class="header-basket__number"
            v-if="basketLength"
          >{{ basketLength }}</span>
        </transition>
      </nuxt-link>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SideMenu",
  data() {
    return {
      isMenuActive: false,
      scrollPos: 0
    };
  },
  computed: {
    ...mapGetters(["basketLength"]),
    navigation() {
      return [
        {
          text: "links.shop",
          path: "shop"
        },
        {
          text: "links.collection",
          path: "collection"
        },
        {
          text: "links.contacts",
          path: "contacts"
        },
        {
          text: "links.news",
          path: "news"
        }
      ];
    }
  },
  watch: {
    isMenuActive(isMenuActive) {
      if (isMenuActive) {
        document.querySelector('body').classList.add("scroll-disable");
        document.querySelector('html').classList.add("scroll-disable");
      } else {
        this.removeScrollDisable()
      }
    }
  },
  mounted() {
    this.removeScrollDisable()
    window.addEventListener("scroll", this.hideHeader);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.hideHeader);
    this.removeScrollDisable()
  },
  methods: {
    handleNavClick(target) {
      if (
        !target.classList.contains("navigation__link") &&
        !target.classList.contains("navigation__text")
      )
        return;
      this.isMenuActive = !this.isMenuActive;
      this.removeScrollDisable()
    },
    handleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    removeScrollDisable () {
      document.querySelector('body').classList.remove('scroll-disable')
      document.querySelector('html').classList.remove('scroll-disable')
    },
    hideHeader() {
      if (document.querySelector('body').getBoundingClientRect().top > this.scrollPos)
        this.$refs.header.classList.remove("is-hidden");
      else this.$refs.header.classList.add("is-hidden");
      this.scrollPos = document.querySelector('body').getBoundingClientRect().top;
    }
  }
};
</script>

<style lang="scss">
@import "header";
</style>
