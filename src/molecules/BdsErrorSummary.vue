<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: { type: String, default: 'There is a problem' },
  errors: { type: Array, default: () => [] },
});

const normalizedErrors = computed(() =>
  props.errors.map((err) =>
    typeof err === 'string' ? { message: err, href: null } : err
  )
);
</script>

<template>
  <div v-if="normalizedErrors.length" class="govuk-error-summary" role="alert">
    <h2 class="govuk-error-summary__title">{{ title }}</h2>
    <ul class="govuk-error-summary__list">
      <li v-for="err in normalizedErrors" :key="err.href || err.message">
        <a v-if="err.href" :href="err.href">{{ err.message }}</a>
        <span v-else>{{ err.message }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.govuk-error-summary {
  padding: 20px;
  margin-bottom: 30px;
  border: 5px solid var(--govuk-colour-red);
}

.govuk-error-summary__title {
  margin: 0 0 15px;
  font-size: 24px;
  font-weight: 700;
}

.govuk-error-summary__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.govuk-error-summary__list a {
  color: var(--govuk-colour-red);
  font-weight: 700;
}
</style>
