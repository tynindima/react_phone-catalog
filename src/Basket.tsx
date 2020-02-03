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

  const setCount = async(itemId: string, count: number) => {
    await basketItemsApi.setCount(itemId, count);

    refreshBasket();
  };

  return (
    <section>
      <h2>Shopping Cart</h2>

      {basketItems.length > 0 ? (
        <ul>
          {basketItems.map(item => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => removeItem(item.id)}
              >
                x
              </button>

              <b>{item.id}</b>

              <button
                type="button"
                onClick={() => setCount(item.id, item.count - 1)}
              >
                -
              </button>
              {item.count}
              <button
                type="button"
                onClick={() => setCount(item.id, item.count + 1)}
              >
                +
              </button>
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
