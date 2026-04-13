<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  homepageHref: { type: String, default: '/' },
  logoSrc: { type: String, default: null },
  logoAlt: { type: String, default: '' },
});

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>
  <header class="govuk-header" role="banner">
    <div class="govuk-header__container govuk-width-container">
      <div class="govuk-header__logo">
        <a :href="homepageHref" class="govuk-header__link govuk-header__link--homepage">
          <span class="govuk-header__logotype">
            <img v-if="logoSrc" :src="logoSrc" :alt="logoAlt" class="govuk-header__logotype-crown" width="36" height="32" />
            <span class="govuk-header__logotype-text">{{ title }}</span>
          </span>
        </a>
        <button
          type="button"
          class="govuk-header__menu-button"
          aria-controls="navigation"
          aria-label="Show or hide navigation menu"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          @click="toggleMenu"
        >
          Menu
        </button>
      </div>

      <div class="govuk-header__content">
        <nav class="govuk-header__navigation" :class="{ 'js-visible': menuOpen }" aria-label="Primary navigation">
          <ul id="navigation" class="govuk-header__navigation-list">
            <slot />
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.govuk-header {
  position: relative;
  background-color: var(--govuk-colour-black);
  border-bottom: 10px solid var(--govuk-colour-blue);
}

.govuk-header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  min-height: 60px;
  max-width: 960px;
  margin: 0 auto;
}

.govuk-header__logo { flex-shrink: 0; }

.govuk-header__link {
  color: var(--govuk-colour-white);
  text-decoration: none;
  display: flex;
  align-items: center;
}

.govuk-header__link:hover { text-decoration: underline; }

.govuk-header__logotype {
  display: flex;
  align-items: center;
  gap: 10px;
}

.govuk-header__logotype-crown,
.govuk-header__logotype img {
  fill: var(--govuk-colour-white);
  color: var(--govuk-colour-white);
  height: 32px;
  width: auto;
}

.govuk-header__logotype-text {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--govuk-colour-white);
}

.govuk-header__navigation { margin-left: auto; }

.govuk-header__navigation-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
  align-items: center;
}

.govuk-header__menu-button {
  display: none;
  background: none;
  border: 1px solid var(--govuk-colour-white);
  color: var(--govuk-colour-white);
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
  margin-left: auto;
}

@media (min-width: 769px) {
  .govuk-header__menu-button { display: none !important; }
  .govuk-header__navigation { display: block !important; }
}

@media (max-width: 768px) {
  .govuk-header__container {
    flex-wrap: wrap;
    padding: 10px 15px;
    min-height: auto;
  }

  .govuk-header__logo { margin-top: 10px; flex: 1; }
  .govuk-header__logotype-text { font-size: 14px; }
  .govuk-header__menu-button { display: block !important; align-self: center; }

  .govuk-header__content { width: 100%; order: 3; }

  .govuk-header__navigation {
    display: none;
    width: 100%;
    margin-left: 0;
    margin-top: 15px;
    border-top: 1px solid var(--govuk-colour-dark-grey);
    padding-top: 15px;
  }

  .govuk-header__navigation.js-visible { display: block; }

  .govuk-header__navigation-list {
    flex-direction: column;
    gap: 0;
    align-items: stretch;
  }
}
</style>
