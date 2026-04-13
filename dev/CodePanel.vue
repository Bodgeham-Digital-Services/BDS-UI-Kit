<script setup>
import { ref, computed, watch } from 'vue';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('bash', bash);

const props = defineProps({
  open: { type: Boolean, default: false },
  title: { type: String, default: '' },
  code: { type: String, default: '' },
});

const emit = defineEmits(['close']);

const copied = ref(false);

const highlightedCode = computed(() => {
  if (!props.code) return '';
  const result = hljs.highlightAuto(props.code, ['xml', 'javascript', 'css', 'bash']);
  return result.value;
});

function copyCode() {
  navigator.clipboard.writeText(props.code);
  copied.value = true;
  setTimeout(() => { copied.value = false; }, 1500);
}

watch(() => props.open, (val) => {
  document.body.style.overflow = val ? 'hidden' : '';
});
</script>

<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <Transition name="fade">
      <div v-if="open" class="code-panel-backdrop" @click="emit('close')" />
    </Transition>

    <!-- Panel -->
    <Transition name="slide">
      <div v-if="open" class="code-panel">
        <div class="code-panel__header">
          <h3 class="code-panel__title">{{ title }}</h3>
          <div class="code-panel__actions">
            <button class="code-panel__copy" @click="copyCode" :title="copied ? 'Copied!' : 'Copy code'">
              <span v-if="copied">Copied</span>
              <span v-else>Copy</span>
            </button>
            <button class="code-panel__close" @click="emit('close')" aria-label="Close panel">&times;</button>
          </div>
        </div>
        <div class="code-panel__body">
          <pre class="code-panel__pre"><code v-html="highlightedCode"></code></pre>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.code-panel-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
}

.code-panel {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(580px, 90vw);
  background: #1e1e2e;
  color: #cdd6f4;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.3);
}

.code-panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: #181825;
  border-bottom: 1px solid #313244;
  flex-shrink: 0;
}

.code-panel__title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #cba6f7;
}

.code-panel__actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.code-panel__copy {
  background: #313244;
  border: 1px solid #45475a;
  color: #a6adc8;
  padding: 4px 12px;
  font-size: 13px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s;
}

.code-panel__copy:hover {
  background: #45475a;
  color: #cdd6f4;
}

.code-panel__close {
  background: none;
  border: none;
  color: #6c7086;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  padding: 0 4px;
  transition: color 0.15s;
}

.code-panel__close:hover {
  color: #f38ba8;
}

.code-panel__body {
  flex: 1;
  overflow: auto;
  padding: 20px;
}

.code-panel__pre {
  margin: 0;
  font-family: "JetBrains Mono", "Fira Code", "Cascadia Code", Consolas, monospace;
  font-size: 14px;
  line-height: 1.6;
  white-space: pre;
  tab-size: 2;
}

/* Highlight.js token colors — Catppuccin Mocha palette */
.code-panel__pre :deep(.hljs-tag) { color: #f38ba8; }
.code-panel__pre :deep(.hljs-name) { color: #f38ba8; }
.code-panel__pre :deep(.hljs-attr) { color: #fab387; }
.code-panel__pre :deep(.hljs-string) { color: #a6e3a1; }
.code-panel__pre :deep(.hljs-number) { color: #fab387; }
.code-panel__pre :deep(.hljs-keyword) { color: #cba6f7; }
.code-panel__pre :deep(.hljs-built_in) { color: #f9e2af; }
.code-panel__pre :deep(.hljs-title) { color: #89b4fa; }
.code-panel__pre :deep(.hljs-function) { color: #89b4fa; }
.code-panel__pre :deep(.hljs-selector-class) { color: #a6e3a1; }
.code-panel__pre :deep(.hljs-selector-tag) { color: #f38ba8; }
.code-panel__pre :deep(.hljs-property) { color: #89dceb; }
.code-panel__pre :deep(.hljs-attribute) { color: #fab387; }
.code-panel__pre :deep(.hljs-comment) { color: #6c7086; font-style: italic; }
.code-panel__pre :deep(.hljs-variable) { color: #cdd6f4; }
.code-panel__pre :deep(.hljs-literal) { color: #fab387; }
.code-panel__pre :deep(.hljs-symbol) { color: #f5c2e7; }
.code-panel__pre :deep(.hljs-meta) { color: #6c7086; }
.code-panel__pre :deep(.hljs-selector-id) { color: #89b4fa; }
.code-panel__pre :deep(.hljs-template-variable) { color: #f38ba8; }

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-leave-active {
  transition: transform 0.2s ease-in;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
