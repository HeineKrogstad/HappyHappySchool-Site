import './InfoCard.scss';
import React from "react";
import { motion } from 'framer-motion';

export const InfoCard = ({ titleText, text1, textBold, text3, icon }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.5 }}
      className="info-card">
      <div className="circle-sec">
        <img className="icon-cool-icon" alt="Icon cool icon" src={icon} />
      </div>
      <div className="feature-title-sec">
        {titleText}
      </div>
      <div className="fixed-width-fixed" />
      <div className="flexcontainer">
        <p>
          <span className="text-wrapper">{text1}</span>
          <span className="span">{textBold}</span>
          <span className="text-wrapper"> {text3}</span>
        </p>
      </div>
    </motion.div>
  );
};
    