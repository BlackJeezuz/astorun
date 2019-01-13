const pkg = require('./package')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/astorun/'
  }
} : {}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css',
        integrity: 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU',
        crossorigin: 'anonymous'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
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
    routes: ['news/awesome-product-is-comming', 'news/awesome-product-2']
  },
  modules: [
    '@nuxtjs/axios',
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
    { src: '~/plugins/vee-validate', ssr: false }
  ],
  ...routerBase
}
