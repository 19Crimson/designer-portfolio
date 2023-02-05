<script setup lang="ts">
import { computed, inject } from 'vue';

const props = defineProps({
  image: String,
  margin: {
    type: String,
    default: ''
  }
});

const folder = inject('folder');

const computedSrc = computed(() => `/projects/${folder}/${props.image}`);

const wrapperStyle = computed(() => ({
  margin: props.margin,
}));
</script>

<template>
  <div
    class="image-wrapper"
    :style="wrapperStyle"
  >
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
