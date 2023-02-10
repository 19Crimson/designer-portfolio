<template>
  <ProjectModal
    :opened="opened"
    @close="handleClose"
  >
    <ProjectHeader
      bg-color="#f58142"
      title-color="#4a4a52"
      fontSize="80"      
    >
      Some <strong style="font-weight: 900;">title</strong> example
    </ProjectHeader>

    <ProjectRow center>
      <TextBlock>
        <TextHeadline>
          Default text block
        </TextHeadline>
        <TextWrapper>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        </TextWrapper>
      </TextBlock>

      <TextBlock>
        <TextHeadline align="center">
          Centered text block
        </TextHeadline>
        <TextWrapper  align="center">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        </TextWrapper>
      </TextBlock>

      <TextBlock
        align="right"
        max-width="550"
        padding="100px 20px 20px"
      >
        <TextHeadline
          font-size="26"
          color="#0202b8"
        >
          Text block with custom props
        </TextHeadline>
        <TextWrapper
          font-size="16"
          color="#0202b8"
        >
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        </TextWrapper>
      </TextBlock>
    </ProjectRow>

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

    <ProjectRow center color="#a1a1ff">
      <TextBlock>
        <TextHeadline>
          Row with video
        </TextHeadline>
        <TextWrapper>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        </TextWrapper>
      </TextBlock>
    </ProjectRow>

    <ProjectRow color="#f4c5e3" center>
      <TextBlock>
        <TextHeadline>
          Test headline
        </TextHeadline>
        <TextWrapper>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        </TextWrapper>
      </TextBlock>
    </ProjectRow>

    <ProjectRow center color="#070707">
      <TextBlock>
        <TextHeadline color="#a1a1ff">
          Headline example
        </TextHeadline>
        <TextWrapper color="#5151b8">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        </TextWrapper>
      </TextBlock>
    </ProjectRow>

    <ProjectRow color="#3c3c3c" center>
      <TextBlock>
        <TextHeadline>
          Test headline
        </TextHeadline>
        <TextWrapper>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        </TextWrapper>

        <TextHeadline margin="20px 0 0 0">
          Test headline
        </TextHeadline>
        <TextWrapper>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        </TextWrapper>
      </TextBlock>

      <TextBlock>
        <TextHeadline>
          Test headline
        </TextHeadline>
        <TextWrapper>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        </TextWrapper>
        <TextHeadline margin="20px 0 0 0">
          Test headline
        </TextHeadline>
        <TextWrapper>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        </TextWrapper>  
      </TextBlock>
    </ProjectRow>
  </ProjectModal>
</template>

<script setup lang="ts">
import {
  ProjectModal,
  ProjectHeader,
  ProjectRow,
  TextHeadline,
  TextWrapper,
  TextBlock,
} from '@/components';

defineProps({
  opened: Boolean,
  folder: String,
});

const emit = defineEmits(['close']);

const handleClose = () => {
  emit('close');
};
</script>