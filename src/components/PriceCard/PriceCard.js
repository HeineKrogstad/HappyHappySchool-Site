import React from "react";
import "./PriceCard.scss";
import { motion } from 'framer-motion';

export const PriceCard = ({title, subtitle, price}) => {
  return (
    <motion.div 
      className="price-card"
    >
      <div className="h-title"> { title } </div>
      <div className="fixed-width-fixed-2" />
      <p className="text"> {subtitle} </p>
      <p className="p">
        <span className="span">{ price }</span>
        <span className="text-wrapper-2">за урок</span>
      </p>
    </motion.div>
  )
}