// packages/card-core/__tests__/factory.test.ts

import { describe, it, expect } from "vitest";
import { CoreCardFactory } from "../src/Classes/CardFactory";
import { CommonPickUpCard } from "../src/PickUpCards/CommonPickUpCard";
import { CardType, Rarity, PickUpCardData } from "../src/Interfaces/interfaces";

const COMMON_DATA: PickUpCardData = {
  id: "C1",
  title: "Common Grunt",
  rarity: Rarity.COMMON,
  cardType: CardType.PICKUP,
  description: "Test",

  influenceLevel: 2,
  archetype: "Laborer",
};

describe("CoreCardFactory", () => {
  const factory = new CoreCardFactory();

  it("should create CommonPickUpCard when Rarity is COMMON", () => {
    const card = factory.createCard(COMMON_DATA);
    expect(card).toBeInstanceOf(CommonPickUpCard);
  });

  it("should throw error for invalid Rarity", () => {
    // Створюємо об'єкт з коректними PickUp-даними, але невірною Rarity
    const badRarityData = {
      ...COMMON_DATA,
      rarity: "UNKNOWN_RARITY" as Rarity,
    };

    // Очікуємо, що Фабрика досягне switch(data.rarity) і впаде на 'Unknown Rarity'
    expect(() => factory.createCard(badRarityData as any)).toThrow(
      /Unknown Rarity/
    );
  });
});
