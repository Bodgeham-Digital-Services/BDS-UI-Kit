<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  id: { type: String, required: true },
  label: { type: String, required: true },
  hint: { type: String, default: null },
});

const emit = defineEmits(['update:modelValue']);

const checked = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
</script>

<template>
  <div class="govuk-checkboxes__item">
    <input
      :id="id"
      v-model="checked"
      class="govuk-checkboxes__input"
      type="checkbox"
    />
    <label :for="id" class="govuk-checkboxes__label">{{ label }}</label>
    <span v-if="hint" class="govuk-checkboxes__hint">{{ hint }}</span>
  </div>
</template>

<style scoped>
.govuk-checkboxes__item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
}

.govuk-checkboxes__input {
  width: 40px;
  height: 40px;
  margin: 0;
  cursor: pointer;
  flex-shrink: 0;
}

.govuk-checkboxes__label {
  padding-top: 8px;
  font-size: 19px;
  cursor: pointer;
}

.govuk-checkboxes__hint {
  padding-top: 2px;
  font-size: 16px;
  color: var(--govuk-colour-dark-grey);
}
</style>
