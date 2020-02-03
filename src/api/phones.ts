import * as api from './api';

const BASE_URL = '/phones';

export const getAll = () => api.get<Phone[]>(BASE_URL);

export const getById = (phoneId: number | string) => api.get<TPhoneDetails>(`${BASE_URL}/${phoneId}`);
