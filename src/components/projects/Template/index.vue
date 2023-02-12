<!-- Пример основного компонент проекта без табов (Содержимое модального окна) -->
<!-- Картинки / видео добавляем в одноименную папку в public/projects/... -->
<!-- Для создания нового проекта копируем шаблон в src/components/projects -->
<!-- Добавляем инфу о карточках проекта в конфиг (src/assets/configs/projects.ts) -->
<!-- Ниже для примера указаны все свойства компонентов, ненужные удаляем -->
<template>

  <!-- Шапка модалки -->
  <!-- bg-image - фоновое изображение -->
  <!-- bg-color - цвет фона -->
  <!-- title-color - цвет заголовка -->
  <!-- font-size - размер текста -->
  <!-- center - Содержимое по центру -->
  <!-- no-bg-repeat - Убрать повторение фона -->
  <ProjectHeader
    bg-image="header_bg.png"
    title-color="#4a4a52"
    font-size="80"
    bg-color="#3c3c3c"
    center
    no-bg-repeat
  >
    Some <strong style="font-weight: 900;">title</strong> example
  </ProjectHeader>

<!-- Контейнер горизонтально расположенного контента (ряд) -->
<!-- bg-image - картинка фона -->
<!-- color - цвет фона -->
<!-- bg-repeat - вкл повтор фона -->
<!-- center - содержимое по центру -->
  <Row
    bg-image="header_bg.png"
    color="#4a4a52"
    bg-repeat
    center
  >

    <!-- Контейнер текста (может содержать Headline и TextWrap) -->
    <!-- align - выравнивание текста -->
    <!-- max-width - макс ширина блока -->
    <!-- margin - отступы -->
    <TextBlock
      align="center"
      max-width="600"
      margin="60px 40px"
    >

      <!-- Заголовок -->
      <!-- color - цвет текста -->
      <!-- align - выравнивание текста -->
      <!-- font-size - размер текста -->
      <!-- margin - отступы -->
      <Headline
        color="#4a4a52"
        align="center"
        font-size="28"
        margin="60px 40px"
      >
        Default text block
      </Headline>

      <!-- Текст -->
      <!-- color - цвет текста -->
      <!-- align - выравнивание текста -->
      <!-- font-size - размер текста -->
      <!-- margin - отступы -->
      <TextWrap
        color="#4a4a52"
        align="center"
        font-size="28"
        margin="60px 40px"
      >
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </TextWrap>
    </TextBlock>

    <!-- Картинка -->
    <!-- src - Имя файла в одноименной папке с проектом в public/projects -->
    <!-- margin - отступы -->
    <ImageWrap
      src="test-img.jpg"
      margin="20px"
    />

    <!-- Видео -->
    <!-- src Имя файла в одноименной папке с проектом в public/projects -->
    <!-- margin - отступы -->
    <VideoWrap src="playback.mp4"/>
  </Row>

  <!-- Картинки и видео можно не помещать в Row, если кроме них нет контента в ряду -->
  <ImageWrap src="test-img.jpg"/>
  <VideoWrap src="playback.mp4"/>

  <Row>
    <TextBlock>
      <Headline>
        Second row
      </Headline>
      <TextWrap>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </TextWrap>
    </TextBlock>
  </Row>
</template>
