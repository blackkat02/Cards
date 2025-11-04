// packages/react-card-adapter/src/CardRenderer.tsx

import React from 'react';
// 🔥 Імпорт з кореня пакета Ядра (завдяки index.ts)
import { AbstractCardComponent, VisualComponent } from 'card-core'; 

// Імпорт візуальних компонентів (потрібно створити ці файли!)
import { Title } from './visuals/Title';
import { Frame } from './visuals/Frame'; 
import { Description } from './visuals/Description'; 
// TODO: Додай Aura, Gem, InfluenceMarker після їх створення
import './CardRenderer.css'; 


// 1. 🔥 МАПА АДАПТАЦІЇ (VisualComponentMap)
// Ця мапа є серцем патерну Адаптер/Міст. Вона зв'язує Імена з Ядра з React-компонентами.
const VisualComponentMap: Record<VisualComponent['name'], React.FC<any>> = {
    'Frame': Frame,
    'Title': Title,
    'Description': Description,
    // ✅ Компоненти з інлайн-реалізацією (винесені від інлайн-стилів):
    'Image': ({ source }) => <img src={source} alt="Card visual" className="card-image-content" />,
    'Gem': ({ color }) => <div className="card-gem" style={{ backgroundColor: color }} />, 
    'InfluenceMarker': ({ level }) => <span className="influence-marker">⭐{level}</span>,
    // 'Aura': ({ effect }) => <div className={`card-aura card-aura--${effect}`} />,
};


interface CardRendererProps {
    // Приймаємо абстрактний об'єкт, який дотримується контракту AbstractCardComponent
    card: AbstractCardComponent;
}

export const CardRenderer: React.FC<CardRendererProps> = ({ card }) => {
    // 1. Отримуємо абстрактну структуру з Ядра
    const visualStructure: VisualComponent[] = card.getVisualComponents();

    // 2. Обробник активації (миша та клавіатура)
    const handleActivate = () => {
        card.onClick(); 
        console.log(`[Renderer] Card activated: ${card.getData().title}`); 
    };
    
    // 3. Обробник клавіатури: активація при натисканні Enter або Space (A11Y)
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); 
            handleActivate();
        }
    };

    return (
        <button 
            className="card-wrapper" 
            onClick={handleActivate} 
            // role="button" та tabIndex={0} ТЕПЕР АВТОМАТИЧНІ!
        >
            <h3 className="card-renderer-info">Рендер: {card.getData().cardType} - {card.getData().rarity}</h3>
            
            {/* 4. ГОЛОВНА ЛОГІКА: Перетворення VisualComponent[] на JSX */}
            {visualStructure.map((visualElement, index) => {
                const Component = VisualComponentMap[visualElement.name];
                
                if (!Component) {
                    console.warn(`Renderer missing React component for: ${visualElement.name}`);
                    return null;
                }
                
                // Передаємо props з Ядра в React-компонент
                return <Component key={index} {...visualElement.props} />;
            })}
        </button>
    );
};