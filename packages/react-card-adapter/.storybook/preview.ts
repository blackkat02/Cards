// packages/react-card-adapter/.storybook/preview.ts
import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    // Налаштування для автоматичного керування властивостями компонентів
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Тут можуть бути глобальні декоратори, наприклад, для тем чи роутера
  },
};

export default preview;
