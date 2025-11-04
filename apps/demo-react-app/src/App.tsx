// apps/demo-react-app/src/App.tsx (ОНОВЛЕНО)

import React from 'react';
import { CoreCardFactory } from 'card-core'; 
import { CardRenderer } from 'react-card-adapter'; 
import { COMMON_PICKUP_DATA, EPIC_PICKUP_DATA } from './testData'; // 🔥 Імпорт мокових даних

// Створення об'єктів карток
const factory = new CoreCardFactory();
const commonCard = factory.createCard(COMMON_PICKUP_DATA as any);
const epicCard = factory.createCard(EPIC_PICKUP_DATA as any);

const App = () => {
    return (
        <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
            <h2>Візуалізація Фабрики (Тест Поліморфізму Rarity)</h2>
            
            {/* 1. Тест: Common Card */}
            <CardRenderer card={commonCard} /> 

            {/* 2. Тест: Epic Card (Має мати Aura, InfluenceMarker) */}
            <CardRenderer card={epicCard} /> 
            
            {/* 3. Перевірка onClick/flip логіки через консоль */}
            <p>Перевірте консоль браузера, натискаючи на картки.</p>
        </div>
    );
};

export default App;