<script setup lang="ts">
import { computed, inject } from 'vue';
import { TextAlign } from '@/utils/types';

const props = defineProps({
  title: String,
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

const folder = inject('folder');

const headerStyle = computed(() => ({
  ...(props.bgImage && { backgroundImage: `url("/src/assets/projects/${folder}/${props.bgImage}")` }),
}));

const titleStyle = computed(() => ({
  fontSize: `${props.fontSize}px`,
  color: props.titleColor,
  textAlign: props.center ? 'center' : 'left' as TextAlign,
  backgroundColor: props.bgColor,
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
