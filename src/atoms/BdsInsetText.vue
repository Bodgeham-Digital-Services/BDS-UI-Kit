<template>
  <div class="govuk-inset-text">
    <slot />
  </div>
</template>

<style scoped>
.govuk-inset-text {
  border-left: 10px solid var(--govuk-colour-mid-grey);
  padding: 15px 0 15px 15px;
  margin: 20px 0;
}
</style>
