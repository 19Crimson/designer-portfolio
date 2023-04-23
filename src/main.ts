import { createApp } from 'vue';
import { createRouter, createWebHistory  } from 'vue-router';
import App from '@/App.vue';
import '@/assets/css/main.css';
import {
  Headline,
  ImageWrap,
  ProjectHeader,
  ProjectModal,
  ProjectRow,
  Tabs,
  TextBlock,
  TextWrap,
  VideoWrap,
  MainPage
} from '@/components';

// import SweetHome from '@/components/projects/SweetHome/index.vue';
// import Prequel from '@/components/projects/Prequel/index.vue';

// @ts-ignore
import Vue3VideoPlayer from '@cloudgeek/vue3-video-player';

const app = createApp(App);

// Defining routes
const routes = [
  { path: '/', component: MainPage },
  { path: '/:id', component: MainPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.component('Modal', ProjectModal);
app.component('ProjectHeader', ProjectHeader);
app.component('Tabs', Tabs);
app.component('Row', ProjectRow);
app.component('VideoWrap', VideoWrap);
app.component('ImageWrap', ImageWrap);
app.component('TextBlock', TextBlock);
app.component('Headline', Headline);
app.component('TextWrap', TextWrap);

app.use(Vue3VideoPlayer);
app.use(router);

app.mount('#app');
