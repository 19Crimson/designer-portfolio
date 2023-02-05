<template>
  <PageWrapper>
    <PageHeader/>
    <Typewriter
      :keywords="keywords"
      :colors="colors"
      :headline="headline"
      :pretext="pretext"
      style="margin-top: 56px;"
    />
    <CardList
      @open="onOpenProject"
    />
    <ComponentProvider
      :name="currentProject"
      :opened="dialogOpened"
      @close="onCloseDialog"
    />
  </PageWrapper>
</template>

// TODO:
// Write README
// Fix card open on right click
// Fix Project Modal Blur Transition on open
// Add favico / Page Title
// Implement get-params to share projects pages


<script setup lang="ts">
import { ref } from 'vue';
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

const dialogOpened = ref(false);
const currentProject = ref('');

const onCloseDialog = () => {
  dialogOpened.value = false;
};

const onOpenProject = (project?: string) => {
  if (!project) {
    console.error('Error, while opening project. Issue relates to project configuration');
    return;
  }
  currentProject.value = project;
  dialogOpened.value = true;
};
</script>
