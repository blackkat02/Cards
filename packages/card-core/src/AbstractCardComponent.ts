import { ICardData, IVisualComponent } from "./interfaces";

// Абстрактний клас: забезпечення спільної поведінки
export abstract class AbstractCardComponent {
  protected data: ICardData;

  constructor(data: ICardData) {
    if (!data || !data.id) {
      // <-- SonarQube бачить тут місце для спрощення
      throw new Error("Card data must be provided and contain an ID.");
    }
    this.data = data;
  }

  // Спільний метод
  public getData(): ICardData {
    return this.data;
  }

  // 🔥 АБСТРАКТНИЙ МЕТОД: Кожен нащадок ПОВИНЕН визначити свій візуальний склад
  public abstract getVisualComponents(): IVisualComponent[];

  // АБСТРАКТНИЙ МЕТОД ПОВЕДІНКИ
  public abstract onClick(): void;
}
