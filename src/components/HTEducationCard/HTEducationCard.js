import React from "react";
import "./HTEducationCard.scss";
import { motion } from 'framer-motion';

export const HTEducationCard = ({number, title, subtitle}) => {
    return (
        <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5 }}
            className="HTLesson-card"
        >
            <div className="div-wrapper">
                <div className="text-wrapper">{number}</div>
            </div>
            <div className="card-title">{title}</div>
            <p className="text"> {subtitle} </p>
        </motion.div>
    )
}