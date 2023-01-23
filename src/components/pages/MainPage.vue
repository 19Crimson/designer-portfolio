<script setup lang="ts">
import PageWrapper from '@/components/layout/PageWrapper.vue'
import Header from '@/components/layout/Header.vue'
import CardList from '@/components/layout/CardList.vue'
import TestProject from '@/components/projects/TestProject.vue'
import Typewriter from '@/components/layout/Typewriter.vue';

import { ref } from 'vue'

const dialogOpened = ref(false)

const onCloseDialog = () => {
  dialogOpened.value = false
}

const onOpenCard = () => {
  dialogOpened.value = true
}
</script>
// TODO:
// Fix Dialog content owerflow
// Fix words repeating until all words used
// Fix CardList / header overflow
// overflow hidden causes scroll to top when open card
// выдернуть надпись из хедера
// fix header content right overflow
// scroll dialog
// add folder prop to card list
// replace cards (content config)
// content default margins: картинки прижаты, но между ними 2px; Текст боковые 32px; заголовок - текст = 32px; макс ширина текста 680px;
// fix ts error in project header
// title align-center fix
// linter
<template>
  <PageWrapper :blocked="dialogOpened">
    <Header/>
    <Typewriter/>
    <CardList @openCard="onOpenCard"/>
    <TestProject
      :opened="dialogOpened"
      @close="onCloseDialog"
    />
  </PageWrapper>
</template>

<style scoped>
</style>
