<script setup lang="ts">
import { ref } from 'vue';
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

const dialogOpened = ref(false);
const dialog = ref();

const onCloseDialog = () => {
  dialogOpened.value = false;
};

const onOpenCard = () => {
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
    <CardList @openCard="onOpenCard"/>
    <TestProject
      ref="dialog"
      :opened="dialogOpened"
      @close="onCloseDialog"
    />
  </PageWrapper>
</template>
