<template>
  <ProjectRow>
    <TextBlock
      align="center"
      max-width="100%"
    >
      <TextHeadline>
        This is first tab content
      </TextHeadline>
    </TextBlock> 
  </ProjectRow>
</template>

<script setup lang="ts">
import {
  ProjectRow, //Горизонтальный ряд
  ImageWrapper, //Картинка 
  VideoWrapper, //Видосик
  TextBlock, //Контейнер для текста 
  TextHeadline, //Заголовок
  TextWrapper, //Текст

} from '@/components';
</script>