import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';

const app = createApp(App);
app.use(router);
window.app = app.mount('#app');