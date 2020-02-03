import React, { useEffect, useState } from 'react';
import * as basketItemsApi from './api/basketItems';

type TBasketContext = {
  basketItems: BasketItem[];
  refreshBasket: () => void;
}

export const BasketContext = React.createContext<TBasketContext>({
  basketItems: [],
  refreshBasket: () => {},
});

export const BasketContextContainer: React.FC = ({ children }) => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  const refreshBasket = () => {
    basketItemsApi.getAll()
      .then(setBasketItems);
  };

  useEffect(refreshBasket, []);

  const contextValue = {
    basketItems,
    refreshBasket,
  };

  return (
    <BasketContext.Provider value={contextValue}>
      {children}
    </BasketContext.Provider>
  );
};
