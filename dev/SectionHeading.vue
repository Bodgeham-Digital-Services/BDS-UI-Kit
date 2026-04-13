<script setup>
const props = defineProps({
  title: { type: String, required: true },
});

const emit = defineEmits(['show-code']);
</script>

<template>
  <div class="section-heading">
    <h2 class="govuk-heading-l">{{ title }}</h2>
    <button class="section-heading__code-btn" @click="emit('show-code')" :title="`View ${title} code`" aria-label="View code">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.section-heading {
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-heading .govuk-heading-l {
  font-size: 36px;
  line-height: 1.11;
  font-weight: 700;
  margin: 0 0 20px;
}

.section-heading__code-btn {
  background: none;
  border: 1px solid var(--govuk-colour-mid-grey);
  border-radius: 4px;
  color: var(--govuk-colour-dark-grey);
  padding: 5px 7px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
  margin-bottom: 20px;
  flex-shrink: 0;
}

.section-heading__code-btn:hover {
  background: var(--govuk-colour-light-grey);
  color: var(--govuk-colour-black);
  border-color: var(--govuk-colour-dark-grey);
}
</style>
