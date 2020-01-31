import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as phonesApi from './api/phones';
import * as basketItemsApi from './api/basketItems';

const Catalog = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    phonesApi.getAll()
      .then(setPhones);
  }, []);

  const addToBasket = (phoneId: string) => {
    basketItemsApi.addItem(phoneId);
  };

  return (
    <>
      <h1>Phone catalog</h1>

      <ul className="phones">
        {phones.map((phone: Phone) => (
          <li className="thumbnail" key={phone.id}>
            <Link to={`/phones/${phone.id}`} className="thumb">
              <img
                alt={phone.name}
                src={phone.imageUrl}
              />
            </Link>

            <div className="phones__btn-buy-wrapper">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => addToBasket(phone.id)}
              >
                Add
              </button>
            </div>

            <Link to={`/phones/${phone.id}`}>
              {phone.name}
            </Link>

            <p>{phone.snippet}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Catalog;
