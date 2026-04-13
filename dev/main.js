import { createApp } from 'vue';
import { createBdsUiKit } from '../src/index.js';
import App from './App.vue';

const app = createApp(App);
app.use(createBdsUiKit());
app.mount('#app');
