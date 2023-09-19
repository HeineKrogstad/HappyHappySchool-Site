import React from "react";
import "./Header.scss";
import ArrowRight from '../../assets/arrow-right.svg';
import Logo from '../../assets/logo_happy_happy-removebg.png';

export const Header = () => {
  return (
    <div className="header">
        <div className="header-info">
          <img className="logo" alt="logo" src={Logo} />
          <div className="brandname">HappyHappy School</div>
          <div className="navbar-nav">
            <div className="link">Направления</div>
            <div className="link">Цены</div>
            <div className="link">Контакты</div>
          </div>
        </div>
      <div className="btn-primary">
        <div className="btn-text">Записаться на урок</div>
        <img className="icn-arrow-right-icn" alt="Icn arrow right icn" src= {ArrowRight} />
      </div>
    </div>
  );
};


