<script setup>
const props = defineProps({
  href: { type: String, default: null },
  to: { type: [String, Object], default: null },
});

if (!props.href && !props.to) {
  console.warn('[BdsLink] requires either an `href` or `to` prop.');
}
</script>

<template>
  <RouterLink v-if="to" :to="to" class="govuk-link">
    <slot />
  </RouterLink>
  <a v-else :href="href" class="govuk-link">
    <slot />
  </a>
</template>

<style scoped>
.govuk-link {
  color: var(--govuk-colour-blue);
  text-decoration: underline;
}

.govuk-link:hover { color: var(--govuk-colour-dark-blue); }
.govuk-link:visited { color: var(--govuk-colour-purple); }
</style>
