import { createApp } from 'vue';
import '@/assets/css/main.css';
import App from '@/App.vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Vue3VideoPlayer from '@cloudgeek/vue3-video-player';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import LazyComponent from "v-lazy-component";

const app = createApp(App);
app.use(Vue3VideoPlayer);
app.use(LazyComponent);
app.mount('#app');
