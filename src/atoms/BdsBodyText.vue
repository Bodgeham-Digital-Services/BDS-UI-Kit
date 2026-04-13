<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: { type: String, default: 'body', validator: (v) => ['l', 'body', 's'].includes(v) },
});

const className = computed(() => props.size === 'body' ? 'govuk-body' : `govuk-body-${props.size}`);
</script>

<template>
  <p :class="className"><slot /></p>
</template>

<style scoped>
.govuk-body-l {
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 20px;
}

.govuk-body {
  font-size: 19px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.govuk-body-s {
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 15px;
  color: var(--govuk-colour-dark-grey);
}
</style>
