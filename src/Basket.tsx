import React, { useEffect } from 'react';

import { useBasket } from './BasketHook';

const Basket = () => {
  const { basketItems, refreshBasket, removeItem } = useBasket();

  useEffect(refreshBasket, []);

  return (
    <section>
      <h2>Shopping Cart</h2>

      {basketItems.length > 0 ? (
        <ul>
          {basketItems.map((item) => (
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
