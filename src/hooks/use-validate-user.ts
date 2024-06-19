import { useData } from '../DataProvider';

export const useValidateUser = () => {
  const {
    state: { user },
  } = useData();
  return user;
};
