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
} from 'vue';
  
const props = defineProps({
  name: {
    type: String,
    required: true,
    default: 'index'
  },
  folder: String,
});

const component = computed (() => props.folder && props.name
  ? defineAsyncComponent(() => import(`../projects/${props.folder}/${props.name}.vue`))
  : ''
);
</script>