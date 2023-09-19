import React from "react";
import "./Teachers.scss";
import { BlueLine } from "../../components/BlueLine/BlueLine";
import Teacher1 from '../../assets/teacher-1.png';
import bgteachers from '../../assets/bg-teachers.svg';
import { TeacherCard } from "../../components/Teacher/TeacherCard";

export const Teachers = () => {
  return (
    <div className="teachers-layout">
      <img className="object" alt="Object" src= {bgteachers} />
        <div className="container">
          <div className="head-content">
            <BlueLine />
            <div className="section-title-sec">Наши преподаватели</div>
            <p className="text">
              Объяснят сложные темы простыми словами, чтобы ребёнок смог разобраться <br />
              и выполнить задания самостоятельно. Занятия проходят 1 на 1 по индивидуальной программе. <br />
              Наши преподаватели помогут ребёнку справиться с трудностями и влюбиться в предмет
            </p>
          </div>
          <div className="teacher-cards">
            <TeacherCard name={"Виктория Шарапова"} job = {"Английский язык"} link={"https://vk.com/id276171379"} profilePic={Teacher1} />
            <TeacherCard name={"Виктория Шарапова"} job = {"Английский язык"} link={"https://vk.com/id276171379"} profilePic={Teacher1} />
            <TeacherCard name={"Виктория Шарапова"} job = {"Английский язык"} link={"https://vk.com/id276171379"} profilePic={Teacher1} />
            <TeacherCard name={"Виктория Шарапова"} job = {"Английский язык"} link={"https://vk.com/id276171379"} profilePic={Teacher1} />
          </div>
        </div>
    </div>
  );
};
