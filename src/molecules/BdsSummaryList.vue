<script setup>
const props = defineProps({
  items: { type: Array, default: null },
});
</script>

<template>
  <dl class="govuk-summary-list">
    <template v-if="items">
      <div v-for="item in items" :key="item.key" class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">{{ item.key }}</dt>
        <dd class="govuk-summary-list__value">{{ item.value }}</dd>
      </div>
    </template>
    <slot v-else />
  </dl>
</template>

<style scoped>
.govuk-summary-list {
  margin-bottom: 30px;
  display: table;
  width: 100%;
}

.govuk-summary-list__row {
  display: table-row;
  border-bottom: 1px solid var(--govuk-colour-mid-grey);
}

.govuk-summary-list__key,
.govuk-summary-list__value {
  display: table-cell;
  padding: 10px 20px 10px 0;
  vertical-align: top;
}

.govuk-summary-list__key {
  width: 30%;
  font-weight: 700;
}
</style>
