import React, { FC } from "react";
import { AbstractCardComponent } from "card-core";
import { CardRenderer } from "./CardRenderer.js";
import "./CardGrid.css";

// 1. Визначаємо пропси: приймаємо масив інстансів карток
export interface CardGridProps {
  cards: AbstractCardComponent[];
}

export const CardGrid: FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="card-grid-container">
      <h2>Card Grid ({cards.length} items)</h2>
      <div className="card-grid">
        {cards.map((cardInstance, index) => (
          // 2. Рендеримо кожну картку в циклі
          <div key={index} className="card-grid-item">
            <CardRenderer card={cardInstance} />
          </div>
        ))}
      </div>
    </div>
  );
};
