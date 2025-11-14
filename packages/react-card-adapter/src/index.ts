// packages/react-card-adapter/src/index.ts

// 1. Імпортуємо сам компонент-міст
export { CardRenderer } from "./CardRenderer.js";

export {
  WorkerCardInstance,
  StrategistCardInstance,
} from "./data/card.data.js";

// 2. Експортуємо його, щоб він був доступний через 'react-card-adapter'
// export { CardRenderer };

// Додатково: Експортуй інші важливі елементи, якщо вони потрібні
// export { Title, Frame } from './visuals/Title';
