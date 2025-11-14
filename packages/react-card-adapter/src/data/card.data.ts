// Імпортуємо все необхідне для створення інстансів
import { CommonPickUpCard, PickUpCardData, Rarity, CardType } from "card-core";

// 1. Дані для першої картки
const workerCardData: PickUpCardData = {
  id: "worker-1",
  title: "Storybook Worker",
  description: "Це звичайна картка. Серце економіки.",
  rarity: Rarity.COMMON,
  cardType: CardType.PICKUP,
  influenceLevel: 1,
  archetype: "Worker77",
};

// 2. Дані для другої картки (приклад іншої картки)
const strategistCardData: PickUpCardData = {
  id: "strategist-2",
  title: "Strategic Advisor",
  description: "Рідкісний радник, що планує гру.",
  rarity: Rarity.RARE, // Змінюємо рідкість
  cardType: CardType.PICKUP,
  influenceLevel: 3,
  archetype: "Strategist",
};

// 3. Створення інстансів класів
export const WorkerCardInstance = new CommonPickUpCard(workerCardData);
export const StrategistCardInstance = new CommonPickUpCard(strategistCardData);

// 4. Експорт масиву для використання у CardGrid
export const threeCardInstances = [
  WorkerCardInstance,
  StrategistCardInstance,
  WorkerCardInstance, // Використовуємо першу картку ще раз
];
