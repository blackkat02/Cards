import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardGrid, CardGridProps } from "./CardGrid.js";
import { CardRenderer, CardRendererProps } from "./CardRenderer.js";
import { threeCardInstances, WorkerCardInstance } from "./data/card.data.js";

// -----------------------------------------------------------
// 1. МЕТАДАНІ: Тепер ми тестуємо CardGrid за замовчуванням
// -----------------------------------------------------------

// ✅ Тестуємо Grid, використовуючи його Props
const meta: Meta<CardGridProps> = {
  title: "Cards/Card Collection",
  component: CardGrid,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

// -----------------------------------------------------------
// 2. ІСТОРІЯ: Відображення 3-х Карток у Сітці
// -----------------------------------------------------------

type GridStory = StoryObj<typeof CardGrid>;

export const ThreeCardsInGrid: GridStory = {
  args: {
    // Передаємо масив, створений в card.data.ts
    cards: threeCardInstances,
  },
};

// -----------------------------------------------------------
// 3. ДОДАТКОВА ІСТОРІЯ: Збереження Одиничного Рендера
// -----------------------------------------------------------

type RendererStory = StoryObj<typeof CardRenderer>;

export const SingleCardRenderer: RendererStory = {
  render: (args) => <CardRenderer {...args} />,
  args: {
    card: WorkerCardInstance,
  },
  parameters: {
    layout: "centered",
  },
};
