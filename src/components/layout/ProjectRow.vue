<script setup lang="ts">
import { computed, inject, Ref } from 'vue';

const props = defineProps({
  bgImage: String,
  color: String,
  bgRepeat: {
    type: Boolean,
    default: false,
  },
  center: Boolean,
});

const project = inject<Ref<string>>('project');

const bgPath = computed(() => {
  return project?.value
    ? `url("/projects/${project.value}/${props.bgImage}")`
    : `url("public/${props.bgImage}")`;
});

const rowWrapperStyle = computed(() => ({
  ...(props.bgImage && { backgroundImage: bgPath.value }),
  backgroundColor: props.color,
  backgroundRepeat: props.bgRepeat ? 'repeat' : 'no-repeat',
}));

const rowStyle = computed(() => ({
  'justify-content': props.center ? 'center' : 'space-between',
}));
</script>

<template>
  <div class="project-row__wrapper" :style="rowWrapperStyle">
    <div class="project-row" :style="rowStyle">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__wrapper {
    display: flex;
    width: 100%;
    background-size: cover;
  }
}
</style>
