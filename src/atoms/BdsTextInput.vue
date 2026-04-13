<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: { type: String, default: '' },
  id: { type: String, required: true },
  type: { type: String, default: 'text' },
  width: { type: String, default: null, validator: (v) => v === null || ['10', '20'].includes(v) },
  error: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(['update:modelValue']);

const classes = computed(() => [
  'govuk-input',
  props.error && 'govuk-input--error',
  props.width && `govuk-input--width-${props.width}`,
].filter(Boolean));
</script>

<template>
  <input
    :id="id"
    :type="type"
    :class="classes"
    :value="modelValue"
    :disabled="disabled"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped>
.govuk-input {
  box-sizing: border-box;
  width: 100%;
  padding: 5px 8px;
  border: 2px solid var(--govuk-colour-black);
  border-radius: 0;
  font-family: inherit;
  font-size: 19px;
  line-height: 1.5;
  -webkit-appearance: none;
}

.govuk-input:focus {
  outline: 3px solid var(--govuk-colour-yellow);
  outline-offset: 0;
  box-shadow: inset 0 0 0 2px;
}

.govuk-input--error {
  border-color: var(--govuk-colour-red);
}

.govuk-input--width-10 { max-width: 23ex; }
.govuk-input--width-20 { max-width: 41ex; }
</style>
