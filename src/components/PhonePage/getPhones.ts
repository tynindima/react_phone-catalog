// eslint-disable-next-line max-len
const URL_PHONES = 'https://mate-academy.github.io/phone-catalogue-static/api/phones.json';

const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  return response.json();
};

export const getPhones = (): Promise<Phone[]> => {
  return getData(URL_PHONES);
};
