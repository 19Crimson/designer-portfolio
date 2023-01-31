<script setup lang="ts">
import {
  PageHeader,
  Typewriter,
  TestProject,
  PageWrapper,
  CardList,
} from '@/components';
import {
  keywords,
  colors,
  pretext,
  headline
} from '@/assets/configs/typewriter';
import { ref } from 'vue';

const dialogOpened = ref(false);
const dialog = ref();

const onCloseDialog = () => {
  dialogOpened.value = false;
};

const onOpenCard = () => {
  dialogOpened.value = true;
  // dialog.value.scrollTo(0, 0);
};

</script>
// TODO:
// Fix Dialog content owerflow
// Fix CardList / header overflow
// overflow hidden causes scroll to top when open card
// fix header content right overflow
// replace cards (content config)
// Fix reset scroll on open dialog
// Fix autoplay video only whe visible
<template>
  <PageWrapper :blocked="dialogOpened">
    <PageHeader/>
    <Typewriter
      :keywords="keywords"
      :colors="colors"
      :headline="headline"
      :pretext="pretext"
    />
    <CardList @openCard="onOpenCard"/>
    <TestProject
      ref="dialog"
      :opened="dialogOpened"
      @close="onCloseDialog"
    />
  </PageWrapper>
</template>
