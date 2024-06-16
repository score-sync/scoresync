import { useCallback, useReducer } from 'react';
import { ActionType, AppReducer } from './AppReducer';
import { User } from '../types/User';

export const useAppState = () => {
  const initialState = {};
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const setUser = useCallback((user: User) => {
    dispatch({
      type: ActionType.USER_UPDATE,
      payload: user,
    });
  }, []);

  return {
    state,
    setUser,
  };
};
