# Designer Portfolio Project

This project was made as portfolio constructor with customizable content.

Made with: Vue 3, Vite, TS

## Добавление нового проекта (карточка + страница)
- Создать новый компонент проекта в **src/components/projects/someProjectName.vue**, скопировав для примера Demo.vue
- Создать одноименную папку с медиа-контентом проекта в **src/assets/media/someProjectName**, добавив туда необходимые файлы (обязательно наличие картинок для ParallaxCard - фон и обложка)
- Добавить данные о проекте в конфиг **src/assets/configs/projects.ts** (параметры конфига описаны ниже)
- Настроить содержимое страницы (описание стрктуры компонента проекта описана ниже)

## Структура компонента проекта строится с помощью следующих компонентов:

В файле **src/assets/configs/projects.ts** описывается структура проектов, их очередность и контент

Параметры проекта в файле **src/assets/configs/projects.ts**:
- project - Название компонента проекта (и одноименной папки в assets/projects)
- cardBg - Фон parallax карточки
- cardFg - Обложка parallax карточки
- title - Заголовок карточки
- titleColor - Цвет заголовка
- gradientColor - Цвет градиента карточки в RGB

Описание основных компонентов
| Компонент         | Описание | Параметры (props)                                       |
| ----------------- | -------  | ------------------------------------------------------- |
| ProjectModal | Компонент модального окна со страницей проекта |  **bgImage** - Фон модального окна |
| ProjectHeader | Основной заголовок проекта | **title** - Текст заголовка<br>**bgImage** - Имя файла фонового изображения<br>**bgColor** - Цвет фона<br>**titleColor** - Цвет текста заголовка<br>**center** - Текст по центру<br>**noBgRepeat**: Убрать повторение фоновой картинки |
| ProjectRow | Контейнер страницы, содержит горизонтально расположенный контент | **bgImage** - Имя файла фонового изображения<br>**color** - Цвет текста<br>**noBgRepeat** - Фон без повторений<br>**center** - Текст по центру |
| TextBlock | Контейнер для блока с текстом (может содержать TextHeadline и TextWrapper) | **align** - Выравнивание текста<br>**maxWidth** - Ширина блока с текстом (указывается количество px числом)<br>**margin** - Отступы блока текста |
| TextHeadline | Заголовок блока с текстом |  **color** - цвет текста<br>**align** - Выравнивание текста<br>**fontSize** - Размер шрифта<br>**margin** - Отступы блока |
| TextWrapper | Контейнер для текста |  **color** - цвет текста<br>**align** - Выравнивание текста<br>**fontSize** - Размер шрифта<br>**margin** - Отступы блока |
| ImageWrapper | Контейнер для изображения |  **image** - Имя файла изображения<br>**margin** - Отступы блока |
| VideoWrapper | Контейнер для видео |  **file** - Имя файла видео<br>**margin** - Отступы блока |

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
