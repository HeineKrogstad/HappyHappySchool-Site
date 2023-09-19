import React from "react";
import "./Reviews.scss";



export const Reviews = () => {
  return (
    <div className="element-layout5">
      <div className="container">
        <div className="row">
          <div className="main-content">
            <div className="fixed-width-fixed" />
            <div className="section-title">За что нас любят</div>
          </div>
        </div>
        <div className="div">
          <div className="col-md">
            <div className="testimonials-card">
              <div className="card-content">
                <div className="paragraph">Анастасия</div>
                <p className="text-wrapper">
                  “Мой ребенок учится в 6-ом классе. У нас давно были проблемы с математикой, мы взяли на пробу
                  несколько занятий. Результат меня впечатлил, на следующей же самостоятельной работе ребенок показал
                  результат, вместо привычных 2-3 он получил 4. Я была рада, учимся уже полгода и будем продолжать”
                </p>
              </div>
            </div>
          </div>
          <div className="testimonials-card-wrapper">
            <div className="testimonials-card-2">
              <div className="card-content-2">
                <div className="paragraph">Виктор</div>
                <p className="p">
                  “Мой ребенок учится в 6-ом классе. У нас давно были проблемы с математикой, мы взяли на пробу
                  несколько занятий. Результат меня впечатлил, на следующей же самостоятельной работе ребенок показал
                  результат, вместо привычных 2-3 он получил 4. Я была рада, учимся уже полгода и будем продолжать”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
