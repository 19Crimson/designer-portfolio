<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { onIntersect } from '@/utils/helpers';

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

</script>

<template>
  <div
    class="video-wrapper"
    ref="wrapper"
  >
    <vue3-video-player
      muted
      ref="player"
      src="/src/assets/video/videoplayback.mp4"
      :controls="false"
      autoplay
      loop
    />
  </div>
</template>

<style scoped lang="scss">
.video-wrapper {
  width: 100%;
}
</style>
