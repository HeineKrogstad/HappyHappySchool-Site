import React from "react";
import { useRef } from "react";
import { motion, useInView} from "framer-motion"
//import { useInView } from 'react-intersection-observer';
import "./BlueLine.scss";



export const BlueLine = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const variants = {
    hidden: { width: 0 },
    visible: { width: '100px' }
  };
  
  return (
    <div>
      <motion.div
        className="BlueLine"
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1 }} // Длительность анимации в секундах
      />
    </div>
  );
};
