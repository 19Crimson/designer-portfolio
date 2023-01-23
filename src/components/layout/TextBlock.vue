<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps({
  color: String,
  folder: String,
  align: {
    type: String,
    default: 'center'
  },
  noBgRepeat: Boolean,
})

const computedStyle = computed(() => ({
  textAlign: props.align,
  color: props.color,
}))
</script>

<template>
  <div class="text-block" :style="computedStyle">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.text-block {
  margin: 0 60px;
  max-width: 680px;
}
</style>
