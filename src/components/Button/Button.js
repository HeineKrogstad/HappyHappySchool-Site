import React from "react";
import "./Button.scss";
import { motion } from 'framer-motion';

export const Button = () => {
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
    <motion.button 
        transition={{duartion: 0.5}}
        whileHover={{scale: 1.03}}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => scrollToSection(e, 'action')}
        className="cta"
    >
        <div className="button-md-sec">
        <div className="btn-text">Оставить заявку</div>
        </div>
    </motion.button>
    );
};