<script setup>
const props = defineProps({
  href: { type: String, default: '#' },
  to: { type: [String, Object], default: null },
});

const emit = defineEmits(['click']);
</script>

<template>
  <RouterLink v-if="to" :to="to" class="govuk-back-link" @click="emit('click', $event)">
    <slot>Back</slot>
  </RouterLink>
  <a v-else :href="href" class="govuk-back-link" @click="emit('click', $event)">
    <slot>Back</slot>
  </a>
</template>

<style scoped>
.govuk-back-link {
  display: inline-block;
  position: relative;
  margin-bottom: 15px;
  padding-left: 14px;
  font-size: 16px;
  line-height: 1.4;
  text-decoration: none;
  color: var(--govuk-colour-black);
}

.govuk-back-link::before {
  content: "";
  display: block;
  position: absolute;
  top: 6px;
  left: 3px;
  width: 0;
  height: 0;
  border-right: 7px solid var(--govuk-colour-black);
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
}
</style>
