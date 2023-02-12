<!-- Пример основного компонент проекта с табами (Содержимое модального окна) -->
<!-- Картинки / видео добавляем в одноименную папку в public/projects/... -->
<!-- Для создания нового проекта копируем шаблон в src/components/projects -->
<!-- Добавляем инфу о карточках проекта в конфиг (src/assets/configs/projects.ts) -->
<!-- Компоненты с содержимым табов лежат в этой же папке -->
<!-- Заголовок таба должен совпадать с именем компонента содержимого (Design, Process) -->
<!-- Для примера указаны все свойства элементов, ненужные удаляем -->
<template>

  <!-- Шапка модалкиы -->
  <!-- bg-image - фоновое изображение -->
  <!-- bg-color - цвет фона -->
  <!-- title-color - цвет заголовка -->
  <!-- fontSize - размер текста -->
  <!-- center - Содержимое по центру -->
  <!-- no-bg-repeat - Убрать повторение фона -->
  <ProjectHeader
    bg-image="header_bg.png"
    bg-color="#3c3c3c"
    title-color="#4a4a52"
    fontSize="80"
    center
    no-bg-repeat
  >
    Project example with colored tabs
  </ProjectHeader>

  <!-- Табы -->
  <!-- bg-color - цвет фона -->
  <!-- indicator-color - цвет индикатора активного таба -->
  <!-- text-color - цвет текста (неактивный) -->
  <!-- text-color-active - цвет текста (активный) -->
  <Tabs
    v-model="activeTab"
    :items="tabs"
    bg-color="#3c3c3c"
    indicator-color="#f54242"
    text-color="#45d65f"
    text-color-active="#ffffff"
  />

  <!-- Пример табов с картинкой на фоне -->
  <Row
    bgImage="header_bg.png"
    center
  >
    <Tabs
      v-model="activeTab"
      :items="tabs"
      bg-color="#3c3c3c"
      indicator-color="#f54242"
      text-color="#45d65f"
      text-color-active="#ffffff"
    />
  </Row>

  <component :is="component"/>
</template>

  
<script setup lang="ts">
import { ref, computed } from 'vue';
import Design from './Design.vue';
import Process from './Process.vue';

// Состав вкладок (названия = имена компонентов в папке)
const tabs = ['Design', 'Process'] as const;

const components = computed(() => ({
  Design,
  Process,
}));

const activeTab = ref(tabs[0]);
const component = computed(() => components.value[activeTab.value] ?? '');
</script>
