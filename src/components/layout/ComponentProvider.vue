<template>
  <component
    v-if="component"
    :is="component"
    :folder="name"
    v-bind="$attrs"
  />
</template>
  
<script setup lang="ts">
import {
  defineAsyncComponent,
  computed,
  provide,
} from 'vue';
  
const props = defineProps({
  name: String,
});

provide('folder', props.name);

const component = computed (() => props.name ? defineAsyncComponent(() => import(`../projects/${props.name}.vue`)) : '');
</script>