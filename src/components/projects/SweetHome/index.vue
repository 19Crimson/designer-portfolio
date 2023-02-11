<!-- Это файл с фикс шапкой и табами. 
  Фикс шапку (и названия табов) прописываем тут. 
  Остальной переключаемый табами контент прописываем в отдельный файлах в этой же папке. '' -->
<template>
  <ProjectModal
    :opened="opened"
    @close="handleClose"
  >
    <Row color="#3c3c3c" center>
      <ImageWrapper image="1.png" />
    </Row>

    <Tabs
      v-model="activeTab"
      :items="tabs"
    />

    <Process v-if="activeTab === 'Process'"/>
    <Design v-if="activeTab === 'Design'"/>
  </ProjectModal>
</template>

<script setup lang="ts">
import {
  ProjectModal,
  Row,
  Tabs,
  // Headline,
  // Text,
  // TextBlock,
  ImageWrapper,
} from '@/components';
import { ref } from 'vue';
import { TabsItems } from '@/components/layout/Tabs.vue.js';
import Design from './Design.vue';
import Process from './Process.vue';

defineProps({
  opened: Boolean,
  folder: String,
});

const activeTab = ref<string>('');

const tabs: TabsItems = [
  {
    title: 'Design',
    value: 'Design',
  },
  {
    title: 'Process',
    value: 'Process',
  },
];

const emit = defineEmits(['close']);

const handleClose = () => {
  emit('close');
};
</script>
