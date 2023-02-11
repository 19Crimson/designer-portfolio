<template>
  <ProjectHeader
    bgImage="header_bg.png"
    title-color="#4a4a52"
    fontSize="80"
    center
  >
    Tabs Demo
  </ProjectHeader>

  <Tabs
    v-model="activeTab"
    :items="tabs"
    bg-color="#3c3c3c"
    indicator-color="#f54242"
    text-color="#45d65f"
    text-color-active="#ffffff"
  />

  <component :is="component"/>
</template>

  
<script setup lang="ts">
import { ref, computed } from 'vue';
import Design from './Design.vue';
import Process from './Process.vue';
import Inspiration from './Inspiration.vue';

const tabs = ['Design', 'Process', 'Inspiration'] as const;

const components = computed(() => ({
  Design,
  Process,
  Inspiration
}));

const component = computed(() => components.value[activeTab.value] ?? '');
const activeTab = ref(tabs[0]);
</script>
