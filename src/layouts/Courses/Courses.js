import React, { useState } from "react";
import { BlueLine } from "../../components/BlueLine/BlueLine";
import { motion, AnimatePresence } from "framer-motion";
import { CourseCard } from "../../components/CourseCard/CourseCard";
import "./Courses.scss";
import math from "../../assets/math.png";
import phys from "../../assets/physics.png";
import inf from "../../assets/informat.png";
import chem from "../../assets/chem.png";
import bio from "../../assets/biology.png";
import eng from "../../assets/english.png";
import hist from "../../assets/history.png";
import soci from "../../assets/sociitie.png";
import lit from "../../assets/literature.png";
import { globalVariants } from "../../motionVariants";

export const Courses = () => {
  const [activeButton, setActiveButton] = useState("5-9 класс");
  const [cardData, setCardData] = useState([
    { titleText: "Математика", img: math },
    { titleText: "Физика", img: phys },
    { titleText: "Информатика", img: inf },
    { titleText: "Химия", img: chem },
    { titleText: "Биология", img: bio },
    { titleText: "Английский язык", img: eng },
  ]);

  const handleButtonClick = (buttonName) => {
    if (buttonName === "5-9 класс" && activeButton !== "5-9 класс") {
      setActiveButton("5-9 класс");
      setCardData((prevData) => prevData.slice(0, 6));
    } else if (buttonName === "ОГЭ/ЕГЭ" && activeButton !== "ОГЭ/ЕГЭ") {
      setActiveButton("ОГЭ/ЕГЭ");
      setCardData((prevData) => [
        ...prevData,
        { titleText: "История", img: hist },
        { titleText: "Обществознание", img: soci },
        { titleText: "Литература", img: lit },
      ]);
    }
  };

  return (
    <div className="courses-layout">
      <div className="content">
        <div className="head-content">
          <BlueLine />
          <motion.div 
            className="section-title"
            variants={globalVariants}
            initial={'hiddenText'}
            whileInView={'visibleText'}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.2, once: true }}
            >
            Направления
          </motion.div>
          <motion.p 
            variants={globalVariants}
            initial={'hiddenText'}
            whileInView={'visibleText'}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.2, once: true }}
            className="text"
          >
            Уроки в нашей школе проходят в онлайн формате используя онлайн
            доски, видеочат с педагогом. Помимо этого педагог ведет
          </motion.p>
          <div className="switch-buttons">
            <motion.button
              onClick={() => handleButtonClick("5-9 класс")}
              className={`button ${
                activeButton === "5-9 класс" ? "active" : ""
              }`}
              whileTap={{ scale: 0.9 }}
              animate={activeButton === "5-9 класс" ? {backgroundColor: '#96BB7C' } : ""}
            >
              5-9 класс
            </motion.button>
            <motion.button
              onClick={() => handleButtonClick("ОГЭ/ЕГЭ")}
              className={`button ${
                activeButton === "ОГЭ/ЕГЭ" ? "active" : ""
              }`}
              whileTap={{ scale: 0.9 }}
              animate={activeButton === "ОГЭ/ЕГЭ" ? {backgroundColor: '#96BB7C' } : ""}
            >
              ОГЭ/ЕГЭ
            </motion.button>
          </div>
        </div>
        <div className="cards-column">
            <motion.div
            className="cards-row"
            >
            {cardData.slice(0,3).map((card, index) => (
                <motion.div 
                variants={globalVariants}
                initial={'hiddenBlock'}
                whileInView={ 'visibleBlock' }
                custom={index}
                viewport={{ amount: 0.2, once: true }}
                >
                    <CourseCard
                    key={index}
                    titleText={card.titleText}
                    img={card.img}
                    />
                </motion.div>
            ))}
            </motion.div>
            <motion.div
            className="cards-row"
            >
            {cardData.slice(3,6).map((card, index) => (
                <motion.div
                variants={globalVariants}
                initial={'hiddenBlock'}
                whileInView={ 'visibleBlock' }
                custom={index}
                viewport={{ amount: 0.2, once: true }} 
                >
                    <CourseCard
                    key={index}
                    titleText={card.titleText}
                    img={card.img}
                    />
                </motion.div>
            ))}
            </motion.div>
            <motion.div className="cards-row">
            <AnimatePresence>
            {cardData.slice(6,9).map((card, index) => (
                <motion.div
                variants={globalVariants}
                initial={'hiddenBlock'}
                whileInView={ 'visibleBlock' }
                exit={'hiddenText'}
                
                custom={index}
                viewport={{ amount: 0.2, once: true }} 
                >
                    <CourseCard
                    key={index}
                    titleText={card.titleText}
                    img={card.img}
                    />
                </motion.div>
            ))}
            </AnimatePresence>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

  


