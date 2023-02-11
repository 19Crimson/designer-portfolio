<template>
  <ProjectModal
    :opened="opened"
    @close="handleClose"
  >
    <ProjectRow>
      <ImageWrapper image="First screen.png"/>
    </ProjectRow>

    <Tabs
      v-model="activeTab"
      :items="tabs"
    />

    <ProjectRow>
      <TextBlock>
        <TextHeadline color="gray">
          Row example without background image
        </TextHeadline>
        <TextWrapper color="gray">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        </TextWrapper>
      </TextBlock>
      <TextBlock align="center" margin="160px 60px 0">
        <TextWrapper color="gray">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        </TextWrapper>
      </TextBlock>
    </ProjectRow>
  </ProjectModal>
</template>

<script setup lang="ts">
import {
  ProjectModal,
  ProjectRow,
  Tabs,
  TextHeadline,
  TextWrapper,
  TextBlock,
  ImageWrapper,
} from '@/components';
import { ref } from 'vue';
import { TabsItems } from '@/components/layout/Tabs.vue.js';

defineProps({
  opened: Boolean,
  folder: String,
});

const activeTab = ref<string>('');

const tabs: TabsItems = [
  {
    title: 'Design',
    value: 'Design',
    // textColor: '#000000',
    textColorActive: '#000000',
  },
  {
    title: 'Procesess',
    value: 'Procesess',
    // textColor: '#FFFFFF',
    // textColorActive: '#3С3С3С',
  },
];

const emit = defineEmits(['close']);

const handleClose = () => {
  emit('close');
};
</script>