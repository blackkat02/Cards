export interface CardData {
  id: string;
  title: string;
  rarity: Rarity;
  cardType: CardType;
  description?: string;
  // Додавай інші спільні поля сюди
}

export enum Rarity {
  COMMON = "common",
  RARE = "rare",
  EPIC = "epic",
}

export enum CardType {
  PICKUP = "PickUpCard",
}

export interface PickUpCardData extends CardData {
  influenceLevel: number;
  archetype: string;
}
