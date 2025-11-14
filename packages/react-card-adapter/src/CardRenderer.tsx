// packages/react-card-adapter/src/CardRenderer.tsx

import { AbstractCardComponent, VisualComponent } from "card-core";
import React, { FC } from "react";

import { Title } from "./visuals/Title.js";
import { Frame } from "./visuals/Frame.js";
import { Description } from "./visuals/Description.js";
// TODO: Додай Aura, Gem, InfluenceMarker після їх створення
import "./CardRenderer.css";

// 1. МАПА АДАПТАЦІЇ (VisualComponentMap)
const VisualComponentMap: Record<VisualComponent["name"], React.FC<any>> = {
  Frame: Frame,
  Title: Title,
  Description: Description,
  Image: ({ source }) => (
    <img src={source} alt="Card visual" className="card-image-content" />
  ),
  Gem: ({ color }) => (
    <div className="card-gem" style={{ backgroundColor: color }} />
  ),
  InfluenceMarker: ({ level }) => (
    <span className="influence-marker">⭐{level}</span>
  ),
};

export interface CardRendererProps {
  card: AbstractCardComponent;
}

export const CardRenderer: FC<CardRendererProps> = ({ card }) => {
  const visualStructure: VisualComponent[] = card.getVisualComponents();

  const handleActivate = () => {
    card.onClick();
    console.log(`[Renderer] Card activated: ${card.getData().title}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleActivate();
    }
  };

  return (
    <button
      className="card-wrapper"
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      type="button"
    >
      <h3 className="card-renderer-info">
        Рендер: {card.getData().cardType} - {card.getData().rarity}
      </h3>

      {visualStructure.map((visualElement, index) => {
        const Component = VisualComponentMap[visualElement.name];

        if (!Component) {
          console.warn(
            `Renderer missing React component for: ${visualElement.name}`
          );
          return null;
        }

        // Передаємо props з Ядра в React-компонент
        return <Component key={index} {...visualElement.props} />;
      })}
    </button>
  );
};
