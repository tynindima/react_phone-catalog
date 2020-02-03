import * as api from './api';

const BASE_URL = '/basket-items';

export const getAll = () => {
  return api.get<BasketItem[]>(BASE_URL);
};

export const getById = (itemId: string) => {
  return api.get<BasketItem>(`${BASE_URL}/${itemId}`);
};

export const addItem = (itemId: string) => {
  return api.post(BASE_URL, { item: itemId });
};

export const removeItem = (itemId: string) => {
  return api.remove(`${BASE_URL}/${itemId}`);
};
