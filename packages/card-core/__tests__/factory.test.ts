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

  // 🔥 ДОДАЄМО ВИМАГАНІ ПОЛЯ PICKUP
  influenceLevel: 2,
  archetype: "Laborer",
};

describe("CoreCardFactory", () => {
  const factory = new CoreCardFactory();

  // ТЕСТ 1: Тепер має пройти
  it("should create CommonPickUpCard when Rarity is COMMON", () => {
    // 'as any' більше не потрібен, бо дані відповідають контракту
    const card = factory.createCard(COMMON_DATA);
    expect(card).toBeInstanceOf(CommonPickUpCard);
  });

  // ТЕСТ 2: Тепер перевіряємо, чи Фабрика зловить помилку Rarity
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
