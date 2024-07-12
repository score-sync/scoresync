export enum RoutePath {
  HOME = '/',

  LOGIN = 'login',
  RESET = 'reset',
  TEST = 'test',

  LEAGUE = 'league',
  LEAGUE_ID = ':leagueId',
  CREATE = 'create',
  UPCOMING = 'upcoming',
  PAST = 'past',

  FIGHTER = 'fighter',
  FIGHTER_ID = ':figherId',

  REFREE = 'refree',
  REFREE_ID = ':refreeId',

  BOUT = 'bout',
  BOUT_ID = ':boutId',

  LEAGUE_HOME = '/league/:leagueId',
  LEAGUE_ADD_FIGHTER = '/league/:leagueId/fighter/add',
  LEAGUE_ADD_REFREE = '/league/:leagueId/ref/add',
  LEAGUE_ADD_BOUT = '/league/:leagueId/bout/create',
  LEAGUE_BOUTS = '/league/:leagueId/bouts',
  LEAGUE_FIGHTER_HOME = '/league/:leagueId/fighter/:fighterId',
  FIGHTER_HOME = '/fighter/:fighterId',

  INVITATION = 'invitation',
}

export enum AppRoutes {
  LOGIN = `/${RoutePath.LOGIN}`,
  RESET_PASSWORD = `/${RoutePath.LOGIN}/${RoutePath.RESET}`,
  INVITATION = `/${RoutePath.LOGIN}/${RoutePath.INVITATION}`,
  LAGUE_HOME = `/${RoutePath.LEAGUE}`,
  CREATE_LEAGUE = `/${RoutePath.LEAGUE}/${RoutePath.CREATE}`,
  UPCOMING_LEAGUE = `/${RoutePath.LEAGUE}/${RoutePath.UPCOMING}`,
  PAST_LEAGUE = `/${RoutePath.LEAGUE}/${RoutePath.PAST}`,
}
