<script setup lang="ts">
import { computed, inject, Ref } from 'vue';
import { TextAlign } from '@/utils/types';

const props = defineProps({
  bgImage: String,
  bgColor: String,
  titleColor: String,
  center: Boolean,
  noBgRepeat: Boolean,
  fontSize: {
    type: String,
    default: '40',
  },
});

const project = inject<Ref<string>>('project');

const headerStyle = computed(() => ({
  ...(props.bgImage && { backgroundImage: `url("/projects/${project?.value}/${props.bgImage}")` }),
  backgroundColor: props.bgColor,
}));

const titleStyle = computed(() => ({
  fontSize: `${props.fontSize}px`,
  color: props.titleColor,
  textAlign: props.center ? 'center' : 'left' as TextAlign,
  backgroundRepeat: props.noBgRepeat ? 'no-repeat' : 'repeat',
}));
</script>

<template>
  <div class="project-header" :style="headerStyle">
    <div class="project-header__title" :style="titleStyle">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-header {
  font-size: 80px;
  padding: 160px 60px 12px;
  text-align: left;
  width: 100%;
  background-repeat: repeat;

  &__title {
    width: 100%;
  }
}
</style>
