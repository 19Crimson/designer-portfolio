<script setup lang="ts">
import { computed, PropType } from 'vue';
import { TextAlign } from '@/utils/types';

const props = defineProps({
  align: {
    type: String as PropType<TextAlign>,
    default: 'left'
  },
  maxWidth: {
    type: String,
    default: '880'
  },
  margin: {
    type: String,
    default: '60px',
  }
});

const computedStyle = computed(() => ({
  margin: props.margin,
  maxWidth: `${props.maxWidth}px`,
  textAlign: props.align,
}));
</script>

<template>
  <div class="text-block__wrapper" :style="computedStyle">
    <div class="text-block">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.text-block {
  width: 100%;

  &__wrapper {
    width: 100%;
  }
}
</style>
