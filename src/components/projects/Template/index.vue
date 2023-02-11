<template>
  <ProjectModal
    :opened="opened"
    @close="handleClose"
  >
   Контент тут
  </ProjectModal>
</template>

<script setup lang="ts">
import {
  ProjectModal,
  // ProjectHeader,
  // ProjectRow,
  // TextHeadline,
  // TextWrapper,
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