<script setup>
import { computed } from 'vue';

const props = defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  labelSize: { type: String, default: '', validator: (v) => ['', 's'].includes(v) },
  hint: { type: String, default: null },
  error: { type: String, default: null },
});

const groupClass = computed(() => [
  'govuk-form-group',
  props.error && 'govuk-form-group--error',
].filter(Boolean));

const labelClass = computed(() => [
  'govuk-label',
  props.labelSize && `govuk-label--${props.labelSize}`,
].filter(Boolean));
</script>

<template>
  <div :class="groupClass">
    <label :for="id" :class="labelClass">{{ label }}</label>
    <span v-if="hint" :id="`${id}-hint`" class="govuk-hint">{{ hint }}</span>
    <span v-if="error" :id="`${id}-error`" class="govuk-error-message">{{ error }}</span>
    <slot />
  </div>
</template>

<style scoped>
.govuk-form-group {
  margin-bottom: 20px;
}

.govuk-form-group--error {
  padding-left: 15px;
  border-left: 5px solid var(--govuk-colour-red);
}

.govuk-label {
  display: block;
  margin-bottom: 5px;
  font-size: 19px;
  font-weight: 700;
  color: var(--govuk-colour-black);
}

.govuk-label--s {
  font-size: 16px;
}

.govuk-hint {
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
  color: var(--govuk-colour-dark-grey);
}

.govuk-error-message {
  display: block;
  margin-bottom: 10px;
  font-size: 19px;
  font-weight: 700;
  color: var(--govuk-colour-red);
}
</style>
