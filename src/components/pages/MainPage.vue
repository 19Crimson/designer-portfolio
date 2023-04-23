<template>
  <PageWrapper>
    <PageHeader
      :smallScreen="smallScreen"
      :mobile="isMobile"
    />
    <Typewriter
      v-if="!smallScreen"
      v-bind="typewriterProps"
    />

    <CardList
      :smallScreen="smallScreen"
      @open="onOpenProject"
    />

    <Modal :smallScreen="smallScreen">
      <ComponentProvider
        :folder="currentProject"
      />
    </Modal>
  </PageWrapper>
</template>

// TODO:
// Fix card open on right click
// Implement get-params to share projects pages
// Add lazyload / skeletons\
// Place social links under modal

<script setup lang="ts">
import { ref, provide, onMounted, computed } from 'vue';
import {
  PageHeader,
  Typewriter,
  PageWrapper,
  CardList,
  ComponentProvider,
} from '@/components';
// import { useWindow } from '@/utils/helpers';
import {
  keywords,
  colors,
  pretext,
  headline
} from '@/assets/configs/typewriter';

const modalOpened = ref(false);
const currentProject = ref('');
const clientHeight = ref(document.documentElement.clientHeight);
const clientWidth = ref(document.documentElement.clientWidth);

const smallScreen = computed(() => clientWidth.value < 840);
const isMobile = computed(() => clientWidth.value < 600);

onMounted(() => {
  window.addEventListener("resize", getDimensions);
});

const getDimensions = () => {
  clientWidth.value = document.documentElement.clientWidth;
  clientHeight.value = document.documentElement.clientHeight;
};


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
