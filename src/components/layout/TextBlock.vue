<script setup lang="ts">
import { defineProps, computed, PropType } from 'vue'
import { TextAlign } from '@/utils/types'

const props = defineProps({
  color: String,
  folder: String,
  align: {
    type: String as PropType<TextAlign>,
    default: 'left'
  },
  noBgRepeat: Boolean,
})

const computedStyle = computed(() => ({
  textAlign: props.align,
  color: props.color,
}))
</script>

<template>
  <div class="text-block__wrapper" :style="computedStyle">
    <div class="text-block" :style="computedStyle">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.text-block {
  width: 100%;

  &__wrapper {
    max-width: 800px;
    padding: 0 60px;
    width: 100%;
  }
}
</style>
