# Designer Portfolio Project

This project was made as portfolio constructor with customizable content.

Made with: Vue 3, Vite, TS

## Добавление нового проекта (карточка + страница)
- Создать новый компонент проекта в **src/components/projects/someProjectName.vue**, скопировав для примера **Demo.vue**
- Создать одноименную папку с медиа-контентом проекта в **src/assets/projects/someProjectName**, добавив туда необходимые файлы (обязательно наличие картинок для ParallaxCard - фон и обложка)
- Добавить данные о проекте в конфиг **src/assets/configs/projects.ts**  по примеру добавленных проектов (описание параметров ниже)
- Настроить содержимое страницы на основе примера **Demo.vue** в соответствии с описанием ниже

## Описание параметров конфига projects.ts:

Для удобства базовые параметры проектов вынесены к конфиг **src/assets/configs/projects.ts**

Параметры проекта:
- **project** - Название компонента проекта в папке **src/components/projects** и одноименной папки с медиа в папке **src/assets/projects/**
- **cardBg** - Имя файла фона parallax карточки (файл должен лежать в папке с медиафайлами проекта)
- **cardFg** - Обложка parallax карточки (файл должен лежать в папке с медиафайлами проекта)
- **title** - Заголовок карточки
- **titleColor** - Цвет заголовка (необязательный параметр)
- **gradientColor** - Цвет градиента карточки в RGB (необязательный параметр)

## Описание основных компонентов
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
