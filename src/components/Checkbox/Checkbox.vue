<template>
  <div class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      :id="id"
      :checked="checked"
      @click.prevent="$emit('onClick', checked)"
    >
    <label class="checkbox__label" :for="id">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    id: {
      type: String,
      default: 'check-1'
    },
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang='scss'>
@import 'checkbox';
</style>