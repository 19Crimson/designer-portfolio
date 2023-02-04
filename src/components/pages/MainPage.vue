<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import {
  PageHeader,
  Typewriter,
  PageWrapper,
  CardList,
} from '@/components';
import {
  keywords,
  colors,
  pretext,
  headline
} from '@/assets/configs/typewriter';

const dialogOpened = ref(false);
const projectComponent = defineAsyncComponent(() =>
  import('@/components/projects/TestProject.vue')
);

const onCloseDialog = () => {
  dialogOpened.value = false;
};

const onOpenProject = (project?: string) => {
  if (!project) {
    console.error('Error, while opening project. Issue relates to project configuration');
    return;
  }
  projectComponent.value = () => import(`@/components/projects/${project}.vue`);
  dialogOpened.value = true;
};

</script>
// TODO:
// Fix autoplay video only whe visible
// Write README
<template>
  <PageWrapper>
    <PageHeader/>
    <Typewriter
      :keywords="keywords"
      :colors="colors"
      :headline="headline"
      :pretext="pretext"
    />
    <CardList
      @open="onOpenProject"
    />
    <component
      :is="projectComponent"
      :opened="dialogOpened"
      @close="onCloseDialog"
    />
  </PageWrapper>
</template>
