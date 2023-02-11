  
<script setup lang="ts">
import { ref } from 'vue';
import {
  ProjectModal,
  ProjectHeader,
  Tabs,
} from '@/components';
import { TabsItems } from '@/components/layout/Tabs.vue.js';
import DemoTabOne from '@/components/projects/DemoProjectWithTabs/DemoTabOne.vue';
import DemoTabTwo from '@/components/projects/DemoProjectWithTabs/DemoTabTwo.vue';

const emit = defineEmits(['close']);

const activeTab = ref<string>('');

const tabs: TabsItems = [
  {
    title: 'One',
    value: 'DemoTabOne',
  },
  {
    title: 'Two',
    value: 'DemoTabTwo',
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

    <!-- <component
      :is="activeTab"
    /> -->
    <DemoTabOne v-if="activeTab === 'DemoTabOne'"/>
    <DemoTabTwo v-if="activeTab === 'DemoTabTwo'"/>
  </ProjectModal>
</template>
