// packages/react-card-adapter/src/visuals/Description.tsx

import React from 'react';
// 🔥 Імпортуємо CSS для уникнення інлайн-стилів
// import '../styles/Description.css'; 

// Інтерфейс для властивостей (props), які приходять із Ядра (VisualComponent.props)
interface DescriptionProps {
    text: string;
    textColor?: string;
}

export const Description: React.FC<DescriptionProps> = ({ text, textColor }) => {
    // Стилі textColor можна передати як CSS-змінну або інлайн (якщо лінтер дозволяє для змінних)
    const style: React.CSSProperties = {
        color: textColor || 'var(--color-default-text)', // Використовуємо CSS-змінну або значення
    };

    return (
        // Використовуємо CSS-клас замість інлайн-стилів
        <p className="card-description" style={style}>
            {text}
        </p>
    );
};