# Designer Portfolio Project

This project was made as portfolio constructor with customizable content.

**Main features:**
- Interactive customizable 3d Parallax cards;
- Making your own projects pages with media content (images, video);
- Customizable typing effect (with random words and colours defined in config);
- Dynamic components initialization based on configuration file

Made with: Vue 3, Vite, TS

[Demo](https://19crimson.github.io/designer-portfolio/)

## Добавление нового проекта (карточка + страница)
- Создать новый компонент проекта в **src/components/projects/someProjectName.vue**, скопировав для примера **Demo.vue**
- Создать одноименную папку с медиа-контентом проекта в **public/projects/someProjectName**, добавив туда необходимые файлы (обязательно наличие картинок для ParallaxCard - фон и обложка)
- Добавить данные о проекте в конфиг **src/assets/configs/projects.ts**  по примеру добавленных проектов (описание параметров ниже)
- Настроить содержимое страницы на основе примера **Demo.vue** в соответствии с описанием ниже

## Описание параметров конфига projects.ts:

Для удобства базовые параметры проектов вынесены к конфиг **src/assets/configs/projects.ts**, в котором определется набор карточек на главном экране, их оформление, порядок и проект, страница которого должна открываться при нажатии на карточку

Параметры проекта:
- **project** - Название компонента проекта в папке **src/components/projects** и одноименной папки с медиа в папке **public/projects/**
- **cardBg** - Имя файла фона parallax карточки (файл должен лежать в папке с медиафайлами проекта)
- **cardFg** - Имя файла обложки parallax карточки (файл должен лежать в папке с медиафайлами проекта)
- **title** - Заголовок карточки
- **titleColor** - Цвет заголовка (необязательный параметр)
- **gradientColor** - Цвет градиента карточки в RGB (необязательный параметр)

## Описание основных компонентов
| Компонент         | Описание | Параметры (props)                                       |
| ----------------- | -------  | ------------------------------------------------------- |
| ProjectModal | Компонент модального окна со страницей проекта |  **bgImage** - Фон модального окна |
| ProjectHeader | Основной заголовок проекта | **title** - Текст заголовка<br>**bgImage** - Имя файла фонового изображения<br>**bgColor** - Цвет фона<br>**titleColor** - Цвет текста заголовка<br>**center** - Текст по центру<br>**noBgRepeat**: Убрать повторение фоновой картинки |
| Row | Контейнер страницы, содержит горизонтально расположенный контент | **bgImage** - Имя файла фонового изображения<br>**color** - Цвет текста<br>**noBgRepeat** - Фон без повторений<br>**center** - Текст по центру |
| TextBlock | Контейнер для блока с текстом (может содержать Headline и Text) | **align** - Выравнивание текста<br>**maxWidth** - Макс ширина блока с текстом в px<br>**margin** - Отступы блока текста |
| Headline | Заголовок блока с текстом |  **color** - цвет текста<br>**align** - Выравнивание текста<br>**fontSize** - Размер шрифта<br>**margin** - Отступы блока |
| Text | Контейнер для текста |  **color** - цвет текста<br>**align** - Выравнивание текста<br>**fontSize** - Размер шрифта<br>**margin** - Отступы блока |
| ImageWrap | Контейнер для изображения |  **image** - Имя файла изображения<br>**margin** - Отступы блока |
| VideoWrap | Контейнер для видео |  **file** - Имя файла видео<br>**margin** - Отступы блока |

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## Project initialization

``` bash
# install dependencies
npm install

# Setup dev mode
npm run dev
```
