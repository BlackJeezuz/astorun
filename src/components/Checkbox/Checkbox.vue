<template>
  <div class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      :id="id"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
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
    event: 'change'
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