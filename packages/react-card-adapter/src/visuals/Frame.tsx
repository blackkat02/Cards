// packages/react-card-adapter/src/visuals/Frame.tsx

import React from 'react';
// import '../styles/Frame.css';

interface FrameProps {
    style: 'Basic' | 'Metallic' | 'Ornate';
    color?: string;
    animation?: 'sparkle' | 'pulse' | string;
    size?: 'small' | 'medium' | 'large';
}

export const Frame: React.FC<FrameProps> = ({ style, color, animation, size }) => {
    // Використовуємо класи для стилю та розміру
    const styleClass = `frame--style-${style.toLowerCase()}`;
    const sizeClass = size ? `frame--size-${size.toLowerCase()}` : '';
    const animationClass = animation ? `frame--anim-${animation}` : '';

    const customStyle: React.CSSProperties = {
        borderColor: color || 'silver',
        // Приклад передачі CSS-змінної з props
        '--frame-color': color, 
    } as React.CSSProperties; // Приведення для підтримки CSS-змінних

    return (
        <div 
            className={`card-frame ${styleClass} ${sizeClass} ${animationClass}`} 
            style={customStyle}
        />
    );
};