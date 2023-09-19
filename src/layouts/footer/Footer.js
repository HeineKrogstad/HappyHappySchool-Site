import React from "react";
import "./Footer.scss";

import Logo from "../../assets/logo_happy_happy-removebg.png";
import Telegram from "../../assets/Telegram.svg";
import WhatsApp from "../../assets/WhatsApp.svg";
import Instargram from "../../assets/Instagram.svg";
import VK from "../../assets/vk-logo.svg";



export const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <img className="logo-happy-happy" alt="Logo happy happy" src= {Logo} />
            <div className="col-md">
              <div className="h">Контакты</div>
              <div className="div-2">
                <a href= 'https://vk.com/id276171379' target="_blank" rel="noopener noreferrer">
                  <img className="social-media" alt="Frame" src={Telegram} />
                </a>
                <a href= 'https://vk.com/id276171379' target="_blank" rel="noopener noreferrer">
                  <img className="social-media" alt="Frame" src={WhatsApp} />
                </a>
                <div className="text-wrapper">+7 (999) 999-99-99</div>
              </div>
            </div>
            <div className="col-md">
              <div className="h">Мы в соцсетях</div>
              <div className="social-medias">
                <a href= 'https://vk.com/id276171379' target="_blank" rel="noopener noreferrer">
                  <img className="social-media" alt="Social media" src={Instargram} />
                </a>
                <a href= 'https://vk.com/id276171379' target="_blank" rel="noopener noreferrer">
                  <img className="social-media" alt="Social media" src={VK} />
                </a>
              </div>
            </div>
            <div className="col-md">
              <div className="h">Присоединиться к команде</div>
              <a href= 'https://vk.com/id276171379' target="_blank" rel="noopener noreferrer" className="link"> Репетиторам </a>
            </div>
          
        </div>
    </div>
  );
};

