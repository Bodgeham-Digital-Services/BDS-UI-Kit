<script setup>
import { computed } from 'vue';

const props = defineProps({
  width: { type: String, default: 'full', validator: (v) => ['full', 'two-thirds', 'one-half', 'one-third'].includes(v) },
});

const className = computed(() => `govuk-grid-column-${props.width}`);
</script>

<template>
  <div :class="className">
    <slot />
  </div>
</template>

<style scoped>
.govuk-grid-column-full,
.govuk-grid-column-one-half,
.govuk-grid-column-one-third,
.govuk-grid-column-two-thirds {
  position: relative;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
}

.govuk-grid-column-full { flex: 0 0 100%; max-width: 100%; }
.govuk-grid-column-two-thirds { flex: 0 0 66.666667%; max-width: 66.666667%; }
.govuk-grid-column-one-half { flex: 0 0 50%; max-width: 50%; }
.govuk-grid-column-one-third { flex: 0 0 33.333333%; max-width: 33.333333%; }
</style>
