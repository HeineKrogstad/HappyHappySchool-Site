import React from "react";
import "./StatsComponent.scss";

export const StatsComponent = ({title, subTitle}) => {
    return (
        <div className="stats-component">
          <div className="metrics-title"> {title} </div>
          <div className="metrics-subtitle"> {subTitle} </div>
        </div>
    )
}