<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  folder: {
    type: String,
    default: '',
  },
  bgImage: String,
  color: String,
  noBgRepeat: Boolean,
  noPadding: Boolean,
  center: Boolean,  
});

const bgPath = computed(() => {
  return props.folder
    ? `url("/src/assets/img/${props.folder}/${props.bgImage}")`
    : `url("/src/assets/img/${props.bgImage}")`;
});

const rowWrapperStyle = computed(() => ({
  ...(props.bgImage && { backgroundImage: bgPath.value }),
  backgroundColor: props.color,
  backgroundRepeat: props.noBgRepeat ? 'no-repeat' : 'repeat',
  padding: props.noPadding ? '0' : '60px 0px'
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

  &__wrapper {
    display: flex;
    padding: 60px 0px;
    width: 100%;
    background-repeat: repeat;
    align-items: center;
    justify-content: center;
  }
}
</style>
