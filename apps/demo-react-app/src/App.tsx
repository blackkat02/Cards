// import React from 'react';
import { CoreCardFactory } from "card-core";
import { CardRenderer } from "react-card-adapter";
import { COMMON_PICKUP_DATA, EPIC_PICKUP_DATA } from "./testData";

// Створення об'єктів карток
const factory = new CoreCardFactory();
// Використовуємо фабрику для створення інстансів класів
const commonCard = factory.createCard(COMMON_PICKUP_DATA as any);
const epicCard = factory.createCard(EPIC_PICKUP_DATA as any);

const App = () => {
  return (
    // Використовуємо клас, щоб уникнути інлайн-стилів
    <div className="app-container">
      <h1>Візуалізація Фабрики (Тест Поліморфізму Rarity)</h1>

      <div className="card-display-area">
        {/* 1. Тест: Common Card */}
        <CardRenderer card={commonCard} />

        {/* 2. Тест: Epic Card (Має мати Aura, InfluenceMarker) */}
        <CardRenderer card={epicCard} />
      </div>

      {/* 3. Перевірка onClick/flip логіки через консоль */}
      <p className="debug-info">
        Перевірте консоль браузера, натискаючи на картки.
      </p>
    </div>
  );
};

export default App;
