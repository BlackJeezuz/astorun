<template>
  <section class="section">
    <article v-if="newsData" class="newsitem">
      <h1 class="newsitem__title main-title">{{ newsData.title }}</h1>
      <div class="newsitem__body container">
        <Slider v-if="newsData.images.length" class="newsitem__slider">
          <Slide v-for="(imageUrl, index) in newsData.images" :key="`slide-${index}`" class="newsitem__slide">
            <img :src="require(`~/assets/images/${imageUrl}`)" class="newsitem__img">
          </Slide>
        </Slider>
        <main class="newsitem__content" v-html="newsData.content" />
      </div>
      <nav class="newsitem-nav container">
        <ul class="newsitem-nav__list">
          <li class="newsitem-nav__item">
            <nuxt-link
              v-if="newsData.prevId"
              :to="`${localePath({ name: 'news-id', params: { id: newsData.prevId } })}/`"
              class="newsitem-nav__link main-link newsitem-nav__link--prev"
            >
              <span class="fas fa-arrow-circle-left" />
              <span class="mob-hidden">Previous</span>
            </nuxt-link>
          </li>
          <li class="newsitem-nav__item">
            <nuxt-link
              :to="`${localePath({ name: 'news' })}/`"
              class="newsitem-nav__link main-link newsitem-nav__link--back"
            >
              Back<span class="mob-hidden"> to news</span>
            </nuxt-link>
          </li>
          <li class="newsitem-nav__item">
            <nuxt-link
              v-if="newsData.nextId"
              :to="`${localePath({ name: 'news-id', params: { id: newsData.nextId } })}/`"
              class="newsitem-nav__link main-link newsitem-nav__link--next"
            >
              <span class="mob-hidden">Next</span>
              <span class="fas fa-arrow-circle-right" />
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </article>
    <div v-else>Can't find this news, sorry...</div>
  </section>
</template>

<script>
import Slider from '~/components/Slider'
import { mapGetters } from 'vuex'

export default {
  name: "NewsItem",
  layout: 'aside',
  components: {
    Slider
  },
  data () {
    return {
      newsData: null,
      activeImage: null,
      isOpened: false
    }
  },
  computed: {
    ...mapGetters(['getNewsitem'])
  },
  created () {
    this.newsData = this.getNewsitem(this.$route.params.id)
  },
  methods: {
    handleClick (url) {
      this.activeImage = url
      this.isOpened = true
    }
  }
}
</script>

<style lang="scss">
@import "newsitem";
</style>