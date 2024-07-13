export enum UserLevel {
  Admin = 1,
  LeagueOwner = 2,
  Judge = 3,
}
export interface User {
  name: string;
  email: string;
  photo?: string;
  provider?: string;
  role: UserLevel;
  token?: string;
}
