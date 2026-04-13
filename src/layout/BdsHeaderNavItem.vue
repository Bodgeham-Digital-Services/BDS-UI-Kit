<script setup>
const props = defineProps({
  active: { type: Boolean, default: false },
});
</script>

<template>
  <li class="govuk-header__navigation-item" :class="{ 'govuk-header__navigation-item--active': active }">
    <slot />
  </li>
</template>

<style scoped>
.govuk-header__navigation-item { margin: 0; }

.govuk-header__navigation-item :deep(a) {
  color: var(--govuk-colour-white);
  text-decoration: none;
}

.govuk-header__navigation-item :deep(a:hover) { text-decoration: underline; }

.govuk-header__navigation-item--active :deep(a) { text-decoration: underline; }

@media (max-width: 768px) {
  .govuk-header__navigation-item {
    border-bottom: 1px solid var(--govuk-colour-dark-grey);
  }

  .govuk-header__navigation-item:last-child { border-bottom: none; }

  .govuk-header__navigation-item :deep(a) {
    display: block;
    padding: 12px 0;
    font-size: 19px;
    color: var(--govuk-colour-white);
    text-decoration: none;
  }
}
</style>
