import { CardData } from "../Interfaces/interfaces";
import { VisualComponent } from "../Interfaces/VisualTypes";
import { AbstractCardComponent } from "./AbstractCardComponent";

interface PickUpCardData extends CardData {
  influenceLevel: number;
  archetype: string;
}

// 2. АБСТРАКТНИЙ КЛАС ТИПУ
export abstract class AbstractPickUpCard extends AbstractCardComponent {
  protected data!: PickUpCardData;

  constructor(data: PickUpCardData) {
    super(data);
  }

  public calculateInfluenceScore(): number {
    // Логіка підрахунку єдина для Common, Epic тощо.
    return this.data.influenceLevel * 10;
  }

  public abstract getVisualComponents(): VisualComponent[];
  public abstract reveal(): void;
  public abstract flip(): void;
  public abstract onClick(): void;
}
