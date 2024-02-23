import React from 'react';
import stylePortada from '../styless/stylePortada.css';

const PortadaContainer = () => {
  return (
    <div className='portada-container'>
        <h1>PortadaContainer</h1>
        <div className='imagenPortada'>
            <img src="./img/gallery/gallery1.jpg" alt='imagen' />
        </div>
    </div>
  );
}

export default PortadaContainer;