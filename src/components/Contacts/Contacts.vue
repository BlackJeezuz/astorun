<template>
  <section class="section contacts-section">
    <div class="container">
      <h1 class="main-title">{{ $t('contacts.title') }}</h1>
      <div class="contacts-wrapper">
        <ul class="contacts">
          <li class="contacts__item">
            <div class="contacts__caption">{{ $t('contacts.phone') }}</div>
            <a href="#" class="contacts__link"><i class="contacts__icon fas fa-phone" />+380962790520</a>
          </li>
          <li class="contacts__item">
            <div class="contacts__caption">{{ $t('contacts.mail') }}</div>
            <a href="#" class="contacts__link"><i class="contacts__icon fas fa-envelope" />ruslan201010@gmail.com</a>
          </li>
          <li class="contacts__item">
            <div class="contacts__caption">{{ $t('contacts.telegram') }}</div>
            <a href="#" class="contacts__link"><i class="contacts__icon fab fa-telegram-plane" />@BlackJeezuz</a>
          </li>
          <li class="contacts__item">
            <div class="contacts__caption">{{ $t('contacts.adress') }}</div>
            <a href="#" class="contacts__link"><i class="contacts__icon fas fa-map-marker-alt" />{{ $t('contacts.place') }}</a>
          </li>
        </ul>
        <main-form class="form--contacts" :reqFields="['name', 'email', 'message']" />
      </div>
    </div>
  </section>
</template>

<script>
import MainForm from '~/components/MainForm'

export default {
  name: 'Contacts',
  layout: 'aside',
  components: {
    MainForm
  },
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  }
}
</script>

<style lang="scss">
@import "contacts";
</style>
