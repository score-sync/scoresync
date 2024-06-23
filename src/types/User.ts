enum UserLevel {
  Admin = 'admin',
  LeagueOwner = 'owner',
  Judge = 'judge',
}
export interface User {
  name: string;
  email: string;
  photo?: string;
  provider?: string;
  level?: UserLevel;
}
