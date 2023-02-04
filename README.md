## Создание нового проекта (карточка + страница)

# Создать новый компонент проекта в src/components/projects/someProjectName.vue, скопировав один из имеющихся

# Создать папку с изображениями проекта (bg. fg. и тд) в assets/img/someProjectName.
По дефолту название папки с изображениями должно совпадать с папкой проекта (иначе указывать параметр folder в конфиге)

# Структура компонента проекта строится с помощью следующих компонентов:
ProjectModal -  Компонент модального окна со страницей проекта
ProjectHeader - Основной заголовок проекта
Параметры (props):
  title: Текст заголовка,
  folder: Название папки с bg изображением,
  bgImage: Имя файла bg изображения с расширешием,
  bgColor: Цвет фона,
  titleColor: Цвет текста заголовка,
  center: Текст по центру,
  noBgRepeat: Убрать повторение фоновой картинки,

ProjectRow - контейнер ряда (контент в модалке, расположенный горизонтально; содержит компоненты TextBlock, ImageWrapper, VideoWrapper)
Параметры:
  folder: Название папки с bg изображением,
  bgImage: Имя файла bg изображения с расширешием
  color: Цвет текста,
  noBgRepeat: Фон без повторений
  center: Текст по центру
  
TextBlock - Контейнер для блока с текстом (содержит TextHeadline и TextWrapper)
Параметры:
  color: цвет текста,
  folder: Название папки с картинкой,
  align: Выравнивание текста
  noBgRepeat: Фон без повторений,
  maxWidth: Ширина блока с текстом (указывается число px)
  padding: Отступы у текста

TextHeadline - Заголовок блока с текстом
Параметры:
  color: цвет текста,
  align: Выравнивание текста
  fontSize: Значение размера текста (пример <TextHeadline :fontSize="20">)

TextWrapper - Контейнер для текста
Параметры:
  color: цвет текста,
  align: Выравнивание текста
  fontSize: Значение размера текста (пример <TextWrapper :fontSize="20">)

ImageWrapper - Контейнер для изображения
Параметры:
  folder: Название папки,
  image: Имя файла изображения с расширешием,

VideoWrapper - Контейнер для видео


В файле src/assets/configs/projects.ts описывается структура проектов, их очередность и контент

Параметры проекта:
project - Название компонента проекта (и одноименной папки в assets/projects)
cardBg - Фон карточки
cardFg - Пердений фон карточки
title - Заголовок карточки
titleColor - Цвет тайтла

Описание основных компонентов
| Компонент         | Описание | Параметры (props)                                       |
| ----------------- | -------  | ------------------------------------------------------- |
| Example Color | |  ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
