import React, { useState } from 'react';
import "./Action.scss";

export const Action = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="action-layout">
      <div className="container">
        <p className="section-title">
          <span className="text-wrapper">Попробуйте </span>
          <span className="span">бесплатный урок</span>
        </p>
        <div className="row-sec">
          <div>
            <input className="input-group"
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder='Ваше имя'
            />
          </div>
          <div>
            <input className="input-group"
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder='+7 (999) 999-99-99'
            />
          </div>
          <div className="col-md">
            <div className="div-wrapper">
              <div className="your-email-wrapper">
                <div className="your-email-2">Оставить заявку</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};






