import React, { useState, useEffect } from 'react';

// eslint-disable-next-line max-len
const API_URL = 'https://mate-academy.github.io/phone-catalogue-static/api/phones.json';

interface IPhone {
  id: string;
  name: string;
  age: number;
  imageUrl: string;
  snippet: string;
}

const Catalog = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(setPhones);
  }, []);

  return (
    <>
      <h1>Phone catalog</h1>

      <ul className="phones">
        {phones.map((phone: IPhone) => (
          <li className="thumbnail">
            <a href={`#!/phones/${phone.id}`} className="thumb">
              <img alt={phone.name} src={phone.imageUrl} />
            </a>

            <div className="phones__btn-buy-wrapper">
              <button type="button" className="btn btn-success">
                Add
              </button>
            </div>

            <a href={`#!/phones/${phone.id}`}>
              {phone.name}
            </a>

            <p>{phone.snippet}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Catalog;
