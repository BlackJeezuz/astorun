<template>
  <transition name="modal">
    <div v-if="isOpened" class="overlay" @click.self="close">
      <div class="modal">
        <slot />
        <button v-if="closeBtn" @click="close" class="btn-default modal__close" :title="$t('buttons.close')" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isOpened: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: 'modal'
    },
    closeBtn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('close', this.id)
    }
  }
}
</script>

<style lang="scss">
@import "modal";
</style>
