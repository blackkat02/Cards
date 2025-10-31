import { AbstractPickUpCard } from "../Classes/AbstractPickUpCard";
import { PickUpCardData, Rarity } from "../Interfaces/interfaces";
import { VisualComponent } from "../Interfaces/VisualTypes";
import { getEpicVisualComponentsConfig } from "../configs-card/epic-pickup-card-config";

export class EpicPickUpCard extends AbstractPickUpCard {
  constructor(data: PickUpCardData) {
    super(data);
    // Архітектурна дисципліна: перевіряємо Rarity
    if (data.rarity !== Rarity.EPIC) {
      console.warn(
        `EpicPickUpCard created with incorrect Rarity: ${data.rarity}`
      );
    }
  }

  // 💡 РЕАЛІЗАЦІЯ КОНТРАКТУ: Візуальний склад
  public getVisualComponents(): VisualComponent[] {
    // Чистий виклик конфігураційної функції, передаючи наші дані
    const components = getEpicVisualComponentsConfig(this.data);

    // Додаткова, унікальна для Epic, логіка, якщо потрібно
    // if (this.data.isSeasonal) { components.push({ name: 'Snowflake', props: {} }); }

    return components;
  }

  // 💡 РЕАЛІЗАЦІЯ ПОВЕДІНКИ (унікальна для Epic)
  public reveal(): void {
    console.log(`EPIC PickUp Card revealed. Activating global announcement.`);
  }

  public flip(): void {
    console.log(
      `EPIC PickUp Card flipped: Initiating complex animation sequence.`
    );
  }

  public onClick(): void {
    this.flip();
  }
}
