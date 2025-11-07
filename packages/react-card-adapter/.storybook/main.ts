// packages/react-card-adapter/.storybook/main.ts
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // Вказуємо, де шукати файли історій
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  // Додатки для функціоналу (Controls, Actions, Docs)
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
  ],

  // Головне: вказуємо, що використовуємо React і Vite
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {
    autodocs: "tag",
  },
};

export default config;
