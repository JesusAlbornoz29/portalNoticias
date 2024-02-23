// SobreMiContainer.js
import React from 'react';
import styleSobreMi from '../styless/styleSobreMi.css';

const SobreMiContainer = () => {
  return (
    <div className="containerSobreMi">
        <div className="imagenSobreMi">
          {/* Aquí puedes agregar las dos imágenes */}
            <div className='box1'></div>
            <div className='box2'></div>
        </div>
        <div className="sobre-mi">
          <h2>Sobre Mí</h2>
            <p>
              ¡Hola Raiders! Soy Jesús Albornoz, un apasionado desarrollador de software y entusiasta del rolleo. Este sitio tiene como objetivo principal centralizar la información sobre este emocionante deporte que tanto adoro en Uruguay. ¡Bienvenidos a explorar y descubrir más sobre el mundo del rolleo conmigo!</p>
        </div>
    </div>
  );
}

export default SobreMiContainer;
