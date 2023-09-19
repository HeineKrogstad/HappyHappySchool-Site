import React from "react";
import "./Stats.scss";
import {StatsComponent} from '../../components/StatsComponent/StatsComponent';
//import FrameVector from '../../assets/frame-vector.svg';
//import FrameVectorReverted from '../../assets/frame-vector-reverted.svg';
//import { useRef } from "react";
//import { useInView } from 'react-intersection-observer';
import { motion, useInView} from "framer-motion"
import { useRef } from "react";

export const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  
  const variants = {
    hidden1: { pathLength: 0  },
    visible1: { pathLength: 1 }
  };
  
  return (
    <div className="stats-frame">
      <div className="stats-column">
      <svg width="128" height="40" viewBox="0 0 128 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="vector">
        <motion.path
          ref={ref}
          d="M127 1H13.5C13.5 1 1 2.34114 1 16.6466C1 30.9521 1 28.5688 1 39"
          stroke="#264E8A" 
          variants={variants}
          initial={'hidden1' }
          animate={isInView ? 'visible1' : 'hidden1' }
          transition={{ duration: 1.5 }}
        />
      </svg>
        <div className="row">
          <StatsComponent title = '250+' subTitle = 'Довольных учеников'/>
          <StatsComponent title = '23' subTitle = 'Преподавателя'/>
          <StatsComponent title = '15' subTitle = 'Предметов'/>
          <StatsComponent title = '5000+' subTitle = 'Часов проведенных занятий'/>
        </div>
        <svg width="128" height="40" viewBox="0 0 128 40" fill="none" className="vector-last">
          <motion.path
            stroke="#264E8A"
            d="M1,39l113.5,0c0,0,12.5-1.3,12.5-15.6c0-14.3,0-11.9,0-22.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      </div>
    </div>
  );
};

