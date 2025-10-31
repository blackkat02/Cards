// packages/card-core/src/cards/CommonPickUpCard.ts

// ✅ Правильні імпорти з чистих джерел
import { AbstractPickUpCard } from "../Classes/AbstractPickUpCard";
import { PickUpCardData, Rarity } from "../Interfaces/interfaces";
import { VisualComponent } from "../Interfaces/VisualTypes";
import { getCommonVisualComponentsConfig } from "../configs-card/common-pickup-card-config";

// КОНКРЕТНИЙ КЛАС Rarity: COMMON
export class CommonPickUpCard extends AbstractPickUpCard {
  // 🔥 Використовуємо точний тип даних PickUpCardData
  constructor(data: PickUpCardData) {
    super(data);
    if (data.rarity !== Rarity.COMMON) {
      console.warn(
        `CommonPickUpCard created with incorrect Rarity: ${data.rarity}`
      );
    }
  }

  public getVisualComponents(): VisualComponent[] {
    // 💡 Викликаємо конфігураційну функцію
    return getCommonVisualComponentsConfig(this.data);
  }

  // 💡 РЕАЛІЗАЦІЯ ПОВЕДІНКИ: Базове логування
  public reveal(): void {
    console.log(
      `Common PickUp Card revealed. Score: ${this.calculateInfluenceScore()}`
    );
  }

  public flip(): void {
    console.log(`Common PickUp Card flipped: No special effects.`);
  }

  public onClick(): void {
    this.flip();
  }
}
