// packages/react-card-adapter/src/visuals/Image.tsx

import React from 'react';
// import '../styles/Image.css';

interface ImageProps {
    source: string; // Шлях до зображення з Ядра: /pckup/images/ID.jpg
    quality?: 'HD' | 'SD';
}

export const Image: React.FC<ImageProps> = ({ source, quality }) => {
    const qualityClass = quality ? `image--quality-${quality.toLowerCase()}` : '';

    return (
        <div className="card-image-wrapper">
            {/* Шлях 'source' посилається на ресурс у папці public демо-клієнта */}
            <img 
                src={source} 
                alt="Card illustration" 
                className={`card-image ${qualityClass}`}
            />
        </div>
    );
};