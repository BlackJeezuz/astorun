<template>
  <form @submit.prevent="submitHandle" class="form">
    <h3 v-if="title" class="form__title">{{ title }}</h3>
    <field
      v-for="field in fieldsArray"
      :key="field.name"
      :name="field.name"
      :type="field.type"
      :rule="field.rule"
      :icon="field.icon"
      v-model="field.value"
      @blur="handleValidation"
    >{{ field.placeholder }}</field>
    <Checkbox
      v-if="checkbox"
      v-model="agree"
      class="form__checkbox"
    >{{ $t("form.iagree") }} <a class="link" href="#">{{ $t("form.agreement") }}</a></Checkbox>
    <div class="btn-group">
      <button v-for="button in buttons" :key="button.text" class="btn-main btn-main--danger" @click="button.handler">{{ button.text }}</button>
      <button class="btn-main btn-main--danger" type="submit" ref="submitBtn">{{ $t('buttons.submit') }}</button>
    </div>
  </form>
</template>

<script>
import Field from '~/components/Field'
import Checkbox from '~/components/Checkbox'

export default {
  name: 'MainForm',
  components: {
    Field,
    Checkbox
  },
  props: {
    reqFields: {
      type: Array,
      default: () => ['name', 'email', 'phone']
    },
    buttons: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: null
    },
    checkbox: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      formFields: {
        name: {
          rule: 'required',
          placeholder: this.$t('placeholders.name'),
          name: 'name',
          type: 'text',
          icon: 'far fa-user',
          value: '',
          isValid: false
        },
        email: {
          rule: 'required|email',
          placeholder: this.$t('placeholders.mail'),
          name: 'email',
          type: 'email',
          icon: 'far fa-envelope',
          value: '',
          isValid: false
        },
        phone: {
          rule: 'required|numeric',
          placeholder: this.$t('placeholders.phone'),
          name: 'phone',
          type: 'tel',
          value: '',
          icon: 'fas fa-mobile-alt',
          isValid: false
        },
        message: {
          rule: 'required',
          placeholder: this.$t('placeholders.message'),
          name: 'message',
          type: 'textarea',
          value: '',
          icon: 'far fa-comments',
          isValid: false
        }
      },
      agree: true
    }
  },
  computed: {
    fieldsArray () {
      return Object.values(this.formFields).filter(field => this.reqFields.includes(field.name))
    }
  },
  methods: {
    submitHandle () {
      if (this.fieldsArray.some(field => !field.isValid) || !this.agree) {
        this.$refs.submitBtn.classList.add('shake-anim')

        if(this.$refs.submitBtn.classList.contains('shake-anim')) {
          setTimeout(() => this.$refs.submitBtn.classList.remove('shake-anim'), 1000)
        }

        return
      }
      this.$emit('submit', this.formFields)
    },
    handleValidation (name, isValid) {
      this.formFields[name].isValid = isValid
    }
  }
}
</script>

<style lang="scss">
@import "form";
</style>
