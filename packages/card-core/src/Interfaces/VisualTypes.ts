// 2. КОНТРАКТ ВІЗУАЛЬНОГО ЕЛЕМЕНТА
// Адаптер (React) буде перетворювати цей об'єкт на JSX
export interface VisualComponent {
  // Адаптер зможе рендерити ЛИШЕ ці 4 типи
  name: "Title" | "Image" | "Frame" | "Gem" | "InfluenceMarker" | "Description";
  props: Record<string, any>;
}
