import React from "react";
import "./Stats.scss";
import {StatsComponent} from '../../components/StatsComponent/StatsComponent';
//import FrameVector from '../../assets/frame-vector.svg';
//import FrameVectorReverted from '../../assets/frame-vector-reverted.svg';
//import { useRef } from "react";
//import { useInView } from 'react-intersection-observer';
import { motion, useInView} from "framer-motion"
import { useRef } from "react";
import { globalVariants } from "../../motionVariants";

export const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <div className="stats-frame">
      <div className="stats-column">
      <svg width="128" height="40" viewBox="0 0 128 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="vector" ref={ref}>
        <motion.path
          d="M127 1H13.5C13.5 1 1 2.34114 1 16.6466C1 30.9521 1 28.5688 1 39"
          stroke="#264E8A" 
          variants={globalVariants}
          initial={'hiddenVector' }
          animate={isInView ? 'visibleVector' : 'hiddenVector' }
          transition={{ duration: 1.5 }}
        />
      </svg>
        <motion.div className="row"
          ref={ref}
          variants={globalVariants}
          initial={'hiddenBlock' }
          animate={isInView ? 'visibleBlock' : 'hiddenBlock' }
          transition={{ duration: 1 }}>
    
          <StatsComponent title = '250+' subTitle = 'Довольных учеников'/>
          <StatsComponent title = '23' subTitle = 'Преподавателя'/>
          <StatsComponent title = '15' subTitle = 'Предметов'/>
          <StatsComponent title = '5000+' subTitle = 'Часов проведенных занятий'/>
        </motion.div>
        <svg width="128" height="40" viewBox="0 0 128 40" fill="none" className="vector-last" ref={ref}>
          <motion.path
            stroke="#264E8A"
            d="M1,39l113.5,0c0,0,12.5-1.3,12.5-15.6c0-14.3,0-11.9,0-22.4"
            variants={globalVariants}
            initial={'hiddenVector' }
            animate={isInView ? 'visibleVector' : 'hiddenVector' }
            transition={{ duration: 1.5 }}
          />
        </svg>
      </div>
    </div>
  );
};