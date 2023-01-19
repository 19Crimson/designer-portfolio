<script setup lang="ts">
import PageWrapper from '@/components/layout/PageWrapper.vue'
import Header from '@/components/layout/Header.vue'
import CardList from '@/components/layout/CardList.vue'
import DialogPage from '@/components/layout/DialogPage.vue'

import { ref } from 'vue'

const dialogOpened = ref(true)

const onCloseDialog = () => {
  dialogOpened.value = false
}

const onOpenCard = () => {
  dialogOpened.value = true
}
</script>


// TODO:
// Fixed header
// Fix card twitch
// Randomize words

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
