<template>
  <section class="section contacts-section">
    <div class="container">
      <h1 class="main-title">{{ $t('contacts.title') }}</h1>
      <div class="contacts-wrapper">
        <ul class="contacts">
          <li class="contacts__item">
            <div class="contacts__caption">{{ $t('contacts.phone') }}</div>
            <a href="tel:+380962790520" class="contacts__link"><span class="contacts__icon fas fa-phone" />+380962790520</a>
          </li>
          <li class="contacts__item">
            <div class="contacts__caption">{{ $t('contacts.mail') }}</div>
            <a href="mailto:astorun@mail.co" class="contacts__link"><span class="contacts__icon fas fa-envelope" />astorun@mail.co</a>
          </li>
          <li class="contacts__item">
            <div class="contacts__caption">{{ $t('contacts.telegram') }}</div>
            <a target="_blank" href="https://t.me/astorun" class="contacts__link"><span class="contacts__icon fab fa-telegram-plane" />@astorun</a>
          </li>
          <li class="contacts__item">
            <div class="contacts__caption">{{ $t('contacts.viber') }}</div>
            <a href="viber://chat?number=+380962790520" class="contacts__link"><span class="contacts__icon fab fa-viber" />+380962790520</a>
          </li>
          <li class="contacts__item">
            <div class="contacts__caption">{{ $t('contacts.messanger') }}</div>
            <a href="https://m.me/astorun" target="_blank" class="contacts__link"><span class="contacts__icon fab fa-facebook-messenger" />astorun</a>
          </li>
        </ul>
        <MainForm class="form--contacts" :reqFields="['name', 'email', 'message']" />
      </div>
      <SocialList />
    </div>
  </section>
</template>

<script>
import MainForm from '~/components/MainForm'
import SocialList from '~/components/SocialList'

export default {
  name: 'Contacts',
  layout: 'aside',
  components: {
    MainForm,
    SocialList
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
