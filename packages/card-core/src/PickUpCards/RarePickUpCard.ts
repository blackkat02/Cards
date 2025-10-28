// packages/card-core/src/cards/RarePickUpCard.ts

import { AbstractPickUpCard } from "../Classes/AbstractPickUpCard";
import { VisualComponent } from "../Interfaces/VisualTypes";
// Припускаємо, що InfluenceMarker потрібен і для Rare

// КОНКРЕТНИЙ КЛАС Rarity: RARE
export class RarePickUpCard extends AbstractPickUpCard {
  constructor(data: any) {
    super(data);
  }

  // 🔥 РЕАЛІЗАЦІЯ КОНТРАКТУ: Унікальна структура для RARE
  public getVisualComponents(): VisualComponent[] {
    // Rare Card: Срібна рамка, має Marker, але без Aura.
    return [
      // 1. Рамка
      {
        name: "Frame",
        props: { style: "Metallic", size: "medium", color: "silver" },
      },
      // 2. Титул
      {
        name: "Title",
        props: {
          text: this.data.archetype,
          fontStyle: "sans-serif",
          color: "blue",
          size: "L",
        },
      },
      // 3. Зображення
      {
        name: "Image",
        props: { source: `/pckup/images/${this.data.id}_rare.jpg` },
      },
      // 4. Marker
      {
        name: "InfluenceMarker",
        props: { level: this.data.influenceLevel, icon: "Diamond" },
      },
      // 5. Опис
      { name: "Description", props: { text: this.data.description } },
    ];
  }

  // 💡 РЕАЛІЗАЦІЯ ПОВЕДІНКИ: Трохи більше логування
  public reveal(): void {
    console.log(`Rare PickUp Card revealed. Starting tracking logic.`);
  }

  public flip(): void {
    // Логіка перевертання
    console.log(`Rare PickUp Card flipped: Simple animation.`);
  }

  public onClick(): void {
    this.flip();
  }
}
