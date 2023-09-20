import React, { useState } from 'react';
import "./Action.scss";
import { motion} from 'framer-motion';
import { globalVariants } from "../../motionVariants";

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
    <div className="action-layout" id='action'>
      <div className="container">
        <p className="section-title">
          <span className="text-wrapper">Попробуйте </span>
          <motion.span 
            className="span"
            variants={globalVariants}
            initial={'hiddenText'}
            whileInView={'visibleText'}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.2, once: true }}
          >
          бесплатный урок
          </motion.span>
        </p>
        <div className="row-sec">
          <motion.div
            variants={globalVariants}
            initial={'hiddenVerticalBlock'}
            whileInView={'visibleVerticalBlock'}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.2, once: true }}
          >
            <input className="input-group"
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder='Ваше имя'
            />
          </motion.div>
          <motion.div
            variants={globalVariants}
            initial={'hiddenVerticalBlock'}
            whileInView={'visibleVerticalBlock'}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ amount: 0.2, once: true }}
          >
            <input className="input-group"
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder='+7 (999) 999-99-99'
            />
          </motion.div>
          <motion.div 
            variants={globalVariants}
            initial={'hiddenText'}
            whileInView={'visibleText'}
            transition={{ duration: 2 }}
            viewport={{ amount: 0.2, once: true }}
            className="col-md"
          >
            <div className="div-wrapper">
              <div className="your-email-wrapper">
                <div className="your-email-2">Оставить заявку</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};






