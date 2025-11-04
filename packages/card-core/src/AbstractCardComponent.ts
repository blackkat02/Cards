// packages/card-core/src/AbstractCardComponent.ts

// import { CardData, VisualComponent } from "./interfaces";
import { CardData, PickUpCardData, Rarity } from "./Interfaces/interfaces";
import { VisualComponent } from "./Interfaces/VisualTypes";

/**
 * AbstractCardComponent: Найвищий закон для всіх компонентів карток.
 * Це Абстракція Ядра (Core Abstraction), яка не знає про React чи DOM.
 */
export abstract class AbstractCardComponent {
  // protected data: CardData;
  // Protected: дані доступні лише цьому класу та його нащадкам.
  // Тут ми використовуємо CardData (базовий тип), який може бути перевизначений у нащадках (PickUpCardData).
  protected data: CardData;

  constructor(data: CardData) {
    // 🔥 ДИСЦИПЛІНА: Перевіряємо мінімальний контракт.
    // Запобігає створенню недійсних об'єктів.
    if (!data?.id) {
      throw new Error("Card data must be provided and contain an ID.");
    }
    this.data = data;
  }

  /**
   * getData(): Дозволяє безпечно отримати дані картки.
   * @returns CardData
   */
  public getData(): CardData {
    return this.data;
  }

  // ------------------------------------------------------------------
  // 🔥 КОНТРАКТИ: ПОВИННІ БУТИ РЕАЛІЗОВАНІ КОЖНИМ НАЩАДКОМ (OCP)
  // ------------------------------------------------------------------

  /**
   * getVisualComponents(): Головний архітектурний шов.
   * Повертає структуру даних (VisualComponent[]), яку React-Адаптер повинен перетворити на JSX.
   * @returns VisualComponent[]
   */
  public abstract getVisualComponents(): VisualComponent[];

  /**
   * reveal(): Логіка, що виконується при першому "появленні" або відображенні картки.
   */
  public abstract reveal(): void;

  /**
   * flip(): Логіка перевертання (наприклад, зміна внутрішнього стану чи анімація).
   */
  public abstract flip(): void;

  /**
   * onClick(): Загальний обробник кліку, який делегує поведінку.
   */
  public abstract onClick(): void;
}
