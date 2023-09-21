import React from "react";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { Button } from "../../components/Button/Button";
import iconGraduate from '../../assets/icon-graduate.svg';
import iconIndividual from '../../assets/fingerprint.png';
import iconBook from '../../assets/icon-book.svg';
import "./Home.scss";
import HomeAnimation from '../../components/HomeAnimation/HomeAnimation';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { globalVariants } from "../../motionVariants";
import { useRef } from "react";

export const Home = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const cards = [
    { titleText: 'Опытные преподаватели', text1: 'Каждый наш преподаватель имеет более', textBold: ' 2-х лет ', text3: 'работы с детьми. Глубина знаний доказана результатами нших учеников', icon: iconGraduate },
    { titleText: 'Идивидуальный подход', text1: 'Наши преподаватели найдут общий язык с Вашим ребенком и создадут персональный план обучения', icon: iconIndividual },
    { titleText: 'Качественные материалы', text1: 'Обучающие материалы сотавлены опытными методистами и содержат всё нужное для обчения', icon: iconBook }
  ];
  
  return (
    <div className="home">
      <div className="home-content">
        <motion.div 
          ref={ref}
          variants={globalVariants}
          initial={'hiddenText'}
          animate={isInView ? 'visibleText' : 'hiddenText'}
          transition={{ duration: 3}}
          className="home-col">
          <div className="headline-sec">250+ учеников доверяют нам</div>
          <p className="sub-headline-sec">
            <span className="text-wrapper">HappyHappy School</span>
            <span className="span">
              {" "} - современная онлайн-школа
              <br />
              <br />
              Запишитесь на первый{" "}
            </span>
            <span className="text-wrapper-2">бесплатный </span>
            <span className="span">урок</span>
          </p>
          <Button />
        </motion.div>
        <div className="Info-Cards-Row">
          <AnimatePresence>
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={globalVariants}
                ref={ref}
                initial={'hiddenVerticalBlock'}
                animate={isInView ? 'visibleVerticalBlock' : 'hiddenVerticalBlock'}
                transition={{ duration: 1, delay: index * 0.5 }}
                
              >
                <InfoCard
                  titleText={card.titleText}
                  text1={card.text1}
                  textBold={card.textBold}
                  text3={card.text3}
                  icon={card.icon}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <HomeAnimation className="bg-object"/>
    </div>
  );
};