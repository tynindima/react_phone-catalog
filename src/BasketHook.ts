import { useEffect, useState } from 'react';
import * as basketItemsApi from './api/basketItems';

export const useBasket = () => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  const refreshBasket = () => {
    basketItemsApi.getAll()
      .then(setBasketItems);
  };

  useEffect(refreshBasket, []);

  const removeItem = (itemId: string) => {
    alert(`Removing ${itemId}... Please implement`);
  };

  return {
    basketItems,
    refreshBasket,
    removeItem,
  };
};
