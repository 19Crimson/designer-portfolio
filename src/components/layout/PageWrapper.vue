<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  blocked: {
    type: Boolean,
    default: false,
  }
})

const computedStyle = computed(() => props.blocked ? 'overflow: hidden;' : '')
</script>

<template>
  <div class="page-container" :style="computedStyle">
    <slot/>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
}
</style>
