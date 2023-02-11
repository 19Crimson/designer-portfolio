<template>
  <PageWrapper>
    <PageHeader/>
    <Typewriter
      :keywords="keywords"
      :colors="colors"
      :headline="headline"
      :pretext="pretext"
      change-title
    />
    <CardList
      @open="onOpenProject"
    />
    <ComponentProvider
      :folder="currentProject"
      @close="onCloseDialog"
    />
  </PageWrapper>
</template>

// TODO:
// Fix card open on right click
// Fix Project Modal Blur Transition on open
// Add favico / Page Title
// Implement get-params to share projects pages
// Add lazyload / skeletons
// Roc center content
// Smart render tabs
// Tab active transition / width
// Scroll modal on change tab

<script setup lang="ts">
import { ref, provide } from 'vue';
import {
  PageHeader,
  Typewriter,
  PageWrapper,
  CardList,
  ComponentProvider,
} from '@/components';
import {
  keywords,
  colors,
  pretext,
  headline
} from '@/assets/configs/typewriter';

const modalOpened = ref(false);
const currentProject = ref('');

const onCloseDialog = () => {
  modalOpened.value = false;
};

provide('modalOpened', modalOpened);
provide('project', currentProject);

const onOpenProject = (project?: string) => {
  if (!project) {
    console.error('Error, while opening project. Issue relates to project configuration');
    return;
  }
  currentProject.value = project;
  modalOpened.value = true;
};
</script>
