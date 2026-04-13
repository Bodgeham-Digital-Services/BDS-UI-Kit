<script setup>
import { computed } from 'vue';

const props = defineProps({
  level: { type: Number, default: 1, validator: (v) => [1, 2, 3, 4].includes(v) },
  size: { type: String, default: null, validator: (v) => v === null || ['xl', 'l', 'm', 's'].includes(v) },
});

const sizeMap = { 1: 'xl', 2: 'l', 3: 'm', 4: 's' };

const resolvedSize = computed(() => props.size || sizeMap[props.level]);
const tag = computed(() => `h${props.level}`);
const className = computed(() => `govuk-heading-${resolvedSize.value}`);
</script>

<template>
  <component :is="tag" :class="className"><slot /></component>
</template>

<style scoped>
.govuk-heading-xl {
  font-size: 48px;
  line-height: 1.04;
  font-weight: 700;
  margin: 0 0 30px;
}

.govuk-heading-l {
  font-size: 36px;
  line-height: 1.11;
  font-weight: 700;
  margin: 0 0 20px;
}

.govuk-heading-m {
  font-size: 24px;
  line-height: 1.25;
  font-weight: 700;
  margin: 0 0 15px;
}

.govuk-heading-s {
  font-size: 19px;
  line-height: 1.31;
  font-weight: 700;
  margin: 0 0 15px;
}
</style>
