import React, { FC } from 'react';
import './styles/category.scss';
import phone1 from './img/Phones1.png';
import phone2 from './img/Phones2.png';
import phone3 from './img/Phones3.png';

export const Category: FC = () => {
  const phones = [
    {
      id: 1, img: phone1, title: 'Mobile phones', text: '95 models',
    },
    {
      id: 2, img: phone2, title: 'Tablets', text: '24 models',
    },
    {
      id: 3, img: phone3, title: 'Accessories', text: '100 models',
    },
  ];

  return (
    <div className="category">
      <h2 className="category__title">Shop by category</h2>
      <div className="category__container">
        {phones.map(phone => (
          <div key={phone.id} className="phones">
            <img className="phones__img" src={phone.img} alt="phones" />
            <h3 className="phones__title">{phone.title}</h3>
            <p className="phones__text">{phone.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
