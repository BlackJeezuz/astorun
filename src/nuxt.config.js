const filters = require('./static/placeholders/filters.json')
const hat = require('./static/placeholders/hat.json')
const pants = require('./static/placeholders/pants.json')
const sweetshot = require('./static/placeholders/sweetshot.json')
const collections = require('./static/placeholders/collections.json')
const news = require('./static/placeholders/news.json')

const pkg = require('./package')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/astorun/'
  }
} : {}

module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css',
        integrity: 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU',
        crossorigin: 'anonymous'
      },
      { rel: "icon", type: "image/x-icon", sizes: "32x32", href: "/favicon.ico" },
    ]
  },
  loading: { color: '#fff' },
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: function () {
      return [
        ...filters.map(filter => `shop/${filter.name}`),
        ...hat.map(item => `${item.id}-${item.category}`),
        ...pants.map(item => `${item.id}-${item.category}`),
        ...sweetshot.map(item => `${item.id}-${item.category}`),
        ...collections.map(item => `collection/${item.id}-${item.category}`),
        ...news.map(item => `news/${item.id}`)
      ]
    }
  },
  modules: [
    '@nuxtjs/axios',
    'nuxt-universal-storage',
    ['nuxt-sass-resources-loader', '@/assets/styles/tools/tools.scss'],
    ['nuxt-i18n', {
      defaultLocale: 'ru',
      locales: [{
        code: 'ru',
        iso: 'ru-RU'
      }, {
        code: 'en',
        iso: 'en-US'
      }, {
        code: 'ua',
        iso: 'ua-UA'
      }],
      vueI18n: {
        fallbackLocale: 'ru',
        messages: {
          en: require('./locales/en.json'),
          ru: require('./locales/ru.json'),
          ua: require('./locales/ua.json')
        }
      }
    }],
  ],
  css: [
    '~/assets/styles/layout/layout.scss'
  ],
  plugins: [
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/vee-validate', ssr: false },
    { src: '~/plugins/persistence.js', ssr: false }
  ],
  ...routerBase
}
