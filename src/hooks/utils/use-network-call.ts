import { useCallback } from 'react';
import { useData } from '../../DataProvider';
import { API_ENDPOINT, STORAGE_TOKEN } from '../../utilities/Constant';

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type StringMap = { [key in string]: unknown };

export const useNetworkCall = () => {
  const {
    state: { user },
  } = useData();
  return useCallback(
    async (url: string, method = Method.GET, data?: unknown) => {
      console.log(url, method, data);
      const fetchParams: StringMap = { method };
      if (method !== Method.GET) {
        fetchParams['body'] = typeof data === 'object' ? JSON.stringify(data) : data;
      }
      const headers: StringMap = {
        'Content-Type': 'application/json',
        // accept: 'application/json',
      };
      const token = user?.token ?? localStorage.getItem(STORAGE_TOKEN);
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      fetchParams['headers'] = headers;
      try {
        const response = await fetch(`${API_ENDPOINT}${url}`, fetchParams);
        if (response.ok) {
          const data = await response.json();
          return data;
        }
      } catch (e) {
        console.log(e);
      }

      return null;
    },
    [user],
  );
};
