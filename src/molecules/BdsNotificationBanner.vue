<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: { type: String, default: 'info', validator: (v) => ['info', 'success'].includes(v) },
  title: { type: String, default: 'Important' },
});

const bannerClass = computed(() => [
  'govuk-notification-banner',
  props.type === 'success' && 'govuk-notification-banner--success',
].filter(Boolean));
</script>

<template>
  <div :class="bannerClass">
    <div class="govuk-notification-banner__header">
      <h2 class="govuk-notification-banner__title">{{ title }}</h2>
    </div>
    <div class="govuk-notification-banner__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.govuk-notification-banner {
  margin-bottom: 30px;
  border: 5px solid var(--govuk-colour-blue);
  background-color: var(--govuk-colour-blue);
}

.govuk-notification-banner--success {
  border-color: var(--govuk-colour-green);
  background-color: var(--govuk-colour-green);
}

.govuk-notification-banner__header {
  padding: 10px 15px;
}

.govuk-notification-banner__title {
  margin: 0;
  color: var(--govuk-colour-white);
  font-size: 19px;
  font-weight: 700;
}

.govuk-notification-banner__content {
  padding: 15px;
  background-color: var(--govuk-colour-white);
}
</style>
