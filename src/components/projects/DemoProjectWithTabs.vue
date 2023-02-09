<template>
  <ProjectModal
    @close="handleClose"
  >
    <ProjectHeader
      bgImage="header_bg.png"
      title-color="#4a4a52"
      fontSize="80"
    >
      Some <strong style="font-weight: 900;">title</strong> example
    </ProjectHeader>

    <ProjectTabs
      v-model="activeProject"
      :items="projectTabsProps"
    />

    <ComponentProvider
      :name="activeProject"
    />
  </ProjectModal>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import {
  ProjectModal,
  ProjectHeader,
  ProjectTabs,
  ComponentProvider,
} from '@/components';
import { ProjectTabsItems } from '@/components/layout/ProjectTabs.vue';

const emit = defineEmits(['close']);

const activeProject = ref<string>();

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
  
const handleClose = () => {
  emit('close');
};
</script>