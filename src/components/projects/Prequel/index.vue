<template>
  <VideoWrap src="bg.png"/>

  <Tabs
    v-model="activeTab"
    :items="tabs"
    bg-color="#ffd983"
    text-color="#000000"
    text-color-active="#000000"
    margin="-140px 0 0 0"
  />

  <component :is="component"/>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Design from './Design.vue';
import Process from './Process.vue';

const tabs = ['Design', 'Process'] as const;

const components = computed(() => ({
  Design,
  Process,
}));

const component = computed(() => components.value[activeTab.value] ?? '');
const activeTab = ref(tabs[0]);
</script>
