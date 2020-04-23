import React, { FC, useState } from 'react';
import './styles/slider.scss';
import rightArrow from './img/right.svg';
import leftArrow from './img/left.svg';
import { ImgComp } from './ImgComp';
import Banner1 from './img/Banner1.png';
import Lexus from './img/Lexus.png';
import lexus2 from './img/lexus2.png';

export const Slider: FC = () => {
  const sliderArr = [
    <ImgComp img={Banner1} />,
    <ImgComp img={Lexus} />,
    <ImgComp img={lexus2} />,
  ];
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      <button onClick={goLeft} className="slider__buttons" type="button">
        <img src={leftArrow} alt="left arrow" />
      </button>

      <div className="slider__view">
        {sliderArr.map((item, i) => (
          <div
            key={i}
            className="slider__slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        ))}
      </div>

      <button onClick={goRight} className="slider__buttons" type="button">
        <img src={rightArrow} alt="right arrow" />
      </button>
    </div>
  );
};
