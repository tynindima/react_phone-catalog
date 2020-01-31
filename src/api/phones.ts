import * as api from './api';

const BASE_URL = '/phones';

export const getAll = () => {
  return api.get<Phone[]>(BASE_URL);
};

export const getById = (phoneId: number | string) => {
  return api.get<TPhoneDetails>(`${BASE_URL}/${phoneId}`);
};
