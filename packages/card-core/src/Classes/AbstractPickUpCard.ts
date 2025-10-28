import { CardData } from "../Interfaces/interfaces";
import { VisualComponent } from "../Interfaces/VisualTypes";
import { AbstractCardComponent } from "./AbstractCardComponent";

// 🔥 1. Новий інтерфейс даних для всього сімейства PickUp
interface PickUpCardData extends CardData {
  influenceLevel: number;
  archetype: string;
}

// 2. АБСТРАКТНИЙ КЛАС ТИПУ
export abstract class AbstractPickUpCard extends AbstractCardComponent {
  // 🔥 Використовуємо PickUpCardData
  protected data!: PickUpCardData;

  constructor(data: PickUpCardData) {
    // Виклик конструктора базового класу (для перевірки ID)
    super(data);
  }

  // 💡 КОНКРЕТНА ЛОГІКА: Метод, спільний для всіх PickUp-карток
  public calculateInfluenceScore(): number {
    // Логіка підрахунку єдина для Common, Epic тощо.
    return this.data.influenceLevel * 10;
  }

  // 🛑 АБСТРАКТНІ КОНТРАКТИ: Rarity диктує, як це реалізувати
  public abstract getVisualComponents(): VisualComponent[];
  public abstract reveal(): void;
  public abstract flip(): void;
  public abstract onClick(): void;
}
