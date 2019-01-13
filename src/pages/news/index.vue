<template>
  <section class="section news">
    <div class="container">
      <h1 class="main-title">News</h1>
      <template v-if="news.length">
        <transition-group class="news__list" name="fade-down" tag="ul">
          <li class="news__item" v-for="newsitem in news" :key="newsitem.id">
            <article class="news__article">
              <img v-if="newsitem.img" :src="require(`@/assets/images/${newsitem.img}`)" alt="news image" class="news__img">
              <div class="news__head">
                <h3 class="news__title">{{ newsitem.title }}</h3>
                <time :datetime="newsitem.time" class="news__time">{{ newsitem.time }}</time>
              </div>
              <main class="news__content" v-html="newsitem.intro" />
              <nuxt-link class="news__link main-link" :to="`${localePath({ name: 'news-id', params: { id: newsitem.id } })}/`" >more</nuxt-link>
            </article>
          </li>
        </transition-group>
      </template>
      <div v-else>No news, sorry...</div>
      <button @click="loadNews(1)" type="button" class="btn-main news__load">Load news</button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "News",
  layout: 'aside',
  data () {
    return {
      news: []
    }
  },
  computed: {
    ...mapGetters(['getNews'])
  },
  created () {
    this.loadNews()
  },
  methods: {
    loadNews (count = 1) {
      this.news = [...this.news, ...this.getNews(this.news.length, this.news.length + count)]
    }
  }
}
</script>

<style lang="scss">
@import "news";
</style>