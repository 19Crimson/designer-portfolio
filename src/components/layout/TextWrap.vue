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
    default: '21',
  },
  margin: String,
});

const computedStyle = computed(() => ({
  fontSize: `${props.fontSize}px`,
  margin: props.margin,
  ...(props.color && { color: props.color }),
  ...(props.align && { textAlign: props.align })
}));
</script>

<template>
  <div class="text" :style="computedStyle">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.text {
  color: #0f0f0f;
  line-height: 32px;
  font-stretch: semi-expanded;
}
</style>
