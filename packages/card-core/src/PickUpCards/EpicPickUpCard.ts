/// packages/card-core/src/cards/EpicPickUpCard.ts

import { AbstractPickUpCard } from "../Classes/AbstractPickUpCard";
import { VisualComponent } from "../Interfaces/VisualTypes";

import { getEpicVisualComponentsConfig } from "../mocks/epic-pickup-card-config";

// КОНКРЕТНИЙ КЛАС Rarity: EPIC
export class EpicPickUpCard extends AbstractPickUpCard {
  constructor(data: any) {
    super(data);
    // Тут можна додати перевірку на Rarity.EPIC
  }

  public getVisualComponents(): VisualComponent[] {
    // 💡 Викликаємо конфігураційну функцію, передаючи наші дані
    const components = getEpicVisualComponentsConfig(this.data);

    // Тут може бути додаткова логіка, наприклад:
    // if (this.data.isSeasonal) { components.push({ name: 'Snowflake', props: {} }); }

    return components;
  }

  // 🔥 РЕАЛІЗАЦІЯ КОНТРАКТУ: Унікальна структура для EPIC
  // public getVisualComponents(): VisualComponent[] {
  //   // Epic Card: Унікальна рамка, InfluenceMarker, додаткова Aura.
  //   return [
  //     // 1. Рамка (Унікальні параметри)
  //     {
  //       name: "Frame",
  //       props: {
  //         style: "Ornate",
  //         size: "large",
  //         color: "gold",
  //         animation: "sparkle",
  //       },
  //     },
  //     // 2. Титул (Унікальні параметри)
  //     {
  //       name: "Title",
  //       props: {
  //         text: this.data.archetype,
  //         fontStyle: "serif",
  //         color: "bright-gold",
  //         size: "XL",
  //       },
  //     },
  //     // 3. Зображення
  //     {
  //       name: "Image",
  //       props: {
  //         source: `/pckup/images/${this.data.id}_epic.jpg`,
  //         quality: "HD",
  //       },
  //     },
  //     // 4. Marker
  //     {
  //       name: "InfluenceMarker",
  //       props: { level: this.data.influenceLevel, icon: "Star" },
  //     },
  //     // 5. Опис
  //     {
  //       name: "Description",
  //       props: { text: this.data.description, textColor: "yellow" },
  //     },
  //     // 6. 🔥 УНІКАЛЬНИЙ КОМПОНЕНТ (Aura)
  //     // {
  //     //     name: "Aura",
  //     //     props: { effect: "pulsing", color: "gold" }
  //     // },
  //   ];
  // }

  // 💡 РЕАЛІЗАЦІЯ ПОВЕДІНКИ: Складне логування та спецефекти
  public reveal(): void {
    console.log(`EPIC PickUp Card revealed. Activating global announcement.`);
    // Логіка, унікальна для Epic
  }

  public flip(): void {
    console.log(
      `EPIC PickUp Card flipped: Initiating complex animation sequence.`
    );
    // Epic-анімація
  }

  public onClick(): void {
    this.flip();
  }
}
