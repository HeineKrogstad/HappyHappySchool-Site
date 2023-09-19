import React from "react";
import object from '../../assets/home-animation.svg';
import "./HomeAnimation.scss"

function HomeAnimation() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="rotating-svg">
      <g transform="translate(50,50)">
        <image href={object} x="-50" y="-50" width="100" height="100" />
      </g>
    </svg>
  );
}

export default HomeAnimation;
