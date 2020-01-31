import * as api from './api';

const BASE_URL = '/basket-items';

export const getAll = () => {
  return api.get<BasketItem[]>(BASE_URL);
};

export const getById = (phoneId: string) => {
  return api.get<BasketItem>(`${BASE_URL}/${phoneId}`);
};

export const addItem = (itemId: string) => {
  return api.post(BASE_URL, { item: itemId });
};
