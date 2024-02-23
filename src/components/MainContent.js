// MainContent.js
import React from 'react';
import SobreMiContainer from './SobreMiContainer';
import NoticiasCarouselContainer from './NoticiasCarouselContainer';
import styleMainContainer from '../styless/styleMainContainer.css';

const MainContent = () => {
  return (
    <div className="main-content">
        <h1>WheelsInMotionUY!</h1>
      <SobreMiContainer />
      <NoticiasCarouselContainer />
    </div>
  );
}

export default MainContent;
