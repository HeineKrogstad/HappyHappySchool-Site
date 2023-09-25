import React, { useState } from 'react';
import "./Action.scss";
import { motion, AnimatePresence} from 'framer-motion';
import { globalVariants } from "../../motionVariants";
import { botToken, chatId} from '../../tokens';

export const Action = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      setIsLoading(true);
  
      const message = `Новая заявка:\nИмя: ${name}\nТелефон: ${phoneNumber}`;
  
      // Отправка сообщения в чат бота в Telegram
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
  
      const responseBody = await response.json();
  
      if (response.ok && responseBody.ok) {
        setIsFormSubmitted(true);
        setIsLoading(false);
        setName('');
        setPhoneNumber('');
      } else {
        alert('Произошла ошибка при отправке заявки.');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
      setIsLoading(false);
    }
  };
  

  return (
    <div className="action-layout" id='action'>
      <div className="container">
        {isFormSubmitted ? (
          <AnimatePresence>
          <motion.svg width="101" height="101" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                key="vector-1"
                variants={globalVariants}
                initial={'hiddenVector'}
                animate={'visibleVector'}
                transition={{ duration: 2 }}
            >
              <motion.circle
                variants={globalVariants}
                cx="50"
                cy="50"
                stroke="#96BB7C"
                r="48"
                strokeWidth="4"
                transition={{ duration: 1.5 }}
              />
              <motion.line
                x1="35"
                y1="50"
                x2="49"
                y2="70"
                variants={globalVariants}
                stroke="#96BB7C"
                strokeWidth="4"
                transition={{ duration: 0.5 }}
                strokeLinecap="round"
              />
              <motion.line
                x1="49"
                y1="70"
                x2="70"
                y2="40"
                variants={globalVariants}
                stroke="#96BB7C"
                strokeWidth="4"
                transition={{ duration: 1, delay: 0.5}}
                strokeLinecap="round"
              />
          </motion.svg>
          <motion.div 
            className="success-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            variants={globalVariants}
          >
            Спасибо, что выбрали нас! С вами свяжутся в течение 12 часов
          </motion.div>
          </AnimatePresence>

        ) : (
          <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className='form'>
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
            <form className="row-sec" onSubmit={handleSubmit}>
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
                {isLoading ? (
                  <button className="submitButton" type="button" disabled>
                    Отправка...
                  </button>
                ) : (
                  <button className="submitButton" type="submit"> Оставить заявку </button>
                )}
              </motion.div>
            </form>
          </motion.div>
        )}
        
      </div>
    </div>
  );
  
};






