// packages/react-card-adapter/src/CardRenderer.tsx

// 🔥 Імпорт з кореня пакета Ядра (завдяки index.ts)
import { AbstractCardComponent, VisualComponent } from "card-core";
import React, { FC } from "react";

// Імпорт візуальних компонентів (потрібно створити ці файли!)
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

  // 🔥 ВИПРАВЛЕНО: Функція handleKeyDown повинна бути визначена тут,
  // якщо ви хочете її використовувати. Вона була у вашому попередньому коді,
  // але була загублена при фінальному редагуванні.
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
      // 🔥 ВИПРАВЛЕНО: Використовуємо handleKeyDown для доступності
      onKeyDown={handleKeyDown}
      // 🔥 ВИПРАВЛЕНО: Встановлюємо type для уникнення надсилання форми
      type="button"
    >
      <h3 className="card-renderer-info">
        Рендер: {card.getData().cardType} - {card.getData().rarity}
      </h3>

      {/* 🔥 ВИПРАВЛЕНО: ЛОГІКА MAP ТЕПЕР ПРАВИЛЬНО РОЗТАШОВАНА В БЛОЦІ JSX */}
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
