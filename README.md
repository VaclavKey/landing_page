# Landing Page — Vite + React + TypeScript

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

Адаптивная верстка лендинга по макету с использованием **React**, **TypeScript**, **SCSS** и компонентного подхода.
Проект создан как портфолио-пример современной фронтенд-разработки с упором на переиспользуемость компонентов, чистую архитектуру и визуальную консистентность.

## 🚀 Стек технологий

* **Vite** — быстрая сборка и разработка
* **React + TypeScript** — компонентный подход и типизация
* **SCSS (модули)** — кастомные стили с переменными, миксинами, структурой и BEM-подобным неймингом
* **Storybook** — витрина UI-компонентов
* **ESLint + Prettier** — линтинг и форматирование по единым правилам
* **Mobile-first адаптив** — корректное отображение на всех устройствах

## 📦 Возможности и особенности проекта

### 🔹 Компонентная архитектура

* Каждый блок страницы вынесен в отдельный модуль
* Внутри блока — структуры `ui`, `styles`, `stories`
* Переиспользуемые UI-элементы (inputs, radio, карточки, заголовки и т. д.)
* Чистое разделение ответственности и гибкость в масштабировании

### 🔹 Полный адаптив

* **Mobile-first подход**
* Минимум хардкода, максимум гибкости
* Реализация всех состояний макета: mobile / tablet / desktop

### 🔹 SCSS-архитектура

* Переменные (`_variables.scss`)
* Миксины (`_mixins.scss`)
* Шрифты, reset, общие стили
* Чистый и читаемый BEM-подобный подход к именованию классов

### 🔹 Storybook

В проекте настроена полноценная UI-витрина:

* Каждый значимый компонент имеет **отдельную сторис**
* Возможность визуально протестировать UI изоляционно
* Удобно для демонстрации каталога компонентов

## 📁 Структура проекта

Файловая структура выдержана по бест-практикам, включает раздельные блоки, UI-компоненты, константы, типы, стили, ассеты.

<details>
<summary>Полная структура (нажмите, чтобы раскрыть)</summary>
            
