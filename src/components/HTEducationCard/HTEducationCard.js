import React from "react";
import "./HTEducationCard.scss";

export const HTEducationCard = ({number, title, subtitle}) => {
    return (
        <div className="HTLesson-card">
            <div className="div-wrapper">
                <div className="text-wrapper">{number}</div>
            </div>
            <div className="card-title">{title}</div>
            <p className="text"> {subtitle} </p>
        </div>
    )
}