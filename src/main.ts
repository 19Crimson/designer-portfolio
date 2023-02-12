import { createApp } from 'vue';
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
} from '@/components';

// @ts-ignore
import Vue3VideoPlayer from '@cloudgeek/vue3-video-player';

const app = createApp(App);

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
app.mount('#app');
