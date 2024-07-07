import { useCallback, useReducer } from 'react';
import { ActionType, AppReducer } from './AppReducer';
import { User, UserLevel } from '../types/User';

export const useAppState = () => {
  const initialState = { user: { name: 'Sameer', email: 'email', level: UserLevel.Admin } };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const setUser = useCallback((user: User) => {
    dispatch({
      type: ActionType.USER_UPDATE,
      payload: user,
    });
  }, []);

  const resetUser = useCallback(() => {
    dispatch({
      type: ActionType.USER_UPDATE,
      payload: undefined,
    });
  }, []);

  return {
    state,
    setUser,
    resetUser,
  };
};
