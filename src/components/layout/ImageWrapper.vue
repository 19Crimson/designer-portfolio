<script setup lang="ts">
import { computed, inject, Ref } from 'vue';

const props = defineProps({
  image: String,
  margin: {
    type: String,
    default: ''
  }
});

const project = inject<Ref<string>>('project');

const computedSrc = computed(() => `/projects/${project?.value}/${props.image}`);

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
