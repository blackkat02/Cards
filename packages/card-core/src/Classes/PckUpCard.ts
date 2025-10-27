import { CardData } from "../Interfaces/CardData";
import { VisualComponent } from "../Interfaces/VisualTypes";
import { AbstractCardComponent } from "./AbstractCardComponent";

// Додатковий інтерфейс для даних ПікАп картки
interface IPckUpCardData extends CardData {
  // Вплив, як у геймерських картах (наприклад, 1-10)
  influenceLevel: number;
  // Архетип, як у Таро (наприклад, 'Маг', 'Імператриця')
  archetype: string;
}

export class PickUpCard extends AbstractCardComponent {
  // Вказуємо, що наш клас працює з розширеним набором даних
  protected data!: IPckUpCardData;

  constructor(data: IPckUpCardData) {
    // Викликаємо конструктор базового класу для перевірки ID
    super(data);

    // Перевіряємо специфічну логіку (якщо потрібна)
    if (data.influenceLevel < 1) {
      console.warn(`PickUpCard ${data.title} has low influence.`);
    }
  }

  // 🔥 Реалізація КОНТРАКТУ: Визначаємо візуальний склад Картки
  public getVisualComponents(): VisualComponent[] {
    // Картка вимагає комбінації елементів
    return [
      // 1. Рамка, яка залежить від рідкості (Rarity)
      { name: "Frame", props: { style: this.data.rarity, size: "medium" } },
      // 2. Титул (Archetype, як основна назва)
      {
        name: "Title",
        props: { text: this.data.archetype, fontStyle: "serif" },
      },
      // 3. Ілюстрація
      { name: "Image", props: { source: `/pckup/images/${this.data.id}.jpg` } },
      // 4. Додатковий маркер (Gem), що відображає рівень впливу
      { name: "InfluenceMarker", props: { level: this.data.influenceLevel } },
      // 5. Опис
      { name: "Description", props: { text: this.data.description } },
    ];
  }

  // Реалізація логіки взаємодії
  public onClick(): void {
    // Чиста логіка, що не залежить від React
    console.log(
      `PickUpCard "${this.data.title}" activated with Influence: ${this.data.influenceLevel}`
    );
    // Тут могла б бути логіка зміни стану гри
  }
}
