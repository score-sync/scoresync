import { useCallback } from 'react';
import { useData } from '../../DataProvider';
import { API_ENDPOINT } from '../../utilities/Constant';

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const useNetworkCall = () => {
  const {
    state: { user },
  } = useData();
  return useCallback(
    async (url: string, method: string, data?: unknown) => {
      console.log(url, method, data);
      const fetchParams: { [key in string]: unknown } = { method };
      if (method !== Method.GET && data) {
        fetchParams['body'] = JSON.stringify(data);
      }
      const headers = {
        Authorization: `Bearer ${user?.token}`,
      };
      fetchParams['headers'] = headers;
      try {
        const response = await fetch(`${API_ENDPOINT}${url}`, fetchParams);
        if (response.ok) {
          return response.json();
        }
      } catch (e) {
        console.log(e);
      }

      return null;
    },
    [user],
  );
};
