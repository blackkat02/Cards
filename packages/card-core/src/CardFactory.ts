// packages/card-core/src/CardFactory.ts (ОНОВЛЕННЯ)

import { ICardData } from "./interfaces";
import { AbstractCardComponent } from "./AbstractCardComponent";
import { PickUpCard } from "./PckUpCard"; // 🔥 Імпортуємо нову картку

// Абстрактний клас Фабрики (залишається незмінним, бо це абстракція)
export abstract class AbstractCoreFactory {
  public abstract createCard(
    type: string,
    data: ICardData
  ): AbstractCardComponent;
}

// Конкретна Фабрика (додаємо логіку створення)
export class CoreCardFactory extends AbstractCoreFactory {
  public createCard(type: string, data: ICardData): AbstractCardComponent {
    if (type === "PickUpCard") {
      // Приведення типу, оскільки ми знаємо, що очікуємо більше даних (IPckUpCardData)
      return new PickUpCard(data as any);
    }

    // Тут буде логіка для EpicGamerCard, TarorCard і т.д.

    throw new Error(
      `Unknown card type: ${type}. Please implement the creation logic.`
    );
  }
}
