const API_URL = 'http://localhost:5000';

export const get = async<T>(url: string): Promise<T> => {
  const response = await fetch(API_URL + url);

  return response.json();
};

export const post = async(url: string, data: any) => {
  const response = await fetch(API_URL + url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });

  return response.json();
};
