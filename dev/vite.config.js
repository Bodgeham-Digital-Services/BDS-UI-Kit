import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'bds-ui-kit': resolve(__dirname, '../src/index.js'),
    },
  },
  server: {
    fs: {
      allow: [resolve(__dirname, '..')],
    },
  },
});
