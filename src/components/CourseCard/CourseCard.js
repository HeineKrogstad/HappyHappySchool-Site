import React from "react";
import "./CourseCard.scss";

export const CourseCard = ({ titleText, img }) => {
  return (
    <div className="course-card">
      <img className="course-cover" alt="img" src={img} />
      <div className="frame">
        <div className="course-title">{ titleText }</div>
      </div>
    </div>
  );
};
