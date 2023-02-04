<script setup lang="ts">
import {
  ref,
  inject,
  computed,
  onMounted,
  onUnmounted,
} from 'vue';
import { onIntersect } from '@/utils/helpers';

const props = defineProps({
  file: String,
  margin: {
    type: String,
    default: ''
  }
});

const folder = inject('folder');

const player = ref();
const observer = ref();
const wrapper = ref<HTMLElement>();

const onEnter = () => {
  if (player.value) {
    player.value.play();
  }
};

const onExit = () => {
  if (player.value) {
    player.value.pause();
  }
};

onMounted(() => {
  if (!wrapper.value) {
    return;
  }
  observer.value = onIntersect(wrapper.value, onEnter, onExit);
});

onUnmounted(() => {
  observer.value.disconnect();
});

const wrapperStyle = computed(() => ({
  margin: props.margin,
}));
</script>

<template>
  <div
    class="video-wrapper"
    ref="wrapper"
    :style="wrapperStyle"
  >
    <vue3-video-player
      ref="player"
      :src="`/src/assets/projects/${folder}/${file}`"
      :controls="false"
      autoplay
      loop
      muted
    />
  </div>
</template>

<style scoped lang="scss">
.video-wrapper {
  width: 100%;
}
</style>
