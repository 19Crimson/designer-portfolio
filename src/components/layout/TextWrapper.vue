<script setup lang="ts">
import { defineProps, computed, PropType } from 'vue'
import { TextAlign } from '@/utils/types'

const props = defineProps({
  color: String,
  align: {
    type: String as PropType<TextAlign>,
    default: 'left'
  },
})

const computedStyle = computed(() => ({
  textAlign: props.align,
  color: props.color,
}))
</script>

<template>
  <div class="text" :style="computedStyle">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.text {
  font-size: 18px;
  line-height: 24px;
  color: #000000;
}
</style>
