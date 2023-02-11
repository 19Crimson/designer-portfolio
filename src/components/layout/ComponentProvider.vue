<template>
  <component
    v-if="component"
    :is="component"
    v-bind="$attrs"
  />
</template>
  
<script setup lang="ts">
import {
  defineAsyncComponent,
  computed,
} from 'vue';
  
const props = defineProps({
  name: {
    type: String,
    default: 'index'
  },
  folder: String,
});

const component = computed (() => props.folder && props.name
  ? defineAsyncComponent(() => import(`../projects/${props.folder}/${props.name}.vue`))
  : ''
);
</script>