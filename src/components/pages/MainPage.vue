<template>
  <PageWrapper>
    <PageHeader/>
    <Typewriter
      v-bind="typewriterProps"
    />

    <CardList
      @open="onOpenProject"
    />

    <Modal>
      <ComponentProvider
        :folder="currentProject"
      />
    </Modal>
  </PageWrapper>
</template>

// TODO:
// Fix card open on right click
// Implement get-params to share projects pages
// Add lazyload / skeletons

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

const typewriterProps = {
  keywords,
  colors,
  headline,
  pretext,
  changeTitle: true
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
