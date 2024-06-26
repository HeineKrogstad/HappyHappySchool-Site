import React from "react";
import "./HTEducation.scss";
import { BlueLine } from "../../components/BlueLine/BlueLine";
import { HTEducationCard } from "../../components/HTEducationCard/HTEducationCard";
import { useRef } from "react";
import { motion, useInView} from "framer-motion"
import { globalVariants } from "../../motionVariants";

export const HTEducation = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <div className="HT-Education-frame">
      <div className="content">
        <div className="row">
          <BlueLine />
          <motion.div className="section-title"
            ref={ref}
            variants={globalVariants}
            initial={ 'hiddenText' }
            animate={isInView ? 'visibleText' : 'hiddenText' }
            transition={{ duration: 1 }}
          >Как строится обучение</motion.div>
        </div>
        <motion.div className="cards"
          variants={globalVariants}
          ref={ref}
          initial={'hiddenBlock'}
          animate={isInView ? 'visibleBlock' : 'hiddenBlock'}
          >
          <motion.div className="col-md"
            custom={1}
            variants={globalVariants}
          >
            <HTEducationCard number="1" title="Вводный урок" subtitle="На вводном уроке мы оценим уровень знаний, определим цель занятий и составим расписание"/>
            <HTEducationCard number="2" title="Занятия с репетитором" subtitle="Ученик занимается согласно расписанию, выполняет задания, закрепляет теорию на практике"/>
          </motion.div>
          <motion.div className="col-md" custom={2} variants={globalVariants}>
            <HTEducationCard number="3" title="Домашние задания" subtitle="Преподаватель дает ученику домашние задания согласно программе и проверяет их"/>
            <HTEducationCard number="4" title="Обратная связь" subtitle="Раз в 4 занятия преподаватель дает обратную связь об успехах ученика"/>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};