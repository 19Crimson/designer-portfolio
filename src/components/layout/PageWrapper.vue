<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  blocked: {
    type: Boolean,
    default: false,
  }
})

const pageContainerClass = computed(
  () => props.blocked
    ? 'page-container page-container--fixed'
    : 'page-container'
)
</script>

<template>
  <div :class="pageContainerClass">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;

  &--fixed {
    overflow: hidden;
  }
}
</style>
