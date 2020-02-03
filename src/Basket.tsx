import React, { useContext, useEffect } from 'react';

import { BasketContext } from './BasketContext';
import * as basketItemsApi from './api/basketItems';

const Basket = () => {
  const { basketItems, refreshBasket } = useContext(BasketContext);

  useEffect(refreshBasket, []);

  const removeItem = async(itemId: string) => {
    const isDeleted = await basketItemsApi.removeItem(itemId);

    if (isDeleted) {
      refreshBasket();
    }
  };

  return (
    <section>
      <h2>Shopping Cart</h2>

      {basketItems.length > 0 ? (
        <ul>
          {basketItems.map(item => (
            <li key={item}>
              <button
                type="button"
                onClick={() => removeItem(item)}
              >
                x
              </button>

              <b>{item}</b>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items yet</p>
      )}
    </section>
  );
};

export default Basket;
