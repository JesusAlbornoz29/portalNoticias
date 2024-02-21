// NoticiasCarouselContainer.js
import React from 'react';
import Carousel from './Carousel';
import '../styless/styleNoticias.css';

const NoticiasCarouselContainer = () => {
  return (
    <div className="noticias-carousel-container">
        <h1>Noticias</h1>
        <Carousel />
      {/* Contenido del carrusel de noticias aquí */}
    </div>
  );
}

export default NoticiasCarouselContainer;
