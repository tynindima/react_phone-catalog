import api from './api';

const BASE_URL = '/basket-items';

export const getAll = async() => {
  const response = await api.get<BasketItem[]>(BASE_URL);

  return response.data;
};

export const getById = async(itemId: string) => {
  const response = await api.get<BasketItem>(`${BASE_URL}/${itemId}`);

  return response.data;
};

export const addItem = async(itemId: string) => {
  const response = await api.post(BASE_URL, { itemId });

  return response.data;
};

export const removeItem = async(itemId: string) => {
  const response = await api.delete(`${BASE_URL}/${itemId}`);

  return response.data;
};

export const setCount = async(itemId: string, count: number) => {
  const response = await api.patch(`${BASE_URL}/${itemId}`, { count });

  return response.data;
};
