<script setup lang="ts">
import { computed, PropType } from 'vue';
import { TextAlign } from '@/utils/types';

const props = defineProps({
  color: String,
  align: {
    type: String as PropType<TextAlign>,
    default: ''
  },
  fontSize: {
    type: String,
    default: '38',
  },
  margin: String
});

const computedStyle = computed(() => ({
  fontSize: `${props.fontSize}px`,
  margin: props.margin,
  ...(props.color && { color: props.color }),
  ...(props.align && { textAlign: props.align })
}));
</script>

<template>
  <div class="headline" :style="computedStyle">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.headline {
  font-weight: 600;
  color: #000000;
  margin-bottom: 8px;
}
</style>
