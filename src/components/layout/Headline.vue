<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps({
  color: String,
  align: {
    type: String,
    default: 'center'
  },
})

const computedStyle = computed(() => ({
  textAlign: props.align,
  color: props.color,
}))
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
