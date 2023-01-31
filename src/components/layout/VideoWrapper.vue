<script setup lang="ts">
import { ref, onMounted } from 'vue';

const player = ref();

onMounted(async () => {
  await player.value.play();
});

</script>

<template>
  <div class="video-wrapper">
    <vue3-video-player
      class="player"
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
