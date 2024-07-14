import { useCallback } from 'react';
import { useData } from '../../DataProvider';
import { Method, useNetworkCall } from './use-network-call';
import { STORAGE_TOKEN } from '../../utilities/Constant';

export const useValidateUser = () => {
  const { setUser } = useData();
  const authenticate = useNetworkCall();

  return useCallback(async () => {
    const token = localStorage.getItem(STORAGE_TOKEN);
    if (token) {
      const validateUser = (await authenticate('/verify-token', Method.POST, { token })) as {
        user: { first_name: string; role: number; email: string };
      };
      if (!validateUser) {
        console.warn('Invalid token');
        localStorage.removeItem(STORAGE_TOKEN);
        window.location.reload();
        return;
      }
      const {
        user: { first_name: name, email, role },
      } = validateUser;
      setUser({ name: name || 'Name', email, role, token });
    }
  }, [authenticate, setUser]);
};
