// packages/react-card-adapter/src/visuals/Title.tsx

import React from 'react';
import '../styles/Title.css'; // Імпортуємо стилі

// Інтерфейс властивостей (беремо з VisualComponent.props)
interface TitleProps {
    text: string;
    fontStyle?: string;
    color?: string;
    size?: 'M' | 'L' | 'XL';
}

export const Title: React.FC<TitleProps> = ({ text, fontStyle, color, size }) => {
    // Динамічно формуємо класи, що залежать від параметрів (наприклад, розміру)
    const sizeClass = size ? `title--size-${size.toLowerCase()}` : '';
    const style: React.CSSProperties = {
        color: color || 'var(--color-title-default)', // Колір може бути змінною або інлайн (для гнучкості)
        fontFamily: fontStyle === 'serif' ? 'Georgia' : 'Arial, sans-serif'
    };
    
    // Рендеримо заголовок
    return (
        <h2 className={`card-title ${sizeClass}`} style={style}>
            {text}
        </h2>
    );
};