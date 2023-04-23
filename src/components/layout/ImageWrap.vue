<script setup lang="ts">
import { computed, inject, Ref } from 'vue';

const props = defineProps({
  src: String,
  margin: {
    type: String,
    default: ''
  }
});

const project = inject<Ref<string>>('project');

const computedSrc = computed(() => `/projects/${project?.value}/${props.src}`);

const wrapperStyle = computed(() => ({
  margin: props.margin,
}));
</script>

<template>
  <div
    class="image-wrapper"
    :style="wrapperStyle"
  >
    <img
      :src="computedSrc"
      draggable="false"
    >

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
