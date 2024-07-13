import { useCallback } from 'react';
import { useData } from '../../DataProvider';
import { API_ENDPOINT } from '../../utilities/Constant';

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
    async (url: string, method: string, data?: unknown) => {
      console.log(url, method, data);
      const fetchParams: StringMap = { method, mode: 'no-cors' };
      if (method !== Method.GET && data) {
        fetchParams['body'] = JSON.stringify(data);
      }
      const headers: StringMap = {
        'Content-Type': 'application/json',
        accept: 'application/json',
      };

      if (user?.token) {
        headers['Authorization'] = `Bearer ${user?.token}`;
      }

      fetchParams['headers'] = headers;
      try {
        const response = await fetch(`${API_ENDPOINT}${url}`, fetchParams);
        console.log(response, response.ok);
        // if (response.ok) {
        const data = await response.json();
        return data;
        // }
      } catch (e) {
        console.log(e);
      }

      return null;
    },
    [user],
  );
};
