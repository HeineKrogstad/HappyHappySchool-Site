import React from "react";
import "./HTLessons.scss";
import BGVector from '../../assets/bg-figure-1.svg';
import Teacher from '../../assets/teacher.png'
import { BlueLine } from "../../components/BlueLine/BlueLine";

export const HTLessons = () => {
  return (
    <div className="HTLessons-layout">
      <img className="object" alt="Object" src= {BGVector} />
      <div className="overlap">
        <div className="col-md">
          <BlueLine />
          <div className="section-title">Как проходят уроки</div>
          <p className="text">
            Уроки в нашей школе проходят в онлайн формате
            используя онлайн доски, видеочат с педагогом.
            Помимо этого педагог ведет базу материалов,
            чтобы ученик мог в любой момент получить
            доступ к материалам уроков и конспектам
          </p>
        </div>
        <div className="overlap-group">
          <img className="image" alt="Teacher" src={Teacher} />
          <div className="card">
            <div className="feature-title-sec">Онлайн-доска</div>
            <div className="div" />
          </div>
          <div className="card-2">
            <div className="feature-title-sec">База материалов</div>
            <div className="div" />
          </div>
          <div className="card-3">
            <div className="feature-title-sec">
              Видеочат <br />с педагогом
            </div>
            <div className="div" />
          </div>
        </div>
      </div>
    </div>
  );
};
