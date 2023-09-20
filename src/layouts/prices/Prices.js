import React from "react";
import "./Prices.scss";
import { PriceCard } from "../../components/PriceCard/PriceCard";
import { BlueLine } from "../../components/BlueLine/BlueLine";
import bgTriagle from '../../assets/bg-vector-triagle.svg';

import { motion} from 'framer-motion';
import { globalVariants } from "../../motionVariants";

export const Prices = () => {
  return (
    <div className="prices-layout" id="prices">
      <motion.img 
        initial={{scale: 1, x:0, y:0}}
        animate={{ y: [0, 5, 0]}}
        transition={{duration: 5, repeat: Infinity, type:"linear"}}
        className="object" alt="Object" src= {bgTriagle} />
      <div className="overlap-group">
        <div className="head-content">
          <BlueLine />
          <motion.div 
            variants={globalVariants}
            className="section-title"
            initial={'hiddenText'}
            whileInView={'visibleText'}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.2, once: true }}
          >
            Стоимость
          </motion.div>
          <motion.p 
            className="section-subtitle"
            variants={globalVariants}
            initial={'hiddenText'}
            whileInView={'visibleText'}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.2, once: true }}
          >
              В нашей школе гибкая система подписки. Вы оплачиваете пакет уроков <br />
              и можете тратить их на любые предметы. Также доступна оплата и по 1 занятию
          </motion.p>
        </div>
        <div className="price-cards">
          <motion.div className="row"
            variants={globalVariants}
            initial={'hiddenBlock'}
            whileInView={'visibleBlock'}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.2, once: true }}
          >
            <motion.div 
              className="col-md"
              custom={1}
              variants={globalVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5 }}
            >
              <div className="title-sec-wrapper">Гибкость в обучении</div>
              <PriceCard title={'1 занятие'} price={'1000 ₽ '} subtitle={''}/>
            </motion.div>
            <motion.div
              variants={globalVariants}
              custom={2}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5 }}
            >
              <PriceCard title={'8 занятий'} price={'900 ₽ '} subtitle={'Отлично подойдет для точечного устранения пробелов в знаниях'}/>
            </motion.div>
            <motion.div
              variants={globalVariants}
              custom={3}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5 }}
            >
              <PriceCard title={'16 занятий'} price={'855 ₽ '} subtitle={'Изучить несколько тем или подтянуть знания по основам предмета'}/>
            </motion.div>
          </motion.div>
          <motion.div className="row"
            variants={globalVariants}
            initial={'hiddenBlock'}
            whileInView={'visibleBlock'}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.2, once: true }}
          >
            <motion.div 
              className="col-md"
              custom={4}
              variants={globalVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5 }}
            >
              <div className="title-sec-wrapper green-wrapper"> Выбор родителей</div>
              <PriceCard title={'32 занятия'} price={'810 ₽ '} subtitle={'Плотно взяться за предмет и подробно пройтись по всем темам'}/>
            </motion.div>
            <motion.div className="col-md"
              custom={5}
              variants={globalVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5 }}
            >
              <div className="title-sec-wrapper blue-wrapper"> 15 000 ₽ экономия </div>
              <PriceCard title={'64 занятия'} price={'810 ₽ '} subtitle={'Подробное изучение всего предмета от начала и до конца'}/>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

