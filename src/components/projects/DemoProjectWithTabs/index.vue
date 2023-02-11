  
<script setup lang="ts">
import { ref } from 'vue';
import {
  ProjectModal,
  ProjectHeader,
  Tabs,
} from '@/components';
import { TabsItems } from '@/components/layout/Tabs.vue.js';
import Design from './Design.vue';
import Process from './Process.vue';

const emit = defineEmits(['close']);

const activeTab = ref<string>('');

const tabs: TabsItems = [
  {
    title: 'Design',
    value: 'Design',
  },
  {
    title: 'Process',
    value: 'Process',
  },
];
  
const handleClose = () => {
  emit('close');
};
</script>

<template>
  <ProjectModal
    @close="handleClose"
  >
    <ProjectHeader
      bgImage="header_bg.png"
      title-color="#4a4a52"
      fontSize="80"
    >
      Some title example
    </ProjectHeader>

    <Tabs
      v-model="activeTab"
      :items="tabs"
    />

    <Process v-if="activeTab === 'Process'"/>
    <Design v-if="activeTab === 'Design'"/>
  </ProjectModal>
</template>
