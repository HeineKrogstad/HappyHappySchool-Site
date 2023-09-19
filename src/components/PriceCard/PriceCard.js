import React from "react";
import "./PriceCard.scss";

export const PriceCard = ({title, subtitle, price}) => {
  return (
    <div className="price-card">
      <div className="h-title"> { title } </div>
      <div className="fixed-width-fixed-2" />
      <p className="text"> {subtitle} </p>
      <p className="p">
        <span className="span">{ price }</span>
        <span className="text-wrapper-2">за урок</span>
      </p>
    </div>
  )
}