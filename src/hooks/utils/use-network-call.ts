import { useCallback } from 'react';
import { useData } from '../../DataProvider';

export const useNetworkCall = () => {
  const {
    state: { user },
  } = useData();
  return useCallback(
    async (url: string, method: string, data: unknown) => {
      console.log(user);
      const response = await fetch(url, { method, body: JSON.stringify(data) });
      return response.json();
    },
    [user],
  );
};
