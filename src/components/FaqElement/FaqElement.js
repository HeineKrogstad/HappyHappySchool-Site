import { useState } from 'react';
import Arrow from '../../assets/arrows.svg';
import "./FaqElement.scss";
import { motion } from "framer-motion";

const FaqElement = ({title, subtitle}) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleImageClick = () => {
    setIsTextVisible(!isTextVisible);
  };

  // Определяем анимацию для появления/скрытия элемента subtitle-section
  const textAnimation = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" }
  };

  return (
    <div className="faq-element">
      <div className='div-wrapper'>
        <p className="h-section-title"> { title } </p>
        <motion.img
          className="image"
          alt="arrow"
          src={Arrow}
          onClick={handleImageClick}
          animate={{ rotate: isTextVisible ? 180 : 0 }} // Анимация вращения изображения
        />
      </div>
      <motion.p
        className='subtitle-section'
        variants={textAnimation} // Применяем анимацию к subtitle-section
        initial="hidden" // Начальное значение
        animate={isTextVisible ? "visible" : "hidden"} // Анимационное значение
      >
        { subtitle }
      </motion.p>
    </div>
  );
};

export default FaqElement;