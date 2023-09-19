import React from "react";
import "./FAQ.scss";
import FrameVector from '../../assets/frame-vector-reverted2.svg';
import FrameVectorReverted from '../../assets/frame-vector-reverted.svg';
import FaqElement from "../../components/FaqElement/FaqElement";
import { BlueLine } from "../../components/BlueLine/BlueLine";

export const FAQ = () => {
  return (
    <div className="FAQ-layout">
        <div className="content">
          <div className="head-content">
            <BlueLine />
            <div className="section-title">FAQ</div>
          </div>
          <div className="full-content">
            <div className="main-content">
              <FaqElement title="Смогу ли оплатить пакет занятий по разным предметам и записаться на несколько сразу?" subtitle="Да, конечно можно"/>
              <FaqElement title="Можно ли будет поменять репетитора в процессе обучения?" subtitle="Да, конечно можно"/>
              <FaqElement title="Смогу ли я следить за успехами ребенка?" subtitle="Да, конечно можно"/>
              <FaqElement title="Сколько раз в неделю нужно заниматься?" subtitle="Да, конечно можно"/>
              <FaqElement title="Сколько по времени длятся занятия?" subtitle="Да, конечно можно"/>
              <FaqElement title="Ограничена ли подписка по времени?" subtitle="Да, конечно можно"/>
              <FaqElement title="Какое оборудование нужно для обучения?" subtitle="Да, конечно можно"/>
            </div>
            <div className="vectors-frame">
              <img className="vector" alt="Vector" src= {FrameVector} />
              <img className="vector" alt="Vector" src= {FrameVectorReverted} />
            </div> 
          </div>
        </div>
      </div>
  );
};


