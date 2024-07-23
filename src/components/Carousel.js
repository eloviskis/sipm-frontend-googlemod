import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState([
    // Adicione URLs de imagens aqui
    'https://via.placeholder.com/400x300?text=Imagem+1',
    'https://via.placeholder.com/400x300?text=Imagem+2',
    'https://via.placeholder.com/400x300?text=Imagem+3'
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
    }, 3000); // Mudar imagem a cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${index === current ? 'block' : 'hidden'}`}
        >
          <img src={image} alt={`Slide ${index}`} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
