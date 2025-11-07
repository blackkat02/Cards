// ✅ Імпорт типів Storybook для Vite
import type { Meta, StoryObj } from '@storybook/react-vite';

// ✅ Імпорт компонента та ЙОГО ВЛАСНИХ Props (для коректного Type Inference)
import { CardRenderer, CardRendererProps } from './CardRenderer.js'; 

import { CommonPickUpCard, PickUpCardData, Rarity, CardType } from 'card-core';

// -----------------------------------------------------------
// 1. ПІДГОТОВКА ДАНИХ ТА ІНСТАНЦІЮВАННЯ КЛАСУ
// -----------------------------------------------------------

const cardProps: PickUpCardData = {
    id: 'sb-test-1', 
    title: 'Storybook Worker',
    description: 'Тестова карта для Storybook.',
    rarity: Rarity.COMMON, 
    
    // 🔥 ДОДАНО ОБОВ'ЯЗКОВІ ПОЛЯ:
    cardType: CardType.PICKUP, // Від CardData
    influenceLevel: 1,         // Від PickUpCardData
    archetype: 'Worker',       // Від PickUpCardData
};

// Створюємо ІНСТАНС КЛАСУ КАРТИ (передаємо ОДИН об'єкт)
const cardInstance = new CommonPickUpCard(cardProps); 

// -----------------------------------------------------------
// 2. МЕТАДАНІ STORYBOOK
// -----------------------------------------------------------

// ✅ ВИКОРИСТОВУЄМО CardRendererProps для Meta, щоб TS знав про пропси!
const meta: Meta<CardRendererProps> = {
    title: 'Cards/CommonCard', 
    component: CardRenderer,
    parameters: {
        layout: 'centered', 
    },
    // Цей рядок викликав помилку, якщо TS Server не бачив нових типів. 
    // Залишимо його, якщо TS Server перезавантажено:
    tags: ['autodocs'], 
};

export default meta;

// -----------------------------------------------------------
// 3. ІСТОРІЯ КОМПОНЕНТА
// -----------------------------------------------------------

type Story = StoryObj<typeof CardRenderer>;

export const CommonCardExample: Story = {
    args: {
        // 🔥 ВИПРАВЛЕНО: Використовуємо 'card' замість 'data'
        card: cardInstance, 
    },
};