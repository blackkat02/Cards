// packages/card-core/src/cards/CommonPickUpCard.ts (Новий Файл)

import { AbstractPickUpCard } from "../Classes/AbstractPickUpCard";
import { VisualComponent } from "../Interfaces/VisualTypes";

// КОНКРЕТНИЙ КЛАС Rarity
export class CommonPickUpCard extends AbstractPickUpCard {
  constructor(data: any) {
    super(data);
    // Тут можна додати логіку перевірки, чи data.rarity === Rarity.COMMON
  }

  // 🔥 РЕАЛІЗАЦІЯ КОНТРАКТУ: Унікальна структура для COMMON
  // Common Card: проста рамка, без InfluenceMarker, прості параметри
  public getVisualComponents(): VisualComponent[] {
    return [
      // 1. Рамка (прості параметри)
      {
        name: "Frame",
        props: { style: "Basic", size: "small", color: "gray" },
      },
      // 2. Титул
      {
        name: "Title",
        props: {
          text: this.data.archetype,
          fontStyle: "sans-serif",
          color: "dark",
        },
      },
      // 3. Зображення
      {
        name: "Image",
        props: { source: `/pckup/images/${this.data.id}_low.jpg` },
      },
      // 4. Опис
      { name: "Description", props: { text: this.data.description } },
      // InfluenceMarker відсутній, бо це Common-картка
    ];
  }

  // 💡 РЕАЛІЗАЦІЯ ПОВЕДІНКИ: Просте логування
  public reveal(): void {
    console.log(
      `Common PickUp Card revealed. Score: ${this.calculateInfluenceScore()}`
    );
  }

  public flip(): void {
    // Проста логіка перевертання
    console.log(`Common PickUp Card flipped: No special effects.`);
  }

  public onClick(): void {
    // Клік просто запускає перевертання
    this.flip();
  }
}
