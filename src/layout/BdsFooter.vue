<script setup>
const props = defineProps({
  copyright: { type: String, default: null },
  logoSrc: { type: String, default: null },
  logoAlt: { type: String, default: '' },
  logoHeight: { type: Number, default: 200 },
});
</script>

<template>
  <footer class="govuk-footer" role="contentinfo">
    <div class="govuk-width-container">
      <div class="govuk-footer__meta">
        <div class="govuk-footer__meta-item govuk-footer__meta-item--grow">
          <slot />
          <div v-if="copyright" class="govuk-footer__licence-description">
            {{ copyright }}
          </div>
        </div>
        <div v-if="logoSrc" class="govuk-footer__meta-item">
          <img :src="logoSrc" :alt="logoAlt" class="govuk-footer__licence-logo" :height="logoHeight" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.govuk-footer {
  background-color: var(--govuk-colour-light-grey);
  border-top: 1px solid var(--govuk-colour-mid-grey);
  padding: 40px 0;
  margin-top: 40px;
  flex-shrink: 0;
}

.govuk-footer__meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

.govuk-width-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
}

.govuk-footer__meta-item--grow { flex-grow: 1; }

.govuk-footer__licence-description {
  font-size: 16px;
  color: var(--govuk-colour-dark-grey);
  margin-top: 20px;
}

.govuk-footer__licence-logo {
  height: 200px;
  width: auto;
  margin-left: 20px;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .govuk-footer__meta { flex-direction: column; align-items: flex-start; }
  .govuk-footer__licence-logo { margin-left: 0; margin-top: 20px; height: 150px; }
}
</style>
