import React from "react";
import "./Header.scss";
import ArrowRight from '../../assets/arrow-right.svg';
import Logo from '../../assets/logo_happy_happy-removebg.png';
import { motion } from 'framer-motion';

export const Header = () => {
  const variants = {
    initial: { x:0 },
    hovered: { x:10 }
  }
  
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    const headerHeight = 100;
    window.scroll({
      top: section.offsetTop - headerHeight,
      behavior: 'smooth',
    });
  };
  
  return (
    <div className="header">
        <div className="header-info">
          <img className="logo" alt="logo" src={Logo} />
          <div className="brandname">HappyHappy School</div>
          <div className="navbar-nav">
            <a href="#classes" className="link" onClick={(e) => scrollToSection(e, 'courses')}>Направления</a>
            <a href="#prices" className="link" onClick={(e) => scrollToSection(e, 'prices')}>Цены</a>
            <a href="#contacts" className="link" onClick={(e) => scrollToSection(e, 'contacts')}>Контакты</a>
          </div>
        </div>
      <motion.button 
        className="btn-primary"
        initial="initial"
        whileHover={'hovered'}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => scrollToSection(e, 'action')}
      >
        <div className="btn-text">Записаться на урок</div>
        <motion.img className="icn-arrow-right-icn" alt="Icn arrow right icn" src= {ArrowRight} variants={variants}/>
      </motion.button>
    </div>
  );
};


