import React from "react";
import "./HTEducation.scss";
import { BlueLine } from "../../components/BlueLine/BlueLine";
import { HTEducationCard } from "../../components/HTEducationCard/HTEducationCard";

export const HTEducation = () => {
  return (
    <div className="HT-Education-frame">
      <div className="content">
        <div className="row">
          <BlueLine />
          <div className="section-title">Как строится обучение</div>
        </div>
        <div className="cards">
          <div className="col-md">
            <HTEducationCard number="1" title="Вводный урок" subtitle="На вводном уроке мы оценим уровень знаний, определим цель занятий и составим расписание"/>
            <HTEducationCard number="2" title="Занятия с репетитором" subtitle="Ученик занимается согласно расписанию, выполняет задания, закрепляет теорию на практике"/>
          </div>
          <div className="col-md">
            <HTEducationCard number="3" title="Домашние задания" subtitle="Преподаватель дает ученику домашние задания согласно программе и проверяет их"/>
            <HTEducationCard number="4" title="Обратная связь" subtitle="Раз в 4 занятия преподаватель дает обратную связь об успехах ученика"/>
          </div>
        </div>
      </div>
    </div>
  );
};

