import { AbstractPickUpCard } from "../Classes/AbstractPickUpCard";
import { PickUpCardData, Rarity } from "../Interfaces/interfaces";
import { VisualComponent } from "../Interfaces/VisualTypes";
import { getRareVisualComponentsConfig } from "../configs-card/rare-pickup-card-config";

// КОНКРЕТНИЙ КЛАС Rarity: RARE
export class RarePickUpCard extends AbstractPickUpCard {
  // 🔥 Використовуємо точний тип даних PickUpCardData
  constructor(data: PickUpCardData) {
    super(data);
    // Архітектурна дисципліна: перевіряємо, чи коректний тип Rarity
    if (data.rarity !== Rarity.RARE) {
      console.warn(
        `RarePickUpCard created with incorrect Rarity: ${data.rarity}`
      );
    }
  }

  public getVisualComponents(): VisualComponent[] {
    // 💡 Викликаємо конфігураційну функцію
    return getRareVisualComponentsConfig(this.data);
  }

  // 💡 РЕАЛІЗАЦІЯ ПОВЕДІНКИ: Середнє логування
  public reveal(): void {
    console.log(`Rare PickUp Card revealed. Starting tracking logic.`);
  }

  public flip(): void {
    console.log(`Rare PickUp Card flipped: Simple animation.`);
  }

  public onClick(): void {
    this.flip();
  }
}