<pre>
.eslintrc.js
.gitignore
.prettierrc
eslint.config.js
eslint.config.ts
index.html
package-lock.json
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vitest.config.ts
vitest.shims.d.ts
|
|
|
|
.storybook
|    main.ts
|    preview.tsx
|    vitest.setup.ts
|
public
|    favicon.png
|
|
|
src
│   App.scss
│   App.tsx
│   main.tsx
│   
├───assets
│   ├───avatars
│   │       brian-williams.png
│   │       emily-johnson.png
│   │       jane-doe.png
│   │       john-smith.png
│   │       michael-brown.png
│   │       sarah-kim.png
│   │       
│   ├───icons
│   │       minus.png
│   │       plus.png
│   │       
│   ├───illustrations
│   │   │   contact.png
│   │   │   cta.png
│   │   │   header.png
│   │   │   
│   │   └───cards
│   │           analytics-and-tracking.png
│   │           content-creation.png
│   │           email-marketing.png
│   │           pay-per-click-advertising.png
│   │           search-engine-optimization.png
│   │           social-media-marketing.png
│   │           
│   ├───logos
│   │       amazon.png
│   │       dribbble.png
│   │       footer-navigation-bar.png
│   │       hubspot.png
│   │       navigation-bar.png
│   │       netflix.png
│   │       notion.png
│   │       zoom.png
│   │       
│   └───social-icons
│           facebook.png
│           linkedin-dark.png
│           linkedin.png
│           twitter.png
│           
├───components
│   ├───blocks
│   │   ├───CaseStudiesBlock
│   │   │   ├───stories
│   │   │   │       CaseStudiesBlock.stories.ts
│   │   │   │       CaseStudyCard.stories.ts
│   │   │   │       
│   │   │   ├───styles
│   │   │   │       CaseStudiesBlock.module.scss
│   │   │   │       CaseStudyCard.module.scss
│   │   │   │       
│   │   │   └───ui
│   │   │           CaseStudiesBlock.tsx
│   │   │           CaseStudyCard.tsx
│   │   │           
│   │   ├───ContactBlock
│   │   │       ContactBlock.module.scss
│   │   │       ContactBlock.stories.tsx
│   │   │       ContactBlock.tsx
│   │   │       
│   │   ├───CTABlock
│   │   │       CTABlock.module.scss
│   │   │       CTABlock.stories.ts
│   │   │       CTABlock.tsx
│   │   │       
│   │   ├───FooterBlock
│   │   │   ├───stories
│   │   │   │       FooterBlock.stories.tsx
│   │   │   │       
│   │   │   ├───styles
│   │   │   │       ContactSection.module.scss
│   │   │   │       FooterBlock.module.scss
│   │   │   │       FooterBottom.module.scss
│   │   │   │       NavigationSection.module.scss
│   │   │   │       SubscriptionBlock.module.scss
│   │   │   │       
│   │   │   └───ui
│   │   │           ContactSection.tsx
│   │   │           FooterBlock.tsx
│   │   │           FooterBottom.tsx
│   │   │           NavigationSection.tsx
│   │   │           SubscriptionBlock.tsx
│   │   │           
│   │   ├───LandingPageBlock
│   │   │   ├───stories
│   │   │   │       Header.stories.ts
│   │   │   │       LandingPageBlock.stories.tsx
│   │   │   │       Logotypes.stories.ts
│   │   │   │       
│   │   │   ├───styles
│   │   │   │       Header.module.scss
│   │   │   │       LandingPageBlock.module.scss
│   │   │   │       Logotypes.module.scss
│   │   │   │       
│   │   │   └───ui
│   │   │           Header.tsx
│   │   │           LandingPageBlock.tsx
│   │   │           Logotypes.tsx
│   │   │           
│   │   ├───ProcessBlock
│   │   │   ├───stories
│   │   │   │       ProcessBlock.stories.ts
│   │   │   │       ProcessCard.stories.ts
│   │   │   │       
│   │   │   ├───styles
│   │   │   │       ProcessBlock.module.scss
│   │   │   │       ProcessCard.module.scss
│   │   │   │       
│   │   │   └───ui
│   │   │           ProcessBlock.tsx
│   │   │           ProcessCard.tsx
│   │   │           
│   │   ├───ServiceBlock
│   │   │   ├───stories
│   │   │   │       ServiceCard.stories.ts
│   │   │   │       ServicesBlock.stories.ts
│   │   │   │       
│   │   │   ├───styles
│   │   │   │       ServiceCard.module.scss
│   │   │   │       ServicesBlock.module.scss
│   │   │   │       
│   │   │   └───ui
│   │   │           ServiceCard.tsx
│   │   │           ServicesBlock.tsx
│   │   │           
│   │   └───TeamBlock
│   │       ├───stories
│   │       │       TeamBlock.stories.ts
│   │       │       TeamCard.stories.ts
│   │       │       
│   │       ├───styles
│   │       │       TeamBlock.module.scss
│   │       │       TeamCard.module.scss
│   │       │       
│   │       └───ui
│   │               TeamBlock.tsx
│   │               TeamCard.tsx
│   │               
│   ├───layout
│   │   └───NavigationBar
│   │           NavigationBar.module.scss
│   │           NavigationBar.stories.tsx
│   │           NavigationBar.tsx
│   │           
│   └───ui
│       ├───form
│       │   ├───FormInputField
│       │   │       FormInputField.module.scss
│       │   │       FormInputField.stories.tsx
│       │   │       FormInputField.tsx
│       │   │       
│       │   ├───FormRadioButton
│       │   │       FormRadioButton.module.scss
│       │   │       FormRadioButton.stories.tsx
│       │   │       FormRadioButton.tsx
│       │   │       
│       │   ├───FormRadioGroup
│       │   │       FormRadioGroup.module.scss
│       │   │       FormRadioGroup.stories.tsx
│       │   │       FormRadioGroup.tsx
│       │   │       
│       │   ├───FormSubmitButton
│       │   │       FormSubmitButton.module.scss
│       │   │       FormSubmitButton.stories.tsx
│       │   │       FormSubmitButton.tsx
│       │   │       
│       │   └───FormTextAreaField
│       │           FormTextAreaField.module.scss
│       │           FormTextAreaField.stories.tsx
│       │           FormTextAreaField.tsx
│       │           
│       ├───HeadingAndSubheading
│       │       HeadingAndSubheading.module.scss
│       │       HeadingAndSubheading.stories.ts
│       │       HeadingAndSubheading.tsx
│       │       
│       ├───HorizontalLine
│       │       HorizontalLine.module.scss
│       │       HorizontalLine.stories.tsx
│       │       HorizontalLine.tsx
│       │       
│       └───Illustration
│               Illustration.module.scss
│               Illustration.stories.tsx
│               Illustration.tsx
│               
├───constants
│   │   globals.ts
│   │   headingsAndSubheading.ts
│   │   logotypesListItems.ts
│   │   navigationLinks.ts
│   │   socialLinks.ts
│   │   
│   └───cards
│           caseStudyCards.ts
│           processCards.ts
│           serviceCards.ts
│           teamCards.ts
│           
├───styles
│       index.scss
│       _fonts.scss
│       _mixins.scss
│       _reset.scss
│       _variables.scss
│       
└───types
    │   formFields.ts
    │   
    ├───blocks
    │       caseStudy.ts
    │       process.ts
    │       services.ts
    │       team.ts
    │       
    └───ui
            basic.ts
            forms.ts
</pre>
</details>

## 🛠 Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск проекта в режиме разработки
npm run dev

# Сборка проекта
npm run build

# Предпросмотр сборки
npm run preview

# Запуск Storybook
npm run storybook
```

## 🎯 Цель проекта

Этот проект разработан как **портфолио-пример** для выхода на рынок фриланса.
Я сфокусировался на главном:

* качественная адаптивная верстка
* современный стек
* компонентность
* чистый код
* UI-витрина в Storybook

Тестовое покрытие пока отсутствует — на старте фриланса куда важнее **быстро и качественно верстать**, чем писать тесты, которые редко требуются заказчикам начального уровня.

## 📸 Демонстрация
<p align="center">
  <a href="https://drive.google.com/file/d/1JEHiCifHQGxP7ngX4f2BtSRCJ_D2BS7J/view?usp=sharing">
    <img src="./public/demo-button.png" alt="Демо"/>
  </a>
  <br><br>
  <a href="https://positivius-landing-page.vercel.app/">
    <img src="./public/deploy-button.png" alt="Deploy"/>
  </a>
</p>


## 📬 Сотрудничество

Если вы хотите сотрудничать или у вас есть проект — буду рад обсудить!
