<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: { type: String, default: 'blue', validator: (v) => ['grey', 'green', 'red', 'yellow', 'blue', 'orange', 'purple'].includes(v) },
});

const classes = computed(() => ['govuk-tag', `govuk-tag--${props.color}`]);
</script>

<template>
  <strong :class="classes"><slot /></strong>
</template>

<style scoped>
.govuk-tag {
  display: inline-block;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--govuk-colour-white);
  background-color: var(--govuk-colour-blue);
  text-decoration: none;
}

.govuk-tag--grey { background-color: var(--govuk-colour-dark-grey); }
.govuk-tag--green { background-color: var(--govuk-colour-green); }
.govuk-tag--red { background-color: var(--govuk-colour-red); }
.govuk-tag--yellow { background-color: var(--govuk-colour-yellow); color: var(--govuk-colour-black); }
.govuk-tag--blue { background-color: var(--govuk-colour-blue); }
.govuk-tag--orange { background-color: var(--govuk-colour-orange); }
.govuk-tag--purple { background-color: var(--govuk-colour-purple); }
</style>
