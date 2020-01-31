import React from 'react';

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

export default BasketContext;
