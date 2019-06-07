<template>
  <div class="f-relative">
    <label class="a-label f-input" :class="value ? 'f-small' : ''">
      {{ label }}
    </label>
    <input
      class="a-input f-relative"
      type="text"
      v-model="value"
    />
  </div>
</template>

<script>
export default {
  name: 'a-input',
  props: {
    label: {type: String, default: ''},
    required: {type: Boolean, default: false},
  },
  data: () => ({
    value: ''
  }),
}
</script>