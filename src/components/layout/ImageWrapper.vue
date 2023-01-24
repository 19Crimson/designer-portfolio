<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  folder: String,
  image: String,
});

const computedSrc = computed(() => `/src/assets/img/${props.folder}/${props.image}`);
</script>

<template>
  <div class="image-wrapper">
    <img :src="computedSrc">
  </div>
</template>

<style scoped lang="scss">
.image-wrapper {
  width: 100%;

  > img {
    display: block;
    width: 100%;
    object-fit: contain;
  }
}
</style>
