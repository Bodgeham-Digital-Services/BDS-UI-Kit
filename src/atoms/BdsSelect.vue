<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: { type: String, default: '' },
  id: { type: String, required: true },
  options: { type: Array, required: true },
  placeholder: { type: String, default: 'Select an option' },
  error: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(['update:modelValue']);

const classes = computed(() => [
  'govuk-select',
  props.error && 'govuk-select--error',
].filter(Boolean));

const normalizedOptions = computed(() =>
  props.options.map((opt) =>
    typeof opt === 'string' ? { value: opt, label: opt } : opt
  )
);
</script>

<template>
  <select
    :id="id"
    :class="classes"
    :value="modelValue"
    :disabled="disabled"
    @change="emit('update:modelValue', $event.target.value)"
  >
    <option value="" disabled>{{ placeholder }}</option>
    <option v-for="opt in normalizedOptions" :key="opt.value" :value="opt.value">
      {{ opt.label }}
    </option>
  </select>
</template>

<style scoped>
.govuk-select {
  box-sizing: border-box;
  width: 100%;
  padding: 5px 8px;
  border: 2px solid var(--govuk-colour-black);
  border-radius: 0;
  font-family: inherit;
  font-size: 19px;
  line-height: 1.5;
  -webkit-appearance: none;
  height: auto;
}

.govuk-select:focus {
  outline: 3px solid var(--govuk-colour-yellow);
  outline-offset: 0;
  box-shadow: inset 0 0 0 2px;
}

.govuk-select--error {
  border-color: var(--govuk-colour-red);
}
</style>
