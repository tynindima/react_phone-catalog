import api from './api';

const BASE_URL = '/phones';

export const getAll = async() => {
  const response = await api.get<Phone[]>(BASE_URL);

  return response.data;
};

export const getById = async(phoneId: number | string) => {
  const response = await api.get<TPhoneDetails>(`${BASE_URL}/${phoneId}`);

  return response.data;
};
