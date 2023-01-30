<script setup lang="ts">
import {
  PageHeader,
  Typewriter,
  TestProject,
  PageWrapper,
  CardList,
} from '@/components';

import { ref } from 'vue';

const dialogOpened = ref(false);

const onCloseDialog = () => {
  dialogOpened.value = false;
};

const onOpenCard = () => {
  dialogOpened.value = true;
};
</script>
// TODO:
// Fix Dialog content owerflow
// Fix words repeating until all words used
// Fix CardList / header overflow
// overflow hidden causes scroll to top when open card
// fix header content right overflow
// replace cards (content config)
// Fix closebutton margins
<template>
  <PageWrapper :blocked="dialogOpened">
    <PageHeader/>
    <Typewriter/>
    <CardList @openCard="onOpenCard"/>
    <TestProject
      :opened="dialogOpened"
      @close="onCloseDialog"
    />
  </PageWrapper>
</template>
