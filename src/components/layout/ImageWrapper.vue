<script setup lang="ts">
import { computed, inject } from 'vue';

const props = defineProps({
  image: String,
});

const folder = inject('folder');

const computedSrc = computed(() => `/src/assets/projects/${folder}/${props.image}`);
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
