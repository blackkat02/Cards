// packages/card-core/src/CardFactory.ts

import { AbstractCardComponent } from "./AbstractCardComponent";
import { CardData, CardType, Rarity } from "../Interfaces/interfaces";

import { CommonPickUpCard } from "../PickUpCards/CommonPickUpCard";
import { RarePickUpCard } from "../PickUpCards/RarePickUpCard";
import { EpicPickUpCard } from "../PickUpCards/EpicPickUpCard";

export abstract class AbstractCoreFactory {
  public abstract createCard(data: CardData): AbstractCardComponent;
}

// Конкретна Фабрика: МАРШРУТИЗАЦІЯ ЗА ТИПОМ І ЦІННІСТЮ
export class CoreCardFactory extends AbstractCoreFactory {
  public createCard(data: CardData): AbstractCardComponent {
    switch (data.cardType) {
      case CardType.PICKUP:
        // ДЕЛЕГУЄМО: переходимо до маршрутизації Rarity
        return this.createPickUpCard(data);

      // TODO: Тут будуть інші CardType (GAMER, TAROT)

      default:
        throw new Error(
          `Unknown Card Type: ${data.cardType}. Implementation missing.`
        );
    }
  }

  // Приватний метод для інкапсуляції логіки Rarity (OCP)
  // private createPickUpCard(data: CardData): AbstractCardComponent {
  //   switch (data.rarity) {
  //     case Rarity.COMMON:
  //       return new CommonPickUpCard(data as any);

  //     // 🔥 ОНОВЛЕННЯ: Додаємо нові класи Rarity
  //     case Rarity.RARE:
  //       return new RarePickUpCard(data as any);

  //     case Rarity.EPIC:
  //       return new EpicPickUpCard(data as any);

  //     default:
  //       // Якщо прийде LEGENDARY, а класу немає
  //       throw new Error(
  //         `Unknown Rarity: ${data.rarity} for PickUp Card. Class implementation missing.`
  //       );
  //   }
  // }

  // packages/card-core/src/CardFactory.ts (ВИПРАВЛЕННЯ)

  private createPickUpCard(data: CardData): AbstractCardComponent {
    // 💡 КРОК 1: Гарантуємо, що дані є повними (Type Guard)
    const pickUpData = data as PickUpCardData;

    // 💡 КРОК 2: Додаємо перевірку, щоб бути впевненими, що поля існують
    if (!pickUpData.influenceLevel || !pickUpData.archetype) {
      throw new Error(
        "Missing PickUpCard specific data: influenceLevel or archetype."
      );
    }

    // Тепер TypeScript бачить, що pickUpData має повний тип PickUpCardData
    switch (pickUpData.rarity) {
      case Rarity.COMMON:
        // 🔥 'as any' більше не потрібен, але потрібен явний каст
        return new CommonPickUpCard(pickUpData);

      case Rarity.RARE:
        return new RarePickUpCard(pickUpData);

      case Rarity.EPIC:
        return new EpicPickUpCard(pickUpData);

      default:
        // Якщо прийде LEGENDARY, а класу немає
        throw new Error(
          `Unknown Rarity: ${data.rarity} for PickUp Card. Class implementation missing.`
        );
    }
  }
}
