  
<script setup lang="ts">
import { ref, inject } from 'vue';
import {
  ProjectModal,
  ProjectHeader,
  ProjectTabs,
  ComponentProvider,
} from '@/components';
import { ProjectTabsItems } from '@/components/layout/ProjectTabs.vue';

const emit = defineEmits(['close']);

const activeTab = ref<string>('');

const projectTabsProps: ProjectTabsItems = [
  {
    title: 'One',
    value: 'DemoTabOne',
  },
  {
    title: 'Two',
    value: 'DemoTabTwo',
  },
];

const project = inject<string>('project');
  
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

    <ProjectTabs
      v-model="activeTab"
      :items="projectTabsProps"
    />

    <ComponentProvider
      :folder="project"
      :name="activeTab"
    />
  </ProjectModal>
</template>
