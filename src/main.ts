import { createApp } from 'vue';
import App from '@/App.vue';
import '@/assets/css/main.css';

// @ts-ignore
import Vue3VideoPlayer from '@cloudgeek/vue3-video-player';

const app = createApp(App);
app.use(Vue3VideoPlayer);
app.mount('#app');
