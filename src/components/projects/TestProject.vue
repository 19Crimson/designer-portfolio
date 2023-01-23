<script setup lang="ts">
import {
  ProjectModal,
  ProjectHeader,
  ProjectRow,
  Headline,
  TextWrapper,
  TextBlock,
  ImageWrapper,
} from '@/components/layout'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  opened: Boolean,
})

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <ProjectModal
    :opened="opened"
    @close="handleClose"
  >
    <ProjectHeader
      folder="test-project"
      bgImage="header_bg.png"
      title-color="#FFB9AA"
    >
      Some title <strong style="font-weight: 900;">example</strong>
    </ProjectHeader>

    <ProjectRow
      folder="test-project"
      bgColor="#FFB9AA"
      title-color="#FFB9AA"
    >
      <TextBlock>
        <Headline
          color="white"
          align="left"
        >
          Test headline
        </Headline>

        <TextWrapper
          color="white"
          align="left"
        >
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
        </TextWrapper>
      </TextBlock>

      <TextBlock>
        <Headline
          color="white"
          align="left"
        >
          Test headline
        </Headline>

        <TextWrapper
          color="white"
          align="left"
        >
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
        </TextWrapper>
      </TextBlock>
      <TextBlock>
        <Headline
          color="white"
          align="left"
        >
          Test headline
        </Headline>

        <TextWrapper
          color="white"
          align="left"
        >
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
        </TextWrapper>
      </TextBlock>
      <ImageWrapper
        folder="test-project"
        image="test-img.jpg"
      />
    </ProjectRow>
    <ImageWrapper
      folder="test-project"
      image="test-img.jpg"
    />
  </ProjectModal>
</template>

<style scoped lang="scss">

</style>
