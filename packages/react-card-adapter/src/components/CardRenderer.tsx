
// packages/react-card-adapter/src/CardRenderer.tsx

import React from 'react';
// ✅ ДИСЦИПЛІНА: Імпортуємо з кореня пакета 'card-core', а не з внутрішнього /src/
import { AbstractCardComponent, VisualComponent, PickUpCardData } from 'card-core'; 
import { Title } from '../visuals/Title.js';
import { Frame } from '../visuals/Frame.js'; 
import { Description } from '../visuals/Description.js'; 
// 🔥 КРИТИЧНО: Імпортуємо зовнішні стилі
import  '../styles/CardRenderer.css'; 


// 1. 🔥 МАПА АДАПТАЦІЇ: Зв'язуємо Імена Ядра з React-Компонентами
// Всі інлайн-стилі тут замінені на класи (або винесені)
const VisualComponentMap: Record<VisualComponent['name'], React.FC<any>> = {
    'Frame': Frame,
    'Title': Title,
    'Description': Description,
    // ✅ Виправлено: Image тепер використовує клас
    'Image': ({ source }) => <img src={source} alt="Card visual" className="card-image-content" />,
    // ✅ Виправлено: Gem тепер використовує клас
    'Gem': () => <div className="card-gem" />, 
    // ✅ Виправлено: InfluenceMarker тепер використовує клас
    'InfluenceMarker': ({ level }) => <span className="influence-marker">⭐{level}</span>,
    // TODO: Додай Aura
    // 'Aura': () => null
};


interface CardRendererProps {
    card: AbstractCardComponent;
}

export const CardRenderer: React.FC<CardRendererProps> = ({ card }) => {
    
    const visualStructure: VisualComponent[] = card.getVisualComponents();

    // 1. Обробник активації (миша та клавіатура)
    const handleActivate = () => {
        card.onClick(); 
    };
    
    // 2. 🔥 A11Y: Обробник клавіатури
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); 
            handleActivate();
        }
    };

    return (
        <div 
            className="card-wrapper" // 🔥 Стилі винесені в CSS-файл
            
            // 🔥 A11Y: Атрибути для доступності та фокусу клавіатури
            role="button" 
            tabIndex={0} 
            
            onClick={handleActivate} 
            onKeyDown={handleKeyDown} 
        >
            <h3 className="card-renderer-info">Рендер: {card.getData().cardType} - {card.getData().rarity}</h3>
            
            {visualStructure.map((visualElement, index) => {
                const Component = VisualComponentMap[visualElement.name];
                
                if (!Component) {
                    console.warn(`Renderer missing React component for: ${visualElement.name}`);
                    return null;
                }
                
                return <Component key={index} {...visualElement.props} />;
            })}
        </div>
    );
};