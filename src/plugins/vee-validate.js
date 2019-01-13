import Vue from 'vue'
import VeeValidate from 'vee-validate'
import rules from '~/locales/rules'

Vue.use(VeeValidate, {
  dictionary: {
    ru: rules.ru,
    ua: rules.ua
  }
})
