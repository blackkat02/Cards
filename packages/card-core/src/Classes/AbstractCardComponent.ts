import { CardData } from "../Interfaces/CardData";
import { VisualComponent } from "../Interfaces/VisualTypes";

// Абстрактний клас: забезпечення спільної поведінки
export abstract class AbstractCardComponent {
  protected data: CardData;

  constructor(data: CardData) {
    if (!data?.id) {
      throw new Error("Card data must be provided and contain an ID.");
    }
    this.data = data;
  }

  // Спільний метод
  public getData(): CardData {
    return this.data;
  }

  // 🔥 АБСТРАКТНИЙ МЕТОД: Кожен нащадок ПОВИНЕН визначити свій візуальний склад
  public abstract getVisualComponents(): VisualComponent[];

  // АБСТРАКТНИЙ МЕТОД ПОВЕДІНКИ
  public abstract onClick(): void;
}
