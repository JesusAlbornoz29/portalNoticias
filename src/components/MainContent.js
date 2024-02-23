// MainContent.js
import React from 'react';
import PortadaContainer from './PortadaContainer';
import SobreMiContainer from './SobreMiContainer';
import NoticiasCarouselContainer from './NoticiasCarouselContainer';
import styleMainContainer from '../styless/styleMainContainer.css';

const MainContent = () => {
  return (
    <div className="main-content">
        <h1>Main Content</h1>
      <PortadaContainer />
      <SobreMiContainer />
      <NoticiasCarouselContainer />
    </div>
  );
}

export default MainContent;
