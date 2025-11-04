// apps/demo-react-app/src/testData.ts
import { CardType, Rarity } from "card-core";

export const COMMON_PICKUP_DATA = {
  id: "C1",
  title: "Basic Worker",
  rarity: Rarity.COMMON,
  cardType: CardType.PICKUP,
  description: "Simple and reliable.",
  influenceLevel: 2,
  archetype: "Laborer",
};

export const EPIC_PICKUP_DATA = {
  id: "E9",
  title: "Archmage Kael",
  rarity: Rarity.EPIC,
  cardType: CardType.PICKUP,
  description: "The mightiest caster with golden aura.",
  influenceLevel: 9,
  archetype: "Mage",
};
// ... та інші варіації
