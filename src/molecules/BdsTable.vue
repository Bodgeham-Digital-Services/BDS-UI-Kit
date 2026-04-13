<script setup>
const props = defineProps({
  headers: { type: Array, required: true },
  rows: { type: Array, default: () => [] },
  caption: { type: String, default: null },
  captionSize: { type: String, default: 'm', validator: (v) => ['m', 'l'].includes(v) },
  rowKey: { type: String, default: null },
});
</script>

<template>
  <table class="govuk-table">
    <caption v-if="caption" :class="`govuk-table__caption govuk-table__caption--${captionSize}`">{{ caption }}</caption>
    <thead class="govuk-table__head">
      <tr class="govuk-table__row">
        <th v-for="header in headers" :key="header.key" class="govuk-table__header" scope="col">
          {{ header.label }}
        </th>
      </tr>
    </thead>
    <tbody class="govuk-table__body">
      <tr v-for="(row, i) in rows" :key="rowKey ? row[rowKey] : i" class="govuk-table__row">
        <td v-for="header in headers" :key="header.key" class="govuk-table__cell">
          <slot name="cell" :header="header" :row="row" :value="row[header.key]">
            {{ row[header.key] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.govuk-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
  font-size: 19px;
}

.govuk-table__header,
.govuk-table__cell {
  padding: 10px 20px 10px 0;
  border-bottom: 1px solid var(--govuk-colour-mid-grey);
  text-align: left;
  vertical-align: top;
}

.govuk-table__header {
  font-weight: 700;
}

.govuk-table__body .govuk-table__row:hover {
  background-color: var(--govuk-colour-light-grey);
}
</style>
