import React from "react";
import "./HTLessons.scss";
import BGVector from '../../assets/bg-figure-1.svg';
import Teacher from '../../assets/teacher.png'
import { BlueLine } from "../../components/BlueLine/BlueLine";
import { motion, useInView} from "framer-motion"
import { useRef } from "react";
import { globalVariants } from "../../motionVariants";

export const HTLessons = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="HTLessons-layout">
      <motion.img 
        initial={{scale: 1, x:0, y:0}}
        animate={{scale: [1, 1.01, 1], x: [0, -3, 0, 3, 0], y: [0, 3, 0 -3, 0]}}
        transition={{duration: 5, repeat: Infinity}}
        className="object" alt="Object" src= {BGVector} />
      <div className="overlap">
        <div className="col-md">
          <BlueLine />
          <motion.div 
            className="section-title"
            ref={ref}
            variants={globalVariants}
            initial={'hiddenText' }
            animate={isInView ? 'visibleText' : 'hiddenText' }
            transition={{ duration: 1 }}
          >Как проходят уроки</motion.div>
          <motion.p className="text"
            ref={ref}
            variants={globalVariants}
            initial={'hiddenText' }
            animate={isInView ? 'visibleText' : 'hiddenText' }
            transition={{ duration: 1 }}
          >
            Уроки в нашей школе проходят в онлайн формате
            используя онлайн доски, видеочат с педагогом.
            Помимо этого педагог ведет базу материалов,
            чтобы ученик мог в любой момент получить
            доступ к материалам уроков и конспектам
          </motion.p>
        </div>
        <div className="overlap-group">
          <img className="image" alt="Teacher" src={Teacher} />
          <div className="card">
            <div className="feature-title-sec">Онлайн-доска</div>
            <div className="div" />
          </div>
          <div className="card-2">
            <div className="feature-title-sec">База материалов</div>
            <div className="div" />
          </div>
          <div className="card-3">
            <div className="feature-title-sec">
              Видеочат <br />с педагогом
            </div>
            <div className="div" />
          </div>
        </div>
      </div>
    </div>
  );
};

