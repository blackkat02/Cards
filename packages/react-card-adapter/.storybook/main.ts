// packages/react-card-adapter/.storybook/main.ts (ВИПРАВЛЕНО)

// import type { StorybookConfig } from '@storybook/react-vite';

// /**
//  * 💡 Функція для надійного resolution у MonoRepo.
//  * Це стандартний спосіб, який використовує Node.js для пошуку пакетів.
//  */
// function getAbsolutePath(value: string): string {
//   // Використовуємо require.resolve для надійного пошуку в node_modules
//   return require.resolve(value);
// }

// const config: StorybookConfig = {
//   // 1. Шляхи до історій (залишаємо як є)
//   "stories": [
//     "../src/**/*.mdx",
//     "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
//   ],

//   // 2. 🔥 АДДОНИ: Використовуємо чистий набір, щоб уникнути конфліктів v8/v10
//   "addons": [
//     // Включає Docs, Controls, Actions, Viewport, Backgrounds, Measure, Outline.
//     getAbsolutePath('@storybook/addon-essentials'),

//     // Аддон для тестування взаємодії (Interactions)
//     getAbsolutePath('@storybook/addon-interactions'),

//     // (Необов'язково) Якщо ти використовуєш Chromatic для знімків екрана
//     getAbsolutePath('@chromatic-com/storybook'),
//   ],

//   // 3. ФРЕЙМВОРК
//   "framework": {
//     "name": getAbsolutePath('@storybook/react-vite'),
//     "options": {},
//   },

//   docs: {
//     autodocs: 'tag',
//   },
// };

// export default config;
