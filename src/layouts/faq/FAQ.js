import React from "react";
import "./FAQ.scss";
//import FrameVector from '../../assets/frame-vector-reverted2.svg';
//import FrameVectorReverted from '../../assets/frame-vector-reverted.svg';
import FaqElement from "../../components/FaqElement/FaqElement";
import { BlueLine } from "../../components/BlueLine/BlueLine";
import { motion, useInView} from "framer-motion"
import { useRef } from "react";
import { globalVariants } from "../../motionVariants";

export const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <div className="FAQ-layout">
        <div className="content">
          <div className="head-content">
            <BlueLine />
            <div className="section-title">FAQ</div>
          </div>
          <div className="full-content">
            <div className="main-content">
              <FaqElement title="Смогу ли оплатить пакет занятий по разным предметам и записаться на несколько сразу?" subtitle="Да, конечно можно"/>
              <FaqElement title="Можно ли будет поменять репетитора в процессе обучения?" subtitle="Да, конечно можно"/>
              <FaqElement title="Смогу ли я следить за успехами ребенка?" subtitle="Да, конечно можно"/>
              <FaqElement title="Сколько раз в неделю нужно заниматься?" subtitle="Да, конечно можно"/>
              <FaqElement title="Сколько по времени длятся занятия?" subtitle="Да, конечно можно"/>
              <FaqElement title="Ограничена ли подписка по времени?" subtitle="Да, конечно можно"/>
              <FaqElement title="Какое оборудование нужно для обучения?" subtitle="Да, конечно можно"/>
            </div>
            <div className="vectors-frame">
              <svg width="128" height="40" viewBox="0 0 128 40" fill="none" className="vector-last" ref={ref}>
                <motion.path
                  stroke="#264E8A"
                  d="M127,39H13.5C13.5,39,1,37.7,1,23.4C1,9,1,11.4,1,1"
                  variants={globalVariants}
                  initial={'hiddenVector' }
                  animate={isInView ? 'visibleVector' : 'hiddenVector' }
                  transition={{ duration: 1.5 }}
                />
              </svg>
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
        </div>
      </div>
  );
};


