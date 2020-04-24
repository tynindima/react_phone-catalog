import React, { useEffect, useState } from 'react';
import { getPhones } from './getPhones';
import './styles/phonepage.scss';

export const PhonePage = (props: any) => {
  console.log(props.match.url);
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones()
      .then(phone => {
        setPhones(phone);
      });
  }, []);

  return (
    <div className="phonepage">
      <ul className="phonepage__list">
        {phones.map(phone => (
          <li key={phone.id} className="product-card">
            <img src={phone.imageUrl} alt="phone" />
            <h3>{phone.name}</h3>
            <p>{phone.snippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
