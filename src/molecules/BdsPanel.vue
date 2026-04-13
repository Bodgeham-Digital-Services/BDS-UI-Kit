<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  variant: { type: String, default: 'default', validator: (v) => ['default', 'confirmation'].includes(v) },
});

const panelClass = computed(() => [
  'govuk-panel',
  props.variant === 'confirmation' && 'govuk-panel--confirmation',
].filter(Boolean));
</script>

<template>
  <div :class="panelClass">
    <h1 class="govuk-panel__title">{{ title }}</h1>
    <div class="govuk-panel__body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.govuk-panel {
  box-sizing: border-box;
  margin-bottom: 30px;
  padding: 30px 20px;
  text-align: center;
  background: var(--govuk-colour-white);
  border: 1px solid var(--govuk-colour-mid-grey);
}

.govuk-panel--confirmation {
  color: var(--govuk-colour-white);
  background: var(--govuk-colour-green);
  border-color: var(--govuk-colour-green);
}

.govuk-panel__title {
  margin: 0 0 15px;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
}

.govuk-panel--confirmation .govuk-panel__title {
  color: var(--govuk-colour-white);
}

.govuk-panel__body {
  font-size: 19px;
  line-height: 1.4;
}
</style>
