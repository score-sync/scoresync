import React, { createContext, useContext } from 'react';
import { useAppState } from './hooks/use-app-state';
import { User } from './types/User';

export type Data = {
  state: {
    user?: User;
    token?: string;
  };
  setUser: (user: User) => void;
  resetUser: () => void;
};

export const DataContext = createContext({} as Data);

interface Props {
  children: React.ReactNode;
}

export const DataProvider: React.FC<Props> = ({ children }) => {
  const { state, setUser, resetUser } = useAppState();

  return <DataContext.Provider value={{ state, setUser, resetUser }}>{children}</DataContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => useContext(DataContext);
