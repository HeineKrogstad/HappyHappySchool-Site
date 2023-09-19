import React from "react";
import "./Prices.scss";
import { PriceCard } from "../../components/PriceCard/PriceCard";
import { BlueLine } from "../../components/BlueLine/BlueLine";

import bgTriagle from '../../assets/bg-vector-triagle.svg';

export const Prices = () => {
  return (
    <div className="prices-layout">
      <img className="object" alt="Object" src= {bgTriagle} />
      <div className="overlap-group">
        <div className="head-content">
          <BlueLine />
          <div className="section-title">Стоимость</div>
          <p className="section-subtitle">
              В нашей школе гибкая система подписки. Вы оплачиваете пакет уроков <br />
              и можете тратить их на любые предметы. Также доступна оплата и по 1 занятию
          </p>
        </div>
        <div className="price-cards">
          <div className="row">
            <div className="col-md">
              <div className="title-sec-wrapper">Гибкость в обучении</div>
              <PriceCard title={'1 занятие'} price={'1000 ₽ '} subtitle={''}/>
            </div>
            <PriceCard title={'8 занятий'} price={'900 ₽ '} subtitle={'Отлично подойдет для точечного устранения пробелов в знаниях'}/>
            <PriceCard title={'16 занятий'} price={'855 ₽ '} subtitle={'Изучить несколько тем или подтянуть знания по основам предмета'}/>
          </div>
          <div className="row">
            <div className="col-md">
              <div className="title-sec-wrapper green-wrapper"> Выбор родителей</div>
              <PriceCard title={'32 занятия'} price={'810 ₽ '} subtitle={'Плотно взяться за предмет и подробно пройтись по всем темам'}/>
            </div>
            <div className="col-md">
              <div className="title-sec-wrapper blue-wrapper"> 15 000 ₽ экономия </div>
              <PriceCard title={'64 занятия'} price={'810 ₽ '} subtitle={'Подробное изучение всего предмета от начала и до конца'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

