<template>
  <ProjectModal
    :opened="opened"
    @close="handleClose"
  >
    <Row>
      <TextBlock>
        <Headline>
          Default text block
        </Headline>
        <Text>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        </Text>
      </TextBlock>

      <TextBlock>
        <Headline align="center">
          Centered text block
        </Headline>
        <Text  align="center">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        </Text>
      </TextBlock>
    </Row>
  </ProjectModal>
</template>

<script setup lang="ts">
import {
  ProjectModal,
  // ProjectHeader,
  // Row,
  // Headline,
  // Text,
  // TextBlock,
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