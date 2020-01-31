import React, { useState } from 'react';
import * as basketItemsApi from './api/basketItems';

type BasketContextType = {
  basketItems: string[];
  setBasketItems: (item: string[]) => void;
  refreshBasket: () => void;
  removeItem: (item: string) => void;
};

const BasketContext = React.createContext<BasketContextType>({
  basketItems: [],
  setBasketItems: () => {},
  refreshBasket: () => {},
  removeItem: () => {},
});

export const BasketContextContainer: React.FC = ({ children }) => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  const refreshBasket = () => {
    basketItemsApi.getAll()
      .then(setBasketItems);
  };

  const removeItem = (itemId: string) => {
    alert(`Removing ${itemId}... Please implement`);
  };

  const contextValue = {
    basketItems,
    setBasketItems,
    refreshBasket,
    removeItem,
  };

  return (
    <BasketContext.Provider value={contextValue}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContext;
