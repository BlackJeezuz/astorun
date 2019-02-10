<template>
  <div class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      :id="id"
      :value="checked"
      @change="$emit('onClick', checked)"
    >
    <label class="checkbox__label" :for="id">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  model: {
    prop: 'checked',
    event: 'onClick'
  },
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