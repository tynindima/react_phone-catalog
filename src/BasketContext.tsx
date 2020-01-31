import React, { useEffect, useState } from 'react';
import * as basketItemsApi from './api/basketItems';

type TBasketContext = {
  basketItems: BasketItem[];
  refreshBasket: () => void;
  removeItem: (itemId: string) => void;
}

export const BasketContext = React.createContext<TBasketContext>({
  basketItems: [],
  refreshBasket: () => {},
  removeItem: () => {},
});

export const BasketContextContainer: React.FC = ({ children }) => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  const refreshBasket = () => {
    basketItemsApi.getAll()
      .then(setBasketItems);
  };

  useEffect(refreshBasket, []);

  const removeItem = (itemId: string) => {
    alert(`Removing ${itemId}... Please implement`);
  };

  const contextValue = {
    basketItems,
    refreshBasket,
    removeItem,
  };

  return (
    <BasketContext.Provider value={contextValue}>
      {children}
    </BasketContext.Provider>
  );
};
