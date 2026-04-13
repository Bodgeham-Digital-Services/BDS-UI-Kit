<template>
  <div class="govuk-grid-row">
    <slot />
  </div>
</template>

<style scoped>
.govuk-grid-row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
  margin-bottom: 30px;
}
</style>
