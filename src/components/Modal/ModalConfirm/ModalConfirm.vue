<template>
  <Modal class="modal-confirm" :isOpened="removeId ? true : false" @close="$emit('close')" >
    <h3 class="modal__header">{{ confirmText }}</h3>
    <div class="modal__buttons modal__content">
      <button
        @click="handleRemove"
        class="modal-confirm__btn modal-confirm__btn--success"
      >
        Да <span class="fas fa-check" />
      </button>
      <button
        @click="$emit('close')"
        class="modal-confirm__btn modal-confirm__btn--cancel"
      >
        Нет <span class="fas fa-times" />
      </button>
    </div>
  </Modal>
</template>

<script>
import { mapActions } from 'vuex'
import Modal from '../Modal'

export default {
  name: 'ModalConfirm',
  components: {
    Modal
  },
  props: {
    removeId: {
      type: String,
      default: null
    },
    confirmText: {
      type: String,
      default: 'Убрать из корзины ?'
    }
  },
  methods: {
    ...mapActions(['removeProduct']),
    handleRemove () {
      this.removeProduct(this.removeId)
      this.$emit('close')
    }
  }
}
</script>

<style lang='scss'>
@import 'modal-confirm';
</style>