<template>
  <component
    v-if="component"
    :is="component"
    :folder="name"
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