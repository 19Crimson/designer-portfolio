<script setup lang="ts">
import { computed, PropType } from 'vue';
import { TextAlign } from '@/utils/types';

const props = defineProps({
  color: String,
  align: {
    type: String as PropType<TextAlign>,
    default: 'left'
  },
});

const computedStyle = computed(() => ({
  textAlign: props.align,
  color: props.color,
}));
</script>

<template>
  <div class="headline" :style="computedStyle">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.headline {
  font-size: 40px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 8px;
}
</style>
