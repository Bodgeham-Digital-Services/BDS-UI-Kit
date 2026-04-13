<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: { type: String, default: '' },
  id: { type: String, required: true },
  rows: { type: Number, default: 4 },
  error: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(['update:modelValue']);

const classes = computed(() => [
  'govuk-textarea',
  props.error && 'govuk-textarea--error',
].filter(Boolean));
</script>

<template>
  <textarea
    :id="id"
    :class="classes"
    :rows="rows"
    :value="modelValue"
    :disabled="disabled"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped>
.govuk-textarea {
  box-sizing: border-box;
  width: 100%;
  padding: 5px 8px;
  border: 2px solid var(--govuk-colour-black);
  border-radius: 0;
  font-family: inherit;
  font-size: 19px;
  line-height: 1.5;
  -webkit-appearance: none;
  min-height: 100px;
  resize: vertical;
}

.govuk-textarea:focus {
  outline: 3px solid var(--govuk-colour-yellow);
  outline-offset: 0;
  box-shadow: inset 0 0 0 2px;
}

.govuk-textarea--error {
  border-color: var(--govuk-colour-red);
}
</style>
