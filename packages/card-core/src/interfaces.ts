// 1. КОНТРАКТ ДАНИХ КАРТКИ
export interface ICardData {
  id: string;
  title: string;
  rarity: string; // 'Common', 'Epic', 'Major Arcana'
  description?: string;
  // Додавай інші спільні поля сюди
}

// 2. КОНТРАКТ ВІЗУАЛЬНОГО ЕЛЕМЕНТА
// Адаптер (React) буде перетворювати цей об'єкт на JSX
export interface IVisualComponent {
  // Адаптер зможе рендерити ЛИШЕ ці 4 типи
  name: "Title" | "Image" | "Frame" | "Gem" | "InfluenceMarker" | "Description";
  props: Record<string, any>;
}
