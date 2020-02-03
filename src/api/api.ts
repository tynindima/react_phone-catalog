const API_URL = process.env.REACT_APP_API_URL;

export const get = async<T>(url: string): Promise<T> => {
  const response = await fetch(API_URL + url);

  return response.json();
};

export const post = async(url: string, data: object) => {
  const response = await fetch(API_URL + url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });

  return response.json();
};

export const remove = async(url: string) => {
  const response = await fetch(API_URL + url, {
    method: 'DELETE',
  });

  return response.json();
};
