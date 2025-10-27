export interface CardData {
  id: string;
  title: string;
  rarity: Rarity;
  description?: string;
  // Додавай інші спільні поля сюди
}

export enum Rarity {
  COMMON = "common",
  RARE = "rare",
  EPIC = "epic",
}
