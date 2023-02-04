<template>
  <component
    :is="component"
    v-bind="$attrs"
  />
</template>
  
<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue';
  
const props = defineProps({
  name: String,
});

const component = computed (() => props.name ? defineAsyncComponent(() => import(`../projects/${props.name}.vue`)) : '');
</script>