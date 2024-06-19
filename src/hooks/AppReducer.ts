import { User } from '../types/User';

export interface AppReducerState {
  user?: User;
}

export enum ActionType {
  USER_UPDATE,
}

interface setUser {
  type: ActionType.USER_UPDATE;
  payload?: User;
}

type Action = setUser;

export const AppReducer = (state: AppReducerState, action: Action) => {
  const { payload, type } = action;
  //   const newState = JSON.parse(JSON.stringify(state)) as AppReducerState;
  switch (type) {
    case ActionType.USER_UPDATE:
      return { ...state, user: payload };
    default:
      return state;
  }
};
