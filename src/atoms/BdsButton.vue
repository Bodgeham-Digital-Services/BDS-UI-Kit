<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: { type: String, default: 'primary', validator: (v) => ['primary', 'secondary', 'warning'].includes(v) },
  disabled: { type: Boolean, default: false },
  type: { type: String, default: 'button' },
  href: { type: String, default: null },
});

const emit = defineEmits(['click']);

const classes = computed(() => [
  'govuk-button',
  props.variant !== 'primary' && `govuk-button--${props.variant}`,
].filter(Boolean));

function onClick(e) {
  if (props.disabled) {
    e.preventDefault();
    return;
  }
  emit('click', e);
}
</script>

<template>
  <a v-if="href" :href="href" :class="classes" :aria-disabled="disabled || undefined" @click="onClick">
    <slot />
  </a>
  <button v-else :type="type" :class="classes" :disabled="disabled" @click="onClick">
    <slot />
  </button>
</template>

<style scoped>
.govuk-button {
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  margin: 0 5px 5px 0;
  padding: 8px 16px 7px;
  border: 2px solid transparent;
  border-radius: 0;
  color: var(--govuk-colour-white);
  background-color: var(--govuk-colour-green);
  box-shadow: 0 2px 0 #002d18;
  text-align: center;
  cursor: pointer;
  -webkit-appearance: none;
  font-family: inherit;
  font-size: 19px;
  line-height: 1;
  text-decoration: none;
  font-weight: 600;
}

.govuk-button:hover {
  background-color: var(--govuk-colour-dark-green);
  color: var(--govuk-colour-white);
  text-decoration: none;
}

.govuk-button:focus {
  border-color: var(--govuk-colour-yellow);
  outline: 3px solid transparent;
  box-shadow: inset 0 0 0 2px;
}

.govuk-button--secondary {
  background-color: var(--govuk-colour-dark-grey);
  color: var(--govuk-colour-white);
  box-shadow: 0 2px 0 #2e3133;
}

.govuk-button--secondary:hover {
  background-color: #1d1d1d;
  color: var(--govuk-colour-white);
}

.govuk-button--warning {
  background-color: var(--govuk-colour-red);
  box-shadow: 0 2px 0 #55150b;
}

.govuk-button--warning:hover {
  background-color: #aa2a16;
}

.govuk-button:disabled,
.govuk-button[aria-disabled="true"] {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
