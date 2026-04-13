<script setup>
const props = defineProps({
  title: { type: String, required: true },
});
</script>

<template>
  <div class="govuk-summary-card">
    <div class="govuk-summary-card__title-wrapper">
      <h3 class="govuk-summary-card__title">{{ title }}</h3>
      <slot name="actions" />
    </div>
    <div class="govuk-summary-card__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.govuk-summary-card {
  border: 1px solid var(--govuk-colour-mid-grey);
  margin-bottom: 20px;
}

.govuk-summary-card__title-wrapper {
  background-color: var(--govuk-colour-light-grey);
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.govuk-summary-card__title {
  margin: 0;
  font-size: 19px;
  font-weight: 700;
}

.govuk-summary-card__content {
  padding: 15px 20px;
}
</style>
