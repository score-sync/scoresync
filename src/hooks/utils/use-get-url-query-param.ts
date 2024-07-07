import { useLocation } from 'react-router-dom';

export const useGetURLQueryParams = (key?: string) => {
  const urlQueryParams = new URLSearchParams(useLocation().search);

  if (key) {
    return urlQueryParams.get(key);
  }
  const data: { [key: string]: string } = {};
  for (const param of urlQueryParams) {
    const [key, value] = param;
    data[key] = value;
  }

  return data;
};
