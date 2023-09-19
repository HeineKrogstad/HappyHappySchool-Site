import React from "react";
import "./TeacherCard.scss";
import vk from '../../assets/vk-logo.svg';

export const TeacherCard = ({profilePic, name, job, link}) => {
  return (
    <div className="teacher-card">
        <div className="user-card">
          <div className="fixed-height-sec">
            <img className="img" alt="Teacher" src= { profilePic } />
          </div>
          <div className="card-content">
              <div className="teacher-name">{ name }</div>
              <div className="small-job">{ job }</div>
              <a href= { link } target="_blank" rel="noopener noreferrer">
                <img className="social-media-sec" alt="Social media sec" src= {vk} />
              </a>
          </div>
        </div>
    </div>
  )
}