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
  project: String,
});

const component = computed (() => props.project && props.name
  ? defineAsyncComponent(() => import(`../projects/${props.project}/${props.name}.vue`))
  : ''
);
</script>