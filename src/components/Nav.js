// Nav.js
import React from 'react';

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);


const Nav = () => {
  return (
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sobre Mi</a></li>
        <li><a href="#">Noticias</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
