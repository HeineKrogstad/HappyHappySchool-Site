import React from "react";
import "./Teachers.scss";
import { BlueLine } from "../../components/BlueLine/BlueLine";
import Teacher1 from '../../assets/teacher-1.png';
import bgteachers from '../../assets/bg-teachers.svg';
import { TeacherCard } from "../../components/Teacher/TeacherCard";

import { motion} from 'framer-motion';
import { globalVariants } from "../../motionVariants";
//import { useSpring } from "framer-motion"


export const Teachers = () => {
  
  

  
  return (
    <div className="teachers-layout">
      <motion.img 
        className="object" alt="Object" src= {bgteachers} 
        initial={{scale: 1, x:0, y:0}}
        animate={{scale: [1, 1.01, 1], x: [0, -2, 0, 2, 0], y: [0, 2, 0 -2, 0]}}
        transition={{duration: 5, repeat: Infinity}}
      />
        <div className="container">
          <div className="head-content">
            <BlueLine />
            <motion.div 
              className="section-title-sec"
              variants={globalVariants}
              initial={'hiddenText'}
              whileInView={'visibleText'}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.2, once: true }}
            >
            Наши преподаватели
            </motion.div>
            <motion.p 
              className="text"
              variants={globalVariants}
              initial={'hiddenText'}
              whileInView={'visibleText'}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.2, once: true }}
            >
              Объяснят сложные темы простыми словами, чтобы ребёнок смог разобраться <br />
              и выполнить задания самостоятельно. Занятия проходят 1 на 1 по индивидуальной программе. <br />
              Наши преподаватели помогут ребёнку справиться с трудностями и влюбиться в предмет
            </motion.p>
          </div>
          <motion.div 
            className="teacher-cards"
            variants={globalVariants}
            initial={'hiddenText'}
            whileInView={'visibleText'}
            transition={{ duration: 1.5, delay: 0.2 }}
            viewport={{ amount: 0.2, once: true }}
          >
            <TeacherCard name={"Виктория Шарапова"} job = {"Английский язык"} link={"https://vk.com/id276171379"} profilePic={Teacher1} />
            <TeacherCard name={"Виктория Шарапова"} job = {"Английский язык"} link={"https://vk.com/id276171379"} profilePic={Teacher1} />
            <TeacherCard name={"Виктория Шарапова"} job = {"Английский язык"} link={"https://vk.com/id276171379"} profilePic={Teacher1} />
            <TeacherCard name={"Виктория Шарапова"} job = {"Английский язык"} link={"https://vk.com/id276171379"} profilePic={Teacher1} />
          </motion.div>
        </div>
    </div>
  );
};
