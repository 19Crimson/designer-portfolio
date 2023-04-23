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
// Add lazyload
// Place social links under modal

<script setup lang="ts">
import { ref, provide, onMounted, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Projects from '@/assets/configs/projects';

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

const availableProjects = Projects.map(item => item.project);

const modalOpened = ref(false);
const currentProject = ref('');
const clientHeight = ref(document.documentElement.clientHeight);
const clientWidth = ref(document.documentElement.clientWidth);

const smallScreen = computed(() => clientWidth.value < 840);
const isMobile = computed(() => clientWidth.value < 600);

const route = useRoute();
const router = useRouter();

const checkRoute = () => {
  availableProjects.forEach(value => {
    if (route.path.includes(value)) {
      currentProject.value = value;
      modalOpened.value = true;
    } else {
      modalOpened.value = false;
    }
  });
};

watch(
  () => route.path,
  () => { checkRoute(); }
);


onMounted(() => {
  window.addEventListener("resize", getDimensions);
  checkRoute();
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
  router.push({ path: `/${project}` });
};
</script>
