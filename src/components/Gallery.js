import React, { useState, useEffect } from 'react';
import './Gallery.css';

const images = [
    { id: 1, src: '/images/Photo1_small.jpg', full: '/images/Photo1_full.jpg', alt: 'Фото 1' },
    { id: 2, src: '/images/Photo2_small.jpg', full: '/images/Photo2_full.jpg', alt: 'Фото 2' },
    { id: 3, src: '/images/Photo3_small.jpg', full: '/images/Photo3_full.jpg', alt: 'Фото 3' },
    { id: 4, src: '/images/Photo4_small.jpg', full: '/images/Photo4_full.jpg', alt: 'Фото 4' },
    { id: 5, src: '/images/Photo5_small.jpg', full: '/images/Photo5_full.jpg', alt: 'Фото 5' },
    { id: 6, src: '/images/Photo6_small.jpg', full: '/images/Photo6_full.jpg', alt: 'Фото 6' },
    { id: 7, src: '/images/Photo7_small.jpg', full: '/images/Photo7_full.jpg', alt: 'Фото 7' },
    { id: 8, src: '/images/Photo8_small.jpg', full: '/images/Photo8_full.jpg', alt: 'Фото 8' },
    { id: 8, src: '/images/Photo9_small.jpg', full: '/images/Photo9_full.jpg', alt: 'Фото 9' },
];

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openModal = (index) => setSelectedIndex(index);
    const closeModal = () => setSelectedIndex(null);

    const nextImage = (e) => {
        if (e) e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        if (e) e.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if (selectedIndex !== null) {
            const handleKeyDown = (e) => {
                switch (e.key) {
                    case 'ArrowLeft':
                        prevImage(e);
                        break;
                    case 'ArrowRight':
                        nextImage(e);
                        break;
                    case 'Escape':
                        closeModal();
                        break;
                    default:
                        break;
                }
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [selectedIndex]);

    return (
        <div className="gallery">
            <div className="gallery-grid">
                {images.map((img, index) => (
                    <div
                        key={img.id}
                        className="gallery-item"
                        onClick={() => openModal(index)}
                    >
                        <img src={img.src} alt={img.alt} />
                    </div>
                ))}
            </div>

            {selectedIndex !== null && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="prev" onClick={prevImage}>❮</button>
                        <img src={images[selectedIndex].full} alt={images[selectedIndex].alt} />
                        <button className="next" onClick={nextImage}>❯</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;