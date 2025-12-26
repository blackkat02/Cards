// Адаптер (React) буде перетворювати цей об'єкт на JSX
export interface VisualComponent {
  name: "Title" | "Image" | "Frame" | "Gem" | "InfluenceMarker" | "Description";
  props: Record<string, any>;
}
