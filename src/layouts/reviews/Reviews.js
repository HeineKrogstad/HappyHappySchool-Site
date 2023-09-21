import React from "react";
import "./Reviews.scss";
import VideoComponent from "../../components/VideoComponent/VideoComponent";
import { BlueLine } from "../../components/BlueLine/BlueLine";
import { motion} from 'framer-motion';
import { globalVariants } from "../../motionVariants";

export const Reviews = () => {
  return (
    <div className="reviews-layout">
      <div className="container">
        <div className="main-content">
          <BlueLine />
          <motion.div 
            className="section-title"
            variants={globalVariants}
            initial={'hiddenText'}
            whileInView={'visibleText'}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.5, once: true }}
          >
          За что нас любят
          </motion.div>
        </div>
        <div className="reviews-content">
          <div className="col-md">
            <motion.div 
              variants={globalVariants}
              initial={'hiddenText'}
              whileInView={'visibleText'}
              transition={{ duration: 1.5 }}
              viewport={{ amount: 0.5, once: true }}
              className="card-content"
            >
              <div className="paragraph">Анастасия</div>
              <p className="text-wrapper">
                “Мой ребенок учится в 6-ом классе. У нас давно были проблемы с математикой, мы взяли на пробу
                несколько занятий. Результат меня впечатлил, на следующей же самостоятельной работе ребенок показал
                результат, вместо привычных 2-3 он получил 4. Я была рада, учимся уже полгода и будем продолжать”
              </p>
            </motion.div>
            <VideoComponent/>
          </div>
          <div className="col-md">
              <motion.div 
                className="card-content"
                variants={globalVariants}
                initial={'hiddenText'}
                whileInView={'visibleText'}
                transition={{ duration: 1 }}
                viewport={{ amount: 0.2, once: true }}
              >
                <div className="paragraph">Анастасия</div>
                <p className="text-wrapper">
                  “Мой ребенок учится в 6-ом классе. У нас давно были проблемы с математикой, мы взяли на пробу
                  несколько занятий. Результат меня впечатлил, на следующей же самостоятельной работе ребенок показал
                  результат, вместо привычных 2-3 он получил 4. Я была рада, учимся уже полгода и будем продолжать”
                </p>
              </motion.div>
              <VideoComponent/>
          </div>
        </div>
      </div>
    </div>
  );
};
