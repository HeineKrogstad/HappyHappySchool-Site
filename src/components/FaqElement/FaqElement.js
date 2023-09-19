import { useState } from 'react';
import Arrow from '../../assets/arrows.svg';
import "./FaqElement.scss"

const FaqElement = ({title, subtitle}) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleImageClick = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className="faq-element">
      <div className='div-wrapper'>
        <p className="h-section-title"> { title } </p>
        <img className="image" alt="arrow" src={Arrow} onClick={handleImageClick} />
      </div>
      {isTextVisible && <p className='subtitle-section'> { subtitle }</p>}
    </div>
  );
};

export default FaqElement;