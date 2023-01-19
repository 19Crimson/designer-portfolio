<script setup lang="ts">
import PageWrapper from '@/components/layout/PageWrapper.vue'
import Header from '@/components/layout/Header.vue'
import CardList from '@/components/layout/CardList.vue'
import DialogPage from '@/components/layout/DialogPage.vue'

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

<template>
  <PageWrapper :blocked="dialogOpened">
    <Header/>
    <CardList @openCard="onOpenCard"/>
    <DialogPage
      :opened="dialogOpened"
      @close="onCloseDialog"
    />
  </PageWrapper>
</template>

<style scoped>
</style>
